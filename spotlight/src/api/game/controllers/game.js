'use strict';

/**
 * game controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::game.game', ({ strapi }) => ({

    async syncItad(ctx) {

        try {
            // 1. Expect an array of ITAD UUIDs in the request body
            const { itadIds } = ctx.request.body;

            if (!itadIds || !Array.isArray(itadIds)) {
                return ctx.badRequest('Please provide an array of ITAD UUIDs.');
            }

            const results = [];

            // 2. V5 Document Service Helper
            const findOrCreateRelation = async (modelUid, value) => {
                // Find existing documents
                const entries = await strapi.documents(modelUid).findMany({
                    filters: { name: value }
                });

                if (entries.length === 0) {
                    // If not found, create and publish using Document Service
                    const newEntry = await strapi.documents(modelUid).create({
                        data: { name: value },
                        status: 'published' // v5 handles the draft/publish state automatically!
                    });
                    strapi.log.info(`[CREATED] ${modelUid} -> ${value}`);
                    return newEntry.documentId; // v5 uses documentId for relations
                }
                
                strapi.log.info(`[FOUND] ${modelUid} -> ${value}`);
                return entries[0].documentId;
            };

            // 3. Iterate over the provided UUIDs
            for (const id of itadIds) {
                try {
                    // Fetch data from the ITAD API
                    const response = await fetch(`https://api.isthereanydeal.com/games/info/v2?key=9fc8660f82440819fa2af0af9030bad2c618ec93&id=${id}`);
                    const rawData = await response.json();
                    
                    if (!response.ok) {
                        strapi.log.warn(`Failed to fetch data for ID: ${id}`);
                        continue; 
                    }

                    const itadData = Array.isArray(rawData) ? rawData[0] : rawData;

                    // Log exactly what the script sees before looping
                    strapi.log.info(`[SYNCING] ${itadData.title} | Tags found: ${itadData.tags ? itadData.tags.length : 'UNDEFINED'}`);
                    strapi.log.info("Got boxart: " + itadData.assets.boxart);
                    strapi.log.info("Got banner: " + itadData.assets.banner600);

                    const categoryIds = await Promise.all(
                        (itadData.tags || []).map(tag => findOrCreateRelation('api::category.category', tag))
                    );
                    const developerIds = await Promise.all(
                        (itadData.developers || []).map(dev => findOrCreateRelation('api::company.company', dev.name))
                    );
                    const publisherIds = await Promise.all(
                        (itadData.publishers || []).map(pub => findOrCreateRelation('api::company.company', pub.name))
                    );

                    const newGame = await strapi.documents('api::game.game').create({
                        data: {
                            slug: itadData.slug,
                            title: itadData.title,
                            steam_appid: itadData.appid,
                            cover_image: itadData.assets.boxart,
                            banner_image: itadData.assets.banner600,
                            categories: categoryIds,
                            release_date: itadData.releaseDate,
                            developers: developerIds, 
                            publishers: publisherIds,
                        },
                        status: 'published'
                    });

                    results.push(newGame);

                } catch (error) {
                    strapi.log.error('ITAD Sync Error:', error);
                    ctx.internalServerError('An error occurred during the sync process.');
                }
            }

            ctx.send({ message: 'Sync complete', syncedGames: results.length });

        } catch (error) {
            strapi.log.error('ITAD Sync Error:', error);
            ctx.internalServerError('An error occurred during the sync process.');
        }
    }
}));
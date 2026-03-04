'use strict';

<<<<<<< HEAD
=======
/**
 * player-count-entry controller
 */

>>>>>>> origin/main
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::player-count-entry.player-count-entry', ({ strapi }) => ({
    async syncSteamCharts(ctx) {
<<<<<<< HEAD
        // Optional: If you have thousands of games, Nginx will still timeout eventually.
        // We can immediately return a 200 response to the client and let the script run in the background.
        ctx.send({ message: 'Bulk SteamCharts CCU Sync started in the background. Check Strapi logs for progress.' });

        try {
            strapi.log.info('[SYNC START] Initiating bulk SteamCharts CCU sync...');

            const games = await strapi.documents('api::game.game').findMany({
                filters: { steam_appid: { $notNull: true } },
                limit: 5000 
            });

            if (games.length === 0) {
                strapi.log.info('No games with Steam App IDs found.');
                return;
            }

            let totalSyncedEntries = 0;
            let gamesProcessed = 0;

            for (const game of games) {
                try {
                    const steamAppId = game.steam_appid;
                    const gameDocId = game.documentId;
                    const gameIntId = game.id;
                    
                    strapi.log.info(`[SYNCING] Fetching CCU data for: ${game.title} (${steamAppId})...`);

                    const existingEntries = await strapi.documents('api::player-count-entry.player-count-entry').findMany({
                        filters: { game: gameIntId }, 
                        fields: ['timestamp'],
                        limit: 10000 
                    });
                    
                    const existingDates = new Set(existingEntries.map(entry => entry.timestamp));

                    const response = await fetch(`https://steamcharts.com/app/${steamAppId}/chart-data.json`);
                    
                    if (!response.ok) {
                        strapi.log.warn(`[WARNING] Failed to fetch SteamCharts data for ${game.title}.`);
                        continue; 
                    }

                    const ccuData = await response.json();

                    if (!Array.isArray(ccuData)) {
                        continue;
                    }

                    // 1. Deduplicate IN MEMORY first
                    const batchInserts = [];
                    for (const [unixMs, playerCount] of ccuData) {
                        const formattedDate = new Date(unixMs).toISOString().split('T')[0];

                        // If it's not in the database AND not already queued in this batch
                        if (!existingDates.has(formattedDate)) {
                            batchInserts.push({
                                timestamp: formattedDate,
                                player_count: playerCount,
                                game: gameDocId, 
                            });
                            
                            // CRITICAL: Add to the set so we don't queue multiple hourly entries for the same day!
                            existingDates.add(formattedDate);
                        }
                    }

                    // 2. Insert into the database in parallel CHUNKS
                    const CHUNK_SIZE = 50; 
                    for (let i = 0; i < batchInserts.length; i += CHUNK_SIZE) {
                        const chunk = batchInserts.slice(i, i + CHUNK_SIZE);
                        
                        // Fire off 50 inserts simultaneously 
                        await Promise.all(chunk.map(data => 
                            strapi.documents('api::player-count-entry.player-count-entry').create({
                                data: data,
                                status: 'published' 
                            })
                        ));
                    }

                    gamesProcessed++;
                    totalSyncedEntries += batchInserts.length;
                    strapi.log.info(`[SUCCESS] Added ${batchInserts.length} new records for ${game.title}.`);

                } catch (gameError) {
                    strapi.log.error(`[ERROR] Failed processing game ${game.title}:`, gameError.message);
                }
            }

            strapi.log.info(`[SYNC COMPLETE] Processed ${gamesProcessed} games. Added ${totalSyncedEntries} entries.`);

        } catch (error) {
            strapi.log.error('[FATAL ERROR] Bulk SteamCharts Sync failed:', error);
=======
        try {
            // Default to 730 (CS2) if no ID is passed, keeping it flexible
            const { steamAppId = 2507950 } = ctx.request.body || {};

            // 1. Find the game using its Steam App ID to get the internal documentId
            const games = await strapi.documents('api::game.game').findMany({
                filters: { steam_appid: steamAppId }
            });

            if (games.length === 0) {
                return ctx.notFound(`Game with Steam ID ${steamAppId} not found in the database.`);
            }

            const gameDocId = games[0].documentId;
            strapi.log.info(`[SYNCING] Found game: ${games[0].title}. Fetching CCU data...`);

            // 2. Fetch the JSON data directly from SteamCharts
            const response = await fetch(`https://steamcharts.com/app/${steamAppId}/chart-data.json`);
            
            if (!response.ok) {
                return ctx.badRequest(`Failed to fetch data for App ID: ${steamAppId}`);
            }

            const ccuData = await response.json();

            if (!Array.isArray(ccuData)) {
                return ctx.internalServerError('Unexpected data format from SteamCharts.');
            }

            let count = 0;

            // 3. Loop through the array and insert entries
            for (const [unixMs, playerCount] of ccuData) {
                // Convert Unix milliseconds to the YYYY-MM-DD format
                const formattedDate = new Date(unixMs).toISOString().split('T')[0];

                await strapi.documents('api::player-count-entry.player-count-entry').create({
                    data: {
                        timestamp: formattedDate,
                        player_count: playerCount,
                        game: gameDocId, // Link relation using v5 Document ID
                    },
                    status: 'published' // Handles draft/publish automatically
                });

                count++;
                // Optional: log progress for massive datasets
                if (count % 500 === 0) {
                    strapi.log.info(`Imported ${count} entries so far...`);
                }
            }

            ctx.send({ message: 'SteamCharts CCU Sync complete', syncedEntries: count });

        } catch (error) {
            strapi.log.error('SteamCharts Sync Error:', error);
            ctx.internalServerError('An error occurred during the sync process.');
>>>>>>> origin/main
        }
    }
}));
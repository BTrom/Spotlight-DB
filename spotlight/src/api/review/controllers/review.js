'use strict';

<<<<<<< HEAD
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::review.review', ({ strapi }) => ({
    async syncSteamReviews(ctx) {
        // Immediately free up the client and let the server work in the background
        ctx.send({ message: 'Bulk Steam Reviews Sync started in the background. Check Strapi logs for progress.' });

        try {
            strapi.log.info('[SYNC START] Initiating bulk Steam Reviews sync...');

            const games = await strapi.documents('api::game.game').findMany({
                filters: { steam_appid: { $notNull: true } },
                limit: 5000 
            });

            if (games.length === 0) {
                strapi.log.info('No games with Steam App IDs found.');
                return;
            }

            let totalSyncedReviews = 0;
            let gamesProcessed = 0;

            for (const game of games) {
                try {
                    const steamAppId = game.steam_appid;
                    const gameDocId = game.documentId;
                    const gameIntId = game.id;
                    
                    strapi.log.info(`[SYNCING] Fetching reviews data for: ${game.title} (${steamAppId})...`);

                    // Added parameters to maximize the payload and filter at the API level
                    const response = await fetch(`https://store.steampowered.com/appreviews/${steamAppId}?json=1&language=english&num_per_page=100`);
                    
                    if (!response.ok) {
                        strapi.log.warn(`[WARNING] Failed to fetch Steam reviews for ${game.title}.`);
                        continue; 
                    }

                    const data = await response.json();

                    if (data.success !== 1 || !data.query_summary) {
                        continue;
                    }

                    const summary = data.query_summary;

                    // --- TASK 1: Create the Reviews History Entry ---
                    const totalReviews = summary.total_reviews || 0;
                    let averagedScore = 0;

                    if (totalReviews > 0) {
                        // Calculate percentage of positive reviews
                        averagedScore = Math.round((summary.total_positive / totalReviews) * 100);
                    }

                    const today = new Date().toISOString().split('T')[0];

                    // Check if an entry for today already exists to prevent duplicate history records
                    const existingHistory = await strapi.documents('api::reviews-history-entry.reviews-history-entry').findMany({
                        filters: { 
                            game: gameIntId,
                            timestamp: today 
                        },
                        limit: 1
                    });

                    if (existingHistory.length === 0) {
                        await strapi.documents('api::reviews-history-entry.reviews-history-entry').create({
                            data: {
                                game: gameDocId,
                                timestamp: today,
                                total_reviews: totalReviews,
                                averaged_score: averagedScore,
                                // If you have a specific documentId for the "Steam" Source, you can add:
                                // source: 'your-steam-source-document-id'
                            },
                            status: 'published'
                        });
                    }

                    // --- TASK 2: Process the Individual Reviews ---
                    const reviews = data.reviews || [];
                    const batchInserts = [];

                    for (const rev of reviews) {
                        // Double checking language just in case Steam ignores the query param
                        if (rev.language !== 'english') continue;

                        // Construct a unique URL to satisfy the schema's unique/required constraint
                        const reviewUrl = `https://steamcommunity.com/app/${steamAppId}/reviews/#${rev.recommendationid}`;

                        // Check Postgres to see if this specific review has already been stored
                        const existingReview = await strapi.documents('api::review.review').findMany({
                            filters: { url: reviewUrl },
                            limit: 1
                        });

                        if (existingReview.length === 0) {
                            batchInserts.push({
                                game: gameDocId,
                                score: rev.voted_up ? 100 : 0,
                                original_score: rev.voted_up ? 'positive' : 'negative',
                                comment: rev.review,
                                user_votes: (rev.votes_up || 0) + (rev.votes_funny || 0),
                                url: reviewUrl,
                                // source: 'your-steam-source-document-id' 
                            });
                        }
                    }

                    // Insert the new reviews into the database in parallel chunks
                    const CHUNK_SIZE = 25; 
                    for (let i = 0; i < batchInserts.length; i += CHUNK_SIZE) {
                        const chunk = batchInserts.slice(i, i + CHUNK_SIZE);
                        
                        await Promise.all(chunk.map(revData => 
                            strapi.documents('api::review.review').create({
                                data: revData,
                                status: 'published' 
                            })
                        ));
                    }

                    gamesProcessed++;
                    totalSyncedReviews += batchInserts.length;
                    strapi.log.info(`[SUCCESS] Added ${batchInserts.length} new reviews for ${game.title}.`);

                    // Small delay to be respectful to Steam's API and avoid rate limits
                    await new Promise(resolve => setTimeout(resolve, 300));

                } catch (gameError) {
                    strapi.log.error(`[ERROR] Failed processing game ${game.title}:`, gameError.message);
                }
            }

            strapi.log.info(`[SYNC COMPLETE] Processed ${gamesProcessed} games. Added ${totalSyncedReviews} reviews.`);

        } catch (error) {
            strapi.log.error('[FATAL ERROR] Bulk Steam Reviews Sync failed:', error);
        }
    },

    async exportForAi(ctx) {
        const { gameDocId } = ctx.params;

        const reviews = await strapi.documents('api::review.review').findMany({
            filters: { game: { documentId: gameDocId } },
            limit: 100
        });

        // Map it down to a flat array of strings
        const commentsOnly = reviews.map(r => r.comment);

        // Returns perfectly clean JSON: ["comment 1", "comment 2", ...]
        return ctx.send(commentsOnly);
    }
}));
=======
/**
 * review controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::review.review');
>>>>>>> origin/main

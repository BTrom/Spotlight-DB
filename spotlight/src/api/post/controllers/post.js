'use strict';

<<<<<<< HEAD
const { createCoreController } = require('@strapi/strapi').factories;
// Import the necessary Enums from the SDK to fix the type errors
const { GoogleGenAI, HarmCategory, HarmBlockThreshold, Type } = require('@google/genai');

module.exports = createCoreController('api::post.post', ({ strapi }) => ({
    async generateAiPost(ctx) {
        try {
            const { gameDocumentId } = ctx.request.body;

            if (!gameDocumentId) {
                return ctx.badRequest('gameDocumentId is required in the request body.');
            }

            // 1. Fetch the Game and its Reviews
            const game = await strapi.documents('api::game.game').findOne({
                documentId: gameDocumentId
            });

            if (!game) {
                return ctx.notFound('Game not found.');
            }

            strapi.log.info(`[AI POST] Fetching reviews for ${game.title}...`);

            const reviews = await strapi.documents('api::review.review').findMany({
                filters: { game: game.id },
                limit: 100
            });

            if (reviews.length === 0) {
                return ctx.badRequest('No reviews found for this game to generate a post.');
            }

            // 2. Format Reviews for the Prompt
            const reviewsText = reviews.map(r => `Review (${r.original_score}):\n${r.comment}`).join('\n\n---\n\n');
            const prompt = `Here are the user reviews for the game "${game.title}":\n\n${reviewsText}`;

            // 3. Initialize AI Request
            const ai = new GoogleGenAI({
                vertexai: {
                    project: "gemini-api-489202",
                    location: 'us-central1'
                }
            });

            const siText1 = {
                text: `You are a "Player Voice" Synthesis Agent. Your role is to analyze batches of Steam user reviews and generate a transparent, unfiltered summary of the collective player experience.

                Core Directives:
                Identify Common Ground: Focus exclusively on recurring themes, complaints, and praises found across the provided comments.
                Zero Bias: Do not inject external game data, professional critic opinions, or marketing language. If players are divided, represent that friction accurately.
                Anti-Critic Perspective: Your tone should reflect the raw, functional, and emotional reality of gameplay (e.g., performance issues, "fun factor," microtransactions) rather than abstract artistic merit.
                Scale Simulation: Write as if these comments represent the consensus of thousands, maintaining the specific "vibe" found in the provided sample.
                Formatting: Use rich Markdown (headings, bolding, and lists) to make the "General Opinion" scannable and deep.

                Output Constraint:
                Title Isolation: The title of the post must reside only in its specific JSON field. Do not include the title or a H1 header within the body content field.`
            };

            // Define the strict JSON Schema for the output
            const postSchema = {
                type: Type.OBJECT,
                properties: {
                    name: {
                        type: Type.STRING,
                        description: "The post's title, starting with the game's title, a colon, and a catchy title for the post"
                    },
                    descript: {
                        type: Type.STRING,
                        description: "The content of the post requested, in markdown, and omitting the title"
                    }
                },
                required: ["name", "descript"]
            };

            const generationConfig = {
                maxOutputTokens: 65535,
                temperature: 1,
                topP: 0.95,
                responseMimeType: "application/json",
                responseSchema: postSchema, // Plug the schema in here
                thinkingConfig: {
                    thinkingLevel: "HIGH",
                },
                // Use the SDK Enums to resolve the VSCode type errors
                safetySettings: [
                    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.OFF },
                    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.OFF },
                    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.OFF },
                    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.OFF }
                ],
                systemInstruction: {
                    parts: [siText1]
                },
            };

            strapi.log.info(`[AI POST] Sending ${reviews.length} reviews to Gemini for generation...`);

            // 4. Generate Content 
            const req = {
                model: 'gemini-3.1-pro-preview',
                contents: [{ role: 'user', parts: [{ text: prompt }] }],
                config: generationConfig,
            };

            const response = await ai.models.generateContent(req);
            
            // 5. Parse and Save the Response
            const responseData = JSON.parse(response.text);

            strapi.log.info(`[AI POST] Content generated successfully. Saving to database...`);

            // Map the AI schema keys back to your Strapi schema keys
            const newPost = await strapi.documents('api::post.post').create({
                data: {
                    game: gameDocumentId,
                    title: responseData.name, 
                    content: responseData.descript, 
                    slug: game.slug
                },
                status: 'published'
            });

            return ctx.send({
                message: 'Post generated and published successfully!',
                post: newPost
            });

        } catch (error) {
            strapi.log.error('[AI POST ERROR]:', error);
            return ctx.internalServerError('Failed to generate AI post.');
        }
    }
}));
=======
/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post');
>>>>>>> origin/main

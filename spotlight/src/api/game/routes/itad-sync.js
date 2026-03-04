module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/games/sync-itad',
      handler: 'game.syncItad',
      config: {
        auth: false, // Set to true if you want to require Strapi authorization tokens
      },
    },
  ],
};
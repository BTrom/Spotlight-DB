module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/reviews/sync-steam',
      handler: 'review.syncSteamReviews',
      config: {
        auth: false, // Open for quick triggering, just like the others
      },
    },
  ],
};
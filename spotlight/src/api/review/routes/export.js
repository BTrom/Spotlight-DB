module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/reviews/export/:gameDocId',
      handler: 'review.exportForAi',
      config: {
        auth: false,
      },
    },
  ],
};
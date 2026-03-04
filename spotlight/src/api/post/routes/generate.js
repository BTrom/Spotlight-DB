module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/posts/generate',
      handler: 'post.generateAiPost',
      config: {
        auth: false, // Keep it open for your workflow
      },
    },
  ],
};
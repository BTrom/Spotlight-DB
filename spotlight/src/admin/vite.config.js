const { mergeConfig } = require('vite');

module.exports = (config) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      allowedHosts: ['spotlight-db.com'],
<<<<<<< HEAD
      port: 5174,
      hmr: {
        clientPort: 5173,
      },
=======
>>>>>>> origin/main
    },
  });
};

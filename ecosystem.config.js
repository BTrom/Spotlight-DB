module.exports = {
  apps: [
    {
      name: 'strapi-dev',
      cwd: './spotlight',
      script: 'npm',
      args: 'run develop',
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'astro-front',
      cwd: './spotlight_frontend',
      script: 'npm',
      args: 'run dev -- --host 127.0.0.1',
      env: {
        NODE_ENV: 'development',
      },
    }
  ]
};

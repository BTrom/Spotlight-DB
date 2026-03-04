module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/player-count-entries/sync-steamcharts',
      handler: 'player-count-entry.syncSteamCharts',
      config: {
        auth: false, // Keeps it open like your ITAD route so you can hit it quickly
      },
    },
  ],
};
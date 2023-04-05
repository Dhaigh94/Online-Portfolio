const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  execTimeout: 60000,
  taskTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 6000,
  responseTimeout: 60000,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  screenshotFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  videoCompression: false,
  video: true,
  videoUploadOnPasses: true,
  trashAssetsBeforeRuns: true,
  darkMediaQuery: true,
  theme: 'dark',
  viewportWidth: 1100,
  viewportHeight: 700,
  projectId: 'hmdg5m',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:8080',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})

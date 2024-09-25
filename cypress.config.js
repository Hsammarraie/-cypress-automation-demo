const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    url: 'https://magento.softwaretestingboard.com',
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.js',
    setupNodeEvents(on, config) {
    },
  },
});

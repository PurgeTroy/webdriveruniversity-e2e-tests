const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`)

  if(!fs.existsSync(pathToConfigFile)) {
    console.log('No custom confug file');
    return {};
  }

  return fs.readJSON(pathToConfigFile); 
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || 'development'

      return getConfigurationByFile(file);
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx,feature}",
    baseUrl: "https://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    projectId: "tvwhge",
    retries: {
      runMode: 0,
      openMode: 1
    },
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "https://www.webdriveruniversity.com"
    }
  },
});

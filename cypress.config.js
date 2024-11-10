const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false, //zaridi, ze se nebude cypress restartovat po kazde zmene
    defaultCommandTimeout: 10000, //zmena time out
    chromeWebSecurity: false, //vypnutí chrome security
  },
});

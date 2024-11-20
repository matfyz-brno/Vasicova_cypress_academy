const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    pmtool_url: "https://tredgate.com/pmtool",
    eshop_url: "https://tredgate.com/eshop",
    webtrain_url: "https://tredgate.com/webtrain",
    automation_test_store_url: "https://automationteststore.com/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false, //zaridi, ze se nebude cypress restartovat po kazde zmene
    defaultCommandTimeout: 10000, //zmena time out
    baseUrl: "https://tredgate.com/pmtool",
  },
});

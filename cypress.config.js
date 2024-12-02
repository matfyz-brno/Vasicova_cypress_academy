const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    pmtool_url: "https://tredgate.com/pmtool",
    eshop_url: "https://tredgate.com/eshop",
    webtrain_url: "https://tredgate.com/webtrain",
    automation_test_store_url: "https://automationteststore.com/",
    tegb_url: "http://localhost:3001/",
    tegb_api_url: "http://localhost:3000/",
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("@cypress/grep/src/plugin")(config);
      return config;
    },
    watchForFileChanges: false, //zaridi, ze se nebude cypress restartovat po kazde zmene
    defaultCommandTimeout: 10000, //zmena time out
    baseUrl: "https://tredgate.com/pmtool",
    chromeWebSecurity: false, // vypnuti obejde pripady, kdy to padá na nejakem zbezpeceni nebo na tom ze stranka je pouze HTTP a ne HTTPS
  },
});

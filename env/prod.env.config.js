const baseConfig = require("../cypress.config"); //odkaz na puvodni config

module.exports = {
  ...baseConfig,
  env: {
    //tímto přepíšeme ty adesy z baseconfig
    pmtool_url: "https://www.tredgate.cloud/api",
    eshop_url: "https://www.vinted.cz/",
    webtrain_url: "https://www.facebook.com/",
    automation_test_store_url: "https://www.vodafone.cz/",
  },
};

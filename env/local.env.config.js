const baseConfig = require("../cypress.config"); //odkaz na puvodni config

module.exports = {
  ...baseConfig,
  env: {
    //tímto přepíšeme ty adesy z baseconfig
    pmtool_url: "https://www.tredgate.cloud/api",
    eshop_url: "https://alza.cz",
    webtrain_url: "https://google.com",
    automation_test_store_url: "https://rohlik.cz",
  },
};

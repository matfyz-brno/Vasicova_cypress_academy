import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Fluent Login Tests", () => {
  it("Login to Pmtool and logout using Fluent API", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin()
      .openProfile()
      .clickLogout();
  });
});

import { DashboardPage } from "../../page-objects/pmtool/dashboard_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Fluent Login Tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin();
  });
  it("Login to Pmtool and logout using Fluent API", () => {
    new DashboardPage().openProfile().clickLogout();
  });
  it("Login to Pmtool and logout using Fluent API, two times", () => {
    new DashboardPage()
      .openProfile()
      .clickLogout()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin()
      .openProfile()
      .clickLogout();
  });
});

import { DashboardPage } from "../../page-objects/pmtool/dashboard_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Fluent Login Tests", () => {
  const username = Cypress.env("pmtool_username"); //velké Cypress je tam protože si to vytahuje z git ingnore souboru a je to object
  const password = Cypress.env("pmtool_password");
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin();
  });
  it("Login to Pmtool and logout using Fluent API", () => {
    new DashboardPage().openProfile().clickLogout();
  });
  it("Login to Pmtool and logout using Fluent API, two times", () => {
    new DashboardPage()
      .openProfile()
      .clickLogout()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin()
      .openProfile()
      .clickLogout();
  });
});

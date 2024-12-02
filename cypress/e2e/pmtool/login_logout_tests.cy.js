import { DashboardPage } from "../../page-objects/pmtool/dashboard_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login and logout Test", { tags: "@e2e" }, () => {
  it("Login to PMTool", () => {
    const loginPage = new LoginPage();
    loginPage.openPmtool();
    loginPage.typeUsername("cypress_zima_2024");
    loginPage.typePassword("Zima2024Cypress");
    loginPage.clickLogin();
  });

  it("Login logout", () => {
    const dashboardPage = new DashboardPage();
    const loginPage = new LoginPage();
    loginPage.openPmtool();
    loginPage.typeUsername("cypress_zima_2024");
    loginPage.typePassword("Zima2024Cypress");
    loginPage.clickLogin();
    dashboardPage.clickProfile;
    dashboardPage.clickLogout;
  });
});

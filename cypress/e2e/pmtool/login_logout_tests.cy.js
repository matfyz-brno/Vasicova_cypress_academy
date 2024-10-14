import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login and logout Test", () => {
  it("Login to PMTool", () => {
    const loginPage = new LoginPage();
    loginPage.openPmtool();
    loginPage.typeUsername("cypress_zima_2024");
    loginPage.typePassword("Zima2024Cypress");
    loginPage.clickLogin();
  });
});

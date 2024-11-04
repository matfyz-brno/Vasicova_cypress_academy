import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Polymorphism tests", () => {
  it("Login logout test", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin()
      .openProject()
      .clickProfile()
      .clickLogout();
  });

  it("Open project Dashboard and users section", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin()
      .openProject()
      .openDashboard()
      .openUserPage();
  });
});

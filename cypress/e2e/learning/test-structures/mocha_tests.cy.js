import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Mocha Tests", () => {
  beforeEach(() => {
    cy.log("Běžím před každým testem");
    cy.viewport(800, 600);
  });
  it("Test1", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin()
      .clickProfile()
      .clickLogout();
  });

  it("Test2", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin()
      .clickProfile()
      .clickLogout()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin();
  });

  afterEach(() => {
    cy.log("Function after each run");
  });
});

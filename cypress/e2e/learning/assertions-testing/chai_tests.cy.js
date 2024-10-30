import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Chai Tests(Test Assertions)", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });
  it("Login header have text 'Login'", () => {
    cy.get(" .form-title").should("have.text", "Login");
  });

  it.skip("Failing assert", () => {
    cy.get(" .form-title").should("have.text", "Login2");
  });

  it('Check text "password"', () => {
    cy.get("#forget_password").should("have.text", "Password forgotten?");
  });

  it("Contains text Assert", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin();
    cy.get("#welcome-page-header").should(
      "contain.text",
      "Vítej v testovací aplikaci"
    );
  });

  it('Check value assert"username"', () => {
    const username = "Testing_value";
    new LoginPage().typeUsername(username);
    cy.get("#username").should("have.value", username);
  });

  it("Login test - check value email and username", () => {
    const lostEmail = "test@tredgate.cz";
    const lostUsername = "test";
    cy.visit(`https://tredgate.com/pmtool`);
    cy.get("#forget_password").click();
    cy.get(":nth-child(2) > .input-icon > .form-control")
      .type(lostUsername)
      .should("have.value", lostUsername);
    cy.get(":nth-child(3) > .input-icon > .form-control")
      .type(lostEmail)
      .should("have.value", lostEmail);
    cy.get(".btn-info").click();
  });

  it("Password input has form-control class", () => {
    cy.get("#password").should("have.class", "form-control");
  });

  it("Check class for login btn", () => {
    cy.get("[type='submit']").should("have.class", "btn-info");
  });

  it("Check if it visible login btn", () => {
    cy.get("[type='submit']").should("be.visible");
  });

  it("Contains text Assert header", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin();
    cy.get(".navbar-brand")
      .should(
        "have.text",
        "    \n\t\t\tTEG Project Management     \n\t\t\t    \t\t\n\t\t"
      )
      .should("be.visible");
  });

  //ideální pro atributy, kdy mi něco zmizí a není to vidět vždy
  it("Check atribute", () => {
    cy.get("#username").should("have.attr", "placeholder", "Username");
    //co mame udelat ve should + jmeno atributu + co ma byt obsahem atributu
  });

  it.only("Check atribute", () => {
    cy.get("#password").should("have.attr", "placeholder", "Password");
    //co mame udelat ve should + jmeno atributu ktery mame zkontrolovat + co ma byt obsahem atributu
  });
});

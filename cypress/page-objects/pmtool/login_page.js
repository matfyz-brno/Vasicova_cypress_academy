import { customElement } from "../../helpers/custom_element";
import { DashboardPage } from "./dashboard_page";
// ? Tento PageObject využívá customElement. Uvnitř tohoto custom elementu jsou všechny Cypress volání.
export class LoginPage {
  constructor() {
    this.url = "https://tredgate.com/pmtool";
    this.usernameInput = customElement("#username"); //nesmi byt cypress get cy.get
    this.passwordInput = customElement("#password");
    this.loginButton = customElement(".btn");
    this.pageHeader = customElement("h3.form-title");
    this.usernameErrorLabel = customElement("#username-error");
    this.passwordErrorLabel = customElement("#password-error");
    this.logoImg = customElement(".login-page-logo");
    this.titleText = customElement(".form-title");
  }

  openPmtool() {
    cy.visit(this.url);
    return this;
  }

  typeUsername(username) {
    this.usernameInput.type(username);
    // ! původní cypres call: cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    this.passwordInput.type(password);
    // ! původní cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLogin() {
    this.loginButton.click();
    // ! původní cy.get(this.loginButton).click();
    return new DashboardPage();
  }

  //jednotlive metody lze shluovat do jednoho jako napr predchozi 4 dát jako login

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
  }

  pageHeaderHaveText(headerText) {
    this.pageHeader.haveText(headerText);
    // ! původní bylo cy.get(this.pageHeader).should("have.text", headerText);
    return this;
  }
}

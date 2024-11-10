import { DashboardPage } from "./dashboard_page";

export class LoginPage {
  constructor() {
    this.url = "https://tredgate.com/pmtool";
    this.usernameInput = "#username"; //nesmi byt cypress get cy.get
    this.passwordInput = "#password";
    this.loginButton = ".btn";
    this.pageHeader = "h3.form-title";
    this.rememberCheckbox = ".checkbox";
    this.lostPassword = "#forget_password";
    this.logoImage = ".login-page-logo img";
  }

  openPmtool() {
    cy.visit(this.url);
    return this;
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLogin() {
    cy.get(this.loginButton).click();
    return new DashboardPage();
  }

  //jednotlive metody lze shluovat do jednoho jako napr predchozi 4 dát jako login

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
  }

  pageHeaderHaveText(headerText) {
    cy.get(this.pageHeader).should("have.text", headerText);
    return this;
  }

  checkUsernamePlaceholder(placeholder) {
    cy.get(this.usernameInput).should("have.attr", "placeholder", placeholder);
    return this;
  }

  checkPasswordPlaceholder(placeholder) {
    cy.get(this.passwordInput).should("have.attr", "placeholder", placeholder);
    return this;
  }

  checkTextRememeber(text) {
    cy.get(this.rememberCheckbox).should("contain.text", text);
    return this;
  }
  checkTextLogin(text) {
    cy.get(this.loginButton).should("have.text", text);
    return this;
  }

  checkTextPasswordLost(text) {
    cy.get(this.lostPassword).should("have.text", text);
    return this;
  }

  logoVisibility() {
    cy.get(this.logoImage).should("be.visible");
  }
}

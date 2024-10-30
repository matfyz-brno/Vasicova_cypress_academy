import { LoginPage } from "./login_page";

export class DashboardPage {
  constructor() {
    this.profileButton = "#user_dropdown";
    this.logoutButton = "#logout";
    this.welcomePageHeader = "#welcome-page-header";
    cy.get(this.welcomePageHeader).should("be.visible"); //davam do contructoru jen ve chvili, kdy opravdu vim ze se tento text ncte ihned po otevreni stranky
  }
  openProfile() {
    cy.get(this.profileButton).click();
    return this;
  }
  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }
}

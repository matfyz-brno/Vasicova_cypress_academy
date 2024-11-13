import { HeaderSection } from "./common/header_section";
//import { LoginPage } from "./login_page";
//import { ProjectsPage } from "./project_page";

export class DashboardPage extends HeaderSection {
  constructor() {
    super();
    //this.profileButton = "#user_dropdown";
    //this.logoutButton = "#logout";
    //this.projectButton = "#Projects";
    this.welcomePageHeader = "#welcome-page-header";
    cy.get(this.welcomePageHeader).should("be.visible");
    //davam do contructoru jen ve chvili, kdy opravdu vim ze se tento text necte ihned po otevreni stranky
  }
  /*openProfile() {
    cy.get(this.profileButton).click();
    return this;
  }
  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();*/
  //v komentu je kvuli polymofismu a deden podle super funkce

  /*openProject() {
    cy.get(this.projectButton).click();
    return new ProjectsPage();
  }*/
  // tohle bylo zakomentováno kvuli dědení v polymofismu
}

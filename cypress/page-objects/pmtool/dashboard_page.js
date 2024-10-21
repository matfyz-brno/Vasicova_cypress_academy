import { LoginPage } from "./login_page";
import { ProjectsPage } from "./project_page";

export class DashboardPage {
  constructor() {
    this.profileButton = "#user_dropdown";
    this.logoutButton = "#logout";
    this.projectButton = "#Projects";
  }
  openProfile() {
    cy.get(this.profileButton).click();
    return this;
  }
  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }
  clickProject() {
    cy.get(this.projectButton).click();
    return new ProjectsPage();
  }
}

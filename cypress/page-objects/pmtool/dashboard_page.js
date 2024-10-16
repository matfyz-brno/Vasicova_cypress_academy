export class DashboardPage {
  constructor() {
    this.profileButton = "#user_dropdown";
    this.logoutButton = "#logout";
  }
  openProfile() {
    cy.get(this.profileButton).click();
  }
  clickLogout() {
    cy.get(this.logoutButton).click();
  }
}

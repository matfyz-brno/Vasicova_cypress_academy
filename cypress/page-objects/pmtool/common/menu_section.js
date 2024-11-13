import { BasePage } from "./base_page.js";

export class MenuSection extends BasePage {
  constructor(path) {
    super(path);
    this.projectsMenuAnchor = "#Projects";
    this.dashboardMenuAnchor = "#dashboard a";
    this.usersMenuAnchor = "#Users .menu-itemsitems1";
  }

  openProject() {
    const { ProjectsPage } = require("../project_page.js");
    cy.get(this.projectsMenuAnchor).click();
    return new ProjectsPage();
    //jmeno v Const musí být stejná jako jméno objectu
  }

  openDashboard() {
    const { DashboardPage } = require("../dashboard_page.js");
    cy.get(this.dashboardMenuAnchor).click();
    return new DashboardPage();
  }
  openUserPage() {
    const { UsersPage } = require("../users_page.js");
    cy.get(this.usersMenuAnchor).click();
    return new UsersPage();
  }
}

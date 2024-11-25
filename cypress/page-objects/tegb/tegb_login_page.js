import { customElement } from "../../helpers/custom_element";
import { TegBDashboardPage } from "./tegb_dashboard_page";

export class TegBLoginPage {
  constructor() {
    this.tagbUrl = "http://localhost:3001";
    this.userNameInput = customElement('[data-testid="username"]');
    this.passwordInput = customElement('[data-testid="password"]');
    this.loginBtn = customElement('[data-testid="log_in"]');
    cy.intercept("/auth/login").as("login_api");
  }

  openTegB() {
    cy.visit(this.tagbUrl);
    return this;
  }

  typeUserName(username) {
    this.userNameInput.type(username);
    return this;
  }
  typePassword(password) {
    this.passwordInput.type(password);
    return this;
  }

  clickLogin() {
    this.loginBtn.click();
    cy.wait("@login_api");
    return new TegBDashboardPage();
  }
}

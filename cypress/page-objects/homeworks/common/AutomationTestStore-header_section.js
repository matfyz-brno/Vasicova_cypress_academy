export class HeaderSectionAutomationStore {
  constructor() {
    this.loginBtn = "#customer_menu_top";
  }
  openLoginPage() {
    const {
      LoginPageAutomationStore,
    } = require("../AutomationTestStore-login_page");
    cy.get(this.loginBtn).click();
    return new LoginPageAutomationStore();
  }
}

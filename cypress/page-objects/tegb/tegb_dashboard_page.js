import { customElement } from "../../helpers/custom_element";
import { TegBAccountPage } from "./tegb_account_page";

export class TegBDashboardPage {
  constructor() {
    this.accountsMenuBtn = customElement(
      '[data-testid="accounts_section_link"]'
    );
    cy.intercept("/accounts/user**").as("account_api");
  }
  clickAccountsPage() {
    this.accountsMenuBtn.click();
    cy.wait("@account_api");
    return new TegBAccountPage();
  }
}

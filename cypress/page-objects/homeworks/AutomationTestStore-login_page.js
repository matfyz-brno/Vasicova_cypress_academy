import { NewCustomerPageAutomationStore } from "./AutomationTestStore-new_customer_page";
import { HeaderSectionAutomationStore } from "./common/AutomationTestStore-header_section";

export class LoginPageAutomationStore extends HeaderSectionAutomationStore {
  constructor() {
    super();
    this.continueBtn = " button[title='Continue']";
  }

  openNewCustomerPage() {
    cy.get(this.continueBtn).click();
    return new NewCustomerPageAutomationStore();
  }
}

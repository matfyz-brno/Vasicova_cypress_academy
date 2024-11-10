import { HeaderSectionAutomationStore } from "./common/AutomationTestStore-header_section";

export class HomePageAutomationStore extends HeaderSectionAutomationStore {
  constructor() {
    super();
    this.url = "https://automationteststore.com/";
  }

  openStorePage() {
    cy.visit(this.url);
    return this;
  }
}

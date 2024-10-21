import { AutomationTestStoreDetailPage } from "./AutomationTestStore-detail_page";

export class AutomationStoreHomePage {
  constructor() {
    this.url = "https://automationteststore.com/";
    this.product =
      '#block_frame_featured_1769  [title="Skinsheen Bronzer Stick"]';
  }

  openStorePage() {
    cy.visit(this.url);
    return this;
  }

  clickItem() {
    cy.get(this.product).click();
    return new AutomationTestStoreDetailPage();
  }
}

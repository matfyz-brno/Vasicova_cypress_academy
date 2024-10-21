export class AutomationTestStoreDetailPage {
  constructor() {
    this.cart = ".productpagecart .cart";
  }
  clickBtnBasket() {
    cy.get(this.cart).click();
  }
}

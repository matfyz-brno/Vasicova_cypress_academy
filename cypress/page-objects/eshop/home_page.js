import { HeaderSectionEshop } from "./common/header_section_eshop";
import { Product1Page } from "./product1_page";

export class EshopHomePage extends HeaderSectionEshop {
  constructor() {
    super();
    this.urlEshop = "https://tredgate.com/eshop/";
    this.product1 = ".image img[title='iPhone']";
  }
  openEshopHomePage() {
    cy.visit(this.urlEshop);
    return this;
  }
  openProduct1Page() {
    cy.get(this.product1).click();
    return new Product1Page();
  }
}

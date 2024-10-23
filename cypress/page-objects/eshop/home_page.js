import { RegistrationPageObject } from "./registration_page";

export class EshopHomePage {
  constructor() {
    this.urlEshop = "https://tredgate.com/eshop/";
    this.accountIcon = ".dropdown > .dropdown-toggle > .fa";
    this.registerIcon = ".dropdown-menu > :nth-child(1) > a";
  }
  openEshopHomePage() {
    cy.visit(this.urlEshop);
    return this;
  }
  clickAccountIcon() {
    cy.get(this.accountIcon).click();
    return this;
  }
  clickRegisterIcon() {
    cy.get(this.registerIcon).click();
    return new RegistrationPageObject();
  }
}

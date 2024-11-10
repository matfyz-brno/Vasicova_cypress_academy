export class HeaderSectionEshop {
  constructor() {
    this.accountIcon = ".dropdown > .dropdown-toggle > .fa";
    this.registerIcon = ".dropdown-menu > :nth-child(1) > a";
    this.logoTredgate = "#logo";
  }
  clickAccountIcon() {
    const { EshopHomePage } = require("../home_page");
    cy.get(this.accountIcon).click();
    return new EshopHomePage();
  }

  clickRegisterIcon() {
    const { RegistrationPageObject } = require("../registration_page");
    cy.get(this.registerIcon).click();
    return new RegistrationPageObject();
  }
  clickLogoTredgate() {
    const { EshopHomePage } = require("../home_page");
    cy.get(this.logoTredgate).click();
    return new EshopHomePage();
  }
}

import { HeaderSectionEshop } from "./common/header_section_eshop";

export class Product1Page extends HeaderSectionEshop {
  constructor() {
    super();
    this.product1Text = ".intro";
  }
  checkProduct1Text() {
    const checkedText =
      "iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a name or number in your address book, a favorites list, or a call log. It also automatically syncs all your contacts from a PC, Mac, or Internet service. And it lets you select and listen to voicemail messages in whatever order you want just like email.";
    cy.get(this.product1Text).should("contain.text", checkedText);
    return this;
  }
}

import { customElement } from "../../../helpers/custom_element";
import { LoginPage } from "../login_page";
import { MenuSection } from "./menu_section";

export class HeaderSection extends MenuSection {
  constructor(path) {
    super(path);
    this.profileDropdown = "#user_dropdown";
    this.logoutButton = "#logout";
    this.userNameSpan = customElement(".username");
  }

  clickProfile() {
    cy.get(this.profileDropdown).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }

  userNameHaveText(firstname, lastname) {
    const fullName = `${firstname} ${lastname}`;
    this.userNameSpan.containsText(fullName);
    return this;
  }
}

import { customElement } from "../../helpers/custom_element";
import { HeaderSection } from "./common/header_section";

export class UsersPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=1");
    this.usersHeader = customElement(".page-title");
    this.addUserBtn = customElement('[test_id="Add User"]');

    //cy.get(this.projectsHeader).should("contain.text", "Users"); //kontrola pro nadpis stránky, zakomentována kvuli BasePage
  }
}

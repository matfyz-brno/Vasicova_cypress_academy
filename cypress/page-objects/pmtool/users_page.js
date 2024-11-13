import { HeaderSection } from "./common/header_section";

export class UsersPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=1");
    this.projectsHeader = ".page-title";
    //cy.get(this.projectsHeader).should("contain.text", "Users"); //kontrola pro nadpis stránky, zakomentována kvuli BasePage
  }
}

import { HeaderSection } from "./common/header_section";

export class UsersPage extends HeaderSection {
  constructor() {
    super();
    this.projectsHeader = ".page-title";
    cy.get(this.projectsHeader).should("contain.text", "Users"); //kontrola pro nadpis stránky
  }
}

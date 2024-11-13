import { HeaderSection } from "./common/header_section";
import { ProjectModal } from "./create_project_modal_page";

export class ProjectsPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=21");
    this.addProjectBtn = 'button[test_id="Add Project"]';
    this.projectsHeader = ".page-title";
  }

  clickAddProjectBtn() {
    cy.get(this.projectsHeader).should("contain.text", "Projects"); //kontrola pro nadpis
    cy.get(this.addProjectBtn).click();
    return new ProjectModal();
  }
}

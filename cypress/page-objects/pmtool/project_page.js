import { HeaderSection } from "./common/header_section";
import { ProjectModal } from "./create_project_modal_page";

export class ProjectsPage extends HeaderSection {
  constructor() {
    super();
    this.addProjectBtn = 'button[test_id="Add Project"]';
    this.projectsHeader = ".page-title";
    cy.get(this.projectsHeader).should("contain.text", "Projects"); //kontrola pro nadpis
  }

  clickAddProjectBtn() {
    cy.get(this.addProjectBtn).click();
    return new ProjectModal();
  }
}

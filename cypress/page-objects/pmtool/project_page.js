import { ProjectModal } from "./create_project_modal_page";

export class ProjectsPage {
  constructor() {
    this.addProjectBtn = 'button[test_id="Add Project"]';
  }

  clickAddProjectBtn() {
    cy.get(this.addProjectBtn).click();
    return new ProjectModal();
  }
}

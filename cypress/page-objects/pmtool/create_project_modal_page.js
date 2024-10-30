export class ProjectModal {
  constructor() {
    this.nameField = '[data-testid="Name"]';
    this.saveBtn = 'button[type="submit"]';
  }

  fillName(projectName) {
    cy.get(this.nameField).type(projectName);
    return this;
  }

  clickSaveBtn() {
    cy.get(this.saveBtn).click();
  }
}

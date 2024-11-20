import { BasePage } from "./common/base_page";
import { TasksPage } from "./projects/tasks_page";

export class ProjectModal extends BasePage {
  constructor() {
    super("module=items/form&path=21");
    this.priorityField = '[data-testid="Priority"] select';
    this.statusField = '[data-testid="Status"] select';
    this.nameField = '[data-testid="Name"] input';
    this.saveBtn = 'button[type="submit"]';
    this.startDate = '[data-testid="Start Date"] input';
  }

  selectPriority() {
    cy.get(this.priorityField).select("35");
    return this;
  }

  selectStatus() {
    cy.get(this.statusField).select("38");
    return this;
  }
  fillName(projectName) {
    cy.get(this.nameField).type(projectName);
    return this;
  }

  selectDate(startDate) {
    cy.get(this.startDate).type(startDate);
    return this;
  }

  clickSaveBtn() {
    cy.get(this.saveBtn).click();
    return new TasksPage();
  }
}

import { HeaderSection } from "../common/header_section";
import { TasksPage } from "./tasks_page";

export class CreateTaskModal extends HeaderSection {
  constructor() {
    super();
    this.taskTypeSelect = '[data-testid="Type"] select';
    this.taskNameInput = '[data-testid="Name"] input';
    this.taskStatusSelect = '[data-testid="Status"] select';
    this.taskPrioritySelect = '[data-testid="Priority"] select';
    this.taskAssignedSelect = '//label[normalize-space()="Petr Fifka"]';
    //this.assignedToLabels = ".select_checkboxes_tag label"; pro klasicky vyber človeka v seznamu Assigned
    this.taskModalSubmit = "#items_form";
    this.saveButton = '[type="submit"]';
  }

  selectTaskType() {
    cy.get(this.taskTypeSelect).select("43");
    return this;
  }

  typeTaskName(taskName) {
    cy.get(this.taskNameInput).type(taskName);
    return this;
  }

  selectTaskStatus() {
    cy.get(this.taskStatusSelect).select("47");
    return this;
  }

  selectTaskPriority() {
    cy.get(this.taskPrioritySelect).select("54");
    return this;
    // lze i nahradit promennou, kterou budu definovat pomocí const v testu, je to variabilnejsi bez na trvdo na zde napsat
  }

  selectTaskAssigned() {
    cy.xpath(this.taskAssignedSelect).click();
    //cy.get(this.assignedToLabels).contains(assigneeName).click(); zpusob přes klasicky get
    return this;
  }

  clickSave() {
    cy.get(this.saveButton).click();
    return new TasksPage();
  }

  submitTaskModal() {
    cy.get(this.taskModalSubmit).submit();
    return new TasksPage();
  }
}

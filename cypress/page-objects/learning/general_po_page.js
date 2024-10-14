export class GeneralPoPage {
  constructor() {
    this.someElement = "selector"; //properties
  }

  actionWithElement() {
    cy.log(this.someElement);
  }
}

export class BasePage {
  constructor(path) {
    this.baseUrl = "https://tredgate.com/pmtool/index.php?";
    this.path = path;
  }

  visit() {
    cy.visit(this.baseUrl + this.path);
    return this; // vytvoreni nove funkce pro visit
  }
}

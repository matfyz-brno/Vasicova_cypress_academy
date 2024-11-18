export const customElement = (selector) => {
  const element = {
    isVisible() {
      cy.get(selector).should("be.visible");
      return element;
    },
    isNotVisible() {
      cy.get(selector).should("not.be.visible");
      return element;
    },
    haveText(text) {
      cy.get(selector).should("have.text", text);
      return element;
    },
    containsText(text) {
      cy.get(selector).should("contain.text", text);
      return element;
    },
    haveValue(value) {
      cy.get(selector).should("have.value", value);
      return element;
    },
    havePlaceholder(placeholder) {
      cy.get(selector).should("have.attr", "placeholder", placeholder);
      return element;
    },
    haveAttribute(attribute, value) {
      cy.get(selector).should("have.attr", attribute, value);
      return element;
    },
    scrollIntoView() {
      cy.get(selector).scrollIntoView();
      return element;
    },
    get() {
      return cy.get(selector);
    },
    click() {
      cy.get(selector).click();
      return element;
    },
    type(value) {
      cy.get(selector).type(value);
      return element;
    },
    clear() {
      cy.get(selector).clear();
      return element;
    },
  };
  return element;
};

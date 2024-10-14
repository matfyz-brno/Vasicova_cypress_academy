describe("Open with cypress", () => {
  it.skip("wrong test - element not present", () => {
    cy.visit(`https://tredgate.com/pmtool`);
    cy.get("#username-s");
  });

  it("Login test", () => {
    cy.visit(`https://tredgate.com/pmtool`);
    cy.get("#username").type("cypress_zima_2024");
    cy.get("#password").type("Zima2024Cypress");
    cy.get(".btn").click();
  });
});

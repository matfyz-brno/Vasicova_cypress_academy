describe("Open with cypress", () => {
  it("Login test", () => {
    cy.visit(`https://tredgate.com/pmtool`);
    cy.get("#forget_password").click();
    cy.get(":nth-child(3) > .input-icon > .form-control").type(
      "test@tredgate.cz"
    );
    cy.get(":nth-child(2) > .input-icon > .form-control").type("test");
    cy.get(".btn-info").click();
  });
});

//extra priklad navic
describe("Automationstore", () => {
  it("Item in basket", () => {
    cy.visit(`https://automationteststore.com/`);
    cy.get(
      "#block_frame_bestsellers_1771 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa"
    ).click();
    cy.get(".block_7 > .nav > .dropdown > .dropdown-toggle").click();
    cy.get(":nth-child(7) > .btn").click();
  });
});

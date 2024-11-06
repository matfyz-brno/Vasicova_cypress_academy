describe("Forms tests", () => {
  beforeEach(() => {
    cy.visit("http://tredgate.com/webtrain/registration.html");
  });
  it("Check radio button", () => {
    cy.get("#basic").check();
    cy.get("#basic").should("be.checked"); // kontrola že je radio button zakliknutý
    cy.get("input[name='subscription']").check("premium"); //více přepoužitelný pro page objects
    cy.get("#premium").should("be.checked"); // kontrola že je radio button zakliknutý
  });

  it("Checkboxes checks", () => {
    cy.get('input[name="interests[]"]').check("sports");
    cy.get('input[name="interests[]"]').check("reading");
    cy.get("#interests-sports").should("be.checked");
    cy.get("#interests-reading").should("be.checked");
    cy.get('input[name="interests[]"]').check(["music", "travel"]); // Check více hodnot najednou
  });

  it("Uncheck checkboxes", () => {
    cy.get('input[name="interests[]"]').check("sports");
    cy.get("#interests-sports").should("be.checked");
    cy.get('input[name="interests[]"]').uncheck("sports");
    cy.get("#interests-sports").should("not.be.checked");
  });

  it("Clear input", () => {
    cy.get("#name").clear().type("Petr");
    cy.get("#name").should("have.value", "Petr");
  });

  it("Submit form", () => {
    cy.get("form").submit();
    cy.get("#message-box")
      .should("be.visible")
      .and("have.text", "Form submitted successfully!"); // kontrola, že je formulář vyplněný, odeslaný a vše prošlo - včetně message o odeslání
  });

  it("Datepicker", () => {
    cy.get("#datepicker").type("1999-06-15"); //datum se vždy zadává ve formátu YYYY-MM-DD
    cy.get("#datepicker").should("have.value", "1999-06-15"); //kontrola že je datum vyplněný
  });

  it("Select file", () => {
    cy.fixture("text.txt").as("uploadFile"); // je nutne mit ulozeny soubor v Fixtures
    cy.get("#file-upload").selectFile("@uploadFile");
  });

  it("Dropdown select", () => {
    cy.get("#gender").select("female");
    cy.get("#gender").select(3);
    cy.get("#gender").should("have.value", "other");
  });
});

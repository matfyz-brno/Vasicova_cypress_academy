describe("Base URL Tests", () => {
  it("Using baseUrl in visit", () => {
    cy.visit("/"); // znam lomitka znamena ze se to pripojí k baseURL
  });
  it("Open different url than baseUrl", () => {
    cy.visit("https://www.tredgate.cloud/api");
  });
});

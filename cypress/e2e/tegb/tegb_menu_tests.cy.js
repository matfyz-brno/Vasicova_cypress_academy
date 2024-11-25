import { TegBLoginPage } from "../../page-objects/tegb/tegb_login_page";

describe("Login test", () => {
  it("Login to Bank app", () => {
    cy.intercept("/auth/login");
    const username = Cypress.env("tegb_username");
    const password = Cypress.env("tegb_password");

    new TegBLoginPage()
      .openTegB()
      .typeUserName(username)
      .typePassword(password)
      .clickLogin()
      .clickAccountsPage()
      .headerHaveText("Account");
  });
});

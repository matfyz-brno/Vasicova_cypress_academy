import { LoginPage } from "../../page-objects/pmtool/login_page.js";

describe("Login Page Atomic Tests", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    new LoginPage().openPmtool();
  });
  //! User name sekce
  context("Username Input", () => {
    it("Is Visible", () => {
      cy.get(loginPage.usernameInput).should("be.visible");
    });

    it("Have Placeholder", () => {
      cy.get(loginPage.usernameInput).should(
        "have.attr",
        "placeholder",
        "Username"
      );
    });

    it("Is editable", () => {
      const username = "Test";
      loginPage.typeUsername(username);
      cy.get(loginPage.usernameInput).should("have.value", username);
    });

    it("Empty Validation Message", () => {
      loginPage.clickLogin();
      cy.get(loginPage.usernameErrorLabel).should(
        "have.text",
        "This field is required!"
      );
    });
  });

  //!Password sekce
  context("Password input", () => {
    it("Is visible", () => {
      cy.get(loginPage.passwordInput).should("be.visible");
    });

    it("Have Placeholder", () => {
      cy.get(loginPage.passwordInput).should(
        "have.attr",
        "placeholder",
        "Password"
      );
    });

    it("Empty Validation Message", () => {
      loginPage.clickLogin();
      cy.get(loginPage.passwordErrorLabel).should(
        "have.text",
        "This field is required!"
      );
    });
  });

  //!Logo sekce

  context("Logo field", () => {
    it("Is visible", () => {
      cy.get(loginPage.logoImg).should("be.visible");
    });
  });

  // ! Text title
  context("Title field", () => {
    it("Is visible", () => {
      cy.get(loginPage.titleText).should("be.visible");
    });

    it("Have text", () => {
      cy.get(loginPage.titleText).should("have.text", "Login");
    });
  });
});

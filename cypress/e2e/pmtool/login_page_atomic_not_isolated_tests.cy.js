import { LoginPage } from "../../page-objects/pmtool/login_page.js";

describe("Login Page Atomic Tests", { testIsolation: false }, () => {
  const loginPage = new LoginPage();

  //before, protoze nema smysls davat pred kazdym kdyz to neni nutne, staci jen to prvni
  before(() => {
    //tyto tři funkce jsou nutne, aby ten vypnuty izolovany test se umel prihlasit a vycisitit zbytky
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();

    const username = Cypress.env("pmtool_username"); //velké Cypress je tam protože si to vytahuje z git ingnore souboru a je to object
    const password = Cypress.env("pmtool_password");
    new LoginPage().openPmtool();
  });
  //! User name sekce
  context("Username Input", () => {
    it("Is Visible", () => {
      loginPage.usernameInput.isVisible();
    });

    it("Have Placeholder", () => {
      loginPage.usernameInput.havePlaceholder("Username");
    });

    it("Is editable", () => {
      const username = "Test";
      loginPage.typeUsername(username);
      loginPage.usernameInput.haveValue(username);
    });

    it("Empty Validation Message", () => {
      loginPage.usernameInput.clear(); //zajisti clear daneho elementu
      loginPage.clickLogin();
      loginPage.usernameErrorLabel.haveText("This field is required!");
    });
  });

  //!Password sekce
  context("Password input", () => {
    it("Is visible", () => {
      loginPage.passwordInput.isVisible();
    });

    it("Have Placeholder", () => {
      loginPage.passwordInput.havePlaceholder("Password");
    });

    it("Empty Validation Message", () => {
      loginPage.clickLogin();
      loginPage.passwordErrorLabel.haveText("This field is required!");
    });
  });

  //!Logo sekce

  context("Logo field", () => {
    it("Is visible", () => {
      loginPage.logoImg.isVisible();
    });
  });

  // !Text title
  context("Title field", () => {
    it("Is visible", () => {
      loginPage.pageHeader.isVisible();
    });

    it("Have text", () => {
      loginPage.pageHeader.haveText("Login");
    });
  });
});

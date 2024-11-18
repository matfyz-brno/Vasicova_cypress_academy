import { LoginPage } from "../../page-objects/pmtool/login_page";
import { UsersPage } from "../../page-objects/pmtool/users_page";

// ! Tento describe ma vypnutou izolaci testu, to znamena, ze vsechny testy pokracuji na tom miste v prohlizeci, kde predchozi test skoncil

describe("Users page atomic tests", { testIsolation: false }, () => {
  const usersPage = new UsersPage();
  //before, protoze nema smysls davat pred kazdym kdyz to neni nutne, staci jen to prvni
  before(() => {
    //tyto tři funkce jsou nutne, aby ten vypnuty izolovany test se umel prihlasit a vycisitit zbytky
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();

    const username = Cypress.env("pmtool_username"); //velké Cypress je tam protože si to vytahuje z git ingnore souboru a je to object
    const password = Cypress.env("pmtool_password");
    new LoginPage()
      .openPmtool()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin();
    new UsersPage().visit();
  });

  context("Title Tests", () => {
    it("Title is visible", () => {
      usersPage.usersHeader.isVisible();
    });

    it("Title have text", () => {
      usersPage.usersHeader.haveText("Users");
    });
  });

  context("Add New User Button Test", () => {
    it("Add user button is visible", () => {
      usersPage.addUserBtn.isVisible();
    });

    it("Add user button have text", () => {
      usersPage.addUserBtn.haveText("Add User");
    });
  });
});

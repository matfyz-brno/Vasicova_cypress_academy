import { LoginPage } from "../../page-objects/pmtool/login_page";
import { UsersPage } from "../../page-objects/pmtool/users_page";

describe("Users page atomic tests", () => {
  const usersPage = new UsersPage();
  beforeEach(() => {
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

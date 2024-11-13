import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Keyboard argument", () => {
  it("login to PM TOOL", () => {
    const username = Cypress.env("pmtool_username"); //velké Cypress je tam protože si to vytahuje z git ingnore souboru a je to object
    const password = Cypress.env("pmtool_password");
    new LoginPage()
      .openPmtool()
      .typeUsername(username)
      .typePassword(password)
      .type("{enter}");
  });
});

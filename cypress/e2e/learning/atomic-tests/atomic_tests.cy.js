import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { ProjectInfoPage } from "../../../page-objects/pmtool/projects/project_info_page";

describe("Atomic Tests", () => {
  it("Direct opening pages", () => {
    const username = Cypress.env("pmtool_username"); //velké Cypress je tam protože si to vytahuje z git ingnore souboru a je to object
    const password = Cypress.env("pmtool_password");
    new LoginPage()
      .openPmtool()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin();
    new ProjectInfoPage(1833).visit();
  });

  // ! nova struktura testu - slouží ke seskupení testů pro lepší viditelnost a přehlednost >> context >> synonymum describe ale je to podložka nad IT. Zkratka je CTX

  context("All tests", () => {
    // lze vytvořit before each jen pro jednu skupinu Context
    it("Test1", () => {});

    it("Test2", () => {});
  });
});

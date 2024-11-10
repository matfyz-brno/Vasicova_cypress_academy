import { LoginPage } from "../../page-objects/pmtool/login_page.js";

describe("Using Asserts in PageObjects", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Check placeholders", () => {
    new LoginPage()
      .checkUsernamePlaceholder("Username")
      .checkPasswordPlaceholder("Password");
  });

  it("Check texts", () => {
    new LoginPage()
      .checkTextRememeber("Remember Me")
      .checkTextLogin("Login")
      .checkTextPasswordLost("Password forgotten?");
  });

  it("Logo is visible", () => {
    new LoginPage().logoVisibility();
  });
});

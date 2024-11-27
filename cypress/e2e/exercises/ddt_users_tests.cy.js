import { LoginPage } from "../../page-objects/pmtool/login_page";
import createNewUser from "../../fixtures/create_user_data.json";
import { UsersPage } from "../../page-objects/pmtool/users_page";
import { faker } from "@faker-js/faker";

describe("Create new user", () => {
  beforeEach(() => {
    const username = Cypress.env("pmtool_username");
    const password = Cypress.env("pmtool_password");
    new LoginPage()
      .openPmtool()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin()
      .openUserPage();
  });
  createNewUser.forEach((user_data) => {
    it("DDT - create New user", () => {
      const username =
        user_data.username_prefix +
        faker.number.int({ min: 10000, max: 99999 });

      const email = faker.internet.exampleEmail({
        firstName: username,
      });

      const firstname = faker.person.firstName();

      const lastname = faker.person.lastName();

      new UsersPage()
        .clickAddUser()
        .selectRole(user_data.role)
        .typeUsername(username)
        .typePassword(user_data.password)
        .typeFirstName(firstname)
        .typeLastName(lastname)
        .typeEmail(email)
        .clickSave()
        .clickProfile()
        .clickLogout()
        .typeUsername(username)
        .typePassword(user_data.password)
        .clickLogin()
        .userNameHaveText(firstname, lastname);
    });
  });
});

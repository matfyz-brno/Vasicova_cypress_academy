import { LoginPage } from "../../page-objects/pmtool/login_page";
import { faker } from "@faker-js/faker";

describe("Create new Project, with complete login", () => {
  it("Create new Project", () => {
    const projectName = faker.lorem.word(5);
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin()
      .openProject()
      .clickAddProjectBtn()
      .fillName(projectName)
      .clickSaveBtn();
  });
});

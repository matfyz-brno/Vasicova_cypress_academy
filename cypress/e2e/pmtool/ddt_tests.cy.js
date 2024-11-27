import newProjectData from "../../fixtures/new_project_data.json";
import { faker } from "@faker-js/faker";
import moment from "moment";
import { LoginPage } from "../../page-objects/pmtool/login_page";
import { ProjectModal } from "../../page-objects/pmtool/create_project_modal_page";

describe("Data Driven Tests", () => {
  beforeEach(() => {
    const username = Cypress.env("pmtool_username");
    const password = Cypress.env("pmtool_password");
    new LoginPage()
      .openPmtool()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin()
      .openProject()
      .clickAddProjectBtn();
  });
  newProjectData.forEach((projectData) => {
    it(`DDT Project: ${projectData.description} `, () => {
      const projectName =
        projectData.name_prefix + faker.number.int({ min: 10000, max: 99999 });
      const startDate = generateStartDate(projectData.start_date, "YYYY-MM-DD");
      new ProjectModal()
        .selectPriority(projectData.priority)
        .selectStatus(projectData.status)
        .fillName(projectName)
        .selectDate(startDate)
        .clickSaveBtn()
        .clickProjectInfo()
        .projectTitleHaveText(projectName)
        .startDateHaveText(
          generateStartDate(projectData.start_date, "DD/MM/YYYY")
        );
    });
  });
});

//?nová funkce, kde posílám počáteční datum a formát toho data

function generateStartDate(startDate, format) {
  let generatedDate;
  switch (startDate) {
    case "today": //? V každém case je scénář, co se provede když nastane situace "today"
      generatedDate = moment().format(format); //! Funkce moment vytáhne datum a dá ji do daného zvoleného formátu, který zadáme
      break;
    case "tommorow":
      generatedDate = moment().add(1, "day").format(format); //! Funkce moment vytáhne datum, přidá jeden den a dá ji do daného zvoleného formátu, který zadáme
      break;
    case "yesterday":
      generatedDate = moment().subtract(1, "day").format(format); //! Funkce moment vytáhne datum, odebere jeden den a dá ji do daného zvoleného formátu, který zadáme
      break;

    default:
      throw new Error("Invalid startDate!");
  }
  return generatedDate;
}

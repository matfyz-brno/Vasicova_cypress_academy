import { DashboardPage } from "../../page-objects/pmtool/dashboard_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";
import { faker } from "@faker-js/faker";

describe("Open PMtool, create new Project, create new task", () => {
  it("Open Project Page and create task", () => {
    const username = Cypress.env("pmtool_username"); //velké Cypress je tam protože si to vytahuje z git ingnore souboru a je to object
    const password = Cypress.env("pmtool_password");
    const fakeNumber = faker.helpers.rangeToNumber({ min: 1, max: 10 });
    const projectName = `Vasicova_self-exercise_${fakeNumber}`;
    const priority = "High";
    const status = "Open";
    const today = "2024-11-11";
    const todayFormated = "11/11/2024";
    const taskName = `Vasicova_TASK_${fakeNumber}`;

    new LoginPage()
      .openPmtool()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin()
      .openProject()
      .clickAddProjectBtn()
      .selectPriority()
      .selectStatus()
      .fillName(projectName)
      .selectDate(today)
      .clickSaveBtn()
      .clickAddNewTaskBtn()
      .selectTaskType()
      .typeTaskName(taskName)
      .selectTaskStatus()
      .selectTaskPriority()
      .selectTaskAssigned()
      .submitTaskModal()
      .clickProjectInfo()
      .projectTitleHaveText(projectName)
      .statusHaveText(status)
      .priorityHaveText(priority)
      .dateAddedHaveText(todayFormated)
      .startDateHaveText(todayFormated);
  });
});

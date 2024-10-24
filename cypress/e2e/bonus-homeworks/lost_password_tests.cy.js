import { LoginPage } from "../../page-objects/pmtool/login_page";
import { faker } from "@faker-js/faker";
describe("Lost password", () => {
  it("Lost password for random user", () => {
    const fakeLostUserName = faker.internet.userName();
    const fakeLostEmail = faker.internet.exampleEmail({
      firstName: fakeLostUserName,
    });
    new LoginPage()
      .openPmtool()
      .clickLostPassword()
      .typeLostUserName(fakeLostUserName)
      .typeLostEmail(fakeLostEmail)
      .clickSendBtn()
      .clickBackBtn();
  });

  it("Lost password for known user", () => {
    const fakeLostUserName = "lost_password_user";
    const fakeLostEmail = "lost_password@tredgate.cz";
    new LoginPage()
      .openPmtool()
      .clickLostPassword()
      .typeLostUserName(fakeLostUserName)
      .typeLostEmail(fakeLostEmail)
      .clickSendBtn();
  });
});

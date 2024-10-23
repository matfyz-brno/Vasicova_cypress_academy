import { LoginPage } from "../../page-objects/pmtool/login_page";
describe("Lost password", () => {
  it("Lost password for random user", () => {
    new LoginPage()
      .openPmtool()
      .clickLostPassword()
      .typeLostUserName("dgdgf")
      .typeLostEmail("dgdgd@sfsfsd.cz")
      .clickSendBtn()
      .clickBackBtn();
  });

  /*it.skip("Lost password for known user", () => {
    new LoginPage().openPmtool();
  });*/
});

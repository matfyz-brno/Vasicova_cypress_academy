import { LoginPage } from "./login_page";

export class LostPasswordPage {
  constructor() {
    this.lostPasswordUserName = 'input[name = "username"]';
    this.lostPasswordEmail = " input[name='email']";
    this.sendBtn = "button[type='submit']";
    this.backBtn = "#back-btn";
  }

  typeLostUserName(lostUserNameInput) {
    cy.get(this.lostPasswordUserName).type(lostUserNameInput);
    return this;
  }
  typeLostEmail(lostEmailInput) {
    cy.get(this.lostPasswordEmail).type(lostEmailInput);
    return this;
  }
  clickSendBtn() {
    cy.get(this.sendBtn).click();
    return this;
  }
  clickBackBtn() {
    cy.get(this.backBtn).click();
    return new LoginPage();
  }
}

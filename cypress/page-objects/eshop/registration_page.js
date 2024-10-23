export class RegistrationPageObject {
  constructor() {
    this.fistNameInput = "#input-firstname";
    this.lastNameInput = "#input-lastname";
    this.emailInput = "#input-email";
    this.phoneInput = "#input-telephone";
    this.passwordInput = "#input-password";
    this.passwordConfirmInput = "#input-confirm";
    this.privacyPolicyCheckbox = "input[type='checkbox']";
    this.buttonContinue = "input[type='submit']";
  }
  typeFirstName(firstName) {
    cy.get(this.fistNameInput).type(firstName);
    return this;
  }
  typeLastName(lastName) {
    cy.get(this.lastNameInput).type(lastName);
    return this;
  }
  typeEmail(email) {
    cy.get(this.emailInput).type(email);
    return this;
  }

  typePhone(phone) {
    cy.get(this.phoneInput).type(phone);
    return this;
  }
  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }
  typePasswordConfirm(password) {
    cy.get(this.passwordConfirmInput).type(password);
    return this;
  }
  clickPrivacyPolicy() {
    cy.get(this.privacyPolicyCheckbox).check();
    return this;
  }
  clickContinueButton() {
    cy.get(this.buttonContinue).click();
  }
}

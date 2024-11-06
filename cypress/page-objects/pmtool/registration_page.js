export class RegistrationPage {
  constructor() {
    this.registrationUrl =
      "https://tredgate.com/eshop/index.php?route=account/register";
    this.fistNameInput = "#input-firstname";
    this.lastNameInput = "#input-lastname";
    this.emailInput = "#input-email";
    this.phoneInput = "#input-telephone";
    this.passwordInput = "#input-password";
    this.passwordConfirmInput = "#input-confirm";
    this.privacyPolicyCheckbox = "input[type='checkbox']";
    this.buttonContinue = "input[type='submit']";
  }
  openRegistrationPage() {
    cy.visit(this.registrationUrl);
  }
  typeFirstName(firstName) {
    cy.get(this.fistNameInput).type(firstName);
  }
  typeLastName(lastName) {
    cy.get(this.lastNameInput).type(lastName);
  }
  typeEmail(email) {
    cy.get(this.emailInput).type(email);
  }
  typePhone(phone) {
    cy.get(this.phoneInput).type(phone);
  }
  typePassword(password) {
    cy.get(this.passwordInput).type(password);
  }
  typePasswordConfirm(password) {
    cy.get(this.passwordConfirmInput).type(password);
  }
  clickPrivacyPolicy() {
    cy.get(this.privacyPolicyCheckbox).check();
  }
  clickContinueButton() {
    cy.get(this.buttonContinue).click();
  }
}

import { HeaderSectionAutomationStore } from "./common/AutomationTestStore-header_section";

export class NewCustomerPageAutomationStore extends HeaderSectionAutomationStore {
  constructor() {
    super();
    this.form = "#AccountFrm";
    this.firstNameInput = "#AccountFrm_firstname";
    this.lastNameInput = "#AccountFrm_lastname";
    this.emailInput = "#AccountFrm_email";
    this.phoneInput = "#AccountFrm_telephone";
    this.faxInput = "#AccountFrm_fax";
    this.companyInput = "#AccountFrm_company";
    this.address1Input = "#AccountFrm_address_1";
    this.address2Input = "#AccountFrm_address_2";
    this.cityInput = "#AccountFrm_city";
    this.regionInput = "#AccountFrm_zone_id";
    this.zipCodeInput = "#AccountFrm_postcode";
    this.countryInput = "#AccountFrm_country_id";
    this.loginNameInput = "#AccountFrm_loginname";
    this.passwordInput = "#AccountFrm_password";
    this.passwordConfirmInput = "#AccountFrm_confirm";
    this.subscribeRadioBtn = "#AccountFrm_newsletter0";
    this.privacyPolicyCheckbox = "#AccountFrm_agree";
    this.continueBtn = "button[title='Continue']";
    this.positiveSubmitMessage = ".maintext";
  }
  typeFirstName(randomFirstName) {
    cy.get(this.firstNameInput).type(randomFirstName);
    return this;
  }

  typeLastName(randomLastName) {
    cy.get(this.lastNameInput).type(randomLastName);
    return this;
  }

  typeEmail(randomEmail) {
    cy.get(this.emailInput).type(randomEmail);
    return this;
  }

  typePhone(randomPhone) {
    cy.get(this.phoneInput).type(randomPhone);
    return this;
  }

  typeFax(randomFax) {
    cy.get(this.faxInput).type(randomFax);
    return this;
  }

  typeCompany(randomCompany) {
    cy.get(this.companyInput).type(randomCompany);
    return this;
  }

  typeAddress1(randomAddress1) {
    cy.get(this.address1Input).type(randomAddress1);
    return this;
  }

  typeAddress2(randomAddress2) {
    cy.get(this.address2Input).type(randomAddress2);
    return this;
  }

  typeCity(randomCity) {
    cy.get(this.cityInput).type(randomCity);
    return this;
  }

  selectRegion(region) {
    cy.get(this.regionInput).select(region);
    cy.wait(1000);
    return this;
  }

  regionHaveValue(region) {
    cy.get(this.regionInput).should("contain.text", region);
    return this;
  }

  typeZipCode(randomZipCode) {
    cy.get(this.zipCodeInput).type(randomZipCode);
    return this;
  }

  selectCountry(state) {
    cy.get(this.countryInput).select(state);
    cy.wait(1000);
    return this;
  }

  countryHaveValue(state) {
    cy.get(this.countryInput).should("contain.text", state);
    return this;
  }

  typeLoginName(randomLoginName) {
    cy.get(this.loginNameInput).type(randomLoginName);
    return this;
  }

  typePassword(randomPassword) {
    cy.get(this.passwordInput).type(randomPassword);
    return this;
  }

  typePasswordConfirm(randomPassword) {
    cy.get(this.passwordConfirmInput).type(randomPassword);
    return this;
  }

  clickSubscribe() {
    cy.get(this.subscribeRadioBtn).check();
    cy.get(this.subscribeRadioBtn).should("be.checked");
    return this;
  }

  clickPrivacyPolicy() {
    cy.get(this.privacyPolicyCheckbox).check();
    cy.get(this.privacyPolicyCheckbox).should("be.checked");
    return this;
  }

  submitForm() {
    cy.get(this.form).submit();
    cy.get(this.positiveSubmitMessage)
      .should("be.visible")
      .and("contain.text", "Your Account Has Been Created!");
    return this;
  }
}

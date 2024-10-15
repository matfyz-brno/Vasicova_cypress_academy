import { RegistrationPage } from "../../page-objects/pmtool/registration_page";
import { faker } from "@faker-js/faker";

describe("Registration form", () => {
  it("Fill in registration form", () => {
    const randomFirstName = faker.person.firstName();
    const randomLastName = faker.person.lastName();
    const randomEmail = faker.internet.email();
    const randomPhoneNumber = faker.phone.number();
    const randomPassword = faker.internet.password({ length: 20 });

    const registrationPage = new RegistrationPage();
    registrationPage.openRegistrationPage();
    registrationPage.typeFirstName(randomFirstName);
    registrationPage.typeLastName(randomLastName);
    registrationPage.typeEmail(randomEmail);
    registrationPage.typePhone(randomPhoneNumber);
    registrationPage.typePassword(randomPassword);
    registrationPage.typePasswordConfirm(randomPassword);
    registrationPage.clickPrivacyPolicy();
    registrationPage.clickContinueButton();
  });
});

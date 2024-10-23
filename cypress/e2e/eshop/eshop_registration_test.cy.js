import { faker } from "@faker-js/faker";
import { EshopHomePage } from "../../page-objects/eshop/home_page";
describe("Eshop page and registration new user", () => {
  it.skip("Open Eshop page and fill in registration form", () => {
    const randomFirstName = faker.person.firstName();
    const randomLastName = faker.person.lastName();
    const randomEmail = faker.internet.exampleEmail({
      firstName: randomFirstName,
      lastName: randomLastName,
    });
    const randomPhoneNumber = faker.phone.number();
    const randomPassword = faker.internet.password();

    new EshopHomePage()
      .openEshopHomePage()
      .clickAccountIcon()
      .clickRegisterIcon()
      .typeFirstName(randomFirstName)
      .typeLastName(randomLastName)
      .typeEmail(randomEmail)
      .typePhone(randomPhoneNumber)
      .typePassword(randomPassword)
      .typePasswordConfirm(randomPassword)
      .clickPrivacyPolicy()
      .clickContinueButton();
  });
});

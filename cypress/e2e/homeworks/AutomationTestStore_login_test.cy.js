import { faker } from "@faker-js/faker";
import { HomePageAutomationStore } from "../../page-objects/homeworks/AutomationTestStore-home_page";
describe("Automation Test Store", () => {
  it("Fill in form", () => {
    const fakeFirstName = faker.person.firstName();
    const fakeLastName = faker.person.lastName();
    const fakeEmail = faker.internet.exampleEmail({
      firstName: fakeFirstName,
      lastName: fakeLastName,
    });
    const fakePhone = faker.phone.number();
    const fakeFax = faker.phone.number();
    const fakeCompany = faker.company.name();
    const fakeAddress1 = faker.location.streetAddress();
    const fakeAddress2 = faker.location.streetAddress();
    const fakeCity = faker.location.city();
    const fakeZipCode = faker.location.zipCode();
    const fakeLoginName = faker.internet.userName({
      firstName: fakeFirstName,
      lastName: fakeLastName,
    });
    const fakePassword = faker.internet.password();
    const state = "Czech Republic";
    const region = "Vysocina";
    new HomePageAutomationStore()
      .openStorePage()
      .openLoginPage()
      .openNewCustomerPage()
      .typeFirstName(fakeFirstName)
      .typeLastName(fakeLastName)
      .typeEmail(fakeEmail)
      .typePhone(fakePhone)
      .typeFax(fakeFax)
      .typeCompany(fakeCompany)
      .typeAddress1(fakeAddress1)
      .typeAddress2(fakeAddress2)
      .typeCity(fakeCity)
      .typeZipCode(fakeZipCode)
      .selectCountry(state)
      .countryHaveValue(state)
      .selectRegion(region)
      .regionHaveValue(region)
      .typeLoginName(fakeLoginName)
      .typePassword(fakePassword)
      .typePasswordConfirm(fakePassword)
      .clickSubscribe()
      .clickPrivacyPolicy()
      .submitForm();
  });
});

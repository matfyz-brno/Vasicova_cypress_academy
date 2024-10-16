import { faker } from "@faker-js/faker";
describe('"Using faker', () => {
  it("Generate unique test data generation", () => {
    const generatedFirstName = faker.person.firstName("female");
    const generatedLastName = faker.person.lastName("female");
    const generatedEmail = faker.internet.exampleEmail({
      firstName: generatedFirstName,
      lastName: generatedLastName,
    });
    cy.log(
      `Generted test data: ${generatedFirstName} ${generatedLastName} and ${generatedEmail}`
    );
  });
});

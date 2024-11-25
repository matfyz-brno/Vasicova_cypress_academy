import { faker } from "@faker-js/faker";

describe("Registration adn login via API", () => {
  let randomUsername;
  let randomEmail;
  let randomPassword;
  //? lze vložit do beforeach a tim jsou data prepouzitelna

  beforeEach(() => {
    randomUsername = faker.internet.userName();
    randomEmail = faker.internet.exampleEmail();
    randomPassword = "Tredgate2024#";
    cy.log(`Username generated: ${randomUsername}`);
    cy.log(`Email generated: ${randomEmail}`);
  });
  it("POST registration TEG#B", () => {
    //? První část je pro vytvoření registrace
    cy.request({
      url: "http://localhost:3000/user/register",
      method: "POST",
      body: {
        username: randomUsername,
        email: randomEmail,
        password: randomPassword,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });

    //? Další část pro přihlášení
    cy.request({
      url: "http://localhost:3000/auth/login",
      method: "POST",
      body: {
        username: randomUsername,
        password: randomPassword,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});

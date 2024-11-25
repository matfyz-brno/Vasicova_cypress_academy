import { faker } from "@faker-js/faker";
import { UserApi } from "../../../../api-objects/tegb/user_api";

describe("Send HTTP Requests Tests", () => {
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
    cy.request({
      url: "http://localhost:3000/user/register",
      method: "POST",
      body: {
        username: randomUsername,
        email: randomEmail,
        password: randomPassword,
      },
    }).then((response) => {
      expect(response.status).to.eq(201); //kontroluje že se něco rovná něčemu z response
      expect(response.body.userId).to.be.ok; // kontrola že něco se načetlo a je viditelné, existuje a je ok
      expect(response.body).to.have.property("userId"); // zkontroluje že existuje v body
      expect(response.body.username).to.eq(randomUsername); //zkontroluje že se to co je v body rovná tomu co jsme tam poslali, tj randomUsername.
      expect(response.body.email).to.be.a("string"); //kontrola datoveho typu
    });
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(randomPassword);
    cy.get('[data-testid="password"]').type(randomPassword);
    cy.get('[data-testid="log_in"]').click();
    cy.wait("@login_api").its("request.method").should("equal", "POST");
  });

  it("Registr with API object", () => {
    //? nepůjde fluent interface

    new UserApi()
      .register(randomUsername, randomPassword, randomEmail)
      .then((response) => {
        expect(response.status).to.eq(201); //< celé registrační cy.request je schované ve funkci "Register"
      });
  });

  it.only("Register and login via API object", () => {
    new UserApi()
      .register(randomUsername, randomPassword, randomEmail)
      .then((response) => {
        expect(response.status).to.eq(201);
        new UserApi().login(randomUsername, randomPassword).then((response) => {
          expect(response.status).to.eq(201);
        });
      });
  });
});

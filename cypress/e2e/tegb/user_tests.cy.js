import { UserApi } from "../../../api-objects/tegb/user_api";
import { faker } from "@faker-js/faker";

describe("TEG#B user tests", () => {
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

  //? timto zpusebem muzeme obejit FE a přihásit se:)
  it("Register and login via API", () => {
    cy.visit(Cypress.env("tegb_url"));
    new UserApi()
      .register(randomUsername, randomPassword, randomEmail)
      .then((response) => {
        expect(response.status).to.eq(201);
        new UserApi().login(randomUsername, randomPassword).then((response) => {
          expect(response.status).to.eq(201);
          const accessToken = response.body.access_token;
          cy.setCookie("access_token", accessToken); // bez nastaveni cookie se dovnitr nedostanu
        });
        cy.visit(Cypress.env("tegb_url") + "app");
      });
  });
});

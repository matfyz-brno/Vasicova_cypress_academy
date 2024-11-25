export class UserApi {
  register(username, password, email) {
    return cy.request({
      url: Cypress.env("tegb_api_url") + "user/register",
      method: "POST",
      body: {
        username: username,
        email: email,
        password: password, //? je jedno jaké je pořadí v Json
      },
    });
  }

  login(username, password) {
    return cy.request({
      url: Cypress.env("tegb_api_url") + "auth/login",
      method: "POST",
      body: {
        username: username,
        password: password,
      },
    });
  }
}

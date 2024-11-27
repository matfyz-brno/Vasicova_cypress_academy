import { customElement } from "../../../helpers/custom_element";
import { UsersPage } from "../users_page";

export class CreateNewUserModal {
  constructor() {
    this.userStatus = customElement('[data-testid="User Status"]');
    this.roleSelect = customElement('[data-testid="Access Group"] select');
    this.userName = customElement('[data-testid="Username"]');
    this.password = customElement("#password");
    this.firstName = customElement('[data-testid="First Name"]');
    this.lastName = customElement('[data-testid="Last Name"]');
    this.userEmail = customElement('[data-testid="User Email"]');
    this.saveBtn = customElement('button[type="submit"]');
  }

  typeUsername(username) {
    this.userName.type(username);
    return this;
  }

  typePassword(password) {
    this.password.type(password);
    return this;
  }

  typeFirstName(firstname) {
    this.firstName.type(firstname);
    return this;
  }

  typeLastName(lastname) {
    this.lastName.type(lastname);
    return this;
  }

  typeEmail(email) {
    this.userEmail.type(email);
    return this;
  }

  selectRole(role) {
    this.roleSelect.get().select(role);
    return this;
  }

  clickSave() {
    this.saveBtn.click();
    return new UsersPage();
  }
}

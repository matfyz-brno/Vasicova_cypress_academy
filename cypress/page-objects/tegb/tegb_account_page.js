import { customElement } from "../../helpers/custom_element";

export class TegBAccountPage {
  constructor() {
    this.titleHeader = customElement('[data-testid="title"]');
  }

  headerHaveText(headerText) {
    this.titleHeader.haveText(headerText);
    return this;
  }
}

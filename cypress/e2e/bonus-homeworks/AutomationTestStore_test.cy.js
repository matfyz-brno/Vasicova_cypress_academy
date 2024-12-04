import { AutomationStoreHomePage } from "../../page-objects/bonus-homeworks/AutomationTestStore-home_page";

describe("Test fot AutomationTestStore - put item to backet", () => {
  it("Open Store page and put item to basket", () => {
    new AutomationStoreHomePage().openStorePage().clickItem().clickBtnBasket();
  });
});

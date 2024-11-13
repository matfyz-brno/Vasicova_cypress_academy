import { EshopHomePage } from "../../page-objects/eshop/home_page";

describe("Eshop tests", () => {
  it("Check text in product", () => {
    new EshopHomePage()
      .openEshopHomePage()
      .openProduct1Page()
      .checkProduct1Text()
      .clickLogoTredgate();
  });
});

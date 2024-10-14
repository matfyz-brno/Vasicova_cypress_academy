import { GeneralPoPage } from "../../../page-objects/learning/general_po_page";

describe("First PO test", () => {
  it("General PO init", () => {
    const firtPageObject = new GeneralPoPage();
    firtPageObject.actionWithElement();
  });
});

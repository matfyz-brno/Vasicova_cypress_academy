describe("Mouse Actions Tests", { tags: "@smoke" }, () => {
  it("Scroll Into View", () => {
    cy.visit("https://tredgate.com/webtrain");
    cy.get("h1").scrollIntoView().should("be.visible"); //kdyz je nutne nekde zascrollovat, kdyz to neni viditelne v nejakem boxu, ktery je potreba posuvnikem posunout aby text byl citelny
  });

  it("Double Click", () => {
    cy.visit("https://www.webdriveruniversity.com/Actions/index.html");
    cy.get("div#double-click").dblclick();
  });

  it("Click and Hold", () => {
    cy.visit("https://www.webdriveruniversity.com/Actions/index.html");
    cy.get("#click-box").trigger("mousedown"); //zakliknuti
    cy.wait(1000); //doba drzeni mysi, tady o bylo 1 vterina
    cy.get("#click-box").trigger("mouseup"); //odkliknuti
  });

  it("Drag and drop tests", () => {
    cy.visit("https://www.webdriveruniversity.com/Actions/index.html");
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    // which je dany paramentr. Draggable rika, abychom si mysi zaklikli a zacli presouvat. Da se rict i kam na plose
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
    //ukonceni drzeni mysi, musim pouzit force,nebot puvodni drzeni mysi bylo na jinem elementu
  });

  it("Real hoover", () => {
    cy.visit("https://www.webdriveruniversity.com/Actions/index.html");
    cy.get("#div-hover > .dropdown.hover")
      .realHover()
      .then((hoveredElement) => {
        cy.wait(4000); // ? čekání 4 sekundy, abychom v Cypress viděli, že je prvek otevřený. V reálném životě nebudete dávat.
        cy.get(".dropdown.hover .dropdown-content a").click();
      });
  });
});

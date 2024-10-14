//describe je takova jakoby složka pro testy a kazdy test zacina pomoci it

describe("First test", () => {
  it("Open homepage", () => {
    cy.visit("https://tredgate.cz/");
  });
  //dsb zkratka pro describe
  // it zkratka pro it, onoje prazdny čtverec
});

describe("Buy a new robot", () => {
  it("The page and the title are visible", () => {
    cy.visit("https://curious-parfait-14a35b.netlify.app/");
    cy.contains("RoboZon.com").should("be.visible");
  });
  it("We click ten products and the cart updates", () => {
    cy.visit("https://curious-parfait-14a35b.netlify.app/");
    for (let i = 0; i < 10; i++) {
      cy.get("button").first().click();
    }
    cy.get("#product-number").contains("10");
  });
  it("Search for a robot", () => {
    cy.visit("https://curious-parfait-14a35b.netlify.app/");
    cy.get("#search-input").type("garden");
    cy.get(".card").its("length").should("eq", 1);
  });
});

describe("App tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the welcome message", () => {
    cy.contains("Hello React!").should("be.visible");
  });
});

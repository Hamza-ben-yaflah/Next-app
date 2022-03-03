describe("buy process", () => {
  it("user can choose a car to buy", () => {
    //visit the site
    cy.visit("http://localhost:3000/");
    cy.findByRole("link", {
      name: /log in/i,
    }).click();
    cy.url().should("include", "LoginRegister");
    cy.findByRole("textbox").type("hamza");
    cy.findByPlaceholderText(/password/i).type("hamza");
    cy.findByRole("link", {
      name: /log in/i,
    }).click();
    cy.url().should("eq", "http://localhost:3000/ChoicePage");
    cy.get(":nth-child(3) > .card_card__xkQ7q > .ant-btn > a").click();
    cy.url().should("include", "/buy");
    cy.get(":nth-child(3) > .ant-btn").click();
    cy.findByText(/ok/i).click();
  });
});

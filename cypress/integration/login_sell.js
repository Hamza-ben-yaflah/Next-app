describe("sell process", () => {
  it("user can put a car to sell", () => {
    cy.visit("http://localhost:3000/");
    cy.findByRole("link", {
      name: /log in/i,
    }).click();
    cy.url().should("eq", "http://localhost:3000/LoginRegister");
    cy.findByRole("textbox").type("hamza");
    cy.findByPlaceholderText(/password/i).type("hamza");
    cy.findByRole("link", {
      name: /log in/i,
    }).click();
    cy.url().should("eq", "http://localhost:3000/ChoicePage");
    cy.get(":nth-child(2) > .card_card__xkQ7q > .ant-btn > a").click();
    cy.url().should("eq", "http://localhost:3000/sell");
    cy.findByText(/\+ add car to sell/i).click();
    cy.findByRole("spinbutton", {
      name: /id/i,
    }).type(1);
    cy.findByRole("textbox", {
      name: /owner name/i,
    }).type("hamza");
    cy.findByRole("textbox", {
      name: /car name/i,
    }).type("bmw");
    cy.findByRole("textbox", {
      name: /owner phone number/i,
    }).type(55460006);
    cy.findByRole("spinbutton", {
      name: /price/i,
    }).type(55.0);
    cy.findByText(/submit/i).click();
    cy.findByRole("button", {
      name: /delete/i,
    }).click();
  });
});

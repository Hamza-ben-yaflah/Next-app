describe("sell process", () => {
  it("user can put a car to sell", () => {
    cy.visit("http://localhost:3000/");
    cy.findByRole("link", {
      name: /sign up/i,
    }).click();
    cy.url().should("eq", "http://localhost:3000/RegisterPage");
    cy.findByRole("textbox", {
      name: /e\-mail/i,
    }).type("benyaflah0hamza@gmail.com");
    cy.get("#register_password").type("hi");
    cy.findByLabelText(/confirm password/i).type("hid");
    cy.findByRole("textbox", {
      name: /username/i,
    }).type("hamza");
    cy.findByRole("textbox", {
      name: /phone number/i,
    }).type("55460006");

    cy.findByRole("combobox", {
      name: /gender/i,
    }).click;

    cy.findByRole("link", {
      name: /register/i,
    }).click();
    cy.url().should("eq", "http://localhost:3000/ChoicePage");
    cy.get(":nth-child(3) > .card_card__xkQ7q > .ant-btn > a").click();
    cy.url().should("eq", "http://localhost:3000/buy");
  });
});

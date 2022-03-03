describe("sell process", () => {
  it("user can put a car to sell", () => {
    cy.visit("http://localhost:3000/");
    cy.findByRole("link", {
      name: /blog/i,
    }).click();
    cy.url().should("eq", "http://localhost:3000/Blog");
    cy.get(
      ":nth-child(1) > .ant-space-item > .ant-row > .Blog_colTwoBlog__FC3OT > div.ant-typography > a > .ant-typography"
    ).click();
    cy.url().should("include", "articles");
  });
});

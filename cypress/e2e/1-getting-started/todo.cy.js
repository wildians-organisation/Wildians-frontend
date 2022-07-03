beforeEach(() => {
  cy.visit('http://localhost:3000');
})


describe('Test if buttons works', function () {
  it('Button concept on localhost', function () {

    cy.get('[id^=buttonConnectWallet]').click();

    cy.get('[id^=wallet_bihpkfomicliddcpppgijjgpigogfcdp]').click();

  })



})

beforeEach(() => {
  cy.visit('http://localhost:3000');
})

describe('check different component', () => {
  it('Check if text coming soon is present', () => {
    cy.contains('COMING SOON').should('exist');
  })

  it('Check if text join us is present', () => {
    cy.contains('JOIN US').should('exist');
  })

  it('Scroll a bit to next section', () => {
    cy.scrollTo(0, 700);
    cy.contains('TEZOS BLOCKCHAIN').should('exist');
  })

  it('Scroll to footer and check differents elements', () => {
    cy.scrollTo('bottom');
    cy.contains('WILDIANS COMMUNITY').should('exist');
    cy.contains('White-Paper').should('exist');
  })
})
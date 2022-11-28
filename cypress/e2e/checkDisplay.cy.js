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

  it('Check if text join us is present in bottom page', () => {
    cy.scrollTo('bottom');
    cy.contains('JOIN US').should('exist');
  })

  it('Scroll a bit to next section', () => {
    cy.scrollTo(0, 700);
    cy.contains('TEZOS BLOCKCHAIN').should('exist');
  })

  it('Scroll to footer and check differents elements', () => {
    cy.scrollTo('bottom');
    cy.contains('WILDIANS COMMUNITY').should('exist');
    cy.contains('About us').should('exist');
    cy.contains('White-Paper').should('exist');
    cy.contains('F.A.Q').should('exist');
    cy.contains('Terms of use').should('exist');
    cy.contains('Privacy policy').should('exist');
  })

  it('Scroll to footer and click on About us', () => {
    cy.scrollTo('bottom');
    cy.contains('About us').click();
  })

  it('Scroll to footer and click on White-Paper', () => {
    cy.scrollTo('bottom');
    cy.contains('White-Paper').click();
  })

  it('Scroll to footer and click on F.A.Q', () => {
    cy.scrollTo('bottom');
    cy.contains('F.A.Q').click();
  })

  it('Scroll to footer and click on Terms of use', () => {
    cy.scrollTo('bottom');
    cy.contains('Terms of use').click();
  })

  it('Scroll to footer and click on Privacy policy', () => {
    cy.scrollTo('bottom');
    cy.contains('Privacy policy').click();
  })
})

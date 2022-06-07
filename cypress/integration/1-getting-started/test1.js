beforeEach(() => {
    cy.visit('http://localhost:3000');
})


describe('Test if buttons works', function () {
    it('Button concept on localhost', function () {

        cy.get('[id^=buttonConcept]').click();

        cy.contains('Some things about us . . .').should('exist');
    })


    it('Button adopt on localhost', function () {

        cy.get('[id^=buttonAdopt]').click();

        cy.contains('Wolf Pilar').should('exist');
    })


    it('Button Roadmap on localhost', function () {

        cy.get('[id^=buttonRoadmap]').click();

        cy.contains('Application').should('exist');
    })


    it('Button Marketplace on localhost', function () {

        cy.get('[id^=buttonMarketplace]').click();

        cy.contains('Marketplace 1').should('exist');
    })


    it('Button MyPets on localhost', function () {

        cy.get('[id^=buttonMyPets]').click();

        cy.contains('You need to connect in order to see your pets').should('exist');
    })

    it('Check click logo on localhost', function () {

        cy.get('[id^=buttonLogo]').click();

        cy.contains('Welcome to NFPets !!!').should('exist');
    })

    it('Check', function () {


        cy.get('[id^=buttonLogo]').click();

        cy.contains('Welcome to NFPets !!!').should('exist');
    })
})

beforeEach(() => {
    cy.visit('http://localhost:3000');
})


describe('Test if buttons works', function () {
    it('Button concept on localhost', function () {

        cy.get('[id^=idconcept]').click();

        cy.get('[id^=ContextText]').then(($el) => {
            if ($el.is(':visible'))
            {
                
            }
        })
    })

})
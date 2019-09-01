describe('Portfolio cypress test on the home page', () => {
    beforeEach(function() {
        cy.visit('/')
        cy.url().should('include', 'http://localhost:8080')
        cy.title().should('eq', "David's Portfolio")
    })

    it('Check that the title on the home page says About Me', function() {
        cy.get('h1').as('title')
        cy.get('@title').contains('About Me')
        cy.get('@title').should('be.visible')
    })
})
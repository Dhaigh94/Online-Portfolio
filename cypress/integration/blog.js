describe('Portfolio Blog tests', () => {
    beforeEach(function() {
        cy.visit('/')
        cy.url().should('include', 'http://localhost:8080')
        cy.title().should('eq', "David's Portfolio")
        cy.get('[data-cy=Blog]').click()
        cy.url().should('include', '/blog')
    })

    it('Check that the user can go to the What a Product Owner Wants from a Junior Tester blog page', function() {
        cy.get('[data-cy=Product]').click()
        cy.url().should('include', '/junior-tester')
        cy.get('h1').as('title')
        cy.get('@title').contains('What a Product Owner Wants from a Junior Tester')
        cy.get('@title').should('be.visible')
        cy.percySnapshot('What a Product Owner Wants from a Junior Tester')
    })

    it('Check that the user can go to the My Testing Story blog page', function() {
        cy.get('[data-cy=Story]').click({ force: true })
        cy.url().should('include', '/my-testing-story')
        cy.get('h1').as('title')
        cy.get('@title').contains('My Testing Story')
        cy.get('@title').should('be.visible')
        cy.percySnapshot('My Testing Story')
    })
})
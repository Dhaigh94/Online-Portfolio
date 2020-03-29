describe('Error Page Tests', () => {
    beforeEach(function() {
        cy.visit('/')
        cy.url().should('include', 'https://davidhaighportfoliodev.herokuapp.com')
        cy.title().should('eq', "David's Portfolio")
    })

    it('User goes to a 404 page when the user enters the wrong URL', function() {
        cy.visit('https://davidhaighportfoliodev.herokuapp.com/wrongurl', {failOnStatusCode: false})
        cy.get('[data-cy="404"]').should('be.visible')
        cy.get('[data-cy="cannotfind"]').should('be.visible')
        cy.get('[data-cy="backhome"]').should('be.visible')
        cy.percySnapshot('404')
    })

    it('User goes to a 404 page then clicks on the Back Home button', function() {
        cy.visit('https://davidhaighportfoliodev.herokuapp.com/wrongurl', {failOnStatusCode: false})
        cy.get('[data-cy="404"]').should('be.visible')
        cy.get('[data-cy="cannotfind"]').should('be.visible')
        cy.get('[data-cy="backhome"]').should('be.visible')
        cy.get('[data-cy="backhome"]').click()
        cy.get('h1').as('title')
        cy.get('@title').contains('About Me')
        cy.get('@title').should('be.visible')
    })

    it('User goes to a 500 page and takes a screenshot', function() {
        cy.visit('https://davidhaighportfoliodev.herokuapp.com/500')
        cy.get('[data-cy="500"]').should('be.visible')
        cy.get('[data-cy="servererror"]').should('be.visible')
        cy.percySnapshot('500')
    })
})
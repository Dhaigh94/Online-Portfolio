describe('Portfolio Home Page Tests', () => {
    beforeEach(function() {
        cy.visit('/')
        cy.url().should('include', 'http://localhost:8080')
        cy.title().should('eq', "David's Portfolio")
    })

    it('Check that the title on the home page says About Me', function() {
        cy.get('h1').as('title')
        cy.get('@title').contains('Profile Overview')
        cy.get('@title').should('be.visible')
    })

    it('Check that the Resume link is correct', function() {
        cy.get('[data-cy=Resume]').should('be.visible')
        cy.get('[data-cy=Resume]').should('have.attr', 'href').and('include', '/docs/David-Haigh-Resume-Sep-2020.pdf')
    })

    it('Check that the Work link is going to the Work webpage', function() {
        cy.get('[data-cy=Worklink]').should('be.visible')
        cy.get('[data-cy=Worklink]').click({ force: true })
        cy.url().should('include', '/work')
    })

    it('Check that the link to the Github repo is correct', function() {
        cy.get('[data-cy=Portfolio]').should('be.visible')
        cy.get('[data-cy=Portfolio]').should('have.attr', 'href').and('include', 'https://github.com/Dhaigh94/Online-Portfolio')
    })

    it('Take a snapshot of the Home Page', function() {
        cy.percySnapshot('Home')
    })
})
describe('Portfolio Cypress tests on the Home Page', () => {
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

    it('Check that the Resume link is correct', () => {
        cy.get('#Resume').should('be.visible')
        cy.get('#Resume').should('have.attr', 'href').and('include', 'https://drive.google.com')
    })

    it('Check that the Work link is going to the Work webpage', () => {
        cy.get('#Worklink').should('be.visible')
        cy.get('#Worklink').click()
        cy.url().should('include', '/work')
    })

    it('Check that the link to the Github repo is correct', () => {
        cy.get('#Portfolio').should('be.visible')
        cy.get('#Portfolio').should('have.attr', 'href').and('include', 'https://github.com/Dhaigh94/Online-Portfolio')
    })

    it('Home', () => {
        cy.percySnapshot();
    })
})
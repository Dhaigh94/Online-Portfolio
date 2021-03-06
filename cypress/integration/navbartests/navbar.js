describe('Portfolio Navbar Tests', () => {
    beforeEach(function() {
        cy.visit('/')
        cy.url().should('include', 'http://localhost:8080')
        cy.title().should('eq', "David's Portfolio")
    })

    it('Check that the Work link on the Navbar goes to the Work page', function() {
        cy.get('[data-cy=Work]').click()
        cy.url().should('include', '/work')
        cy.percySnapshot('Work')
    })

    it('Check that the Home link on the Navbar goes to the Home page by clicking it from a another page', function() {
        cy.get('[data-cy=Work]').click()
        cy.url().should('include', '/work')
        cy.get('[data-cy=Home]').click()
        cy.url().should('include', '/home')
    })

    it('Check that the Projects link on the Navbar goes to the Projects page', function() {
        cy.get('[data-cy=Projects]').click()
        cy.url().should('include', '/projects')
        cy.percySnapshot('Projects')
    })

    it('Check that the Blog link on the Navbar goes to the Blog page', function() {
        cy.get('[data-cy=Blog]').click()
        cy.url().should('include', '/blog')
        cy.percySnapshot('Blog')
    })

    it('Check that the Resources link on the Navbar goes to the Resources page', function() {
        cy.get('[data-cy=Resources]').click()
        cy.url().should('include', '/resources')
        cy.get('[data-cy=resourcesgallery]').should('be.visible')
        cy.percySnapshot('Resources')
    })

    it('Check that the Contact link on the Navbar goes to the Contact page', function() {
        cy.get('[data-cy=Contact]').click()
        cy.url().should('include', '/contact')
        cy.percySnapshot('Contact')
    })
})
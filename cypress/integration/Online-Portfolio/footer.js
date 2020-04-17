describe('Portfolio Footer tests', () => {
    beforeEach(function() {
        cy.visit('/')
        cy.url().should('include', 'http://localhost:8080')
        cy.title().should('eq', "David's Portfolio")
    })

    it('Check when the user clicks on the About Me link from the Work Page they go to the Home Page', function() {
        cy.get('[data-cy=Work]').click()
        cy.url().should('include', '/work')
        cy.get('[data-cy=homeFooter]').click()
        cy.url().should('include', '/home')
        cy.get('h1').as('title')
        cy.get('@title').contains('About Me')
        cy.get('@title').should('be.visible')
    })

    it('Check when the user clicks on the Work link they go to the Work Page', function() {
        cy.get('[data-cy=workFooter]').click()
        cy.url().should('include', '/work')
        cy.get('h1').as('title')
        cy.get('@title').contains('Work')
        cy.get('@title').should('be.visible')
    })

    it('Check when the user clicks on the Qantas Airline link they go to the Qantas Airline Page', function() {
        cy.get('[data-cy=qantasairlineFooter]').click()
        cy.url().should('include', '/qantasairline')
        cy.get('h1').as('title')
        cy.get('@title').contains('Qantas Airline')
        cy.get('@title').should('be.visible')
    })

    it('Check when the user clicks on the Qantas Loyalty link they go to the Qantas Loyalty Page', function() {
        cy.get('[data-cy=qantasloyaltyFooter]').click()
        cy.url().should('include', '/qantasloyalty')
        cy.get('h1').as('title')
        cy.get('@title').contains('Qantas Loyalty')
        cy.get('@title').should('be.visible')
    })

    it('Check when the user clicks on the Lorica Health link they go to the Lorica Health Page', function() {
        cy.get('[data-cy=loricaFooter]').click()
        cy.url().should('include', '/lorica-health')
        cy.get('h1').as('title')
        cy.get('@title').contains('Lorica Health')
        cy.get('@title').should('be.visible')
    })
})
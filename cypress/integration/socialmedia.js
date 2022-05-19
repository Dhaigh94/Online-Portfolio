describe('Portfolio Social Media tests', () => {
    beforeEach(function() {
        cy.visit('/')
        cy.url().should('include', 'http://localhost:8080')
        cy.title().should('eq', "David's Portfolio")
    })

    it('Check that the Facebook Button link is correct', function() {
        cy.get('[data-cy=Facebook]').should('be.visible')
        cy.get('[data-cy=Facebook]').should('have.attr', 'href').and('include', 'https://www.facebook.com/david.haigh.104')
    })

    it('Check that the Linkedin Button link is correct', function() {
        cy.get('[data-cy=Linkedin]').should('be.visible')
        cy.get('[data-cy=Linkedin]').should('have.attr', 'href').and('include', 'https://www.linkedin.com/in/davidhaigh94/')
    })

    it('Check that the Twitter Button link is correct', function() {
        cy.get('[data-cy=Twitter]').should('be.visible')
        cy.get('[data-cy=Twitter]').should('have.attr', 'href').and('include', 'https://twitter.com/BugDevilDavid')
    })

    it('Check that the Instagram Button link is correct', function() {
        cy.get('[data-cy=Instagram]').should('be.visible')
        cy.get('[data-cy=Instagram]').should('have.attr', 'href').and('include', 'https://www.instagram.com/daveangel1694/')
    })

    it('Check that the Github Button link is correct', function() {
        cy.get('[data-cy=Github]').should('be.visible')
        cy.get('[data-cy=Github]').should('have.attr', 'href').and('include', 'https://github.com/Dhaigh94')
    })

    it('Check that the Youtube Button link is correct', function() {
        cy.get('[data-cy=Youtube]').should('be.visible')
        cy.get('[data-cy=Youtube]').should('have.attr', 'href').and('include', 'https://www.youtube.com/channel/UCkJ0xOTmM3rXfSGj2xcsnLg')
    })
})
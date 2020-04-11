describe('Portfolio Project tests', () => {
    beforeEach(function() {
        cy.visit('/')
        cy.url().should('include', 'http://localhost:8080')
        cy.title().should('eq', "David's Portfolio")
        cy.get('[data-cy=Projects]').click()
        cy.url().should('include', '/projects')
    })

    it('Check that the user can go to the RGB Colour Game page', function() {
        cy.get('[data-cy=RGB]').click()
        cy.url().should('include', '/rgb-colour-guessing-game')
        cy.get('h1').as('title')
        cy.get('@title').contains('RGB Colour Guessing Game')
        cy.get('@title').should('be.visible')
        cy.percySnapshot('RGB Colour Game')
    })

    it('Check that the user can go to the Patatap Clone page', function() {
        cy.get('[data-cy=Patatap]').click()
        cy.url().should('include', '/patatap-clone')
        cy.get('h1').as('title')
        cy.get('@title').contains('Patatap Clone')
        cy.get('@title').should('be.visible')
        cy.percySnapshot('Patatap Clone')
    })

    it('Check that the user can go to the Photo Board page', function() {
        cy.get('[data-cy=Photo]').click()
        cy.url().should('include', '/photo-board')
        cy.get('h1').as('title')
        cy.get('@title').contains('Photo Board')
        cy.get('@title').should('be.visible')
        cy.percySnapshot('Photo Board')
    })

    it('Check that the user can go to the Image Gallery page', function() {
        cy.get('[data-cy=Image]').click()
        cy.url().should('include', '/image-gallery')
        cy.get('h1').as('title')
        cy.get('@title').contains('Image Gallery')
        cy.get('@title').should('be.visible')
        cy.percySnapshot('Image Gallery')
    })

    it('Check that the user can go to the RAW APP page', function() {
        cy.get('[data-cy=RAW]').click()
        cy.url().should('include', '/raw-app')
        cy.get('h1').as('title')
        cy.get('@title').contains('RAW APP')
        cy.get('@title').should('be.visible')
        cy.percySnapshot('RAW APP')
    })

    it('Check that the user can go to the Glass Cup page', function() {
        cy.get('[data-cy=Glass]').click()
        cy.url().should('include', '/glass-cup')
        cy.get('h1').as('title')
        cy.get('@title').contains('Test Case Glass Cup')
        cy.get('@title').should('be.visible')
        cy.percySnapshot('Test Case Glass Cup')
    })
})
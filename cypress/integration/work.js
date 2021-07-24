describe('Portfolio Work tests', () => {
    beforeEach(function() {
        cy.visit('/')
        cy.url().should('include', 'http://localhost:8080')
        cy.title().should('eq', "David's Portfolio")
        cy.get('[data-cy=Work]').click()
        cy.url().should('include', '/work')
    })

    it('Check that the user can go to the Qantas Insurance page', function() {
        cy.get('[data-cy=Qinsurance]').click({ force: true })
        cy.url().should('include', '/qantasinsurance')
        cy.get('h1').as('title')
        cy.get('@title').contains('Qantas Insurance')
        cy.get('@title').should('be.visible')
        cy.percySnapshot('QInsurance')
    })

    it('Check that the user can go to the Qantas Airline page', function() {
        cy.get('[data-cy=Qairline]').click({ force: true })
        cy.url().should('include', '/qantasairline')
        cy.get('h1').as('title')
        cy.get('@title').contains('Qantas Airline')
        cy.get('@title').should('be.visible')
        cy.percySnapshot('QAirline')
    })

    it('Check that the user can go to the Qantas Loyalty page', function() {
        cy.get('[data-cy=Qloyalty]').click({ force: true })
        cy.url().should('include', '/qantasloyalty')
        cy.get('h1').as('title')
        cy.get('@title').contains('Qantas Loyalty')
        cy.get('@title').should('be.visible')
        cy.percySnapshot('QLoyalty')
    })

    it('Check that the user can go to the Lorica Health page', function() {
        cy.get('[data-cy=Lorica]').click({ force: true })
        cy.url().should('include', '/lorica-health')
        cy.get('h1').as('title')
        cy.get('@title').contains('Lorica Health')
        cy.get('@title').should('be.visible')
        cy.percySnapshot('Lorica Health')
    })

    it('Check that the user can go to the Suncorp page', function() {
        cy.get('[data-cy=Suncorp]').click({ force: true })
        cy.url().should('include', '/suncorp')
        cy.get('h1').as('title')
        cy.get('@title').contains('Suncorp')
        cy.get('@title').should('be.visible')
        cy.percySnapshot('Suncorp')
    })

    it('Check that the user can go to the Wired2Cloud page', function() {
        cy.get('[data-cy=Wired2Cloud]').click({ force: true })
        cy.url().should('include', '/wired2cloud')
        cy.get('h1').as('title')
        cy.get('@title').contains('Wired2Cloud')
        cy.get('@title').should('be.visible')
        cy.percySnapshot('Wired2Cloud')
    })

    it('Check that the user can go to the SIRC page', function() {
        cy.get('[data-cy=SIRC]').click({ force: true })
        cy.url().should('include', '/sirc')
        cy.get('h1').as('title')
        cy.get('@title').contains('SIRC')
        cy.get('@title').should('be.visible')
        cy.percySnapshot('SIRC')
    })

    it('Check that the user can go to the Covata page', function() {
        cy.get('[data-cy=Covata]').click({ force: true })
        cy.url().should('include', '/covata')
        cy.get('h1').as('title')
        cy.get('@title').contains('Covata')
        cy.get('@title').should('be.visible')
        cy.percySnapshot('Covata')
    })

    it('Check that the user can go to the CareerVentures page', function() {
        cy.get('[data-cy=CareerVentures]').click({ force: true })
        cy.url().should('include', '/careerventures')
        cy.get('h1').as('title')
        cy.get('@title').contains('CareerVentures')
        cy.get('@title').should('be.visible')
        cy.percySnapshot('CareerVentures')
    })

    it('Check that the user can go to the AIE Rumble Academy page', function() {
        cy.get('[data-cy=AIE]').click()
        cy.url().should('include', '/aie-rumble-academy')
        cy.get('h1').as('title')
        cy.get('@title').contains('AIE Rumble Academy')
        cy.get('@title').should('be.visible')
        cy.percySnapshot('AIE')
    })

    it('Check that the user can go to the Kartel Digital page', function() {
        cy.get('[data-cy=Kartel]').click()
        cy.url().should('include', '/kartel-digital')
        cy.get('h1').as('title')
        cy.get('@title').contains('Kartel Digital')
        cy.get('@title').should('be.visible')
        cy.percySnapshot('Kartel Digital')
    })

    it('Check that the user can go to the Play2Lead page', function() {
        cy.get('[data-cy=Play2Lead]').click()
        cy.url().should('include', '/play2lead')
        cy.get('h1').as('title')
        cy.get('@title').contains('Play2Lead')
        cy.get('@title').should('be.visible')
        cy.percySnapshot('Play2Lead')
    })
})
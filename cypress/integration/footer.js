describe('Portfolio Footer tests', () => {
    beforeEach(function() {
        cy.visit('/')
        cy.url().should('include', 'http://localhost:8080')
        cy.title().should('eq', "David's Portfolio")
    })

    // Home Footer Test
    it('Check when the user clicks on the About Me link from the Work Page they go to the Home Page', function() {
        cy.get('[data-cy=Work]').click()
        cy.url().should('include', '/work')
        cy.get('[data-cy=homeFooter]').click()
        cy.url().should('include', '/home')
        cy.get('h1').as('title')
        cy.get('@title').contains('About Me')
        cy.get('@title').should('be.visible')
    })

    // Work Footer Tests
    it('Check when the user clicks on the Work link they go to the Work Page', function() {
        cy.get('[data-cy=workFooter]').click()
        cy.url().should('include', '/work')
        cy.get('h1').as('title')
        cy.get('@title').contains('Work')
        cy.get('@title').should('be.visible')
    })

    it('Check when the user clicks on the Qantas Insurance link they go to the Qantas Insurance Page', function() {
        cy.get('[data-cy=qantasinsuranceFooter]').click()
        cy.url().should('include', '/qantasinsurance')
        cy.get('h1').as('title')
        cy.get('@title').contains('Qantas Insurance')
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

    it('Check when the user clicks on the Suncorp link they go to the Suncorp Page', function() {
        cy.get('[data-cy=suncorpFooter]').click()
        cy.url().should('include', '/suncorp')
        cy.get('h1').as('title')
        cy.get('@title').contains('Suncorp')
        cy.get('@title').should('be.visible')
    })

    it('Check when the user clicks on the Wired2Cloud link they go to the Wired2Cloud Page', function() {
        cy.get('[data-cy=wired2cloudFooter]').click()
        cy.url().should('include', '/wired2cloud')
        cy.get('h1').as('title')
        cy.get('@title').contains('Wired2Cloud')
        cy.get('@title').should('be.visible')
    })

    it('Check when the user clicks on the SIRC link they go to the SIRC Page', function() {
        cy.get('[data-cy=sircFooter]').click()
        cy.url().should('include', '/sirc')
        cy.get('h1').as('title')
        cy.get('@title').contains('SIRC')
        cy.get('@title').should('be.visible')
    })

    it('Check when the user clicks on the Covata link they go to the Covata Page', function() {
        cy.get('[data-cy=covataFooter]').click()
        cy.url().should('include', '/covata')
        cy.get('h1').as('title')
        cy.get('@title').contains('Covata')
        cy.get('@title').should('be.visible')
    })

    it('Check when the user clicks on the CareerVentures link they go to the CareerVentures Page', function() {
        cy.get('[data-cy=careerventuresFooter]').click()
        cy.url().should('include', '/careerventures')
        cy.get('h1').as('title')
        cy.get('@title').contains('CareerVentures')
        cy.get('@title').should('be.visible')
    })

    it('Check when the user clicks on the AIE Rumble Academy link they go to the AIE Rumble Academy Page', function() {
        cy.get('[data-cy=aieFooter]').click()
        cy.url().should('include', '/aie-rumble-academy')
        cy.get('h1').as('title')
        cy.get('@title').contains('AIE Rumble Academy')
        cy.get('@title').should('be.visible')
    })

    it('Check when the user clicks on the Kartel Digital link they go to the Kartel Digital Page', function() {
        cy.get('[data-cy=kartelFooter]').click()
        cy.url().should('include', '/kartel-digital')
        cy.get('h1').as('title')
        cy.get('@title').contains('Kartel Digital')
        cy.get('@title').should('be.visible')
    })

    it('Check when the user clicks on the Play2Lead link they go to the Play2Lead Page', function() {
        cy.get('[data-cy=playFooter]').click()
        cy.url().should('include', '/play2lead')
        cy.get('h1').as('title')
        cy.get('@title').contains('Play2Lead')
        cy.get('@title').should('be.visible')
    })

    // Projects Footer Tests
    it('Check when the user clicks on the Projects link they go to the Projects Page', function() {
        cy.get('[data-cy=projectsFooter]').click()
        cy.url().should('include', '/projects')
        cy.get('h1').as('title')
        cy.get('@title').contains('Projects')
        cy.get('@title').should('be.visible')
    })

    it('Check when the user clicks on the CI Cypress link they go to the CI Cypress Page', function() {
        cy.get('[data-cy=ciFooter]').click()
        cy.url().should('include', '/ci-cypress')
        cy.get('h1').as('title')
        cy.get('@title').contains('CI Cypress Project')
        cy.get('@title').should('be.visible')
    })

    it('Check when the user clicks on the RGB Colour Guessing Game link they go to the RGB Colour Guessing Game Page', function() {
        cy.get('[data-cy=rgbFooter]').click()
        cy.url().should('include', '/rgb-colour-guessing-game')
        cy.get('h1').as('title')
        cy.get('@title').contains('RGB Colour Guessing Game')
        cy.get('@title').should('be.visible')
    })

    it('Check when the user clicks on the Patatap Clone link they go to the Patatap Clone Page', function() {
        cy.get('[data-cy=patatapFooter]').click()
        cy.url().should('include', '/patatap-clone')
        cy.get('h1').as('title')
        cy.get('@title').contains('Patatap Clone')
        cy.get('@title').should('be.visible')
    })

    it('Check when the user clicks on the Photo Board link they go to the Photo Board Page', function() {
        cy.get('[data-cy=photoFooter]').click()
        cy.url().should('include', '/photo-board')
        cy.get('h1').as('title')
        cy.get('@title').contains('Photo Board')
        cy.get('@title').should('be.visible')
    })

    it('Check when the user clicks on the Image Gallery link they go to the Image Gallery Page', function() {
        cy.get('[data-cy=imageFooter]').click()
        cy.url().should('include', '/image-gallery')
        cy.get('h1').as('title')
        cy.get('@title').contains('Image Gallery')
        cy.get('@title').should('be.visible')
    })

    it('Check when the user clicks on the RAW APP link they go to the RAW APP Page', function() {
        cy.get('[data-cy=rawFooter]').click()
        cy.url().should('include', '/raw-app')
        cy.get('h1').as('title')
        cy.get('@title').contains('RAW APP')
        cy.get('@title').should('be.visible')
    })

    it('Check when the user clicks on the Test Case Glass Cup link they go to the Test Case Glass Cup Page', function() {
        cy.get('[data-cy=glassFooter]').click()
        cy.url().should('include', '/glass-cup')
        cy.get('h1').as('title')
        cy.get('@title').contains('Test Case Glass Cup')
        cy.get('@title').should('be.visible')
    })

    // Blog Footer Tests
    it('Check when the user clicks on the Blog link they go to the Blog Page', function() {
        cy.get('[data-cy=blogFooter]').click()
        cy.url().should('include', '/blog')
        cy.get('h1').as('title')
        cy.get('@title').contains('Blog')
        cy.get('@title').should('be.visible')
    })

    it('Check when the user clicks on the What a Product Owner Wants from a Junior Tester link they go to the What a Product Owner Wants from a Junior Tester Page', function() {
        cy.get('[data-cy=wapowfajtFooter]').click()
        cy.url().should('include', '/junior-tester')
        cy.get('h1').as('title')
        cy.get('@title').contains('What a Product Owner Wants from a Junior Tester')
        cy.get('@title').should('be.visible')
    })

    it('Check when the user clicks on the My Testing Story link they go to the My Testing Story Page', function() {
        cy.get('[data-cy=storyFooter]').click()
        cy.url().should('include', '/my-testing-story')
        cy.get('h1').as('title')
        cy.get('@title').contains('My Testing Story')
        cy.get('@title').should('be.visible')
    })

    // Resoures Footer Test
    it('Check when the user clicks on the Portfolio Resources link they go to the Portfolio Resources Page', function() {
        cy.get('[data-cy=resourcesFooter]').click()
        cy.url().should('include', '/resources')
        cy.get('h1').as('title')
        cy.get('@title').contains('Portfolio Resources')
        cy.get('@title').should('be.visible')
    })

    // Contact Footer Test
    it('Check when the user clicks on the Contact Me link they go to the Contact Me Page', function() {
        cy.get('[data-cy=contactFooter]').click()
        cy.url().should('include', '/contact')
        cy.get('h1').as('title')
        cy.get('@title').contains('Contact Me')
        cy.get('@title').should('be.visible')
    })
})
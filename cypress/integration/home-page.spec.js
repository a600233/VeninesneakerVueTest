describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Shows a header', () => {
    cy.get('.vue-title').should('contain', 'Sneakers Platform With Attitudes')
    cy.get('.lead').should('contain', 'Sneakers Will Be Like Venom!!')
  })

  describe('Navigation bar', () => {
    it('Shows the required links', () => {
      cy.get('.navbar').contains('Home')
      cy.get('.navbar-nav:nth-child(1)').within(() => {
        cy.get('.nav-item:first').should('contain', 'Home')
        cy.get('.nav-item:nth-child(2)').should('contain', 'Selling')
        cy.get('.nav-item:nth-child(3)').should('contain', 'Sell')
        cy.get('.nav-item:nth-child(4)').should('contain', 'Map')
      })
      cy.get('.navbar-nav:nth-child(2)').within(() => {
        cy.get('.nav-item:first').should('contain', 'About Us')
        cy.get('.nav-item:nth-child(2)').should('contain', 'Contact Us')
        cy.get('.nav-item:nth-child(3)').should('contain', 'Login')
        cy.get('.nav-item:nth-child(4)').should('contain', 'Logout')
      })
    })

    it('Redirects when links are clicked', () => {
      cy.get('.navbar').contains('Selling').click()
      cy.url().should('include', '/selling')
      cy.get('.navbar').contains('Sell').click()
      cy.url().should('include', '/sell')
      cy.get('.navbar').contains('Map').click()
      cy.url().should('include', '/map')
      cy.get('.navbar').contains('About Us').click()
      cy.url().should('include', '/about')
      cy.get('.navbar').contains('Contact Us').click()
      cy.url().should('include', '/contact')
      cy.get('.navbar').contains('Login').click()
      cy.url().should('include', '/auth')
      // etc
    })
  })
})


describe('Manage Selling page', () => {
  beforeEach(() => {
    // Delete all selling in the API's datastore
    cy.request('https://veninesnekaer.herokuapp.com/selling/')
      .its('body')
      .then((selling) => {
        selling.forEach((element) => {
          cy.request('DELETE',
            'https://veninesnekaer.herokuapp.com/selling/' + element._id)
        })
      })
    // Populate API's datastore
    cy.fixture('selling')
      .then((selling) => {
        selling.forEach((selling) => {
          cy.request('POST',
            'https://veninesnekaer.herokuapp.com/selling/', selling)
        })
      })
    cy.visit('/')
    // Click Manage Donations navbar link
    cy.get('.navbar-nav:nth-child(1)')
      .find('.nav-item:nth-child(2)').click()
  })

  it('allows a selling to be deleted', () => {
    cy.get('tbody').find('tr').should('have.length', 6)
    // Click trash/delete link of 3rd selling in list
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(12)').click()
    // Click confirmation button
    cy.get('button').contains('Delete').click()
    cy.get('tbody').find('tr').should('have.length', 5)
  })

  it('allows a set of selling info to increase amount', () => {
    // Click + symbol of 2nd selling in list
    cy.get('tbody').find('tr').should('have.length', 6)
    cy.get('tbody').find('tr:nth-child(5)').find('td:nth-child(10)').click()
    cy.get('tbody').find('tr:nth-child(5)').find('td:nth-child(9)').should('contain', 2)
  })
  it('allows a set of selling info to be edited', () => {
    // Click + symbol of 2nd selling in list
    cy.get('tbody').find('tr').should('have.length', 6)
    cy.get('tbody').find('tr:nth-child(4)').find('td:nth-child(11)').click()
    cy.url().should('include', '/edit')
    cy.get('.error').should('not.exist')
    cy.get('input[data-test=price]').type(0)
    cy.get('button[type=submit]').click()
    cy.contains('Selling is on the page!').should('exist')
  })
})

describe('Text box test', () => {
  beforeEach(() => {
  cy.visit('https://demo-qa-app.azurewebsites.net/text-box')
  })

  it('Fills the Text Box form', () => {
  cy.get('#userName').type('Test name')
  cy.get('#userEmail').type('test@example.com')
  cy.get('#currentAddress').type('Current Addres')
  cy.get('#permanentAddress').type('Permanent Address')
  cy.get('#submit').click
  })

})

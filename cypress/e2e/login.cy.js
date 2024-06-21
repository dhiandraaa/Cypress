describe('Login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
  
    it('Success login', () => {
      // type username
      cy.get('#username').type('admin')
      cy.get('#username').should('have.value', 'admin')
  
      // type password
      cy.get('#password').type('123456')
      cy.get('#password').should('have.value', '123456')
  
      cy.get('#loginForm').submit()
  
      
      // assert the warning message
      cy.get('#loginMessage').first().should('have.text', 'Login successful!')
    })
  
    it('Failed login', () => {
      // type username
      cy.get('#username').type('user')
      cy.get('#username').should('have.value', 'user')
    
      // type password
      cy.get('#password').type('123456')
      cy.get('#password').should('have.value', '123456')
    
      cy.get('#loginForm').submit()
    
      // assert the warning message
      cy.get('#loginMessage').first().should('have.text', 'Invalid username or password.')
    })
  
      it('Empty login', () => {
        // type username
        cy.get('#username').clear()
      
        // type password
        cy.get('#password').clear()
      
        // click Login button
        cy.get('#loginForm').submit()
      
        // assert the warning message
        cy.get('#loginMessage').first().should('have.text', 'Please enter both username and password.')
      })
  })
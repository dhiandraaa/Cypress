import Login from '../pageObject/login.js'

describe('Login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const login=new Login();
  
    it('Success login', () => {
      // type username
      login.setUsername('admin')
      login.getUsername('admin')
  
      // type password
      login.setPassword('123456')
      login.getPassword('123456')
  
      // click Login button
      login.clickLogin()
  
      // assert the warning message
      login.getMessage('Login successful!')
    })
  
    it('Failed login', () => {
      // type username
      login.setUsername('user')
      login.getUsername('user')
    
      // type password
      login.setPassword('123456')
      login.getPassword('123456')
  
      // click Login button
      login.clickLogin()
    
      // assert the warning message
      login.getMessage('Invalid username or password.')
    })
  
      it('Empty login', () => {
        // blank username
        login.deleteUsername()
      
        // blank password
        login.deletePassword()
      
        // click Login button
        login.clickLogin()
  
        // assert the warning message
        login.getMessage('Please enter both username and password.')
      })
  })
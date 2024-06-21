class Login {
    inputUsername='#username';
    inputPassword='#password';
    btnLogin='button';
    txtMessage='#loginMessage';

    setUsername(username) {
        cy.get(this.inputUsername).type(username)
    }

    getUsername(username) {
        cy.get(this.inputUsername).should('have.value', username)
    }

    deleteUsername() {
        cy.get(this.inputUsername).clear()
    }

    setPassword(password) {
        cy.get(this.inputPassword).type(password)
    }

    getPassword(password) {
        cy.get(this.inputPassword).should('have.value', password)
    }

    deletePassword() {
        cy.get(this.inputPassword).clear()
    }

    clickLogin() {
        cy.get(this.btnLogin).click()
    }

    getMessage(message) {
        cy.get(this.txtMessage).should('have.text', message)
    }
}

export default Login;
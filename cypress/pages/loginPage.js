class LoginPage{

    selectorList (){
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton:('.oxd-button'), 

        }
        return selectors
    }

    loginWithUser(username, password){
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
    }

    acesseLoginPage(){
        cy.visit('/auth/login')
    }


}

export default LoginPage
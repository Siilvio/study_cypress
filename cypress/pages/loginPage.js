class login{
    
    selectorList (){
        const selectors = {

            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "('.oxd-button')",

        }
    }

    acesseLoginPage(){
        cy.visit('/auth/login')
    }

    loginWithUser(username, password){
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(tyhis.selectorList().password).type(password)
        cy.get(this.selectorList.loginButton).click()
    }

}

export default loginPage
import userData from "../fixtures/userData.json"

describe('Orange Test', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "('.oxd-button')"
  }

  // const userData = {
  //   userSucess:{
  //     username: 'Admin',
  //     password: 'admin123',
  //   },
  //   userFail:{
  //     username:'Teste',
  //     password: 'Teste',
  //   }
  // }

  it('login-success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData["userSucess "]["username "])
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
  })

  it('login-fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Teste')
    cy.get(selectorsList.passwordField).type(userData["userFail "]['password '])
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content')
   })
})


// TextDecoderStream
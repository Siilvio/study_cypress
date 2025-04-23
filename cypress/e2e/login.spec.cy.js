import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage"

const LoginPage = new LoginPage()


describe('Orange Test', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "('.oxd-button')",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    middleName: "[name='middleName']",
    LastNameField:"[name='lastName']",
    EmployeeID: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    OtherId: ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    LicenseExpiry:':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
    ButtonEndCalend: '.--close',
    // Nationality: '.oxd-select-dropdown > :nth-child(1)'
    
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

  it.only('User Info Update - Success', () => {
    
    
    
                // cy.get(selectorsList.usernameField).type(userData["userSucess "]["username "]),
                // cy.get(selectorsList.passwordField).type('admin123'),
                // cy.get('.oxd-button').click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Primeiro Nome')
    cy.get(selectorsList.middleName).clear().type('Nome do Meio')
    cy.get(selectorsList.LastNameField).clear().type('Terceiro Nome')
    cy.get(selectorsList.EmployeeID).clear().type('0002')
    cy.get(selectorsList.OtherId).clear().type('212223')
    cy.get(selectorsList.LicenseExpiry).clear().type('2025-23-04')
    cy.get(selectorsList.ButtonEndCalend).click()
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(9)').click()
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
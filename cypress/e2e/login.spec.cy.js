import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import formulario from '../pages/myInfoPage.js'
import dashboardPage from '../pages/dashboardPage.js'
import menuNav from '../pages/MenuNav.js'

const teste = new LoginPage()
const testeFormulario = new formulario()
const TesteDashboard = new dashboardPage()
const testMenu = new menuNav()

describe('Orange Test', () => {

  const selectorsList = {
    
    // usernameField: "[name='username']",
    // passwordField: "[name='password']",
    // loginButton: "('.oxd-button')",
  
    firstNameField: "[name='firstName']",
    middleName: "[name='middleName']",
    LastNameField:"[name='lastName']",
    EmployeeID: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    OtherId: ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    LicenseExpiry:':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
    ButtonEndCalend: '.--close',
    Nationality: '.oxd-select-dropdown > :nth-child(1)'
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

    teste.acesseLoginPage()
    teste.loginWithUser(userData.userSucess.username, userData.userSucess.password),
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    TesteDashboard.VerificaDashbord();
    // testMenu.chamaMenu();
    cy.get(':nth-child(6) > .oxd-main-menu-item').click()
    testeFormulario.chamaFormulario();
    
    // cy.get("[href='/web/index.php/pim/viewMyDetails']").click()
    
    
    
    // cy.get(selectorsList.firstNameField).clear().type('Primeiro Nome')
    // cy.get(selectorsList.middleName).clear().type('Nome do Meio')
    // cy.get(selectorsList.LastNameField).clear().type('Terceiro Nome')
    // cy.get(selectorsList.EmployeeID).clear().type('0002')
    // cy.get(selectorsList.OtherId).clear().type('212223')
    // cy.get(selectorsList.LicenseExpiry).clear().type('2025-23-04')
    // cy.get(selectorsList.ButtonEndCalend).click()
    // cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    // cy.get('.oxd-select-dropdown > :nth-child(9)').click()
  })

  // it('login-fail', () => {
  //   cy.visit('/auth/login')
  //   cy.get(selectorsList.usernameField).type('Teste')
  //   cy.get(selectorsList.passwordField).type(userData["userFail "]['password '])
  //   cy.get('.oxd-button').click()
  //   cy.get('.oxd-alert-content')
  //  })

})




    // cy.visit('/auth/login')
    // cy.get(selectorsList.usernameField).type(userData.userSucess.username),
    // cy.get(selectorsList.passwordField).type(userData.userSucess.password),
    // cy.get('.oxd-button').click()
    // cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    
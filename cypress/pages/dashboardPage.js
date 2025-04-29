class dashboardPage {

    VerificaDashbord() {
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
    }

}

export default dashboardPage
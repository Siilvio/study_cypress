class formulario{
    
    selectorsList(){
        const selectors = {
            
            firstNameField: "[name='firstName']",
            middleName: "[name='middleName']",
            LastNameField:"[name='lastName']",
            EmployeeID: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
            OtherId: ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
            LicenseExpiry:':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
            ButtonEndCalend: '.--close',
            Nationality: '.oxd-select-dropdown > :nth-child(1)'

        }
        return selectors
    }

    chamaFormulario(primeiroNome,segundoNome,terceiroNome){
        cy.get(this.selectorsList().firstNameField).clear().type(primeiroNome)
        cy.get(this.selectorsList().middleName).clear().type(segundoNome)
        cy.get(this.selectorsList().LastNameField).clear().type(terceiroNome)

    }

}

export default formulario
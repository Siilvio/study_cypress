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

    chamaFormulario(){
        cy.get(this.selectorsList().firstNameField).clear().type('Primeiro Nome')
        cy.get(this.selectorsList().middleName).clear().type('Nome do Meio')
        cy.get(this.selectorsList().LastNameField).clear().type('Terceiro Nome')

    }

}

export default formulario
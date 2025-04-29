class menuNav {

    selectorsList(){
        const selector = {
            MyInfoButtom: '[href="/web/index.php/pim/viewMyDetails"]',
        }
        return selector
    }

    chamaMenu(){
        cy.get(this.selectorsList().MyInfoButtom).click()
    }

}

export default menuNav  
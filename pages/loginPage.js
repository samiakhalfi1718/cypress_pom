class loginPage {

    constructor() {
        this.url = ""
    }

    getUserName() {
        return cy.get("#userName").first()
    }

    getPassword() {
        return cy.get("#password").first()
    }

    getLogBtn() {
        return cy.get("#login").first()
    }
}
module.exports = loginPage
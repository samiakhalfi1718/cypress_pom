import loginPage from '../../../pages/loginPage'

const login = new loginPage()
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('template spec', function () {
  //part of before hook
  before(function () {
    //access fixture data
    cy.fixture('example').then(function (signInData) {
      this.signInData = signInData
    })
  })
  // test case
  it('login', function () {
    // launch URL
    cy.visit("https://demoqa.com/login")
    cy.wait(10000)
    //data driven from fixture
    login.getUserName().type(this.signInData.email)
    login.getPassword().type(this.signInData.password)
    login.getLogBtn().click()
  });
})
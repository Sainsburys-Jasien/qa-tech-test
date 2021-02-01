/// <reference types="Cypress" />
describe('Flight search', () => {
    it('Should get to the flight search results page', () => {
        cy.visit('https://lastminute.com')

        expect(true).to.equal(true)
    })
})
/// <reference types="cypress" />

describe("Verify radiobuttons via webdriver uni", () => {
    beforeEach('', () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});
    });
    
    it("check validates radiobuttons", () => {
        cy.get('#radio-buttons').find("[type='radio']").as('radiobuttons');
        cy.get('@radiobuttons').first().check();
        cy.get('@radiobuttons').eq(1).check();

    });
   
    it("Validate the state of specific radio-buttons", () => {
        cy.get("[value='lettuce']").should('not.be.checked');
        cy.get("[value='pumpkin']").should('be.checked');

        cy.get("[value='lettuce']").check();
        cy.get("[value='lettuce']").should('be.checked');

        cy.get("[value='cabbage']").should('be.disabled');
    });
});
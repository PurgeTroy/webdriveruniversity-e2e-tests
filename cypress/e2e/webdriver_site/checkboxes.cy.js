/// <reference types="cypress" />

describe("Verify checkboxes via webdriver uni", () => {
    beforeEach(()=> {
        cy.navigateTo_webdriverUni_Checkbox_page();
    })
    
    it("check and validates checkbox", () => {
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1');

        cy.get('@option-1').check();
        cy.get('@option-1').check().should('be.checked');
    });

    it("uncheck and validates checkbox", () => {
        cy.get('#checkboxes > :nth-child(5) > input').as('option-3');
        cy.get('@option-3').uncheck().should('not.be.checked');
    });

    it("check multiple checkboxes", () => {
        cy.get("input[type='checkbox']").check(["option-1"], ["option-2"], ["option-3"], ["option-4"]).should('be.checked');
    });

});
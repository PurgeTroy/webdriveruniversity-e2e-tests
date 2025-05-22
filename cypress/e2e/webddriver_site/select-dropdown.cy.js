/// <reference types="cypress" />

describe("Verify dropdown lists via webdriver uni", () => {
    it("check validates dropdownlists", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});

        cy.get('#dropdowm-menu-1').select('C#').should('have.value', 'c#');
        cy.get('#dropdowm-menu-2').select('TestNG').should('have.value', 'testng');
        cy.get('#dropdowm-menu-3').select('JavaScript').should('have.value', 'javascript');
        
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven');

    });

});
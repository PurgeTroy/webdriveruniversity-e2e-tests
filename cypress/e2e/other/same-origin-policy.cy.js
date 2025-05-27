/// <reference types="cypress"/>

describe('contact us test', () => {
    it('validate visiting 2 different domains', () => {
        cy.visit("https://www.webdriveruniversity.com");
        cy.visit("https://automationteststore.com/");

    });

    it('Validate visiting 2 different domains via user actions', () => {
        // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click();

    });

    // it('origin command', () => {
    //     cy.origin("https://automationteststore.com", () => {
    //         cy.visit("/");
    //     });
    // });
});
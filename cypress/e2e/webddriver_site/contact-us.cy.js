/// <reference types="cypress"/>

describe('contact us test', () => {
    before(() => {
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        });
    })

    beforeEach(() => {
        cy.visit(Cypress.env("webdriveruni_homepage"));
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    })

    it('successful contact test', () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        cy.contact_submission(Cypress.env('first_name'), data.last_name, data.email, 'Comment', 'h1', 'Thank You for your Message!')
    });

    it('error contact test', () => {
        cy.contact_submission(data.first_name, data.last_name, " ", 'Comment', 'body', 'Error: Invalid email address')
    });
});
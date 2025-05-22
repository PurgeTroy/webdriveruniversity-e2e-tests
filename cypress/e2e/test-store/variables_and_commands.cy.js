/// <reference types="cypress"/>

describe('Verifying variables, cypress commands, jquery', () => {
    it('Navigating to specific product pages', () => {
        cy.visit("https://automationteststore.com/");
        // const makeupLink = cy.get('a[href*="product/category&path="]').contains("Makeup");
        // makeupLink.click();
        // const skincareLink = cy.get('a[href*="product/category&path="]').contains("Skincare");
        // skincareLink.click();

        cy.get('a[href*="product/category&path="]').contains("Makeup").click();
        cy.get('a[href*="product/category&path="]').contains("Skincare").click();
    });

    it('Navigating to specific product pages', () => {
        cy.visit("https://automationteststore.com/");
        cy.get('a[href*="product/category&path="]').contains("Makeup").click();

        const header = cy.get(".maintext").then(($headerText) => {
            const text = $headerText.text();
            cy.log('Found header' + text);
            expect(text).is.eq('Makeup');
        });
    });

    it('Navigating to specific product pages', () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");

        // using commands and chaiining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', "First name");

        //JQuery

        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text();
            expect(firstNameText).to.contain('First name');

            // closure
            cy.get("#field_11").then(fnText => {
                cy.log(fnText.text());
                cy.log(fnText);
            });
        });
    });
});
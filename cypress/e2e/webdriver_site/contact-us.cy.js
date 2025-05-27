/// <reference types="cypress"/>

import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/contact_us_Po";
import Homepage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";

describe('contact us test', () => {
    const homePage_PO = new Homepage_PO();
    const contact_Us_PO = new Contact_Us_PO();
        
    before(() => {
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        });
    })

    beforeEach(() => {
        homePage_PO.visitHomepage();
        homePage_PO.clickOn_contactUs_Button();
    })

    it('successful contact test', () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        contact_Us_PO.contactForm_Submission(data.first_name, data.last_name, data.email, 'Comment', 'h1', 'Thank You for your Message!');
    });

    it('error contact test', () => {
        cy.contact_submission(data.first_name, data.last_name, " ", 'Comment', 'body', 'Error: Invalid email address')
    });
});
/// <reference types="cypress"/>

describe("Store test contact us", () => {
    before(() => {
        cy.fixture('userDetails').as("user");
    })
    
    it("successful test", () => {
        cy.visit("https://automationteststore.com/");
        // cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get("a[href$='contact']").click();
        cy.get('@user').then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.email);    
        })
        
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type("something");
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
    });
});
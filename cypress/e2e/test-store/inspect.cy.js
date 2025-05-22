/// <reference types="cypress"/>

describe('Inspect test store items via chaining commands', () => {
    it('Click on the first item using item header', () => {
        cy.visit("https://automationteststore.com/");
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img').click();
    });

    it.only('Click on the first item using item text', () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText) {
            console.log("Selected the following item " + itemHeaderText.text());
        });
    });

    it.only('Click on the first item using index', () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
    });
});
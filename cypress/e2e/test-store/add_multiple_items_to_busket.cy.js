/// <reference types="cypress"/>

describe('add items', () => {
    before(() => {
        cy.fixture("products").then((data) => {
            globalThis.data = data;
        })
    })
    
    beforeEach(() => {
        cy.visit("https://automationteststore.com/");
        cy.get('a[href*="product/category&path="]').contains("Hair Care").click();
    })
    
    it('add products to basket', () => {
        globalThis.data.productName.forEach(element => {
            cy.addToBasket(element);
        })
    });
    
});
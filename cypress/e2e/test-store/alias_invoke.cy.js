/// <reference types="cypress"/>

describe('Alias and invoke', () => {
    it('Validadte a product', () => {
        cy.visit("https://automationteststore.com/");
        cy.get('a[href*="product/category&path="]').contains("Hair Care").click();

        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail');
        cy.get('@productThumbnail').its('length').should('be.gt', 5);
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner');

    });

    it('Validadte product thumbnail', () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail');
        cy.get('@productThumbnail').should('have.length', 16);
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to cart');
    });

    it.only('Calculate total of normal and sale products', () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail');
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text());
        // });

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice');

        let totalPrice1 = 0;
        cy.get('@itemPrice').then($linkText => {
            let itemPrice = $linkText.split('$');
            for(let i=0; i<itemPrice.length; i++) {
                cy.log(itemPrice[i]);
                totalPrice1 += Number(itemPrice[i]);
            }
            cy.log("Total price: " + totalPrice1);
        });

        let totalPrice2 = 0;
        cy.get('@saleItemPrice').then($linkText => {
            let salePrice = $linkText.split('$');
            for(let i = 0; i < salePrice.length; i++) {
                cy.log(salePrice[i]);
                totalPrice2 += Number(salePrice[i]);
            }
            cy.log('Total sale items price: ' + totalPrice2);
        }).then(() => {
            cy.log('Total priice of all products: ' + (totalPrice1 + totalPrice2));
            expect((totalPrice1 + totalPrice2)).to.equal(573.5);
        });
    });
});
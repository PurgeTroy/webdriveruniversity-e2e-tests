/// <reference types="cypress"/>

import AutoStore_HairCare_PO from "../../support/pageObjects/test-store/AutoStore_Haircare_PO";
import AutoStore_Homepage_PO from "../../support/pageObjects/test-store/AutoStore_Homepage_PO";

describe('add items', () => {
    const autoStore_Homepage_PO = new AutoStore_Homepage_PO();
    const autoStore_hairCare_PO = new AutoStore_HairCare_PO();

    before(() => {
        cy.fixture("products").then((data) => {
            globalThis.data = data;
        })
    })
    
    beforeEach(() => {
        autoStore_Homepage_PO.accessHomepage();
        autoStore_Homepage_PO.clickOn_HairCare_Link();
    })
    
    it('add products to basket', () => {
        autoStore_hairCare_PO.addHairCareProductsToBasket();
    });
    
});
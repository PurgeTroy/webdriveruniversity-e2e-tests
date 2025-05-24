class AutoStore_HairCare_PO {

    addHairCareProductsToBasket() {
        globalThis.data.productName.forEach(element => {
            cy.addToBasket(element);
        })
        cy.get('.dropdown-toogle > .fa').click()
    }


}

export default AutoStore_HairCare_PO;
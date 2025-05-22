/// <reference types="cypress" />
describe("Data handling", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
      it("Calculate and assert the total age of all users", () => {
        let userDetails = [];
        let num = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text();
        }).then(() => {
            for(let i = 0; i < userDetails.length; i++) {
                if(Number(userDetails[i])){
                    num += Number(userDetails[i]);
                    // cy.log(userDetails[i]);
                    cy.log(num);
                }
            }
            expect(num).to.eq(322);
        });
      });

      it("Assert user's age based on second name", () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index) => {
            const text = $el.text();
            if(text.includes('Woods')) {
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age) {
                    const userAge = age.text();
                    expect(userAge).to.eq("80");
                });
            }
        });
      });
  });
    
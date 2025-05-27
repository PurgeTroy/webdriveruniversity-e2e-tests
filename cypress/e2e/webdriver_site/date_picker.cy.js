/// <reference types="cypress" />
describe("test date picker", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true});
    })
      it("Select date from a date picker", () => {
        cy.get('#datepicker').click();

        let date = new Date();
        date.setDate(date.getDate() + 1);

        const futureYear = date.getFullYear();
        const futureMonth = date.toLocaleString('default', {month: 'long'})
        const futureDay = date.getDay();

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find(".datepicker-switch").first().then(currentDate => {
                if(!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            }).then(() => {
              cy.get('.datepicker-dropdown').find(".datepicker-switch").first().then(currentDate => {
                if(!currentDate.text().includes(futureMonth)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            })
            });
        }

        function selectDay() {
          cy.get('[class="day"]').contains(futureDay).click();
        }

        selectMonthAndYear()
        selectDay();
      });
  });
    
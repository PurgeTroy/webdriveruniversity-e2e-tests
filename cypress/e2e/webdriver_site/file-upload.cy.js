/// <reference types="cypress" />

describe("test file-upload via web wriver uni", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});
    })

    it("upload a file", () => {
        cy.get('#myFile').selectFile("cypress/fixtures/file.txt");
        cy.get('#submit-button').click();
    });

    it("upload not a file", () => {
        cy.get('#submit-button').click();
    })
  });
    
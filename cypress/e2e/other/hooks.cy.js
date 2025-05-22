describe('hooks example', () => {
    before('before', () => {
        cy.log('before');
    });

    beforeEach('before each', () => {
        cy.log('before each');
    });

    after('after', () => {
        cy.log('after');
    });

    afterEach('after each', () => {
        cy.log('after each');
    });

    it('example test 1', () => {
        cy.log('test');
    });

    it('example test 2', () => {
        cy.log('test');
    });
})
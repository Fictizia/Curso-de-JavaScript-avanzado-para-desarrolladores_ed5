describe('e2e test', () => {
    it('should opens the application', () => {
        cy.visit('localhost:5000');
        cy.get('#heroInput').should('have.value', '');
    })

    it('should find heroes when a hero is introduced', () => {
        cy.visit('localhost:5000');
        cy.get('#heroInput').type('bat')
        cy.get('#heroInput').should('have.value', 'bat');
        cy.get('#submitButton').focus();
        cy.get('#superHeroList').contains('Batman')
    })

    it('should find heroes when a hero is introduced', () => {
        cy.visit('localhost:5000');
        cy.get('#heroInput').type('not-found');
        cy.get('a').click();
        cy.get('#superHeroList').children().should('have.length', 0);
    })
})

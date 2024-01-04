describe('simple spec', () => {
    it('passes', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()
    })
})
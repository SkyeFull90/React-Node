describe('React with Vite', () => {
    it('should click the count button', () => {
        cy.visit('http://localhost:5173')
        cy.contains('count is').click()
    })
})
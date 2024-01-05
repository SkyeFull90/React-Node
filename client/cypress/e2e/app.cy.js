describe('React with Vite', () => {
    it('should click the count button', () => {
        cy.visit('https://react-node-2vi0.onrender.com/')
        cy.contains('count is').click()
    })
})
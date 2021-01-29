describe('Forms', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza");
    })

    it('Add text to boxes', () => {
        cy.get("input[name='name']").should('have.value', '')
        .type('Emma')
        .should('have.value', 'Emma')
    })

    it('Can select multiple toppings', () => {
        cy.get('input[name="pepperoni"]').check();
        cy.get('input[name="pepperoni"]').uncheck();

        cy.get('input[name="mushrooms"]').check();
        cy.get('input[name="mushrooms"]').uncheck();
    })

    it('Submitting form', () => {
       cy.get('button').should('be.disabled')

        cy.get("input[name='name']")
        .type('Emma')

        cy.get('select').select('small')

        cy.get('input[name="pepperoni"]').check();

        cy.get('input[name="mushrooms"]').check();

        cy.get('input[name="special"]')
        .type('n/a')

        cy.get('button').should('be.enabled').click()
    })
})
/// <reference types="cypress" />

describe('Work with basic elements', () => {
    it('Text', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        //genérico
        cy.get('body').should('contain', 'Cuidado')
        //mais restritivo
        cy.get('span').should('contain', 'Cuidado')
        //passa a classe daquele elemento verifica se tem o texto cuidado
        cy.get('.facilAchar').should('contain', 'Cuidado')

        //valida o texto exato
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')

    })

    //Acessa Links
    it.only('Links', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('a').contains('Voltar').click();
        cy.get('#resultado')
            .should('have.text', 'Voltou!')

        //reinicia a pagina
        cy.reload();
        cy.get('#resultado')
            .should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado')
            .should('have.text', 'Voltou!')
    })
})
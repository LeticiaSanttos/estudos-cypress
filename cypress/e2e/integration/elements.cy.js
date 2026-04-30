/// <reference types="cypress" />

describe('Work with basic elements', () => {

    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Text', () => {

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
    it('Links', () => {
        cy.url().should('include', 'componentes.html')
        cy.contains('a', 'Voltar')
            .should('be.visible')
            .click()
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

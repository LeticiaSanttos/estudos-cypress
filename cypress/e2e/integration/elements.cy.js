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

    it.only('TextFields', () => {
        //escreve o texto no campo
        cy.get('#formNome').type('Cypress Test')
        //encontra o campo pelo valor dentro dele
        cy.get('#formNome').should('have.value', 'Cypress Test')

        //acessa caixa de texto multilinhas
        // é usado duas barras por conta dos dois pontos, se não da erro de execução
        cy.get('#elementosForm\\:sugestoes')
            .type('Texto texto texto texto texto texto')
            .should('have.value', 'Texto texto texto texto texto texto')

        //acessa campos da tabela acessando o id dela e passando pelos filhos
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
                .type('Campo da tabela')

        //{backspace} serve para apagar o último caractere escrito
        cy.get('[data-cy="dataSobrenome"]')
                .type('Teste12345{backspace}{backspace}')
                .should('have.value', 'Teste123')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', {delay: 100})
            .should('have.value', 'acerto')

    })
})

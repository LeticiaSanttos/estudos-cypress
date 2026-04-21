/// <reference types="cypress" />

describe('Cypress basics', () => {

    it.only('Should visit a page and assert title', () => {
        //acessa a página da url
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        //para a execução, permite ir passando em cada etapa
        cy.pause();

        //pega o título
        
        //.then aguarda o valor do titulo ser precessado e armazenado na memória
        cy.title().then(title => {
            // 1. Imprimindo no console do navegador (F12)
            console.log('O titulo capturado foi: ', title)

            // 2. Imprimindo no log do próprio Cypress (painel esquerdo)
            cy.log(title)

            // 3. Escrevendo o título em um campo de texto
            // Preenche o titulo no input Nome: com id formNome
            cy.get('#formNome').type(title)
        })

        //realiza o debug e impre algumas informações dele no console
        cy.title().debug().should('be.equal', 'Campo de Treinamento');
        
        //valida o titulo

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')
    })

    it('Should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        //acessa e clica no botão
        cy.get('#buttonSimple')
            .should('have.value', 'Clique Me!')
            .click()
            .should('have.value', 'Obrigado!');

    })
})

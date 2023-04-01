describe('Alura buscar curso', () => {
    beforeEach( () => {
        cy.visit('https://www.alura.com.br');
    })

    it('buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        cy.get('.header-barraBusca-form-submit').click();
        //cy.get(':nth-child(3) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome').should('have.text', 'Formação em Java com Orientação a Objetos');
        cy.get('h4.busca-resultado-nome').should('contain', 'Formação Aprenda a programar em Java com Orientação a Objetos');
    })

    it('buscar curso de Python', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('Python');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get(':nth-child(3) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome').should('contain', 'Formação Aprenda a programar em Python com Orientação a Objetos');
    })

    it('clicar em caixa', () => {
        cy.get('.categories__wrapper__links--home.--design-ux').click();
    })

    it('fazer login', () => {
        cy.get('.header__nav__link--entrar').click();
        cy.get('#login-email').type('gpcoutinho17@gmail.com');
        cy.get('#password').type('123456');
        cy.get('.btn-login.btn-principal-form-dark').click();
    })
})
describe('Registro de usuário', () => {
    beforeEach( () => {
        cy.visit('https://alura-fotos.herokuapp.com');
    })

    it('verificar mensagens ao nao preencher os campos', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('verificar validacao do email', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="email"]').type('gabriel');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })
    
    it('verificar validacao de fullName', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="fullName"]').type('G');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
        cy.get('input[formcontrolname="fullName"]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        cy.contains('ap-vmessage', 'Maximun length is 40').should('be.visible');
    })

    it('verificar validacao de userName', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('G');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
        cy.get('input[formcontrolname="userName"]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        cy.contains('ap-vmessage', 'Maximun length is 30').should('be.visible');
    })

    it('verificar validacao de senha', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="password"]').type('1');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
        cy.get('input[formcontrolname="password"]').type('2345678912345678');
        cy.contains('ap-vmessage', 'Maximun length is 18').should('be.visible');
    })

    it('fazer login com credenciais inválidas', () => {
        cy.get('input[formcontrolname="userName"]').type('teste123');
        cy.get('input[formcontrolname="password"]').type('senhateste11');
    })
})
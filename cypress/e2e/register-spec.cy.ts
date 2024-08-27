/// <reference types="Cypress" />

describe('Register', () => {
  beforeEach(() => {
    cy.visit('/');
    // we are not logged in
  });

  it('registers new user', () => {
    const username: string = 'visitor';
    const email: string = 'visitor@email.com';
    const password: string = 'visiting';
    
    cy.contains('li', 'Sign up').click();
    
    cy.location('hash').should('include', '/register');
    cy.get('input[formcontrolname="username"]').type(username);
    cy.get('input[formcontrolname="email"]').type(email);
    cy.get('input[formcontrolname="password"]').type(password);
    cy.get('form').submit();
    
    cy.location('hash').should('include', '/');
    cy.contains('li', username).should('be.visible');
  });
});

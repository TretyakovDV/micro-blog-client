describe('Login', () => {
  it('Visit the Login page', () => {
    cy.visit('/');
  });

  it('Redirect to the login page', () => {
    cy.get('button.MuiButtonBase-root').click();
    cy.url().should('include', '/login')
  })

  it('Login is the system', () => {
    cy.login('admin@test.com', 'admin');
  });
});

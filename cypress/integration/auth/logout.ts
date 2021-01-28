describe('Logout', () => {
  it('Logout from th system', () => {
      cy.login('admin@test.com', 'admin');
      cy.url().should('include', '/')

      cy.contains('span.MuiButton-label', 'Logout').parent().click()
    
      cy.url().should('include', '/sign-in')
  });
});

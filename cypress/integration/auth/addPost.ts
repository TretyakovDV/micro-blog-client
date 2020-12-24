describe('Add Post', () => {
  it('Login to the system', () => {
      cy.login('admin@test.com', 'admin');
  });

    it('Add post', () => {
        cy.contains('span.MuiButton-label', 'Add post').parent().click();
        cy.url().should('include', '/add-post');

        cy.get('input#title').clear().type('title');
        cy.get('textarea#body').clear().type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
        cy.get('input#author').clear().type('Name Surname');

        cy.contains('span.MuiButton-label', 'Add post').last().parent().click();
    });
});

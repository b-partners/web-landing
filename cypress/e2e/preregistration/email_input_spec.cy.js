export const preregistration = '.preregistration__container__form';

describe('email input test', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', () => false);
    cy.visit('http://localhost:3000');
  })

  it('should have a nice placeholder', () => {
    cy
      .get(`${preregistration} > input`)
      .first()
      .should('have.attr', 'placeholder', 'Votre email @');
  });
});

const preregistration = '.preregistration__container__form';

describe('Preregistration', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.on('uncaught:exception', () => false);
  })

  describe('modal (form) test', () => {
    it('should be hidden by default', () => {
      cy.get('.modal')
        .should('have.class', 'modal-hide');
    });

    it('should be opened when email input is submitted', () => {
      cy.get(preregistration)
        .first()
        .submit();
      cy.contains('Se préinscrire');
    });
  })

  it('should display another box when form is submitted', () => {
    cy.get(preregistration)
      .first()
      .submit();

    cy.get('button').contains('Se préinscrire')
      .click()
      .then(() => {
        // ...
        cy.contains('Merci, votre préinscription');
      })
  })

  describe('input (email) test', () => {
    it('should contains a `fancy` placeholder', () => {
      cy.get(`${preregistration} > input`)
        .first()
        .should('have.attr', 'placeholder', 'Votre email @');
    })
  });

  describe('form validation', () => {
    it("should not be submitted with some empty field", () => {
      cy.get(preregistration)
        .first()
        .submit();
    })
  })

});

import { preregistration } from "./email_input_spec.cy";

const THANKING_TEXT = 'Merci, votre préinscription a bien été prise en compte et nous vous tiendrons informé du lancement.';

describe('modal test on event', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', () => false);
    cy.visit('http://localhost:3000');
  });

  it('should be hidden by default', () => {
    cy
      .get('.modal')
      .should('have.class', 'modal-hide');
  });

  it('should be shown on email input submission and display thanking text on payload emission', () => {
    cy
      .get(preregistration)
      .first()
      .submit();

    cy
      .contains('Se préinscrire')
      .click();

    cy.contains(THANKING_TEXT);
  });
});

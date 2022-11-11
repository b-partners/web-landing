import React from 'react';

import * as PropTypes from 'prop-types';

import { Button } from '../../../../../common/components/Button';
import Ambitieux from '../../../assets/img/ambitieux.png';
import Developpement from '../../../assets/img/developpement.png';
import Essentiel from '../../../assets/img/essentiel.png';

export function OfferTable(props) {
  const { setModalOpen } = props;
  return (
    <table className="table__offer bd-container">
      <thead className="table__offer__header">
        <tr>
          <th className="table__offer__title" rowSpan="2">
            Nos Offres
          </th>
          <th className="th__offer">
            <img src={Essentiel} alt="essentiel" className="offer-image" />
            <p>
              L'ESSENTIEL <br />
              <span style={{ fontSize: '1.5rem' }}>7€</span>/mois
            </p>
            <p className="offer__description">
              Tous les services essentiels pour gérer votre activité d'artisan ou d'indépendant
            </p>
          </th>
          <th>
            <img src={Developpement} alt="essentiel" className="offer-image" />
            <p>
              DEVELOPPEMENT <br />
              <span style={{ fontSize: '1.5rem' }}>19€</span>/mois
            </p>
            <p className="offer__description">
              Tous les services pour développer et gérer votre activité d'artisan ou d'indépendant
            </p>
          </th>
          <th>
            <img src={Ambitieux} alt="essentiel" className="offer-image" />
            <p>
              L'AMBITIEUX <br />
              <span style={{ fontSize: '1.5rem' }}>39€</span>/mois
            </p>
            <p className="offer__description">
              Tous les services pour franchir un pallier dans votre croissance et automatiser votre activité d'artisan
              ou d'indépendant
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <b>
              Activation de l'assistant virtuel pour développer votre activité, relance client, identification prospect
              et nouveaux chantiers.
            </b>
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />
            Avec personnalisation
          </td>
        </tr>
        <tr>
          <td>
            <b>Collectez plus rapidement vos encaissements par QR code, Mails ou SMS.</b>
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />
            Mail / QR code: 1000€ inclus puis 2% SMS: 2% et 0,40€ par SMS
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />
            Mail / QR code: 1000€ inclus puis 2% SMS: 1,5% et 0,30€ par SMS
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />
            Mail / QR code: 1000€ inclus puis 2% SMS: 0,99% et 0,20€ par SMS
          </td>
        </tr>
        <tr>
          <td>
            <b>Bénéficier de notre outil de devis, facturation, comptabilité automatisée.</b>
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />1 Utilisateur
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />1 Utilisateur
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />4 Utilisateurs
          </td>
        </tr>
        <tr>
          <td>
            <b>Inclus services banques en ligne (1 compte pro, 1 RIB FR/ Accès mobile et Internet).</b>
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />4 Utilisateurs
          </td>
        </tr>
        <tr>
          <td>Supports 7 jours sur 7.</td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
          </td>
        </tr>
        <tr>
          <td>Carte Mastercard physique incluse (puis 5€HT/carte/mois).</td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />4 cartes offertes
          </td>
        </tr>
        <tr>
          <td>Cartes virtuelles permanente incluses (puis 2€HT/carte/mois).</td>
          <td> </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />1 carte offerte
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />2 cartes offertes
          </td>
        </tr>
        <tr>
          <td>Cartes virtuelles à utilisation unique incluses.</td>
          <td> </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />
            2 cartes offertes <br />
            puis 1€HT/carte
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />
            3 cartes offertes <br />
            puis 1€HT/carte
          </td>
        </tr>
        <tr>
          <td>Virements et prélévements inclus (puis 0,40€ au-delà).</td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />
            20 offerts
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />
            50 offerts
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />
            100 offerts
          </td>
        </tr>
        <tr>
          <td>Commissions de mouvements de comptes.</td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />
            60K€/an offerts <br />
            puis 0,15%
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />
            150K€/an offerts <br />
            puis 0,15%
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />
            1M€/an offerts <br />
            puis 0,15%
          </td>
        </tr>
        <tr>
          <td>Paiements hors zone euro (en devise).</td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />1 € HT + 1,9 %
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />
            1,9 %
          </td>
          <td>
            <i className="fa fa-check fa-2x" aria-hidden="true" />
            <br />5 inclus puis 1.9%
          </td>
        </tr>
      </tbody>
      <tfoot style={{ paddingTop: '2rem' }}>
        <tr style={{ paddingTop: '2rem' }}>
          <td> </td>
          <td>
            <Button
              type="submit"
              label="C'est ça qu'il me faut"
              preset="registration-button"
              onClick={() => setModalOpen(true)}
            />
          </td>
          <td>
            <Button
              type="submit"
              label="C'est plutôt ça qu'il me faut"
              preset="registration-button"
              onClick={() => setModalOpen(true)}
            />
          </td>
          <td>
            <Button
              type="submit"
              label="C'est exactement cela qu'il me faut"
              preset="registration-button"
              onClick={() => setModalOpen(true)}
            />
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
OfferTable.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
};

import React from 'react';

export function Offer() {
  return (
    <section className='offer section bd-container'>
      <table className='table__offer'>
        <thead className='table__offer__header'>
          <tr>
            <th className='table__offer__title'>Nos Offres</th>
            <th>
              L'ESSENTIEL <br />
              7€/mois
            </th>
            <th>
              DEVELOPPEMENT <br />
              19€/mois
            </th>
            <th>
              L'AMBITIEUX <br />
              39€/mois
            </th>
          </tr>
          <tr>
            <th> </th>
            <th>
              <p className='offer__description'>
                Tous les services essentiels pour gérer votre activité d'artisan ou d'indépendant
              </p>
            </th>
            <th>
              <p className='offer__description'>
                Tous les services pour développer et gérer votre activité d'artisan ou d'indépendant
              </p>
            </th>
            <th>
              <p className='offer__description'>
                Tous les services pour franchir un pallier dans votre croissance et automatiser
                votre activité d'artisan ou d'indépendant
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Activation de la version standard de notre
              assistant virtuel pour développer votre activité.</b>
            </td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
          </tr>
          <tr>
            <td><b>Service de banque en ligne (RIB/Virements/cartes
              à partir de 2€/mois).</b>
            </td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
          </tr>
          <tr>
            <td><b>Bénéficiez de notre outil de devis, facturation,
              comptabilité automatisée (1 utilisateur).</b>
            </td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
          </tr>
          <tr>
            <td><b>Collectez vos paiment par QR code, SMS et mails
              (2% de frais pour accélérer la collecte).</b>
            </td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
          </tr>
          <tr>
            <td><b>60k€/an</b> de commissions de mouvements de
              compte incluses puis 0.15%.
            </td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
          </tr>
          <tr>
            <td><b>200€</b> de retraits gratuits par moi, puis 1% du<br />
              montant.
            </td>
            <td> </td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
          </tr>
          <tr>
            <td>1500€ de plafond pour vos retraits.</td>
            <td> </td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
          </tr>
          <tr>
            <td>2% pour les paiments hors zone euro.</td>
            <td> </td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
          </tr>
          <tr>
            <td>30 virements et prélèvements puis 0.50€ ou delà.</td>
            <td> </td>
            <td> </td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
          </tr>
          <tr>
            <td>Support 7 jours sur 7.</td>
            <td> </td>
            <td> </td>
            <td><i className="fa fa-check fa-2x" aria-hidden="true" /></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
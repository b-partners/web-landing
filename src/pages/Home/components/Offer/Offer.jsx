import React from 'react';
import { Button } from '../../../../common/components/Button';

export function Offer() {
  return (
    <section className='offer section bd-container'>
      <table className='table__offer'>
        <thead className='table__offer__header'>
          <tr>
            <th className='table__offer__title'>Nos Offres</th>
            <th>L'ESSENTIEL</th>
            <th>DEVELOPPEMENT</th>
            <th>L'AMBITIEUX</th>
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
        <tfoot style={{paddingTop: '2rem'}}>
          <tr style={{paddingTop: '2rem'}}>
            <td> </td>
            <td><Button type='submit' label="Je veux ça" preset="registration-button" /></td>
            <td><Button type='submit' label="Je veux ça" preset="registration-button" /></td>
            <td><Button type='submit' label="Je veux ça" preset="registration-button" /></td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
}
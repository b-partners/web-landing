import { Link } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/mentions-legales.css';

const h3Style = { fontSize: '16px', fontWeight: 600, margin: '20px 0 6px' };

export const LegalNotice = () => {
  useUpdateMeta('Mentions légales | BIRDIA', "Mentions légales du site birdia.fr et de l'application BIRDIA, éditée par BPartners SAS.");

  return (
    <div className="mentions-legales-page">
      <section className="legal">
        <div className="wrap">
          <article className="doc">
            <h1>Mentions légales</h1>
            <p className="upd">
              Mentions légales à jour du <mark className="todo">[À compléter : date de publication (version précédente : 16/01/2024)]</mark>
            </p>
            <p>
              <a href={Env.REACT_APP_LEGAL_MENTION_URL} target="_blank" rel="noreferrer">
                Télécharger les mentions légales au format PDF
              </a>
            </p>
            <nav className="toc" aria-label="Sommaire">
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, columns: 2, fontSize: '14px' }}>
                <li>
                  <a href="#editeur">1. Éditeur du site et de l'application</a>
                </li>
                <li>
                  <a href="#credits">Crédits</a>
                </li>
                <li>
                  <a href="#hebergement">Hébergement</a>
                </li>
                <li>
                  <a href="#developpement">Développement de l'application</a>
                </li>
                <li>
                  <a href="#pi">2. Propriété intellectuelle</a>
                </li>
                <li>
                  <a href="#rgpd">3. Protection des données à caractère personnel</a>
                </li>
                <li>
                  <a href="#contenus">4. Contenus de l'application et responsabilités</a>
                </li>
              </ul>
            </nav>

            <h2 id="editeur">1. Éditeur du site et de l'application</h2>
            <p>Le site birdia.fr et l'application BIRDIA sont édités par la société BPartners SAS, qui exploite la marque BIRDIA (anciennement BPartners).</p>
            <table>
              <tbody>
                <tr>
                  <td>Raison sociale</td>
                  <td>BPartners SAS, société par actions simplifiée</td>
                </tr>
                <tr>
                  <td>Nom commercial</td>
                  <td>BIRDIA</td>
                </tr>
                <tr>
                  <td>Capital social</td>
                  <td>6 000 €</td>
                </tr>
                <tr>
                  <td>Siège social</td>
                  <td>8 rue Puget, 75018 Paris</td>
                </tr>
                <tr>
                  <td>RCS</td>
                  <td>Paris 918 072 737</td>
                </tr>
                <tr>
                  <td>SIRET</td>
                  <td>918 072 737 00011</td>
                </tr>
                <tr>
                  <td>TVA intracommunautaire</td>
                  <td>
                    <mark className="todo">[À compléter : numéro de TVA]</mark>
                  </td>
                </tr>
                <tr>
                  <td>Contact</td>
                  <td>
                    <a href="mailto:contact@birdia.fr">contact@birdia.fr</a>, <a href="tel:+33182077228">+33 1 82 07 72 28</a>{' '}
                    <mark className="todo">[À compléter : choisir entre ce numéro (CGU) et le 06 68 62 48 36 (site)]</mark>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              Conformément aux dispositions de l'article 6 III-1 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (dite « LCEN
              »), nous vous informons que l'application BIRDIA est la propriété exclusive de la société BPartners SAS.
            </p>
            <p>
              BIRDIA est une plateforme SaaS d'analyse de toitures et d'actifs bâtis reposant sur des technologies d'intelligence artificielle et de traitement
              de données géospatiales, destinée aux professionnels. Pour le détail des services, l'Utilisateur est invité à se référer aux{' '}
              <Link to="/cgu">conditions générales d'utilisation</Link>.{' '}
              <mark className="todo">
                [À compléter : validation juridique : cette description remplace l'ancienne activité (devis, factures, encaissement, agrégation bancaire)]
              </mark>
            </p>
            <p>Son contenu éditorial, ainsi que l'ensemble des mises à jour, est géré par la société BPartners SAS.</p>

            <h2 id="credits">Crédits</h2>
            <table>
              <tbody>
                <tr>
                  <td>Direction de la publication</td>
                  <td>Monsieur Fonenantsoa Maurica Andrianampoizinimaro</td>
                </tr>
              </tbody>
            </table>

            <h2 id="hebergement">Hébergement</h2>
            <p>L'application est hébergée par :</p>
            <table>
              <tbody>
                <tr>
                  <td>Nom</td>
                  <td>Amazon Web Services (AWS)</td>
                </tr>
                <tr>
                  <td>Adresse</td>
                  <td>410 Terry Avenue North, Seattle, WA 98109, États-Unis</td>
                </tr>
                <tr>
                  <td>Coordonnées de contact</td>
                  <td>206-266-1000</td>
                </tr>
                <tr>
                  <td>Localisation des données</td>
                  <td>
                    <mark className="todo">[À compléter : région AWS utilisée (les CGU indiquent un hébergement européen)]</mark>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              Le site birdia.fr est hébergé par : <mark className="todo">[À compléter : hébergeur du nouveau site après la refonte]</mark>.
            </p>

            <h2 id="developpement">Développement de l'application</h2>
            <table>
              <tbody>
                <tr>
                  <td>Nom</td>
                  <td>BPartners SAS (BIRDIA)</td>
                </tr>
                <tr>
                  <td>Adresse</td>
                  <td>8 rue Puget, 75018 Paris</td>
                </tr>
                <tr>
                  <td>Coordonnées de contact</td>
                  <td>
                    <a href="mailto:contact@birdia.fr">contact@birdia.fr</a>
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 id="pi">2. Propriété intellectuelle</h2>
            <h3 style={h3Style}>Contenu de l'application</h3>
            <p>Le contenu de l'application est protégé par la loi, notamment par les dispositions du Code de la propriété intellectuelle.</p>
            <p>
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et
              photographiques.
            </p>
            <p>
              Vous n'êtes donc pas autorisé à modifier, distribuer, transmettre, diffuser, représenter, reproduire, publier, transférer ou vendre tout ou partie
              de cette application ou toutes listes de liens obtenues à partir de ce site, ni à créer des œuvres dérivées de ces documents ou listes de liens,
              sauf sur autorisation expresse préalable du Directeur de la publication.
            </p>
            <p>Tout lien avec la présente application doit faire l'objet d'un accord préalable de BIRDIA.</p>
            <h3 style={h3Style}>Utilisation des éléments graphiques de BIRDIA</h3>
            <ul>
              <li>
                BIRDIA dispose d'une charte graphique destinée à régir les usages du logo et autres éléments d'identification de BIRDIA. Ces éléments ne peuvent
                être utilisés sans l'accord exprès (autorisation écrite) et préalable de BIRDIA. Il en va de même pour les photos et illustrations figurant sur
                l'application, lesquelles sont également protégées par le Code de la propriété intellectuelle.
              </li>
              <li>
                L'éventuelle utilisation d'illustration ou de photographie présentée sur l'application devra faire l'objet d'une autorisation écrite et
                préalable, en contactant BIRDIA par email à l'adresse suivante : <a href="mailto:contact@birdia.fr">contact@birdia.fr</a>.
              </li>
            </ul>

            <h2 id="rgpd">3. Protection des données à caractère personnel</h2>
            <p>
              Conformément au règlement européen 2016/679 du 27 avril 2016 (dit RGPD, « Règlement Général sur la Protection des Données ») et à la loi française
              78-17 du 6 janvier 1978 (dite « Loi Informatique et Libertés ») modifiée, BIRDIA met en œuvre des mesures techniques, juridiques et
              organisationnelles renforcées pour protéger les données à caractère personnel des Utilisateurs de l'application.
            </p>
            <p>
              Pour plus d'informations concernant la protection des données à caractère personnel, l'Utilisateur est invité à consulter notre{' '}
              <Link to="/confidentialite">politique de protection des données</Link>.
            </p>

            <h2 id="contenus">4. Contenus de l'application et responsabilités</h2>
            <p>
              BIRDIA s'efforce de référencer des contenus fiables, actualisés et sécurisés. Malgré tout le soin que nous y apportons, des erreurs ou omissions
              peuvent toutefois apparaître. Nous ferons au mieux pour corriger les erreurs qui nous seront signalées.
            </p>
            <p>
              Les informations contenues sur l'application sont destinées à apporter des indications générales sur les sujets traités. BIRDIA ne peut être tenu
              responsable de l'utilisation et de l'interprétation de ces informations par les internautes.
            </p>
            <p>
              En outre, il est rappelé que chaque Utilisateur conserve la responsabilité des contenus qu'il souhaite intégrer sur l'application, BIRDIA ne
              pouvant effectuer qu'un contrôle a posteriori.
            </p>
            <h3 style={h3Style}>Liens hypertextes</h3>
            <ul>
              <li>BIRDIA est libre de référencer, de ne pas référencer et de supprimer à tout moment un lien vers tel ou tel site tiers.</li>
              <li>
                L'internaute qui accède aux sites ainsi pointés quitte l'application BIRDIA et reconnaît que ces derniers ne sont pas sous le contrôle de
                BIRDIA. Par conséquent, BIRDIA ne peut être tenu responsable ni des contenus proposés sur ces sites, ni des liens qu'ils contiennent, ni des
                changements qui leur sont apportés.
              </li>
              <li>
                BIRDIA ne peut pas être tenue pour responsable d'une transmission défectueuse des informations due aux aléas des différents réseaux composant
                Internet ainsi qu'aux incompatibilités dues au navigateur Internet utilisé par l'internaute pour consulter ce site.
              </li>
              <li>
                Plus généralement, BIRDIA ne saurait être tenu responsable de tous dommages, directs ou indirects, quelles qu'en soient les causes, origines,
                natures ou conséquences, quand bien même il aurait été avisé de la possibilité de tels dommages, provoqués par l'accès de quiconque à
                l'application et/ou de l'impossibilité d'y accéder, et/ou de toute utilisation de l'application, incluant toutes détériorations ou virus qui
                pourraient infecter votre équipement informatique ou tout autre bien, et/ou du crédit accordé à une quelconque information provenant directement
                ou indirectement de l'application.
              </li>
            </ul>
            <h3 style={h3Style}>Entreprises et personnes citées</h3>
            <ul>
              <li>
                Les informations relatives aux événements, entreprises et personnes cités sur l'application BIRDIA sont intégrées et mises à jour sur un mode
                déclaratif des personnes physiques ou morales concernées et n'engagent en rien la responsabilité de BIRDIA.
              </li>
              <li>
                Toute personne qui souhaiterait que des informations la concernant soient retirées d'un contenu de l'application peut en faire la demande en
                contactant directement BIRDIA. BIRDIA s'efforcera de traiter la demande de la personne concernée dans les meilleurs délais. À cet égard, une
                preuve d'identité pourra être demandée par BIRDIA à la personne concernée afin de confirmer son identité.
              </li>
            </ul>
            <h3 style={h3Style}>Adresses électroniques et numéros de téléphone mis en ligne</h3>
            <p>
              Ce type d'information est mis en ligne afin de permettre à l'internaute de contacter un professionnel référencé ou d'accéder rapidement à
              l'information recherchée. Ces adresses et numéros de téléphone ne peuvent être utilisés à d'autres fins et notamment à des fins de prospection
              commerciale.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

import { Fragment, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/confidentialite.css';

type TocItem = { href: string; label: string };

type DefinitionRow = { term: string; description: ReactNode };

type TableRow = { cells: [ReactNode, ReactNode] };

type Section = { id: string; title: string; body: ReactNode };

const subHeadingStyle = { fontSize: 16, fontWeight: 600, margin: '20px 0 6px' } as const;

const tocItems: TocItem[] = [
  { href: '#preambule', label: 'Préambule' },
  { href: '#definitions', label: 'Définitions' },
  { href: '#s1', label: '1. Qui collecte vos données (identification du responsable de traitement) ?' },
  { href: '#s2', label: '2. Quelles sont les activités et les services de BIRDIA ?' },
  { href: '#s3', label: '3. À quelles occasions des données à caractère personnel sont-elles collectées ?' },
  { href: '#s4', label: '4. Par quel intermédiaire des données à caractère personnel sont-elles collectées par BIRDIA ?' },
  { href: '#s5', label: '5. Pour quelles finalités BIRDIA collecte-t-elle des données à caractère personnel ?' },
  { href: '#s6', label: '6. Quels sont les fondements juridiques de la collecte des données à caractère personnel ?' },
  { href: '#s7', label: '7. Quelles sont les données collectées par BIRDIA ?' },
  { href: '#s8', label: '8. Comment BIRDIA assure-t-elle la sécurité de mes données ?' },
  { href: '#s9', label: '9. Pour quelle durée mes données peuvent-elles être conservées par BIRDIA ?' },
  { href: '#s10', label: '10. BIRDIA collecte-t-elle des données « sensibles » et/ou des données relatives à des enfants ?' },
  { href: '#s11', label: '11. Quelles sont les obligations à la charge des Utilisateurs ?' },
  { href: '#s12', label: '12. Caractère facultatif ou obligatoire des données à caractère personnel collectées' },
  {
    href: '#s13',
    label: '13. Mes données de contact vont-elles être utilisées à des fins publicitaires ? Vais-je recevoir des spams de BIRDIA ?',
  },
  { href: '#s14', label: '14. Automatisation des transmissions et des traitements' },
  { href: '#s15', label: '15. Où sont traitées les données collectées par BIRDIA ?' },
  { href: '#s16', label: '16. Qui sont les destinataires des données collectées ?' },
  { href: '#s17', label: '17. Nos Sous-Traitants' },
  { href: '#s18', label: '18. Quels sont les droits des Utilisateurs ?' },
  { href: '#s19', label: '19. Que deviennent mes données en cas de décès ? Qui aura accès aux données transmises ?' },
  { href: '#s20', label: '20. Comment les Utilisateurs sont-ils informés des modifications de la présente politique ?' },
  { href: '#s21', label: '21. Autorité de contrôle' },
  { href: '#s22', label: '22. Comment contacter BIRDIA ?' },
  { href: '#s23', label: '23. Cookies' },
];

const definitions: DefinitionRow[] = [
  {
    term: 'Application(s)',
    description:
      "Désigne l'interface numérique permettant aux Utilisateurs d'avoir accès aux Services par l'intermédiaire du Réseau Internet, à savoir le site www.birdia.fr et l'application BIRDIA disponible à l'adresse dashboard.birdia.fr ;",
  },
  {
    term: 'BIRDIA',
    description: (
      <>
        Désigne à la fois l&apos;Application disponible au profit des Utilisateurs et la société BPartners SAS, société par actions simplifiée au capital de 6
        000 euros, dont le siège social est sis 8 rue Puget, 75018 Paris, immatriculée au Registre du commerce et des sociétés de Paris sous le numéro 918 072
        737, représentée par son président, Monsieur Sofiane Madani ;
      </>
    ),
  },
  { term: 'Client(s)', description: "Désigne un Utilisateur de l'Application ayant bénéficié ou bénéficiant des Services ;" },
  {
    term: 'Donnée(s)',
    description:
      "Désigne tout élément (informations, textes, photographies, messages, etc.) collecté par l'Utilisateur et implémenté par lui au sein de l'Application et des Services au travers de son utilisation ;",
  },
  {
    term: 'Donnée(s) à caractère personnel',
    description: (
      <>
        Désigne aux termes de l&apos;article 4.1 du RGPD, toute information se rapportant à une personne physique identifiée ou identifiable ; est réputée être
        une « personne physique identifiable » une personne physique qui peut être identifiée, directement ou indirectement, notamment par référence à un
        identifiant, tel qu&apos;un nom, un numéro d&apos;identification, des données de localisation, un identifiant en ligne, ou à un ou plusieurs éléments
        spécifiques propres à son identité physique, physiologique, génétique, psychique, économique, culturelle ou sociale ;
      </>
    ),
  },
  {
    term: 'Espace Utilisateur',
    description:
      "Désigne un Espace Utilisateur accessible sur l'Application par l'intermédiaire des Moyens d'Accès, et permettant d'accéder aux Services dédiés aux Utilisateurs disposant d'un Espace Utilisateur ;",
  },
  { term: 'Fonctionnalité(s)', description: 'Désigne chaque élément implémenté, accessible et utilisable au sein des différents Services ;' },
  {
    term: 'Loi Informatique et Libertés',
    description: (
      <>
        Désigne la Loi n° 78-17 du 6 janvier 1978 relative à l&apos;informatique, aux fichiers et aux libertés, accessible sur{' '}
        <a href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000886460" target="_blank" rel="noopener">
          Légifrance
        </a>{' '}
        ;
      </>
    ),
  },
  {
    term: "Moyens d'Accès",
    description:
      "Désigne les méthodes et/ou fonctions par lesquelles l'Utilisateur peut accéder à un ou plusieurs Services afin de les utiliser pour ses propres besoins ;",
  },
  {
    term: 'Opérateur',
    description:
      'Désigne la société qui opère différents réseaux de télécommunications électroniques nécessaires à l&apos;accès et à l&apos;utilisation des Services ;',
  },
  { term: 'Politique', description: 'Désigne la présente politique en matière de Protection des Données à Caractère Personnel ;' },
  {
    term: 'Responsable de Traitement',
    description: (
      <>
        Désigne aux termes de l&apos;article 4.7 du RGPD, la personne physique ou morale, l&apos;autorité publique, le service ou un autre organisme qui, seul
        ou conjointement avec d&apos;autres, détermine les finalités et les moyens du traitement ; lorsque les finalités et les moyens de ce traitement sont
        déterminés par le droit de l&apos;Union ou le droit d&apos;un État membre, le responsable du traitement peut être désigné ou les critères spécifiques
        applicables à sa désignation peuvent être prévus par le droit de l&apos;Union ou par le droit d&apos;un État membre ;
      </>
    ),
  },
  {
    term: 'RGPD',
    description: (
      <>
        Désigne le règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016, accessible sur{' '}
        <a href="https://eur-lex.europa.eu/legal-content/FR/TXT/PDF/?uri=CELEX:32016R0679&from=FR" target="_blank" rel="noopener">
          EUR-Lex
        </a>{' '}
        ;
      </>
    ),
  },
  {
    term: 'Services',
    description: "Désigne l'ensemble des prestations mises à disposition de l'Utilisateur par BIRDIA et accessibles via les Moyens d'Accès ;",
  },
  {
    term: 'Sous-Traitant',
    description:
      "Désigne, aux termes de l'article 4.8 du RGPD, la personne physique ou morale, l'autorité publique, le service ou un autre organisme qui traite des données à caractère personnel pour le compte du Responsable du Traitement ;",
  },
  {
    term: 'Tiers',
    description: "Désigne des personnes physiques qui ne sont pas liées à BIRDIA ou d'autres individus sans relation avec BIRDIA et/ou l'Utilisateur ;",
  },
  {
    term: 'Traitement(s)',
    description:
      "Désigne toute opération ou tout ensemble d'opérations effectuées ou non à l'aide de procédés automatisés et appliqués à des données ou des ensembles de données à caractère personnel, tels que la collecte, l'enregistrement, l'organisation, la structuration, la conservation, l'adaptation ou la modification, l'extraction, la consultation, l'utilisation, la communication par transmission, la diffusion ou toute autre forme de mise à disposition, le rapprochement ou l'interconnexion, la limitation, l'effacement ou la destruction ;",
  },
  { term: 'Utilisateur(s)', description: 'Désigne toute personne physique accédant à une Application ainsi que toute personne bénéficiant des Services ;' },
];

const responsibleRows: TableRow[] = [
  { cells: ['Société', 'BPartners SAS (marque BIRDIA), société par actions simplifiée'] },
  { cells: ['Siège social', '8 rue Puget, 75018 Paris'] },
  { cells: ['SIREN', '918 072 737'] },
  { cells: ["Responsable de l'Application", 'M. Sofiane Madani'] },
  {
    cells: [
      'Contact',
      <a key="contact" href="mailto:contact@birdia.fr">
        contact@birdia.fr
      </a>,
    ],
  },
];

const retentionRows: TableRow[] = [
  {
    cells: [<strong key="t">Type de données</strong>, <strong key="d">Durée de conservation</strong>],
  },
  {
    cells: [
      'Données utilisées pour la création et la mise à jour du profil des Clients',
      "Durée de l'Espace Utilisateur. En cas d'inactivité continue de 12 mois, BIRDIA pourra être amenée à supprimer le Compte après information préalable de l'Utilisateur.",
    ],
  },
  { cells: ['Données de facturation', "10 ans à compter de la clôture de l'exercice comptable de BIRDIA"] },
  {
    cells: ["Données de statistiques de mesures d'audience et données de fréquentation brutes de l'Application", '13 mois'],
  },
  { cells: ['Données liées aux enquêtes de satisfaction et avis clients', '36 mois'] },
];

const subProcessorsRows: TableRow[] = [
  {
    cells: [<strong key="s">Sous-traitant, pays</strong>, <strong key="u">Utilisation et politique RGPD</strong>],
  },
  {
    cells: [
      'Amazon Web Services (AWS), FR',
      <>
        Cloud et authentification (Cognito) :{' '}
        <a href="https://aws.amazon.com/fr/compliance/gdpr-center/" target="_blank" rel="noopener">
          politique RGPD
        </a>
      </>,
    ],
  },
  {
    cells: [
      'Fintecture, FR',
      <>
        Paiement :{' '}
        <a href="https://www.fintecture.com/en/privacy_fr/" target="_blank" rel="noopener">
          politique RGPD
        </a>{' '}
        <mark className="todo">[À compléter : toujours utilisé ? sinon retirer]</mark>
      </>,
    ],
  },
  {
    cells: [
      'Bridge, FR',
      <>
        Agrégation bancaire :{' '}
        <a href="https://bridgeapi.io/en/regulation-and-compliance/" target="_blank" rel="noopener">
          politique RGPD
        </a>{' '}
        <mark className="todo">[À compléter : service de l&apos;ancienne application : retirer si abandonné]</mark>
      </>,
    ],
  },
];

const sections: Section[] = [
  {
    id: 's1',
    title: '1. Qui collecte vos données (identification du responsable de traitement) ?',
    body: (
      <>
        <p>Le Responsable de Traitement en matière de Données à Caractère Personnel est :</p>
        <table>
          <tbody>
            {responsibleRows.map((row, index) => (
              <tr key={index}>
                <td>{row.cells[0]}</td>
                <td>{row.cells[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          Ainsi, nous déterminons les moyens ainsi que la finalité de la collecte des Traitements de Données à Caractère Personnel nécessaires à
          l&apos;utilisation des Services par l&apos;Utilisateur, ainsi que d&apos;autres Données nécessaires à l&apos;établissement de la relation
          contractuelle, son suivi et son amélioration.
        </p>
      </>
    ),
  },
  {
    id: 's2',
    title: '2. Quelles sont les activités et les services de BIRDIA ?',
    body: (
      <>
        <p>
          BIRDIA est une plateforme SaaS d&apos;analyse de toitures et d&apos;actifs bâtis reposant sur des technologies d&apos;intelligence artificielle et de
          traitement de données géospatiales, destinée aux professionnels (couvreurs et métiers du bâti, assureurs, collectivités).{' '}
          <mark className="todo">
            [À compléter : validation juridique : ce paragraphe remplace l&apos;ancienne description (assistant bancaire, devis, factures, encaissement,
            agrégation bancaire)]
          </mark>
        </p>
        <p>Ainsi, et sous réserve de disposer d&apos;un Espace Utilisateur, l&apos;Application BIRDIA permet notamment aux Utilisateurs :</p>
        <ul>
          <li>d&apos;analyser automatiquement l&apos;état des toitures à partir d&apos;images aériennes et satellitaires ;</li>
          <li>de réaliser des métrés, mesures et prises de cotes à distance ;</li>
          <li>de générer des rapports PDF et des exports structurés ;</li>
          <li>de suivre leurs clients et prospects au sein de l&apos;Espace Utilisateur.</li>
        </ul>
        <p>
          Pour une description plus détaillée des activités et des Services de BIRDIA, nous vous invitons à consulter les{' '}
          <Link to="/cgu">conditions générales d&apos;utilisation</Link>.
        </p>
        <p>
          L&apos;Application BIRDIA est disponible pour le territoire français uniquement, et en langue française.{' '}
          <mark className="todo">[À compléter : confirmer (les CGU visent la France et l&apos;Espace économique européen)]</mark>
        </p>
        <p>
          Afin de pouvoir vous proposer les Services les plus adaptés à vos attentes, il nous est nécessaire de collecter et traiter un certain nombre de
          Données à Caractère Personnel. Pour cela, nous collectons notamment des informations relatives à votre personne.
        </p>
        <p>
          À cet égard, BIRDIA n&apos;est amenée qu&apos;à collecter et traiter des Données à Caractère Personnel strictement nécessaires et limitées à la
          réalisation et l&apos;amélioration des Services ainsi qu&apos;aux diverses obligations juridiques, comptables et fiscales de BIRDIA.
        </p>
      </>
    ),
  },
  {
    id: 's3',
    title: '3. À quelles occasions des données à caractère personnel sont-elles collectées ?',
    body: (
      <>
        <p>Sur l&apos;Application, des Données à Caractère Personnel sont collectées par BIRDIA :</p>
        <ul>
          <li>lors des visites sur notre Application (coordonnées de connexion) ;</li>
          <li>lors du remplissage d&apos;un ou plusieurs formulaires sur l&apos;Application ;</li>
          <li>lors de la création et de la gestion de l&apos;Espace Utilisateur ;</li>
          <li>lors de nos échanges et vos actions sur nos pages de réseaux sociaux ;</li>
          <li>à l&apos;occasion du suivi de la relation entre BIRDIA et les Clients.</li>
        </ul>
        <p>Une fois la relation contractuelle établie, un certain nombre de Données à Caractère Personnel seront collectées par BIRDIA.</p>
      </>
    ),
  },
  {
    id: 's4',
    title: '4. Par quel intermédiaire des données à caractère personnel sont-elles collectées par BIRDIA ?',
    body: (
      <>
        <h3 style={subHeadingStyle}>4.1. Canaux de collecte des données à caractère personnel sur Internet</h3>
        <p>Des Données à Caractère Personnel sont collectées par BIRDIA par l&apos;intermédiaire :</p>
        <ul>
          <li>de l&apos;Application ;</li>
          <li>des contacts directs (téléphone, mail, visite, etc.) entre l&apos;Utilisateur et BIRDIA ;</li>
          <li>de nos réseaux sociaux.</li>
        </ul>
        <p>
          Ainsi, BIRDIA possède des pages dédiées sur les réseaux sociaux suivants :{' '}
          <mark className="todo">[À compléter : vérifier les adresses des comptes (reconstituées depuis l&apos;ancienne politique)]</mark>
        </p>
        <ul>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100086704691881" target="_blank" rel="noopener">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/bpartners-artisans/" target="_blank" rel="noopener">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/bpartners.artisans/" target="_blank" rel="noopener">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://twitter.com/BpartnersArtk" target="_blank" rel="noopener">
              X (Twitter)
            </a>
          </li>
        </ul>
        <p>BIRDIA est co-responsable de traitement des pages présentes sur les réseaux sociaux listés ci-dessus.</p>
        <p>
          Pour toute difficulté à l&apos;occasion de l&apos;utilisation des pages listées ci-avant, l&apos;Utilisateur peut contacter l&apos;opérateur en
          question (Facebook, X ou autre), soit contacter BIRDIA.
        </p>
        <h3 style={subHeadingStyle}>4.2. Détails concernant l&apos;utilisation des réseaux sociaux</h3>
        <p>
          L&apos;Application utilise des boutons et des intégrations de réseaux sociaux sur ses pages, qui peuvent ainsi intégrer des liens vers leurs pages sur
          les réseaux.
        </p>
        <p>
          La plupart des liens présents sur notre Application contenant du contenu de réseaux sociaux renvoient vers les sites et outils en question, et ne sont
          pas directement intégrés à la page.
        </p>
        <p>
          Si vous cliquez sur un bouton de partage et/ou de lecture de contenu, une nouvelle fenêtre s&apos;affichera et vous pourrez accéder au contenu (le cas
          échéant en ayant renseigné vos données de connexion au service concerné).
        </p>
        <p>
          Pour plus d&apos;informations et pour l&apos;exercice de vos droits concernant les méthodes de protection et de sécurité de ces fournisseurs tiers,
          nous vous invitons à vous connecter directement sur les pages listées à l&apos;article 4.1.
        </p>
      </>
    ),
  },
  {
    id: 's5',
    title: '5. Pour quelles finalités BIRDIA collecte-t-elle des données à caractère personnel ?',
    body: (
      <>
        <p>BIRDIA collecte vos Données à Caractère Personnel pour les finalités suivantes :</p>
        <ul>
          <li>fourniture des Services tels que décrits ci-avant ;</li>
          <li>établissement et suivi de la relation contractuelle ;</li>
          <li>gestion des prospects Client ;</li>
          <li>facturation ;</li>
          <li>gestion des demandes de droits d&apos;accès, de rectification, de portabilité (le cas échéant) et d&apos;opposition ;</li>
          <li>analyses statistiques.</li>
        </ul>
        <p>La collecte des Données est strictement limitée à la réalisation et au suivi des finalités évoquées ci-avant.</p>
      </>
    ),
  },
  {
    id: 's6',
    title: '6. Quels sont les fondements juridiques de la collecte des données à caractère personnel ?',
    body: (
      <>
        <p>
          L&apos;article 6 du RGPD énonce qu&apos;un traitement n&apos;est licite qu&apos;à condition qu&apos;au moins l&apos;une des conditions suivantes soit
          remplie :
        </p>
        <p>« a) la personne concernée a consenti au traitement de ses données à caractère personnel pour une ou plusieurs finalités spécifiques ;</p>
        <p>
          b) le traitement est nécessaire à l&apos;exécution d&apos;un contrat auquel la personne concernée est partie ou à l&apos;exécution de mesures
          précontractuelles prises à la demande de celle-ci ;
        </p>
        <p>c) le traitement est nécessaire au respect d&apos;une obligation légale à laquelle le responsable du traitement est soumis ;</p>
        <p>d) le traitement est nécessaire à la sauvegarde des intérêts vitaux de la personne concernée ou d&apos;une autre personne physique ;</p>
        <p>
          e) le traitement est nécessaire à l&apos;exécution d&apos;une mission d&apos;intérêt public ou relevant de l&apos;exercice de l&apos;autorité publique
          dont est investi le responsable du traitement ;
        </p>
        <p>
          f) le traitement est nécessaire aux fins des intérêts légitimes poursuivis par le responsable du traitement ou par un tiers, à moins que ne prévalent
          les intérêts ou les libertés et droits fondamentaux de la personne concernée qui exigent une protection des données à caractère personnel, notamment
          lorsque la personne concernée est un enfant.
        </p>
        <p>
          Le point f) du premier alinéa ne s&apos;applique pas au traitement effectué par les autorités publiques dans l&apos;exécution de leurs missions. »
        </p>
        <p>À cet égard, BIRDIA rappelle que les Traitements effectués reposent sur :</p>
        <ul>
          <li>la nécessité relative à l&apos;exécution de la relation précontractuelle et contractuelle ;</li>
          <li>le respect d&apos;obligations légales, notamment en matière comptable, fiscale et d&apos;identification des personnes ;</li>
          <li>l&apos;intérêt légitime du Responsable de traitement ;</li>
          <li>le consentement de la Personne, pour certains traitements spécifiques limitativement listés ci-après.</li>
        </ul>
        <p>
          En tout état de cause, nous nous assurons de ne pas méconnaître votre intérêt ou vos droits et libertés fondamentaux en vous permettant, à tout
          moment, de vous opposer à tout ou partie des traitements décrits dans la présente Politique de Protection des Données personnelles.
        </p>
        <p>Le détail de vos droits concernant les Données à Caractère Personnel collectées par BIRDIA est défini ci-après.</p>
        <p>Dans ce cadre, en cas d&apos;opposition, nous vous informerons des conséquences de cette opposition sur la réalisation de la prestation demandée.</p>
      </>
    ),
  },
  {
    id: 's7',
    title: '7. Quelles sont les données collectées par BIRDIA ?',
    body: (
      <>
        <p>Dans le cadre de nos Services, nous sommes amenés à collecter et traiter les Données à Caractère Personnel suivantes :</p>
        <ul>
          <li>
            <strong>Collecte reposant sur l&apos;établissement de relation contractuelle ou précontractuelle :</strong> coordonnées de contact des prospects
            (futurs clients) : nom, prénom, adresse mail, adresse postale, numéros de téléphone, objet du message et message (champ texte libre) ;
          </li>
          <li>
            <strong>Collecte reposant sur des obligations légales :</strong> coordonnées de facturation : nom, prénom, adresse, détail commande, réduction,
            montant de la facturation, montant des remises et avantages, date de paiement, incident de paiement, mode de paiement utilisé, contentieux éventuel
            ;
          </li>
          <li>
            <strong>Collecte reposant sur l&apos;intérêt légitime :</strong> données liées à l&apos;utilisation et au contrôle des équipements informatiques
            (données liées à l&apos;utilisation des équipements fournis par l&apos;intermédiaire de l&apos;Application) ; données de suivi et marketing :
            adresse IP, données de connexion (dates, nombre de connexions) ;
          </li>
          <li>
            <strong>Collecte reposant sur votre consentement :</strong> adresse email dans le cadre d&apos;une prospection commerciale à destination de
            particuliers (abonnement à la newsletter de BIRDIA).
          </li>
        </ul>
        <p>
          <mark className="todo">
            [À compléter : ajouter les données des formulaires du nouveau site (profil, organisation, adresse du bâtiment, paramètres UTM) et les
            adresses/fichiers téléversés sur la plateforme (BIRDIA sous-traitant, CGU art. 12.2)]
          </mark>
        </p>
      </>
    ),
  },
  {
    id: 's8',
    title: '8. Comment BIRDIA assure-t-elle la sécurité de mes données ?',
    body: (
      <>
        <p>
          Au regard des Données traitées, BIRDIA accorde une importance fondamentale à la sécurité et la confidentialité des Données que vous êtes amenés à nous
          communiquer.
        </p>
        <p>Cette Politique se traduit par la sélection de Sous-Traitants et de partenaires répondant aux normes édictées par la réglementation en vigueur.</p>
        <p>En outre, chaque collaborateur de BIRDIA s&apos;engage à respecter une politique stricte en matière de sécurité et de confidentialité.</p>
        <p>
          En synthèse, BIRDIA met en œuvre des éléments juridiques et organisationnels permettant d&apos;assurer la meilleure protection possible au regard de
          la typologie et des finalités des Données à Caractère Personnel collectées afin de protéger lesdites Données contre l&apos;altération, la perte
          accidentelle ou illicite, l&apos;utilisation, la divulgation ou l&apos;accès non autorisé.
        </p>
        <p>À cet égard, BIRDIA accorde une importance fondamentale à :</p>
        <ul>
          <li>la sensibilisation de ses collaborateurs aux exigences de confidentialité ;</li>
          <li>la soumission de ses Sous-Traitants au respect de leurs obligations de confidentialité ;</li>
          <li>la sécurisation de l&apos;accès à ses locaux et à ses plateformes informatiques ;</li>
          <li>la sécurisation de l&apos;accès, du partage et du transfert des Données ;</li>
          <li>la mise en œuvre d&apos;une politique générale de sécurité informatique ;</li>
          <li>
            la sélection exigeante de partenaires et prestataires en fonction de leur conformité au RGPD notamment ainsi qu&apos;aux autres obligations
            réglementaires applicables en France.
          </li>
        </ul>
        <h3 style={subHeadingStyle}>8.1. Stockage des données</h3>
        <p>
          Les Données à Caractère Personnel sont stockées sur des serveurs bénéficiant d&apos;une sécurité adaptée, situés en Europe et bénéficiant des normes
          de sécurité adéquates au regard des Données traitées.
        </p>
        <h3 style={subHeadingStyle}>8.2. Obligation de confidentialité</h3>
        <p>
          L&apos;intégralité des collaborateurs de BIRDIA est soumise à une stricte obligation de confidentialité et est sensibilisée au respect des
          dispositions de la réglementation en matière de protection des Données à Caractère Personnel.
        </p>
        <p>
          Par ailleurs, l&apos;intégralité des Sous-Traitants sélectionnés par BIRDIA a affirmé respecter ses obligations en la matière et est soumise à une
          obligation de confidentialité.
        </p>
        <h3 style={subHeadingStyle}>8.3. Identifiants de connexion</h3>
        <p>Tout accès à l&apos;Espace Utilisateur nécessite la communication d&apos;un identifiant unique et d&apos;un mot de passe personnel.</p>
        <p>Le mot de passe est strictement personnel et ne doit en aucun cas être communiqué à un Tiers.</p>
        <p>Nous rappelons par ailleurs que BIRDIA ou n&apos;importe lequel de nos partenaires ne vous demandera jamais accès à votre mot de passe personnel.</p>
        <p>
          Dans l&apos;hypothèse où vous recevriez une demande relative à un renouvellement de mot de passe alors que vous ne l&apos;aviez pas sollicité, nous
          vous invitons à ignorer cette demande et à prendre attache dans les meilleurs délais avec BIRDIA. Dans ce cadre, un justificatif d&apos;identité
          pourra vous être demandé.
        </p>
        <p>
          En cas de perte de mot de passe, un Client pourra demander le renouvellement de son mot de passe par l&apos;intermédiaire de la procédure présente sur
          l&apos;Application.
        </p>
      </>
    ),
  },
  {
    id: 's9',
    title: '9. Pour quelle durée mes données peuvent-elles être conservées par BIRDIA ?',
    body: (
      <>
        <p>Vous trouverez ci-dessous une liste des principales durées de conservation appliquées par BIRDIA.</p>
        <table>
          <tbody>
            {retentionRows.map((row, index) => (
              <tr key={index}>
                <td>{row.cells[0]}</td>
                <td>{row.cells[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          Par principe, BIRDIA supprime les Données collectées à l&apos;issue de la relation contractuelle, à savoir dès que l&apos;Utilisateur clôture son
          Espace Utilisateur, le cas échéant.
        </p>
        <p>
          En cas d&apos;inactivité du Compte de l&apos;Utilisateur (absence de connexion à l&apos;Application, etc.) durant une période continue de 12 mois, les
          Données collectées seront supprimées de manière sécurisée. Préalablement à cette suppression, BIRDIA pourra être amenée à solliciter de
          l&apos;Utilisateur son accord afin de continuer à bénéficier de son Espace Utilisateur, ce qui impliquerait la conservation des Données par BIRDIA.
        </p>
        <p>
          En l&apos;absence de réponse positive de la part de l&apos;Utilisateur, les Données seront automatiquement supprimées de manière définitive et
          sécurisée, à l&apos;exception de certaines Données statistiques qui seront anonymisées et pourront être utilisées afin d&apos;améliorer
          l&apos;expérience client de BIRDIA.
        </p>
        <p>
          Il est précisé qu&apos;en cas de suppression de l&apos;Espace Utilisateur, l&apos;intégralité des Données présentes sera supprimée, à l&apos;exception
          des Données à Caractère Personnel pouvant être conservées par BIRDIA sur le fondement de l&apos;obligation légale et au regard des normes applicables
          au traitement en question.
        </p>
        <p>
          À l&apos;issue des durées de conservation précitées, BIRDIA supprimera l&apos;intégralité des Données à Caractère Personnel de manière définitive et
          sécurisée. Sur demande, l&apos;Utilisateur pourra par ailleurs recevoir copie des Données collectées par BIRDIA jusqu&apos;à la suppression de son
          Espace Utilisateur.
        </p>
        <p>
          Imprimées sur papier, les Données à Caractère Personnel seront détruites en toute sécurité, notamment par déchiquetage croisé ou incinération des
          documents papier ou autrement et, si elles sont sauvegardées sous forme électronique, elles seront détruites.
        </p>
        <p>
          BIRDIA se réserve par ailleurs le droit de conserver des Données statistiques strictement anonymisées pour une durée supérieure aux durées évoquées
          ci-avant à des fins de recherche et de publication scientifique exclusivement.
        </p>
        <p>
          <mark className="todo">[À compléter : harmoniser avec les CGU art. 16.3 : données du Client conservées 30 jours après résiliation]</mark>
        </p>
      </>
    ),
  },
  {
    id: 's10',
    title: '10. BIRDIA collecte-t-elle des données « sensibles » et/ou des données relatives à des enfants ?',
    body: (
      <>
        <p>
          Il est rappelé que les Données « sensibles » sont définies comme suit par le RGPD : « Information concernant l&apos;origine raciale ou ethnique, les
          opinions politiques, philosophiques ou religieuses, l&apos;appartenance syndicale, la santé ou la vie sexuelle. En principe, les données sensibles ne
          peuvent être recueillies et exploitées qu&apos;avec le consentement explicite des personnes. »
        </p>
        <p>
          À cet égard, BIRDIA précise qu&apos;elle n&apos;est en principe pas amenée à collecter des Données sensibles transmises par l&apos;Utilisateur à
          l&apos;occasion de la fourniture de Services.
        </p>
        <p>
          Les Données sensibles pouvant être collectées par BIRDIA ne le seraient que par l&apos;intermédiaire des outils d&apos;expertise mis à disposition de
          l&apos;Utilisateur.
        </p>
        <p>
          À cet égard, l&apos;Utilisateur s&apos;engage à ne pas communiquer d&apos;information et de Données sensibles concernant sa personne ou un Tiers à
          l&apos;occasion de la personnalisation du Produit, et à limiter les informations et Données transmises sur l&apos;Application à ce qui est strictement
          nécessaire.
        </p>
        <p>
          S&apos;agissant des Données à Caractère Personnel relatives à des personnes mineures, il est par ailleurs rappelé que le Considérant n° 38 du RGPD
          dispose que : « Les enfants méritent une protection spécifique en ce qui concerne leurs Données à Caractère Personnel parce qu&apos;ils peuvent être
          moins conscients des risques, des conséquences et des garanties concernées et de leurs droits liés au traitement des Données à Caractère Personnel.
          Cette protection spécifique devrait, notamment, s&apos;appliquer à l&apos;utilisation de Données à Caractère Personnel relatives aux enfants à des
          fins de marketing ou de création de profils de personnalité ou d&apos;utilisateur et à la collecte de Données à Caractère Personnel relatives aux
          enfants lors de l&apos;utilisation de services proposés directement à un enfant. Le consentement du titulaire de la responsabilité parentale ne
          devrait pas être nécessaire dans le cadre de services de prévention ou de conseil proposés directement à un enfant. »
        </p>
        <p>
          Il est ainsi rappelé que l&apos;article 7-1 de la Loi Informatique et Libertés fixe à 15 ans la limite d&apos;âge relative à l&apos;utilisation de
          Données à Caractère Personnel.
        </p>
        <p>À cet égard, il est rappelé que la création d&apos;un Compte est réservée aux personnes majeures.</p>
        <p>Dans ce cadre, BIRDIA n&apos;a pas vocation à collecter de Données à Caractère Personnel de personnes mineures de moins de 15 ans.</p>
      </>
    ),
  },
  {
    id: 's11',
    title: '11. Quelles sont les obligations à la charge des Utilisateurs ?',
    body: (
      <>
        <p>
          À titre liminaire, l&apos;Utilisateur doit veiller à utiliser des programmes d&apos;accès à Internet reconnus et à jour, y compris les différents
          modules annexes permettant d&apos;accéder aux Services.
        </p>
        <p>L&apos;Utilisateur s&apos;oblige à communiquer à BIRDIA des informations exactes et à jour, le concernant directement.</p>
        <p>
          À cet égard, chaque Utilisateur s&apos;engage, lorsqu&apos;il transmet des Données sur l&apos;Application ou en direct, à respecter les{' '}
          <Link to="/cgu">conditions générales</Link> de BIRDIA.
        </p>
        <p>
          L&apos;Utilisateur s&apos;oblige enfin à ne pas communiquer (par mail par exemple) des informations n&apos;étant pas expressément demandées par BIRDIA
          et nécessaires à la réalisation des Services.
        </p>
      </>
    ),
  },
  {
    id: 's12',
    title: '12. Caractère facultatif ou obligatoire des données à caractère personnel collectées',
    body: (
      <>
        <p>
          Seules les Données fournies dans un champ de formulaire marqué d&apos;un astérisque (*) sont obligatoires afin de bénéficier des Services de BIRDIA.
        </p>
        <p>
          L&apos;intégralité des Données complémentaires fournies par l&apos;Utilisateur ne sont pas obligatoires et peuvent être transmises de manière
          facultative par l&apos;Utilisateur, afin d&apos;améliorer son expérience Utilisateur sur l&apos;Application et permettre à BIRDIA de personnaliser son
          expérience.
        </p>
      </>
    ),
  },
  {
    id: 's13',
    title: '13. Mes données de contact vont-elles être utilisées à des fins publicitaires ? Vais-je recevoir des spams de BIRDIA ?',
    body: (
      <>
        <p>BIRDIA n&apos;effectue pas de prospection commerciale via l&apos;envoi d&apos;emails sans l&apos;accord préalable de l&apos;Utilisateur concerné.</p>
        <p>
          Il est rappelé que, conformément aux dispositions réglementaires et légales applicables, BIRDIA ne pourra vous envoyer d&apos;offres marketing ou
          d&apos;offres commerciales qu&apos;à condition que vous ayez donné votre consentement clair, non équivoque et explicite afin de recevoir de tels
          éléments.
        </p>
        <p>
          À cet égard, des coches d&apos;acceptation sont prévues sur l&apos;Application afin de recueillir votre consentement sur ce point. Il est par ailleurs
          possible, à tout moment, de retirer ce consentement afin de ne plus être destinataire de telles offres.
        </p>
        <p>À cet égard, le Client pourra accepter les CGU de BIRDIA sans donner son consentement à l&apos;envoi d&apos;offres publicitaires complémentaires.</p>
        <p>
          Il est rappelé que durant l&apos;ensemble de la relation contractuelle entre l&apos;Utilisateur et BIRDIA, BIRDIA pourra transmettre à
          l&apos;Utilisateur des offres publicitaires par courrier électronique, aux fins de prospection, pour des produits et services analogues à ceux de
          BIRDIA, ou si la prospection n&apos;est pas de nature commerciale.
        </p>
        <p>
          L&apos;Utilisateur disposera d&apos;un moyen de s&apos;opposer gratuitement et simplement à la réception de mails de prospection, en se désinscrivant
          de la base de données emailing de BIRDIA en cliquant sur le bouton dédié à cette fin, présent dans chaque mail envoyé par BIRDIA.
        </p>
        <p>
          En tout état de cause, chaque email envoyé par BIRDIA sera signé et indiquera clairement l&apos;identité de son auteur, ainsi qu&apos;une méthode de
          désinscription.
        </p>
        <p>
          Dans l&apos;hypothèse où des communications signées de BIRDIA vous seraient envoyées et ne comporteraient pas ces mentions, nous vous invitons à
          contacter BIRDIA dans les plus brefs délais.
        </p>
      </>
    ),
  },
  {
    id: 's14',
    title: '14. Automatisation des transmissions et des traitements',
    body: (
      <>
        <p>Les Données à Caractère Personnel collectées par BIRDIA ne font pas l&apos;objet de décisions exclusivement basées sur une automatisation.</p>
        <p>
          Une automatisation de la prise de décision ou du traitement peut être réalisée de manière annexe, mais restera toujours sous le contrôle d&apos;une
          personne humaine.
        </p>
      </>
    ),
  },
  {
    id: 's15',
    title: '15. Où sont traitées les données collectées par BIRDIA ?',
    body: (
      <>
        <p>
          BIRDIA traite majoritairement les Données sur des serveurs situés en France.{' '}
          <mark className="todo">
            [À compléter : vérifier : l&apos;ancienne version parlait de « serveurs internes » alors que l&apos;hébergement est chez AWS]
          </mark>
        </p>
        <p>
          Nos Sous-Traitants sont majoritairement établis au sein de l&apos;Espace économique européen. De manière marginale et pour certains Services
          spécifiques, les Données recueillies par BIRDIA pourraient être transmises à des Sous-Traitants établis en dehors de l&apos;Union européenne.
        </p>
        <p>
          Dans cette situation, BIRDIA s&apos;assure que les garanties appropriées sont apportées par les Sous-Traitants en question pour encadrer tout
          transfert de Données à Caractère Personnel en souscrivant des contrats spécifiques s&apos;assurant notamment du maintien du respect des droits des
          Utilisateurs.
        </p>
      </>
    ),
  },
  {
    id: 's16',
    title: '16. Qui sont les destinataires des données collectées ?',
    body: (
      <>
        <p>
          Les Données à Caractère Personnel collectées par BIRDIA peuvent être transmises aux Sous-Traitants sélectionnés par BIRDIA, à condition que lesdites
          Données soient nécessaires à l&apos;exercice de leurs missions.
        </p>
        <p>
          Il se peut que vos Données à Caractère Personnel soient également communiquées à des Tiers. Dans ce cas, BIRDIA ne pourra le faire qu&apos;après avoir
          demandé et obtenu votre autorisation préalable et explicite.
        </p>
        <p>En dehors de ces situations, BIRDIA ne transfère et ne cède aucune Donnée concernant directement ou indirectement ses Utilisateurs à des Tiers.</p>
        <p>
          Si vous souhaitez avoir accès à la liste détaillée de nos Sous-Traitants, vous pouvez contacter directement BIRDIA en utilisant le{' '}
          <Link to="/contact-demo">formulaire de contact</Link> ou aux coordonnées indiquées à l&apos;article 22 de la présente politique de protection des
          Données.
        </p>
      </>
    ),
  },
  {
    id: 's17',
    title: '17. Nos Sous-Traitants',
    body: (
      <>
        <p>BIRDIA a recours à des Sous-Traitants afin de faire bénéficier ses Utilisateurs des meilleurs Services.</p>
        <p>Les principaux Sous-Traitants de BIRDIA dans le cadre de la présente Politique de Protection des Données sont les suivants :</p>
        <table>
          <tbody>
            {subProcessorsRows.map((row, index) => (
              <tr key={index}>
                <td>{row.cells[0]}</td>
                <td>{row.cells[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          <mark className="todo">
            [À compléter : ajouter les sous-traitants actuels : fournisseurs d&apos;images aériennes, outil de formulaires / CRM, emailing, analytics, hébergeur
            du site]
          </mark>
        </p>
        <p>
          Si vous souhaitez avoir accès à la liste détaillée de nos Sous-Traitants, vous pouvez contacter directement BIRDIA en utilisant le{' '}
          <Link to="/contact-demo">formulaire de contact</Link> ou aux coordonnées indiquées à l&apos;article 22 de la présente politique de protection des
          Données.
        </p>
      </>
    ),
  },
  {
    id: 's18',
    title: '18. Quels sont les droits des Utilisateurs ?',
    body: (
      <>
        <p>
          Conformément à la réglementation générale européenne en vigueur sur la protection des données, chaque Utilisateur a le droit d&apos;obtenir
          gratuitement des informations concernant les Données à Caractère Personnel collectées par BIRDIA.
        </p>
        <p>Vos droits et réclamations sont notamment les suivants :</p>
        <ul>
          <li>Article 15 RGPD : droit à l&apos;information sur la manière dont les Données à Caractère Personnel sont traitées par BIRDIA ;</li>
          <li>
            Article 16 RGPD : droit de rectification des Données à Caractère Personnel collectées par BIRDIA par l&apos;intermédiaire du Compte ou en contactant
            directement BIRDIA ;
          </li>
          <li>Article 17 RGPD : droit à l&apos;effacement, ce droit ne concernant pas l&apos;intégralité des Données collectées ;</li>
          <li>
            Article 20 RGPD : droit à un transfert des données (portabilité), ce droit ne concernant que les Données collectées sur le fondement du consentement
            et de l&apos;établissement de la relation contractuelle ;
          </li>
          <li>Article 21 RGPD : droit d&apos;opposition.</li>
        </ul>
        <p>Pour toute demande dans ce cadre, l&apos;Utilisateur peut adresser sa demande aux coordonnées indiquées à l&apos;article 22.</p>
        <p>
          Le cas échéant, BIRDIA pourra être amenée à vous réclamer certains éléments complémentaires (preuve d&apos;identité, identifiant, etc.) afin de
          s&apos;assurer de votre identité dans le cadre de l&apos;exercice de vos droits.
        </p>
      </>
    ),
  },
  {
    id: 's19',
    title: '19. Que deviennent mes données en cas de décès ? Qui aura accès aux données transmises ?',
    body: (
      <>
        <p>BIRDIA peut être amenée à disposer de Données à Caractère Personnel relatives à une personne décédée.</p>
        <p>
          Dans ce cas, la loi n° 2016-1321 du 7 octobre 2016 pose comme principe que les droits personnels du défunt s&apos;éteignent au décès de leur
          titulaire.
        </p>
        <p>Cependant, la réglementation prévoit deux exceptions dans lesquelles ces droits peuvent être provisoirement maintenus :</p>
        <ul>
          <li>
            le défunt a pris des directives visant à permettre à toute personne, de son vivant, d&apos;organiser les conditions de conservation,
            d&apos;effacement et de communication de ses données à caractère personnel après son décès ;
          </li>
          <li>
            en l&apos;absence de directives ou de mentions contraires émanant du défunt, il est prévu que les héritiers pourront « dans la mesure du nécessaire
            » exercer les droits relatifs :
          </li>
          <li>
            « à l&apos;organisation et au règlement de la succession du défunt. À ce titre, les héritiers peuvent accéder aux traitements de données à caractère
            personnel qui le concernent afin d&apos;identifier et d&apos;obtenir communication des informations utiles à la liquidation et au partage de la
            succession. Ils peuvent aussi recevoir communication des biens numériques ou des données s&apos;apparentant à des souvenirs de famille,
            transmissibles aux héritiers » ;
          </li>
          <li>
            « à la prise en compte, par les responsables de traitement, de son décès. À ce titre, les héritiers peuvent faire procéder à la clôture des comptes
            utilisateurs du défunt, s&apos;opposer à la poursuite des traitements de données à caractère personnel le concernant ou faire procéder à leur mise à
            jour ».
          </li>
        </ul>
        <p>
          Dans l&apos;hypothèse où vous souhaiteriez que BIRDIA recueille vos directives en matière de transmission de Données à Caractère Personnel
          post-mortem, nous vous invitons à nous contacter aux coordonnées indiquées à l&apos;article 22 de la présente Politique.
        </p>
      </>
    ),
  },
  {
    id: 's20',
    title: '20. Comment les Utilisateurs sont-ils informés des modifications de la présente politique ?',
    body: (
      <>
        <p>BIRDIA peut modifier la présente Politique de Protection des Données à tout moment.</p>
        <p>BIRDIA informera les Utilisateurs par tout moyen des modifications apportées à la présente.</p>
        <p>
          BIRDIA invite les Utilisateurs à prendre régulièrement connaissance de la Politique de Protection des Données afin de se tenir parfaitement informés
          de ses dispositions.
        </p>
      </>
    ),
  },
  {
    id: 's21',
    title: '21. Autorité de contrôle',
    body: (
      <p>
        Dans l&apos;hypothèse où vous estimeriez que BIRDIA ne respecterait pas ses obligations en matière de protection des Données à Caractère Personnel, il
        vous est possible de contacter l&apos;autorité de contrôle compétente, à savoir la CNIL (
        <a href="https://www.cnil.fr/fr/agir" target="_blank" rel="noopener">
          www.cnil.fr/fr/agir
        </a>{' '}
        ou 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07).
      </p>
    ),
  },
  {
    id: 's22',
    title: '22. Comment contacter BIRDIA ?',
    body: (
      <>
        <p>
          Les Utilisateurs peuvent contacter BIRDIA pour toute question qu&apos;ils pourraient avoir sur cette Politique de Protection des Données par e-mail à
          l&apos;adresse suivante : <a href="mailto:contact@birdia.fr">contact@birdia.fr</a>.
        </p>
        <p>Dans ce cadre, un justificatif d&apos;identité pourra vous être demandé avant de traiter votre demande.</p>
      </>
    ),
  },
  {
    id: 's23',
    title: '23. Cookies',
    body: (
      <p>
        <mark className="todo">
          [À compléter : section à rédiger : le site affiche un bandeau cookies (mesure d&apos;audience, etc.) mais l&apos;ancienne politique n&apos;en parle
          pas]
        </mark>
      </p>
    ),
  },
];

export const Privacy = () => {
  useUpdateMeta(
    'Politique de protection des données | BIRDIA',
    'Politique de protection des données personnelles de BIRDIA (BPartners SAS) : données collectées, finalités, durées de conservation, sous-traitants et droits RGPD.'
  );

  return (
    <div className="confidentialite-page">
      <section className="legal">
        <div className="wrap">
          <article className="doc">
            <h1>Politique de protection des données à caractère personnel</h1>
            <p className="upd">
              Politique à jour du <mark className="todo">[À compléter : date de publication (version précédente : 16/01/2024)]</mark>
            </p>
            <p>
              <a href={Env.REACT_APP_PRIVACY_POLICY_URL} target="_blank" rel="noreferrer">
                Télécharger la politique de protection des données au format PDF
              </a>
            </p>
            <nav className="toc" aria-label="Sommaire">
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, columns: '2', fontSize: 14 }}>
                {tocItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <h2 id="preambule">Préambule</h2>
            <p>
              La présente politique de protection des données à caractère personnel de l&apos;application BIRDIA a pour objet d&apos;informer les utilisateurs
              de l&apos;application et des services en ligne proposés de leurs droits et obligations relatives à la collecte de leurs données.
            </p>
            <p>
              Cette politique de protection répond par ailleurs aux questions légitimes que les utilisateurs de nos services peuvent être amenés à se poser au
              cours de l&apos;utilisation de l&apos;application.
            </p>
            <p>
              Dans ce contexte, la présente politique vise à fournir une information claire, complète et véritable sur les moyens et les méthodes utilisés par
              BIRDIA afin de protéger les données de ses utilisateurs et respecter leurs droits.
            </p>
            <p>
              Afin de répondre à nos obligations en matière de protection de vos droits, tout en vous offrant les meilleurs services et une expérience agréable,
              nous avons souhaité publier et mettre en œuvre une véritable politique en matière de protection des données à caractère personnel, résumée
              ci-après.
            </p>
            <p>
              Afin que vous puissiez bénéficier de nos services en toute sécurité et en toute confiance, cette charte présente dans un document unique des
              informations claires, simples et sincères concernant les traitements de Données à Caractère Personnel opérés par BIRDIA, réalisés dans le cadre de
              son activité.
            </p>
            <p>
              En effet, dans le cadre de nos activités, nous sommes amenés à collecter, traiter et conserver un certain nombre de Données concernant les
              visiteurs de l&apos;application, nos clients et partenaires, ainsi que des données statistiques.
            </p>
            <p>
              La présente politique en matière de protection des Données à Caractère Personnel a pour objet d&apos;informer les Utilisateurs concernant leurs
              droits, ainsi que sur les moyens utilisés par BIRDIA afin de garantir la sécurité de vos Données ainsi que le respect des exigences légales et
              réglementaires en la matière.
            </p>
            <p>
              Il est ainsi rappelé que, notamment, la Loi Informatique et Libertés, ainsi que le Règlement européen 2016/679 du 27 avril 2016 (RGPD), entrés en
              application le 25 mai 2018, prévoient un dispositif spécifique en matière d&apos;encadrement et de protection des Données à Caractère Personnel.
            </p>
            <p>C&apos;est dans ce cadre que s&apos;inscrit la présente politique de protection des Données à Caractère Personnel.</p>
            <p>Cette Politique est complétée par :</p>
            <ul>
              <li>
                nos <Link to="/mentions-legales">mentions légales</Link> ;
              </li>
              <li>
                nos <Link to="/cgu">conditions générales d&apos;utilisation</Link>.
              </li>
            </ul>
            <p>
              Le présent document a pour objectif de fournir toutes les informations sur les conditions dans lesquelles BIRDIA collecte et traite les
              informations à Caractère Personnel des Utilisateurs de l&apos;application exclusivement.
            </p>
            <p>
              En bénéficiant des Services en ligne fournis par BIRDIA, les Utilisateurs s&apos;engagent à respecter et à être liés par la présente Politique.
            </p>
            <p>À cet égard, et pour certains traitements spécifiques, un consentement actif (opt-in) sera préalablement demandé à l&apos;Utilisateur.</p>
            <p>
              Vous pouvez imprimer ou enregistrer ce document à l&apos;aide de la fonction de votre navigateur Internet (généralement « Fichier » puis «
              Enregistrer sous »).
            </p>
            <p>
              En acceptant la déclaration suivante sur la protection des données, vous consentez à ce que BIRDIA recueille, traite et utilise vos Données à
              Caractère Personnel dans le respect des lois sur la protection des données de la présente Déclaration sur la Protection des Données personnelles.
            </p>

            <h2 id="definitions">Définitions</h2>
            <table>
              <tbody>
                {definitions.map((def) => (
                  <tr key={def.term}>
                    <td>{def.term}</td>
                    <td>{def.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {sections.map((section) => (
              <Fragment key={section.id}>
                <h2 id={section.id}>{section.title}</h2>
                {section.body}
              </Fragment>
            ))}
          </article>
        </div>
      </section>
    </div>
  );
};

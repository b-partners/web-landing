import { Fragment, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { handleCenteredAnchorClick } from '@/common/utils/use-centered-anchor-scroll';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/cgu.css';

type TocItem = { href: string; label: string };

const toc: TocItem[] = [
  { href: '#preambule', label: 'Préambule' },
  { href: '#a1', label: 'Article 1 : Définitions' },
  { href: '#a2', label: "Article 2 : Objet et champ d'application" },
  { href: '#a3', label: 'Article 3 : Acceptation et modification des CGU' },
  { href: '#a4', label: 'Article 4 : Utilisateurs autorisés, périmètre professionnel' },
  { href: '#a5', label: 'Article 5 : Usages interdits' },
  { href: '#a6', label: "Article 6 : Création et gestion de l'Espace Utilisateur" },
  { href: '#a7', label: 'Article 7 : Description des Services' },
  { href: '#a8', label: 'Article 8 : Rôle de BIRDIA, nature du Service' },
  { href: '#a9', label: "Article 9 : Limites de l'intelligence artificielle, responsabilité de l'Utilisateur" },
  { href: '#a10', label: "Article 10 : Données géospatiales, images et restrictions d'usage" },
  { href: '#a11', label: 'Article 11 : Propriété intellectuelle' },
  { href: '#a12', label: 'Article 12 : Données personnelles, conformité RGPD' },
  { href: '#a13', label: 'Article 13 : Confidentialité' },
  { href: '#a14', label: 'Article 14 : Disponibilité du Service' },
  { href: '#a15', label: 'Article 15 : Responsabilité' },
  { href: '#a16', label: 'Article 16 : Suspension et résiliation' },
  { href: '#a17', label: 'Article 17 : Force majeure' },
  { href: '#a18', label: 'Article 18 : Intuitu personae, cession' },
  { href: '#a19', label: 'Article 19 : Droit applicable, juridiction' },
  { href: '#a20', label: 'Article 20 : Dispositions diverses' },
];

type Definition = { term: string; description: string };

const definitions: Definition[] = [
  {
    term: 'Application / Plateforme',
    description:
      "Désigne l'interface numérique BIRDIA accessible via le réseau Internet à l'adresse www.birdia.fr ainsi que toutes ses déclinaisons web, API, modules embarqués, marque blanche et tableaux de bord, par lesquelles l'Utilisateur accède aux Services.",
  },
  {
    term: 'BIRDIA',
    description:
      'Désigne le nom commercial de la Plateforme et la société BPartners SAS, société par actions simplifiée au capital de 6 000 €, dont le siège social est sis 8 rue Puget, 75018 Paris, immatriculée au RCS de Paris sous le numéro 918 072 737, représentée par son Président.',
  },
  {
    term: 'Utilisateur / Client',
    description:
      "Désigne toute personne morale immatriculée en France ou dans l'Espace économique européen, disposant d'un SIRET actif, exerçant une activité professionnelle compatible avec les usages autorisés (Article 4) et accédant à la Plateforme dans le cadre de son activité.",
  },
  {
    term: 'Utilisateur Autorisé',
    description:
      'Désigne toute personne physique salariée, mandataire ou représentante du Client, dûment habilitée par celui-ci à utiliser la Plateforme pour son compte.',
  },
  {
    term: 'Espace Utilisateur',
    description:
      "Désigne l'espace personnel sécurisé créé par le Client pour accéder aux Services, géré au moyen d'identifiants individuels et d'un dispositif d'authentification.",
  },
  {
    term: 'Services',
    description:
      "Désigne l'ensemble des fonctionnalités, outils, modèles d'IA, accès aux données géospatiales, livrables, API, interfaces et prestations connexes mises à disposition de l'Utilisateur via la Plateforme.",
  },
  {
    term: 'Données géospatiales',
    description: 'Désigne les données raster ou vectorielles, et toute autre donnée géographique mobilisée par les Services.',
  },
  {
    term: 'Livrables',
    description:
      "Désigne les rapports PDF, exports GeoJSON, exports Excel, données API, couches cartographiques, intégrations web, modules en marque blanche et tout autre résultat généré par la Plateforme à l'attention de l'Utilisateur.",
  },
  {
    term: 'Données du Client',
    description:
      "Désigne l'ensemble des données fournies, saisies ou téléversées par l'Utilisateur sur la Plateforme (adresses, emprises, photographies de chantier, fichiers SIG, etc.).",
  },
  {
    term: 'IA / Modèles',
    description:
      "Désigne les modèles d'intelligence artificielle, algorithmes, pipelines de traitement, méthodes statistiques et symboliques développés et opérés par BIRDIA.",
  },
  {
    term: 'CGU / CGV / Contrat SaaS',
    description:
      "Désignent respectivement les présentes Conditions Générales d'Utilisation, les Conditions Générales de Vente et le Contrat SaaS / Licence / Abonnement applicables au Client.",
  },
];

type Section = { id: string; title: string; body: ReactNode };

const sections: Section[] = [
  {
    id: 'preambule',
    title: 'Préambule',
    body: (
      <>
        <p>
          BIRDIA, marque exploitée par la société BPartners SAS, édite et exploite une plateforme SaaS d'analyse de toitures et d'actifs bâtis reposant sur des
          technologies d'intelligence artificielle et de traitement de données géospatiales. La plateforme est destinée à des Utilisateurs professionnels
          exerçant une activité compatible avec les usages décrits aux présentes.
        </p>
        <p>
          Les présentes Conditions Générales d'Utilisation (ci-après les « CGU ») ont pour objet de définir les modalités d'accès et d'utilisation de la
          Plateforme BIRDIA. Elles s'appliquent à tout Utilisateur, sans restriction ni réserve, et constituent, ensemble avec les Conditions Générales de Vente
          et le Contrat SaaS, le cadre contractuel opposable régissant la relation entre BIRDIA et l'Utilisateur.
        </p>
        <p>
          L'accès et l'utilisation de la Plateforme impliquent l'acceptation pleine, entière et sans réserve des présentes CGU. Toute personne n'acceptant pas
          les CGU doit immédiatement cesser toute utilisation de la Plateforme.
        </p>
      </>
    ),
  },
  {
    id: 'a1',
    title: 'Article 1 : Définitions',
    body: (
      <>
        <p>
          Les termes suivants, employés avec une majuscule dans les présentes, ont le sens qui leur est attribué ci-après, tant au singulier qu'au pluriel :
        </p>
        <table>
          <tbody>
            {definitions.map((definition) => (
              <tr key={definition.term}>
                <td>{definition.term}</td>
                <td>{definition.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 'a2',
    title: "Article 2 : Objet et champ d'application",
    body: (
      <>
        <p>
          Les présentes CGU encadrent l'usage de la Plateforme BIRDIA et de l'ensemble de ses fonctionnalités, qu'il s'agisse de l'interface web, des API, des
          modules embarqués, des exports de données ou de toute intégration tierce.
        </p>
        <p>
          Elles s'appliquent indépendamment du lieu d'utilisation du Service, de la localisation des Données du Client et du pays d'implantation de
          l'Utilisateur, sous réserve des dispositions impératives applicables à ce dernier.
        </p>
        <p>
          Les CGU prévalent sur tout autre document, à l'exception des Conditions Particulières, du Contrat SaaS, des Conditions Générales de Vente et de tout
          avenant signé entre BIRDIA et le Client.
        </p>
      </>
    ),
  },
  {
    id: 'a3',
    title: 'Article 3 : Acceptation et modification des CGU',
    body: (
      <>
        <h3>3.1 Acceptation</h3>
        <p>
          L'acceptation des CGU intervient lors de la création de l'Espace Utilisateur, par « j'accepte », lors de la première connexion. Cette acceptation a la
          même valeur qu'une signature manuscrite et engage le Client de manière non équivoque. Le Client garantit que la personne acceptant les CGU dispose des
          pouvoirs nécessaires pour l'engager.
        </p>
        <h3>3.2 Modification</h3>
        <p>
          BIRDIA se réserve le droit de modifier les CGU à tout moment, notamment pour les adapter aux évolutions techniques, réglementaires ou commerciales de
          la Plateforme. Toute modification substantielle est notifiée à l'Utilisateur au moins trente (30) jours avant son entrée en vigueur, par email ou
          notification dans l'Espace Utilisateur. Le maintien de l'usage de la Plateforme au-delà de ce délai vaut acceptation des nouvelles CGU.
        </p>
      </>
    ),
  },
  {
    id: 'a4',
    title: 'Article 4 : Utilisateurs autorisés, périmètre professionnel',
    body: (
      <>
        <h3>4.1 Conditions d'éligibilité</h3>
        <p>
          La Plateforme est strictement réservée aux personnes morales disposant d'un SIRET actif et exerçant, à titre principal ou secondaire, une activité
          professionnelle compatible avec les Services. La création d'un Espace Utilisateur est subordonnée à la fourniture d'informations exactes, complètes et
          à jour, ainsi qu'à la vérification du SIRET et, le cas échéant, du code APE/NAF.
        </p>
        <h3>4.2 Métiers et activités autorisés</h3>
        <p>
          Sont notamment autorisés à utiliser la Plateforme les professionnels exerçant les activités suivantes ou des activités assimilées (liste indicative,
          non limitative) :
        </p>
        <ul>
          <li>Couvreur, ardoisier, zingueur (codes APE indicatifs : 43.91A, 43.91B).</li>
          <li>Étancheur bitume, étancheur synthétique, bardeur-étancheur.</li>
          <li>Charpentier bois, charpentier métallique, serrurier-métallier.</li>
          <li>Maçon-couvreur, plombier-couvreur.</li>
          <li>Applicateur résine / SEL, végétaliseur de toitures.</li>
          <li>Poseur de fenêtres de toit, menuisier.</li>
          <li>Façadier-bardeur, ferronnier / tôlier.</li>
          <li>Intégrateur photovoltaïque, installateur solaire thermique, climaticien / CVC toiture.</li>
          <li>Échafaudeur, cordiste, poseur de systèmes antichute.</li>
          <li>Ramoneur / fumiste, nettoyeur / démousseur de toitures.</li>
          <li>Entreprise de désamiantage SS3 / SS4.</li>
          <li>Architecte, maître d'œuvre, bureau d'études structures, bureau d'études enveloppe / thermique.</li>
          <li>Diagnostiqueur amiante / plomb, thermographe / spécialiste humidité.</li>
          <li>Géomètre, télépilote drone.</li>
          <li>Tout autre professionnel admis après validation expresse par BIRDIA.</li>
        </ul>
        <h3>4.3 Utilisateurs interdits</h3>
        <p>La création d'un Espace Utilisateur est strictement interdite, à peine de suspension immédiate et sans préavis :</p>
        <ul>
          <li>aux personnes physiques agissant à titre privé ;</li>
          <li>aux personnes ou structures dépourvues d'un SIRET actif ;</li>
          <li>aux personnes ne justifiant pas d'une activité professionnelle compatible avec les Services ;</li>
          <li>aux concurrents directs de BIRDIA et à toute personne agissant pour leur compte ;</li>
          <li>aux mineurs.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'a5',
    title: 'Article 5 : Usages interdits',
    body: (
      <>
        <p>
          L'Utilisateur s'engage à utiliser la Plateforme conformément à sa destination professionnelle. Sont en particulier strictement interdits, à peine de
          résiliation immédiate et sans préjudice de toute autre action :
        </p>
        <ul>
          <li>toute utilisation de la Plateforme à des fins de prospection commerciale massive ou non sollicitée ;</li>
          <li>
            l'extraction, la collecte, le scraping ou l'aspiration de données en vue de la constitution de bases de prospection, de bases concurrentes ou de
            référentiels tiers ;
          </li>
          <li>toute automatisation non expressément autorisée (bots, scripts, requêtes massives) ;</li>
          <li>
            la redistribution, revente, mise à disposition de tiers, diffusion publique ou licence à un tiers de tout ou partie des Données géospatiales,
            modèles, livrables ou résultats issus de la Plateforme ;
          </li>
          <li>le partage des identifiants ou de l'accès à l'Espace Utilisateur avec un tiers non autorisé ;</li>
          <li>
            la réutilisation des images, orthophotographies, données satellitaires ou Lidar hors du périmètre contractuel et des restrictions imposées par les
            fournisseurs sources ;
          </li>
          <li>toute utilisation à des fins concurrentielles, de reverse engineering, de copie ou de reproduction du Service ;</li>
          <li>toute utilisation en substitution d'une expertise terrain, d'une expertise réglementaire ou d'un diagnostic opposable ;</li>
          <li>toute utilisation contraire aux lois et règlements applicables, à l'ordre public ou aux droits de tiers.</li>
        </ul>
        <p>
          En cas de manquement, BIRDIA se réserve la faculté d'adresser à l'Utilisateur un avertissement formel par email, avec demande de régularisation sous
          huit (8) jours. À défaut de régularisation, BIRDIA pourra suspendre l'accès à la Plateforme. En cas de manquement grave, répété ou irréversible,
          BIRDIA pourra résilier de plein droit l'Espace Utilisateur et le Contrat SaaS, sans indemnité, sans préjudice de tout dommage et intérêts.
        </p>
      </>
    ),
  },
  {
    id: 'a6',
    title: "Article 6 : Création et gestion de l'Espace Utilisateur",
    body: (
      <>
        <h3>6.1 Création</h3>
        <p>
          La création d'un Espace Utilisateur suppose la fourniture par le Client des informations suivantes : raison sociale, SIRET, code APE/NAF, adresse
          postale, identité du représentant légal ou du mandataire dûment habilité, adresse email professionnelle de contact, et acceptation expresse des CGU et
          des CGV. BIRDIA se réserve le droit de demander tout justificatif (Kbis, attestation, mandat) avant ouverture de l'Espace Utilisateur.
        </p>
        <h3>6.2 Authentification</h3>
        <p>
          L'authentification est assurée via le service Cognito (Amazon Web Services) ou tout autre dispositif équivalent. Le Client est seul responsable de la
          confidentialité de ses identifiants et de tout dispositif d'authentification forte. Toute action réalisée depuis l'Espace Utilisateur est réputée
          effectuée par le Client.
        </p>
        <h3>6.3 Multi-utilisateurs et habilitation</h3>
        <p>
          Le Client peut, selon l'offre souscrite, créer plusieurs profils d'Utilisateurs Autorisés au sein de son Espace Utilisateur. Le Client est responsable
          de la gestion des habilitations, des accès et des départs de collaborateurs. En cas de départ d'un collaborateur, le Client s'engage à supprimer ou
          désactiver le profil correspondant sans délai.
        </p>
        <h3>6.4 Suspension</h3>
        <p>
          BIRDIA peut suspendre l'accès à l'Espace Utilisateur, sans préavis, en cas de suspicion d'usage frauduleux, de faille de sécurité, de défaut de
          paiement ou de manquement aux présentes CGU. La suspension est notifiée à l'Utilisateur, qui dispose d'un délai raisonnable pour s'expliquer ou
          régulariser sa situation.
        </p>
      </>
    ),
  },
  {
    id: 'a7',
    title: 'Article 7 : Description des Services',
    body: (
      <>
        <p>La Plateforme BIRDIA met à disposition de l'Utilisateur, selon l'offre souscrite, les fonctionnalités suivantes (liste non exhaustive) :</p>
        <ul>
          <li>analyse automatisée de l'état des toitures à partir d'images aériennes et satellitaires ;</li>
          <li>réalisation de métrés, mesures et prises de cotes à distance ;</li>
          <li>détection et qualification des matériaux de couverture, des éléments techniques et des anomalies ;</li>
          <li>estimation des pentes, hauteurs et surfaces réelles des rampants ;</li>
          <li>identification de l'usure, de l'humidité, des moisissures, des risques d'infiltration et autres désordres apparents ;</li>
          <li>génération de rapports PDF et d'exports structurés (GeoJSON, Excel, CityJSON) ;</li>
          <li>suivi de clients et de prospects au sein de l'Espace Utilisateur ;</li>
          <li>intégration d'un module d'analyse en marque blanche sur le site internet du Client ;</li>
          <li>accès, le cas échéant, à la communauté BIRDIA et aux opportunités d'intervention transmises par celle-ci.</li>
        </ul>
        <p>
          Les fonctionnalités effectivement accessibles dépendent de l'offre souscrite par le Client (offres « À l'usage », « Essentiel », « Pro », « Expert »)
          et des Conditions Particulières applicables. Le détail des offres figure dans les CGV et le Contrat SaaS.
        </p>
      </>
    ),
  },
  {
    id: 'a8',
    title: 'Article 8 : Rôle de BIRDIA, nature du Service',
    body: (
      <>
        <p>BIRDIA agit exclusivement en qualité de :</p>
        <ul>
          <li>fournisseur de solution technologique ;</li>
          <li>éditeur de logiciel SaaS ;</li>
          <li>opérateur d'outils d'aide à la décision.</li>
        </ul>
        <p>
          BIRDIA n'est ni un bureau de contrôle, ni un diagnostiqueur réglementaire, ni un expert technique de chantier, ni un assureur. BIRDIA n'intervient en
          aucun cas dans la conception, la conduite ou l'exécution des travaux.
        </p>
        <p>
          Les résultats fournis par la Plateforme (détections, classifications, scores de confiance, recommandations, métrés, indicateurs) sont générés de
          manière automatisée à partir de Modèles d'IA et de Données géospatiales, et constituent des indications techniques non exhaustives, des aides à
          l'analyse et à la priorisation, et non un diagnostic définitif ou une expertise réglementaire opposable.
        </p>
      </>
    ),
  },
  {
    id: 'a9',
    title: "Article 9 : Limites de l'intelligence artificielle, responsabilité de l'Utilisateur",
    body: (
      <>
        <p>L'Utilisateur reconnaît expressément, à titre de condition essentielle des présentes :</p>
        <ol>
          <li>que les Modèles d'IA peuvent comporter des erreurs, omissions, incertitudes ou biais inhérents à toute solution algorithmique ;</li>
          <li>que les Données géospatiales sources peuvent être anciennes, partielles, imprécises, indisponibles ou non actualisées sur certaines zones ;</li>
          <li>
            que les métrés, surfaces, pentes, classifications, scores et diagnostics produits par la Plateforme doivent impérativement être vérifiés par un
            professionnel sur site avant toute décision opérationnelle ;
          </li>
          <li>
            que la Plateforme ne se substitue ni à une visite terrain, ni à une expertise technique, ni à un diagnostic réglementaire, ni à une étude de
            sécurité ;
          </li>
          <li>
            que toute décision relative à un devis, à une intervention, à la sécurité d'un chantier, à la pose d'un dispositif antichute, à la mise en place
            d'un échafaudage, au recours à un cordiste ou à toute opération en hauteur relève exclusivement de la responsabilité du Client professionnel ;
          </li>
          <li>
            que le Client demeure seul responsable du respect des règles de sécurité applicables à ses chantiers, notamment en matière de prévention des chutes
            de hauteur, de port d'EPI, d'évaluation des risques et de coordination SPS ;
          </li>
          <li>
            que BIRDIA ne saurait, en aucun cas, être tenue responsable d'un dommage corporel, matériel ou immatériel survenu sur un chantier ou consécutif à
            une décision prise sur la base des Livrables.
          </li>
        </ol>
        <p>
          L'Utilisateur s'engage à informer ses propres clients de la nature indicative des analyses fournies et à ne jamais présenter les Livrables comme un
          diagnostic réglementaire ou opposable.
        </p>
      </>
    ),
  },
  {
    id: 'a10',
    title: "Article 10 : Données géospatiales, images et restrictions d'usage",
    body: (
      <>
        <p>
          La Plateforme s'appuie sur des flux et bases de données externes fournis par des tiers opérant à l'échelle française, européenne et internationale. La
          qualité, la précision, la fréquence d'actualisation et la disponibilité de ces données dépendent exclusivement de leurs producteurs.
        </p>
        <p>L'Utilisateur s'interdit expressément :</p>
        <ul>
          <li>
            toute extraction, copie ou stockage massif des images, orthophotographies, données satellitaires, données Lidar ou flux WMS/WMTS hors du cadre
            strict de l'utilisation de la Plateforme ;
          </li>
          <li>tout téléchargement ou export en haute définition non explicitement autorisé par BIRDIA et par les fournisseurs sources ;</li>
          <li>toute redistribution, revente, mise à disposition publique, licence à un tiers ou diffusion sur tout support des données précitées ;</li>
          <li>toute réutilisation des données hors du périmètre contractuel et des conditions imposées par les producteurs.</li>
        </ul>
        <p>
          Les rapports destinés aux clients finaux du Client professionnel ne pourront contenir que l'emprise de toiture et les éléments d'analyse strictement
          nécessaires à la finalité du rapport, à l'exclusion de toute reproduction d'images sources non autorisée.
        </p>
        <p>
          BIRDIA se réserve la faculté de modifier à tout moment ses sources et fournisseurs afin d'améliorer la qualité du Service. BIRDIA ne saurait être
          tenue responsable des erreurs, imprécisions, indisponibilités ou modifications résultant des sources tierces.
        </p>
      </>
    ),
  },
  {
    id: 'a11',
    title: 'Article 11 : Propriété intellectuelle',
    body: (
      <>
        <p>BIRDIA conserve la propriété exclusive de l'ensemble de ses actifs immatériels, notamment :</p>
        <ul>
          <li>la Plateforme et son code source ;</li>
          <li>les modèles, algorithmes et Modèles d'IA ;</li>
          <li>les API, interfaces, méthodes, pipelines, jeux d'entraînement et savoir-faire ;</li>
          <li>les rapports types, gabarits, ontologies de classification et bases techniques ;</li>
          <li>les marques, logos, identités graphiques et signes distinctifs (notamment la marque « BIRDIA »).</li>
        </ul>
        <p>
          Le Client se voit concéder un droit d'usage non exclusif, non cessible, non transférable, mondial, pour la durée du Contrat SaaS et dans la limite des
          Services souscrits, exclusivement aux fins de son activité professionnelle interne.
        </p>
        <p>
          Les Livrables générés sont exploitables par le Client dans le cadre de son activité, sous réserve : (i) du respect des restrictions liées aux Données
          géospatiales sources, (ii) de la mention « Analyse réalisée à partir de la Plateforme BIRDIA » lorsqu'ils sont communiqués à un tiers, et (iii) de
          l'absence de modification altérant la sincérité de l'analyse.
        </p>
        <p>
          Aucune cession de droit de propriété intellectuelle n'est consentie au Client en l'absence de stipulation expresse contraire dans le Contrat SaaS ou
          dans un avenant signé.
        </p>
      </>
    ),
  },
  {
    id: 'a12',
    title: 'Article 12 : Données personnelles, conformité RGPD',
    body: (
      <>
        <h3>12.1 Cadre général</h3>
        <p>
          BIRDIA s'engage à traiter les Données Personnelles dans le respect du Règlement (UE) 2016/679 (RGPD), de la loi n° 78-17 du 6 janvier 1978 modifiée et
          de toute réglementation applicable. La <Link to="/confidentialite">Politique de confidentialité</Link> accessible sur la Plateforme complète les
          présentes CGU et précise les finalités, bases légales, durées de conservation, droits des personnes et destinataires.
        </p>
        <h3>12.2 Rôles respectifs</h3>
        <p>
          BIRDIA agit en qualité de responsable de traitement pour les données nécessaires à la création et à la gestion de l'Espace Utilisateur, à la
          facturation et à l'amélioration de ses Services. BIRDIA agit en qualité de sous-traitant lorsqu'elle traite des Données Personnelles pour le compte du
          Client, notamment lorsque celui-ci téléverse sur la Plateforme des fichiers comportant des données identifiantes (adresses, contacts d'assurés, etc.).
          Les rôles respectifs sont précisés dans une Annexe RGPD / DPA jointe au Contrat SaaS le cas échéant.
        </p>
        <h3>12.3 Sécurité</h3>
        <p>
          BIRDIA met en œuvre des mesures techniques et organisationnelles raisonnables pour assurer la sécurité, la confidentialité et l'intégrité des données
          : hébergement européen, chiffrement en transit et au repos, contrôle des accès, journalisation, sauvegardes, gestion des incidents.
        </p>
        <h3>12.4 Notification des violations</h3>
        <p>
          En cas de violation de Données Personnelles, BIRDIA informe le Client dans un délai de soixante-douze (72) heures à compter de la prise de
          connaissance de l'incident, et fournit toutes les informations nécessaires à l'accomplissement des obligations qui lui incombent.
        </p>
        <h3>12.5 Interdiction de la prospection pure</h3>
        <p>
          La Plateforme n'a pas vocation à être utilisée comme un outil de prospection commerciale pure. L'Utilisateur s'engage à respecter le cadre légal
          applicable, en particulier les dispositions relatives à l'opposition au démarchage téléphonique (Bloctel), à la prospection électronique et au RGPD.
        </p>
      </>
    ),
  },
  {
    id: 'a13',
    title: 'Article 13 : Confidentialité',
    body: (
      <p>
        Chacune des Parties s'engage à conserver strictement confidentielles l'ensemble des informations, documents, données techniques, financières ou
        stratégiques échangées dans le cadre de l'exécution des présentes, et à ne les utiliser qu'aux strictes fins du Contrat. Cette obligation reste en
        vigueur pendant toute la durée du Contrat et pour une durée de cinq (5) ans à compter de son terme.
      </p>
    ),
  },
  {
    id: 'a14',
    title: 'Article 14 : Disponibilité du Service',
    body: (
      <p>
        BIRDIA met en œuvre tous les moyens raisonnables pour assurer une disponibilité de la Plateforme 24h/24 et 7j/7. Cette obligation constitue une
        obligation de moyens. La Plateforme peut être temporairement interrompue pour des opérations de maintenance, des évolutions techniques ou en cas
        d'incident affectant les fournisseurs tiers (hébergeur, fournisseurs de données). Dans la mesure du possible, les interruptions planifiées sont
        annoncées préalablement au Client.
      </p>
    ),
  },
  {
    id: 'a15',
    title: 'Article 15 : Responsabilité',
    body: (
      <>
        <p>
          La responsabilité de BIRDIA, toutes causes confondues, ne pourra excéder le montant des sommes effectivement payées par le Client à BIRDIA au titre
          des douze (12) mois précédant le fait générateur du dommage. BIRDIA ne pourra en aucun cas être tenue responsable des dommages indirects, immatériels,
          perte d'exploitation, perte de chiffre d'affaires, perte de chance, perte de données, atteinte à l'image ou préjudice commercial.
        </p>
        <p>BIRDIA n'assume aucune responsabilité au titre :</p>
        <ul>
          <li>des décisions opérationnelles, devis, travaux ou interventions du Client ;</li>
          <li>des dommages corporels survenus sur un chantier ;</li>
          <li>des conséquences d'une utilisation des Livrables hors de leur destination ;</li>
          <li>des erreurs, omissions ou indisponibilités résultant des Données géospatiales sources ;</li>
          <li>des cas de force majeure tels que définis à l'Article 17.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'a16',
    title: 'Article 16 : Suspension et résiliation',
    body: (
      <>
        <h3>16.1 Suspension</h3>
        <p>
          BIRDIA peut suspendre, sans préavis, l'accès à la Plateforme en cas de manquement aux présentes CGU, de défaut de paiement, d'usage abusif ou
          frauduleux, ou de risque pour la sécurité du Service.
        </p>
        <h3>16.2 Résiliation pour faute</h3>
        <p>
          En cas de manquement grave de l'Utilisateur à ses obligations contractuelles, BIRDIA pourra résilier l'Espace Utilisateur et le Contrat SaaS de plein
          droit, après mise en demeure restée sans effet pendant quinze (15) jours, sans préjudice de tous dommages et intérêts.
        </p>
        <h3>16.3 Effets de la résiliation</h3>
        <p>
          La résiliation entraîne la cessation immédiate de l'accès à la Plateforme. Les Données du Client sont conservées pendant une durée de trente (30)
          jours à compter de la résiliation, durant laquelle le Client peut en demander l'export, puis sont supprimées de manière sécurisée. Les sommes dues au
          titre de l'engagement annuel restent exigibles.
        </p>
      </>
    ),
  },
  {
    id: 'a17',
    title: 'Article 17 : Force majeure',
    body: (
      <p>
        Aucune des Parties ne pourra être tenue responsable d'un manquement à ses obligations résultant d'un cas de force majeure au sens de l'article 1218 du
        Code civil, en ce compris notamment : intempéries exceptionnelles, pandémie, grève générale, défaillance d'un fournisseur tiers (hébergement,
        fournisseur de données), cyberattaque massive, décision d'autorité publique.
      </p>
    ),
  },
  {
    id: 'a18',
    title: 'Article 18 : Intuitu personae, cession',
    body: (
      <p>
        Les présentes CGU sont conclues intuitu personae. Le Client ne peut céder, transférer ou nantir ses droits et obligations sans l'accord écrit préalable
        de BIRDIA. BIRDIA peut librement céder ses droits et obligations à toute société de son groupe ou à un repreneur dans le cadre d'une opération de
        restructuration.
      </p>
    ),
  },
  {
    id: 'a19',
    title: 'Article 19 : Droit applicable, juridiction',
    body: (
      <p>
        Les présentes CGU sont régies par le droit français. Tout litige relatif à leur formation, leur exécution ou leur interprétation, à défaut de résolution
        amiable dans un délai de trente (30) jours à compter de sa notification, sera soumis à la compétence exclusive du Tribunal de commerce de Paris,
        nonobstant pluralité de défendeurs ou appel en garantie.
      </p>
    ),
  },
  {
    id: 'a20',
    title: 'Article 20 : Dispositions diverses',
    body: (
      <>
        <h3>20.1 Nullité partielle</h3>
        <p>
          La nullité d'une clause des présentes n'entraîne pas la nullité de l'ensemble. Les Parties s'engagent à négocier de bonne foi une clause de
          remplacement reflétant l'intention initiale.
        </p>
        <h3>20.2 Tolérance</h3>
        <p>
          Le fait pour BIRDIA de ne pas se prévaloir d'une obligation à un instant donné ne peut être interprété comme une renonciation à s'en prévaloir
          ultérieurement.
        </p>
        <h3>20.3 Langue</h3>
        <p>Les présentes CGU sont rédigées en langue française. En cas de traduction, la version française prévaudra.</p>
        <h3>20.4 Notifications</h3>
        <p>
          Toute notification au titre des présentes est valablement faite par email à l'adresse renseignée dans l'Espace Utilisateur, ou par lettre recommandée
          avec accusé de réception au siège social de la partie concernée.
        </p>
        <p>
          Document établi à Paris, le 1er avril 2026. BIRDIA, BPartners SAS, <a href="mailto:contact@birdia.fr">contact@birdia.fr</a>,{' '}
          <a href="tel:+33182077228">+33 1 82 07 72 28</a>.
        </p>
      </>
    ),
  },
];

export const Cgu = () => {
  useUpdateMeta(
    "Conditions générales d'utilisation | BIRDIA",
    "Conditions générales d'utilisation de la plateforme BIRDIA, éditée par BPartners SAS. Version applicable au 1er avril 2026."
  );

  return (
    <div className="cgu-page">
      <section className="legal">
        <div className="wrap">
          <article className="doc">
            <h1>Conditions générales d'utilisation (CGU)</h1>
            <p className="upd">Plateforme BIRDIA. Version applicable au 1er avril 2026. Document opposable à tout Utilisateur de la Plateforme BIRDIA.</p>
            <p>Société éditrice : BPartners SAS, 8 rue Puget, 75018 Paris, RCS Paris 918 072 737, SIRET 918 072 737 00011.</p>
            <p>
              <a href={Env.REACT_APP_CGU_URL} target="_blank" rel="noreferrer">
                Télécharger les CGU au format PDF
              </a>
            </p>
            <nav className="toc" aria-label="Sommaire" onClick={handleCenteredAnchorClick}>
              <ul>
                {toc.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
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

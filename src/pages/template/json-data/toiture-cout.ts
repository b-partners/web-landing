export default {
  route: '/toiture-cout',
  metaTitle: 'Toiture coût : ce qu’il faut savoir pour anticiper vos dépenses de couverture',
  metaDescription: 'Le coût d’une toiture varie selon les matériaux, la surface, et l’état existant. Estimez au mieux',
  hero: { title: 'BIRDIA, le seul outil de diagnostique toiture', items: ['Pas de CB requise', 'Essaie gratuit de 14 jours', "Jusqu'à 38 analyses"] },
  testimonial: { title1: 'Témoignages clients', title2: 'Passez à l’analyse intelligente, sans compléxité' },
  testimonials: [
    {
      name: 'Arnaud P.',
      star: 5,
      content:
        '"L’outil Birdia est simple, rapide et fiable. Je peux générer un rapport technique avant même de visiter le chantier. Cela me fait gagner des heures chaque semaine, tout en améliorant la qualité de mes prestations."',
      job: 'Gérant entreprise de couverture (Cannes)',
    },
    {
      star: 5,
      name: 'Joël D.',
      content:
        'Birdia, c’est mon assistant digital. Je l’utilise au quotidien pour détecter les toits à rénover, et les clients adorent recevoir un rapport visuel clair. Même mes devis sont mieux acceptés grâce à ça.',
      job: 'Couvreur expérimenté (Hauts-de-France)',
    },
    {
      name: 'Laurent M.',
      star: 5,
      content:
        'Birdia est un véritable game changer. L’outil est à la fois intuitif, puissant et ludique. En quelques clics, nous pouvons visualiser, détecter et évaluer des centaines de toitures. Cela change notre manière de penser la prévention et le service client.',
      job: 'Responsable Innovation – Assureur Habitation',
    },
    {
      star: 5,
      name: 'Émilie C.',
      content:
        'Grâce à Birdia, nos équipes disposent d’une vision détaillée de chaque bien assuré. La précision de l’analyse des matériaux, de l’usure et des risques nous permet d’adapter finement les contrats. C’est un vrai plus pour la maîtrise technique et commerciale.',
      job: 'Responsable Souscription Habitation – Groupe IARD',
    },
  ],
  analyse: {
    title: 'Toiture coût : ce qu’il faut savoir pour anticiper vos dépenses de couverture',
    information: [
      {
        title: 'Pourquoi le sujet toiture coût est essentiel ?',
        description: 'Mieux anticiper ses dépenses pour rénover ou entretenir une toiture en toute sérénité.',
      },
      { title: 'Comment se décompose le toiture coût ?', description: 'Coût des matériaux, main-d’œuvre, équipements, et potentiels travaux préparatoires.' },
      {
        title: 'Que faire après avoir estimé le toiture coût ?',
        description: 'Comparer les devis, prioriser les travaux, ou adapter le projet selon le budget.',
      },
    ],
    explication:
      ' Détection, qualification et recommandation à partir d’images aériennes HD. En un clic, obtenez un diagnostic métier précis sans monter sur le toit.',
  },
  theyTrustUs: { title: 'Ils nous font confiance' },
  faq: {
    title1: 'FAQ',
    q1: {
      question: 'Quel est le coût moyen d’une toiture ?',
      answer: 'Le prix d’une toiture varie selon le matériau, la surface et la complexité du chantier, entre environ 80 et 400 € par m², pose comprise.',
    },
    q2: {
      question: 'Quels facteurs influencent le prix d’une toiture ?',
      answer:
        'Le coût dépend notamment de la surface, du matériau, de la pente, de l’état du toit et de la main-d’œuvre, un diagnostic Birdia aidant à identifier les postes les plus coûteux.',
    },
    q3: {
      question: 'Quelle différence de coût entre rénovation, réfection et construction neuve ?',
      answer:
        'Une toiture neuve coûte entre 100 et 200 € par m², une rénovation entre 150 et 300 €, et une réfection complète peut dépasser 400 € selon l’état de la charpente.',
    },
    q4: {
      question: 'Comment estimer le coût total d’une toiture sans mauvaise surprise ?',
      answer:
        'L’estimation doit s’appuyer sur un diagnostic précis et des devis détaillés, Birdia permettant d’obtenir un chiffrage clair et complet avant tout engagement.',
    },
    q5: {
      question: 'Existe-t-il des aides financières pour réduire le coût d’une toiture ?',
      answer:
        'Des aides comme MaPrimeRénov’, l’éco-prêt à taux zéro ou la TVA réduite à 5,5 % peuvent réduire le coût des travaux améliorant l’efficacité énergétique.',
    },
    q6: {
      question: 'Pourquoi faire un diagnostic avant d’estimer le coût d’une toiture ?',
      answer:
        'Un diagnostic Birdia détecte les défauts invisibles qui influencent le budget et fournit une estimation fiable, indépendante et adaptée à l’état réel du toit.',
    },
    title2: 'Vous êtes un particulier , vous souhaitez trouver un couvreur ?',
  },
  roofDiagnostics: {
    title: 'Comprendre les enjeux long terme de toiture coût',
    description1:
      'Maîtriser le coût d’une toiture permet d’éviter les mauvaises surprises financières et de faire des choix techniques durables. Un budget bien dimensionné favorise l’utilisation de matériaux performants et adaptés au bâtiment. ',
    description2:
      'À long terme, cela assure une meilleure résistance aux intempéries, une réduction des réparations futures et une valorisation immobilière. Prendre le temps de bien estimer le coût de la toiture, c’est investir intelligemment dans la pérennité de son bien.',
  },
  footer: {
    title: 'Votre analyse Birdia près de chez vous',
    description: 'Découvrez nos offres disponibles dans les villes suivantes :',
    link: [
      { name: 'Lyon', route: '/charpente-lyon' },
      { name: 'Essone', route: '/diagnistic-toiture-essonne' },
      { name: 'Evry', route: '/evry' },
      { name: 'Ile de France', route: '/ile-de-france' },
      { name: 'Marseille', route: '/devis-diagnostic-marseille' },
      { name: 'Lannion', route: '/diagnostic-toiture-lannion' },
      { name: 'Rhone', route: '/diagnostic-rhone' },
      { name: 'Alsace', route: '/diagnostic-toiture-alsace' },
      { name: 'Bourges', route: '/BourgesBourges' },
    ],
  },
};

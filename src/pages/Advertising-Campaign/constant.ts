export const pricingCouvreurs = [
  {
    id: 'usage',
    title: "À l'usage",
    subtitle: 'Sans engagement, payez ce que vous consommez.',
    icon: '⏱️',
    price: { monthly: '10 €', yearly: '10 €' },
    suffix: '/ analyse',
    priceHT: 'Prix HT, sans abonnement',
    yearlyText: { monthly: '—', yearly: '—' },
    cta: 'Acheter une analyse',
    ctaVariant: 'outlined',
    featured: false,
    features: [
      { text: 'Pay-as-you-go, sans engagement', included: true },
      { text: 'Analyse IA toiture complète', included: true },
      { text: 'Export PDF + emprise GeoJSON', included: true },
      { text: 'Support email', included: true },
      { text: 'Communauté BIRDIA', included: false },
    ],
  },
  {
    id: 'essential',
    title: 'Essentiel',
    subtitle: 'Le pack tout-en-un pour les artisans et TPE.',
    icon: '→',
    price: { monthly: '49 €', yearly: '42 €' },
    suffix: '/ mois',
    priceHT: 'HT — engagement annuel 12 mois',
    yearlyText: {
      monthly: '588 € HT / an',
      yearly: '<strong>500 €</strong> HT / an (économie 88 €)',
    },
    cta: 'Tester 14 jours sans engagement',
    ctaVariant: 'contained',
    featured: true,
    features: [
      { text: '<strong>10 analyses incluses / mois</strong>', included: true },
      { text: '5 € HT / analyse supp.', included: true },
      { text: 'Widget site internet (lead-gen)', included: true },
      { text: 'Communauté BIRDIA (chantiers locaux)', included: true },
      { text: 'Support 7j/7 par email', included: true },
    ],
  },
  {
    id: 'pro',
    title: 'Pro',
    subtitle: 'Pour les PME en croissance et les multi-utilisateurs.',
    icon: '✓',
    price: { monthly: '99 €', yearly: '84 €' },
    suffix: '/ mois',
    priceHT: 'HT — engagement annuel 12 mois',
    yearlyText: {
      monthly: '1 188 € HT / an',
      yearly: '<strong>1 010 €</strong> HT / an (économie 178 €)',
    },
    cta: 'Choisir Pro',
    ctaVariant: 'outlined',
    featured: false,
    features: [
      { text: '<strong>25 analyses incluses / mois</strong>', included: true },
      { text: '4 € HT / analyse supp.', included: true },
      { text: '3 utilisateurs inclus', included: true },
      { text: 'Marque blanche / co-branding', included: true },
      { text: 'Connecteurs CRM (HubSpot, Pipedrive…)', included: true },
      { text: 'Module devis automatisé', included: true },
    ],
  },
  {
    id: 'expert',
    title: 'Expert',
    subtitle: 'Pour les multi-agences et les API.',
    icon: '🛡️',
    price: { monthly: '199 €', yearly: '169 €' },
    suffix: '/ mois',
    priceHT: 'HT — engagement annuel 12 mois',
    yearlyText: {
      monthly: '2 388 € HT / an',
      yearly: '<strong>2 030 €</strong> HT / an (économie 358 €)',
    },
    cta: 'Choisir Expert',
    ctaVariant: 'outlined',
    featured: false,
    features: [
      { text: '<strong>60 analyses incluses / mois</strong>', included: true },
      { text: '3 € HT / analyse supp.', included: true },
      { text: 'Utilisateurs illimités', included: true },
      { text: 'Accès API & webhooks', included: true },
      { text: 'Monitoring annuel (re-scan auto)', included: true },
      { text: 'Support dédié 4h ouvrées', included: true },
    ],
  },
];

export const faqItems = [
  {
    question: "Puis-je changer d'offre à tout moment ?",
    answer: "Oui, vous pouvez monter en gamme à tout moment. La rétrogradation se fait à l'échéance de votre période d'engagement.",
  },
  {
    question: 'Que se passe-t-il si je dépasse mes analyses incluses ?',
    answer: 'Les analyses supplémentaires sont facturées au tarif indiqué dans votre offre (5 € en Essentiel, 4 € en Pro, 3 € en Expert).',
  },
  {
    question: 'Puis-je tester gratuitement ?',
    answer:
      "Oui. Les offres Essentiel, Pro et Expert bénéficient d'un essai 14 jours sans engagement. L'offre À l'usage est sans abonnement et permet d'acheter une seule analyse à l'unité.",
  },
  {
    question: 'Comment sont facturées les collectivités ?',
    answer:
      'Forfait annuel au km² avec tacite reconduction 12 mois. La consommation API se fait en fonction de la disponibilité des images (IGN BD ORTHO HR + partenaires).',
  },
];

export type NavLink = { to: string; label: string; children?: NavLink[] };

export const FEATURES_LINK: NavLink = {
  to: '/fonctionnalites',
  label: 'Fonctionnalités',
  children: [
    { to: '/fonctionnalites/metre-et-mesures', label: 'Métré et mesures' },
    { to: '/fonctionnalites/pre-diagnostic-et-etat-de-la-toiture', label: 'Pré-diagnostic et état de la toiture' },
    { to: '/fonctionnalites/donnees-imagerie-et-methode', label: 'Données, imagerie et méthode' },
  ],
};

export const PERSONAS_LINK: NavLink = {
  to: '/pour-qui',
  label: 'Pour qui',
  children: [
    { to: '/pour-qui/couvreurs', label: 'Couvreurs' },
    { to: '/pour-qui/assureurs', label: 'Assureurs' },
    { to: '/pour-qui/collectivites', label: 'Collectivités' },
  ],
};

export const COMPANY_LINKS: NavLink[] = [
  { to: '/tarifs', label: 'Tarifs' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/presse', label: 'Presse' },
  { to: '/partenaires-couvreurs', label: 'Partenaires couvreurs' },
];

export const LINKS: NavLink[] = [
  { to: '/', label: 'Accueil' },
  FEATURES_LINK,
  PERSONAS_LINK,
  { to: '/tarifs', label: 'Tarifs' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
  { to: '/blog', label: 'Ressources' },
];

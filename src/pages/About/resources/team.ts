export type TeamMember = {
  initials: string;
  name: string;
  role: string;
  /** Set when the role above still needs confirmation; shown as a visible TODO next to it. */
  roleTodo?: string;
  /** Path to the photo once available (e.g. '/assets/images/team/sofiane.jpg'). Falls back to initials. */
  photo?: string;
  /** Two-line bio once available. Falls back to a TODO placeholder. */
  bio?: string;
};

export const teamMembers: TeamMember[] = [
  { initials: 'SM', name: 'Sofiane Madani', role: 'CEO, co-fondateur' },
  { initials: 'FM', name: 'Fonenantsoa "Lou" Maurica', role: 'Co-fondateur, directeur technique' },
  { initials: 'RA', name: 'Ryan Andriamahery', role: 'Développeur fullstack' },
  { initials: 'AB', name: 'Amour Bien Aimée', role: 'Développeur frontend' },
  { initials: 'DR', name: 'Dinasoa Ratsimba', role: 'DevOps' },
  { initials: 'AD', name: 'Adel Belhancee', role: 'Ingénieur IA' },
  { initials: 'RP', name: 'Ricka Princy', role: 'Développeur backend' },
  { initials: 'FB', name: 'Fadela Belarbi', role: 'Finance et relation client', roleTodo: 'confirmer le rôle exact' },
];

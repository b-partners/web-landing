import { MouseEvent } from 'react';

/**
 * Attach to a container of in-page `#id` links (e.g. a table of contents) so
 * clicking one centers the target section in the viewport instead of the
 * default top-of-page jump, which the sticky Navbar would otherwise cover.
 */
export const handleCenteredAnchorClick = (event: MouseEvent<HTMLElement>) => {
  const anchor = (event.target as HTMLElement).closest('a');
  const href = anchor?.getAttribute('href');
  if (!href?.startsWith('#')) return;

  const id = href.slice(1);
  const target = document.getElementById(id);
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  window.history.pushState(null, '', `#${id}`);
};

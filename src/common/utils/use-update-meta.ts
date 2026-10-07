const SITE_URL = 'https://www.birdia.fr';

const setHeadTag = (selector: string, create: () => HTMLElement, attribute: string, value: string) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = create();
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
};

const metaByName = (name: string) => () => Object.assign(document.createElement('meta'), { name });
const metaByProperty = (property: string) => () => {
  const meta = document.createElement('meta');
  meta.setAttribute('property', property);
  return meta;
};

export const useUpdateMeta = (title: string, description: string) => {
  const url = SITE_URL + (window.location.pathname === '/' ? '/' : window.location.pathname.replace(/\/$/, ''));

  document.title = title;
  setHeadTag('meta[name="description"]', metaByName('description'), 'content', description);
  setHeadTag('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }), 'href', url);
  setHeadTag('meta[property="og:url"]', metaByProperty('og:url'), 'content', url);
  setHeadTag('meta[property="og:title"]', metaByProperty('og:title'), 'content', title);
  setHeadTag('meta[property="og:description"]', metaByProperty('og:description'), 'content', description);
};

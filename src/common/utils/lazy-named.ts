import { ComponentType, lazy } from 'react';

/** `React.lazy` for modules that use named exports: `lazyNamed(() => import('@pages/About'), 'About')`. */
export const lazyNamed = <M extends Record<K, ComponentType<any>>, K extends keyof M & string>(load: () => Promise<M>, name: K) =>
  lazy(() => load().then((module) => ({ default: module[name] })));

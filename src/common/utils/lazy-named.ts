import { ComponentType, lazy } from 'react';

/** `React.lazy` for modules that use named exports: `lazyNamed(() => import('@pages/About'), 'About')`. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const lazyNamed = <M extends Record<K, ComponentType<any>>, K extends keyof M & string>(load: () => Promise<M>, name: K) =>
  lazy(() => load().then((module) => ({ default: module[name] })));

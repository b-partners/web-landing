// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TemplateData = any;
export type TemplateDataLoader = () => Promise<{ default: TemplateData }>;

type Entry = { data?: TemplateData; error?: unknown; promise: Promise<void> };
const entries = new Map<TemplateDataLoader, Entry>();

/**
 * Template pages get their data either as an object or as a loader (`() => import('./json-data/<slug>')`, see App.tsx),
 * so each page's data is its own chunk. Suspends until the data is loaded.
 */
export const useTemplateData = (jsonData: TemplateData | TemplateDataLoader): TemplateData => {
  if (typeof jsonData !== 'function') return jsonData;
  const load = jsonData as TemplateDataLoader;

  let entry = entries.get(load);
  if (!entry) {
    const newEntry: Entry = {
      promise: load().then(
        (module) => {
          newEntry.data = module.default;
        },
        (error) => {
          newEntry.error = error;
        }
      ),
    };
    entries.set(load, newEntry);
    entry = newEntry;
  }
  if (entry.error) throw entry.error;
  if (entry.data === undefined) throw entry.promise;
  return entry.data;
};

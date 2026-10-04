import { useMemo } from 'react';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;

type UtmKey = (typeof UTM_KEYS)[number];

export const useUtmParams = (): Partial<Record<UtmKey, string>> => {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const result: Partial<Record<UtmKey, string>> = {};
    UTM_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) result[key] = value;
    });
    return result;
  }, []);
};

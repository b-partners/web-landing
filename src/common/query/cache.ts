const whoami_key = 'birdia-whoami-key';
const apikey_key = 'birdia-apikey-key';

export const cache = {
  whoami(whoami: any) {
    localStorage.setItem(whoami_key, JSON.stringify(whoami));
  },
  apikey(apikey: string) {
    localStorage.setItem(apikey_key, apikey);
  },
};

export const getCached = {
  whoami() {
    const whoami = localStorage.getItem(whoami_key);
    try {
      return JSON.parse(whoami);
    } catch {
      return null;
    }
  },
  apikey() {
    return localStorage.getItem(apikey_key);
  },
};

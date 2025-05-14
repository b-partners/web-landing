const createEnv = <T extends string>(envs: T[]): Record<T, string> => {
  return envs.reduce(
    (acc, envName) => {
      const envValue = process.env[envName];
      if (!envValue) {
        console.warn(`Env.${envName} may be missing.`);
      }
      acc[envName] = envValue as string;
      return acc;
    },
    {} as Record<T, string>
  );
};

export const Env = createEnv([
  'CTA_URL',
  'DASHBOARD_LOGIN_URL',
  'DASHBOARD_REGISTRATION_URL',
  'REACT_APP_CGU_URL',
  'REACT_APP_LEGAL_MENTION_URL',
  'REACT_APP_PRIVACY_POLICY_URL',
]);

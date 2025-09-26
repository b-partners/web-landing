import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { cache, getCached } from './cache';

const baseUrl = process.env.REACT_APP_BIRDIA_API_URL;

const mutationFn = async (apikey: string) => {
  const result = await fetch(`${baseUrl}/whoami`, { headers: { 'x-api-key': apikey } });
  if (result.status !== 200) throw new Error('Api key invalide');

  const whoami = await result.json();
  cache.whoami(whoami);
  cache.apikey(apikey);
  return whoami;
};

export const useGetWhoamiQuery = () => {
  const navigate = useNavigate();
  const onSuccess = () => navigate(`/template/menu?apikey=${getCached.apikey()}`);
  const { mutate, isPending } = useMutation({ mutationKey: ['whoami'], mutationFn, onSuccess });
  return {
    getWhoami: mutate,
    isWhoamiPending: isPending,
  };
};

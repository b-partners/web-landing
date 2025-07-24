import { useMutation } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { v4 } from 'uuid';

const imageUrlApi = process.env.REACT_APP_BIRDIA_API_URL;

export const createImageUrl = (id: string) => `${imageUrlApi}/${id}`;

export const useUploadImage = (onSuccess?: (data: any, variables: File, context: unknown) => Promise<unknown> | unknown) => {
  const [searchParams] = useSearchParams();
  return useMutation({
    mutationFn: async (image: File) => {
      const formData = new FormData();
      formData.append('file', image);

      const uuid = v4();

      const result = await fetch(`${imageUrlApi}/landing-file/${uuid}`, {
        method: 'POST',
        body: formData,
        headers: { 'x-api-key': searchParams.get('apikey') },
      });

      if (result.status === 403) {
        throw new Error("Votre clé d'api est invalide");
      }

      if (result.status !== 200) {
        throw new Error("Une erreur s'est produite");
      }

      return createImageUrl(uuid);
    },
    mutationKey: ['upldate image'],
    onSuccess,
  });
};

import { useMutation } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { v4 } from 'uuid';

const imageUrlApi = process.env.IMAGE_URL_API;

export const createImageUrl = (id: string) => `${imageUrlApi}/${id}`;

export const useUploadImage = (onSuccess?: (data: any, variables: File, context: unknown) => Promise<unknown> | unknown) => {
  const [searchParams] = useSearchParams();
  return useMutation({
    mutationFn: async (image: File) => {
      const formData = new FormData();
      formData.append('file', image);

      const uuid = v4();

      try {
        await fetch(`${imageUrlApi}/${uuid}`, {
          method: 'POST',
          body: formData,
          headers: { 'x-api-key': searchParams.get('apikey') },
        });
        return createImageUrl(uuid);
      } catch (error) {
        console.error('Upload error:', error);
      }
    },
    mutationKey: ['upldate image'],
    onSuccess,
  });
};

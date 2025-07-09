import { useMutation } from '@tanstack/react-query';

import { v4 } from 'uuid';

const imageUrlApi = process.env.IMAGE_URL_API;

export const createImageUrl = (id: string) => `${imageUrlApi}/${id}`;

export const useUploadImage = (onSuccess?: (data: any, variables: File, context: unknown) => Promise<unknown> | unknown) => {
  return useMutation({
    mutationFn: async (image: File) => {
      const formData = new FormData();
      formData.append('file', image);

      const uuid = v4();

      try {
        await fetch(`${imageUrlApi}/${uuid}`, {
          method: 'POST',
          body: formData,
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

import axios from 'axios';
import { useCallback } from 'react';

export const axiosInstance = axios.create({
  baseURL: 'https://608432819b2bed0017040cbf.mockapi.io',
});

export const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

export const useYupValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );

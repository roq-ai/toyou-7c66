import * as yup from 'yup';

export const locationValidationSchema = yup.object().shape({
  latitude: yup.string().required(),
  longitude: yup.string().required(),
  company_id: yup.string().nullable(),
});

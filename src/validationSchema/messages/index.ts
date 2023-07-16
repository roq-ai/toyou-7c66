import * as yup from 'yup';

export const messageValidationSchema = yup.object().shape({
  content: yup.string().required(),
  sender_id: yup.string().nullable(),
  receiver_id: yup.string().nullable(),
});

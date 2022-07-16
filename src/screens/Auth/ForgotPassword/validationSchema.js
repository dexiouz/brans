import * as Yup from 'yup';

export const validationSchema = Yup.object({
  emailOrPhone: Yup.string().required('- Enter your phone or email'),
});

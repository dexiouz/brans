import * as Yup from 'yup';

export const validationSchema = Yup.object({
  serviceName: Yup.string().required(),
  country: Yup.string().required(),
  state: Yup.string().required(),
  city: Yup.string().required(),
  landMark: Yup.string(),
  street: Yup.string().required(),
  aboutBrand: Yup.string(),
});

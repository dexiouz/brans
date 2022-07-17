import * as Yup from 'yup';
const rePhoneNumber =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
export const validationSchema = Yup.object({
  emailOrPhone: Yup.string().required('- Enter your phone or email'),
  password: Yup.string()
    .min(6, '- Password must be minimum of 6 characters')
    .required('- Password must be minimum of 6 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], '- Passwords must match')
    .required('- Passwords must match'),
  userType: Yup.string().required('- Enter your userType'),
});

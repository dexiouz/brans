import * as Yup from 'yup';
export const validationSchema = Yup.object({
  oldPassword: Yup.string().required(
    '- Password must be minimum of 6 characters.',
  ),
  password: Yup.string()
    .min(6, '- Password must be minimum of 6 characters.')
    .required('- Password must be minimum of 6 characters.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], '- Passwords must match.')
    .required('- Passwords must match.'),
});

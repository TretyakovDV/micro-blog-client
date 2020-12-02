import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { User } from 'stores/user';

// eslint-disable-next-line import/prefer-default-export
export const useContainer = (user: User | undefined) => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: 'admin@test.com',
      password: 'admin',
    },
    onSubmit: async ({ email, password }) => {
      await user?.login(email, password);
      if (user?.auth) history.push('/');
    },
  });
  return { formik };
};

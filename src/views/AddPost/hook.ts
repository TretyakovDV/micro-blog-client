import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { Posts } from 'stores/posts';
import { FormPostType } from 'stores/post';

// eslint-disable-next-line import/prefer-default-export
export const useContainer = (posts: Posts | undefined) => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
      image: '',
      author: '',
    },
    onSubmit: async (values: FormPostType) => {
      console.log('values => ', values);
      await posts?.addPost(values);
      history.push('/');
    },
  });

  const handleImageChange = async ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        formik.setFieldValue('image', e?.target?.result);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleBack = () => {
    history.goBack();
  };

  return { formik, handleImageChange, handleBack };
};

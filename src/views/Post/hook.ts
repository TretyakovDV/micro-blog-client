import { useParams, useHistory } from 'react-router-dom';
import { Posts } from 'stores/posts';

type Params = {
  id: string
};

// eslint-disable-next-line import/prefer-default-export
export const useContainer = (posts: Posts | undefined) => {
  const { id }: Params = useParams();
  const history = useHistory();
  const post = posts?.getPost(id);

  const handleBack = () => {
    history.goBack();
  };

  return { post, handleBack };
};

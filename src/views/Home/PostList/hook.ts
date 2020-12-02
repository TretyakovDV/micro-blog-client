import React from 'react';
import { Posts } from 'stores/posts';

// eslint-disable-next-line import/prefer-default-export
export const useContainer = (posts: Posts | undefined) => {
  React.useEffect(() => {
    posts?.requestPosts();
  }, [posts]);
};

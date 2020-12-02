import React from 'react';
import { inject, observer } from 'mobx-react';
import { Posts } from 'stores/posts';
import { PostType } from 'stores/post';
import Grid from '@material-ui/core/Grid';
import { useContainer } from './hook';
import PostItem from './PostItem';

type Props = {
  posts?: Posts
};

const Component = inject('posts')(observer(({ posts }: Props) => {
  useContainer(posts);

  return (
    <Grid container spacing={2} className="list">
      {posts?.posts.map((el: PostType) => (
        <PostItem
          key={el.id}
          post={el}
        />
      ))}
    </Grid>
  );
}));

export default Component;

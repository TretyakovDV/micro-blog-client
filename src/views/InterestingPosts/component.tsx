import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link, useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Posts } from 'stores/posts';
import { PostType } from 'stores/post';

type Props = {
  posts?: Posts
};

const Component = inject('posts')(observer(({ posts }: Props) => {
  const { id }: {id: string} = useParams();

  return (
    <>
      <Typography variant="h4" component="p">Interesting posts</Typography>
      <div>
        {posts?.intresting.map((el: PostType) => id !== el.id && (
          <Link
            className="interesting__link"
            to={`/post/${el.id}`}
          >
            {el.title}
          </Link>
        ))}
      </div>
    </>
  );
}));

export default Component;

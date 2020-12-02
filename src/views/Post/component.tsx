import React from 'react';
import { inject, observer } from 'mobx-react';
import { Posts } from 'stores/posts';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';
import InterestingPosts from 'views/InterestingPosts';
import { dateFormat } from 'utils/dateFormat';
import { useContainer } from './hook';

type Props = {
  posts?: Posts
};

const Component = inject('posts')(observer(({ posts }: Props) => {
  const { post, handleBack } = useContainer(posts);

  return (
    <Container>
      <Grid container>
        <Grid item md={8}>
          <IconButton
            onClick={handleBack}
            color="primary"
          >
            <ArrowBackIcon />
          </IconButton>
          <div>

            <img
              src={post?.image}
              alt=""
              className="post__image"
            />
            <div>
              <Typography variant="body2">{dateFormat(post?.date)}</Typography>
              <Typography variant="body1">{post?.author}</Typography>
              <Typography variant="h3">{post?.title}</Typography>
              <p>{post?.body}</p>
            </div>
          </div>
        </Grid>
        <Grid item md={4}>
          <div className="interesting">
            <InterestingPosts />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}));

export default Component;

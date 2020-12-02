import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PostList from './PostList';

const Component = () => (
  <Container>
    <Typography
      variant="h1"
      className="title"
    >
      Posts
    </Typography>
    <PostList />
  </Container>
);

export default Component;

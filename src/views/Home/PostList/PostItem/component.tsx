import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { PostType } from 'stores/post';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { slicer } from 'utils/slicer';
import { dateFormat } from 'utils/dateFormat';
import { useContainer } from './hook';

type Props = {
  user?: any,
  posts?: any,
  post: PostType,
};

const Component = inject('posts', 'user')(observer(({ post, user, posts }: Props) => {
  const { handleDelete } = useContainer(post.id, posts);

  return (
    <Grid item lg={3} md={6} sm={12}>
      <Card variant="outlined" className="card">
        <CardHeader
          title={post.author}
          subheader={dateFormat(post.date)}
        />
        <CardMedia
          className="media"
          image={post.image}
          title="Paella dish"
        />
        <CardContent>
          <Typography
            variant="h6"
            className="card__title"
          >
            {post.title}
          </Typography>
          <Typography variant="body1">
            {slicer(post.body, 100)}
          </Typography>
          <Link to={`/post/${post.id}`}>
            <Button
              className="card__button"
              color="primary"
              variant="outlined"
            >
              Details
            </Button>
            {user?.auth && (
              <Button
                className="card__button card__button--delete"
                color="secondary"
                variant="outlined"
                onClick={handleDelete}
              >
                Delete
              </Button>
            )}
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
}));

export default Component;

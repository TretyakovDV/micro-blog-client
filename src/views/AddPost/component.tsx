import React from 'react';
import { inject, observer } from 'mobx-react';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ImageIcon from '@material-ui/icons/Image';
import { Posts } from 'stores/posts';
import { PhotoCamera } from '@material-ui/icons';
import { useContainer } from './hook';

type Props = {
  posts?: Posts
};

const Component = inject('posts')(observer(({ posts }: Props) => {
  const { formik, handleImageChange, handleBack } = useContainer(posts);

  return (
    <Container>
      <IconButton
        color="primary"
        onClick={handleBack}
      >
        <ArrowBackIcon />
      </IconButton>
      <Grid container justify="center">
        <form onSubmit={formik.handleSubmit} className="add-form">
          <TextField
            id="title"
            name="title"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            fullWidth
          />
          <TextField
            id="body"
            name="body"
            label="Body"
            multiline
            rowsMax={10}
            value={formik.values.body}
            onChange={formik.handleChange}
            fullWidth
          />
          <TextField
            id="author"
            name="author"
            label="Author"
            value={formik.values.author}
            onChange={formik.handleChange}
            fullWidth
          />
          <Grid
            container
            spacing={3}
            className="image-upload"
          >
            <Grid item md={4}>
              <label htmlFor="button-file">
                <Button
                  variant="outlined"
                  color="primary"
                  component="span"
                >
                  <ImageIcon />
                  {' '}
                  Upload image
                </Button>
                <input
                  name="button-file"
                  accept="image/*"
                  id="button-file"
                  type="file"
                  onChange={handleImageChange}
                />
              </label>

            </Grid>
            <Grid item md={8}>
              <img src={formik.values.image} alt="" className="add-image" />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
          >
            Add post
          </Button>
        </form>
      </Grid>
    </Container>
  );
}));

export default Component;

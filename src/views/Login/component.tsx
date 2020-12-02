import React from 'react';
import { observer, inject } from 'mobx-react';
import { User } from 'stores/user';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useContainer } from './hook';

type Props = {
  user?: User,
};

const Component = inject('user')(observer(({ user }: Props) => {
  const { formik } = useContainer(user);

  return (
    <Container>
      <Grid
        container
        justify="center"
      >
        <form
          onSubmit={formik.handleSubmit}
          noValidate
          autoComplete="off"
          className="login-form"
        >
          <TextField
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            label="Email"
          />
          <TextField
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            label="Password"
            type="password"
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Login
          </Button>
        </form>
      </Grid>
    </Container>
  );
}));

export default Component;

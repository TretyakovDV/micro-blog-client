import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { User } from 'stores/user';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useContainer } from './hook';

type Props = {
  user?: User
};

const Component = inject('user')(observer(({ user }: Props) => {
  const { handleLogout } = useContainer(user);

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" className="header__title">
            Micro-blog
          </Typography>
          {user?.auth ? (
            <>
              <Link to="/add-post">
                <Button color="inherit">Add post</Button>
              </Link>
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}));

export default Component;

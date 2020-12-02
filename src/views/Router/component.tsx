import React from 'react';
import { inject, observer } from 'mobx-react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from 'views/Home';
import Post from 'views/Post';
import AddPost from 'views/AddPost';
import Login from 'views/Login';
import Header from 'views/Header';
import { User } from 'stores/user';

type Props = {
  user?: User
};

const Component = inject('user')(observer(({ user }: Props) => (
  <>
    <Header />
    {user?.auth ? (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/post/:id">
          <Post />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/add-post">
          <AddPost />
        </Route>
        <Redirect exact from="*" to="/" />
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/post/:id">
          <Post />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Redirect exact from="*" to="/" />
      </Switch>
    )}

  </>
)));

export default Component;

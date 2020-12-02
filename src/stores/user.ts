import {
  observable, action, makeObservable,
} from 'mobx';
import cookie from 'js-cookie';
import agent from 'agent/apolloClient';

export class User {
  constructor() {
    makeObservable(this, {
      auth: observable,
      login: action,
      logout: action,
    });

    this.auth = !!cookie.get('token');
  }

  auth = false;

  async login(email: string, password: string) {
    try {
      await agent.user.login(email, password);
      this.auth = true;
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }

  async logout() {
    try {
      await agent.user.logout();
      this.auth = false;
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

export default new User();

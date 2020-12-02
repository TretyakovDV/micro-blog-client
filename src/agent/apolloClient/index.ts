import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import TestAgent from './testAgent';
import Posts from './posts';
import User from './user';

const link = createHttpLink({
  uri: process.env.API_HOST || 'http://localhost:4000/graphql',
  credentials: 'include',
});

const client: ApolloClient<any> = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const testAgent = new TestAgent(client);
const posts = new Posts(client);
const user = new User(client);

export default { testAgent, posts, user };

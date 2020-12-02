import { ApolloClient, gql } from '@apollo/client';

class User {
  constructor(client: ApolloClient<any>) {
    this.client = client;
  }

  client: ApolloClient<any> | null = null;

  login(email: string, password: string) {
    return this.client?.mutate({
      mutation: gql`
        mutation ($email: String, $password: String) {
          login(email: $email, password: $password)
        }`,
      variables: { email, password },
    });
  }

  logout() {
    return this.client?.mutate({
      mutation: gql`
        mutation {
          logout(type: "true")
        }`,
    });
  }
}

export default User;

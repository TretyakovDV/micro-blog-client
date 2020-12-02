import { ApolloClient, gql } from '@apollo/client';

class TestAgent {
  constructor(client: ApolloClient<any>) {
    this.client = client;
  }

  client: ApolloClient<any> | null = null;

  getRates() {
    return this.client?.query({
      query: gql`
            query GetRates {
                rates(currency: "USD")  {
                    currency
                }
            }
          `,
    });
  }
}

export default TestAgent;

import { ApolloClient, gql } from '@apollo/client';

class Posts {
  constructor(client: ApolloClient<any>) {
    this.client = client;
  }

  client: ApolloClient<any> | null = null;

  getPost() {
    return this.client?.query({
      query: gql`{
        posts {
            id
            title
            body
            author
            date
            image
      }
      }`,
    });
  }

  deletePost(id: string) {
    return this.client?.mutate({
      mutation: gql`
            mutation($id: ID) {
                deletePost(id: $id)
            }
          `,
      variables: { id },
    });
  }

  addPost(title: string, body: string, image: string, author: string) {
    return this.client?.mutate({
      mutation: gql`
          mutation($title: String, $body: String, $image: String, $author: String) {
              addPost(title: $title, body: $body,image: $image,author: $author) {
                  id
              }
          }
      `,
      variables: {
        title, body, image, author,
      },
    });
  }
}

export default Posts;

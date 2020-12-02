import Post from '../post';

describe('Post', () => {
  const title = 'title';
  const body = 'body';
  const author = 'author';
  const image = 'image';

  const post: Post = new Post(title, body, image, author);

  it('created new post', () => {
    expect(post.title).toEqual(title);
    expect(post.body).toEqual(body);
    expect(post.author).toEqual(author);
    expect(post.image).toEqual(image);
  });

  it('post', () => {
    expect(post.post).toEqual({
      title,
      body,
      image,
      author,
    });
  });
});

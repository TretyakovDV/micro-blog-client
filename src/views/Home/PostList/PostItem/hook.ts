// eslint-disable-next-line import/prefer-default-export
export const useContainer = (id: string, posts: any) => {
  const handleDelete = () => posts?.deletePost(id);

  return { handleDelete };
};

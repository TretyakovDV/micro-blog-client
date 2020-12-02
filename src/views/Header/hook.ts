import { User } from 'stores/user';

// eslint-disable-next-line import/prefer-default-export
export const useContainer = (user: User | undefined) => {
  const handleLogout = () => user?.logout();

  return { handleLogout };
};

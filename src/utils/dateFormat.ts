// eslint-disable-next-line import/prefer-default-export
export const dateFormat = (date: string | undefined): string => `${new Date(Number(date) * 1000).toLocaleDateString()} ${new Date(Number(date) * 1000).toLocaleTimeString()}`;

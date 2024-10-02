export const isNumber = (value: unknown) => {
  return typeof value === 'number' && !isNaN(value);
};

export const generateUrl = (socketUrl: string, tokens: string[]) => {
  return `${socketUrl}/${tokens.map(token => `${token}@ticker`).join('/')}`;
};

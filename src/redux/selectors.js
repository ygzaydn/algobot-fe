export const isAuth = (state) =>
  Object.keys(state.user).length > 0 && state.user.email !== undefined;

export const language = (state) => state.lang;

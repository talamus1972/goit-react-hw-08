export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectIsRefreshing = (state) => state.auth.IsRefreshing;

export const selectLoading = (state) => state.auth.loading;

export const selectError = (state) => state.auth.error;
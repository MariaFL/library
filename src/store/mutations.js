export default {
  LOGIN: (state) => {
    state.user = null;
  },
  USER_REGISTRATION: (state, userId) => {
    state.user = userId;
  },
  USER_LOGOUT(state) {
    state.user = null;
  }
};

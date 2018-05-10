export default {
  LOGIN: (state) => {
    state.user = null;
  },
  USER_REGISTRATION: (state, userId) => {
    state.user = userId;
  },
  outUser(state) {
    state.user = null;
  }
};

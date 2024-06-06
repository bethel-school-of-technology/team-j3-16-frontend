import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    user: null, //user's current state
    token: null, // user's token
  }),
  actions: {
    setUsers(users) {
      this.users = users;
    },
    login(user, token) {
      this.user = user;
      this.token = token;
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('signUserToken');
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
});






// import { defineStore } from 'pinia';

// export const useUserStore = defineStore('user', {
//   state: () => ({
//     user: null,
//   }),
//   actions: {
//     setUser(user) {
//       this.user = user;
//     },
//     clearUser() {
//       this.user = null;
//     },
//   },
// });
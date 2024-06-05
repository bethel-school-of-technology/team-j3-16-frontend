import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: []  // Initialize an empty array for users
  }),
  actions: {
    setUsers(users) {
      this.users = users;
    },
    addUser(user) {
      this.users.push(user);
    },
    updateUser(updatedUser) {
      const index = this.users.findIndex(user => user.id === updatedUser.id);
      if (index !== -1) {
        this.users[index] = updatedUser;
      }
    }
  }
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
<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';

const router = useRouter();
const userStore = useUserStore();

const signOut = () => {
  // Clear the user data from the Pinia store
  userStore.clearUser();

  // Remove the token from local storage
  localStorage.removeItem('signUserToken');

  // Log a confirmation message
  console.log('User has been signed out.');

  // Redirect to the login page
  router.push('/');
};

onMounted(() => {
  signOut();
});
</script>

<template>
  <div>
    <p>Signing out...</p>
  </div>
</template>
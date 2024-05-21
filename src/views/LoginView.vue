<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const store = useStore();
const router = useRouter();

const login = async () => {
  try {
    await store.dispatch('auth/login', { username: username.value, password: password.value });
    router.push('/');
  } catch (error) {
    console.error('Login failed:', error);
  }
};

const goToSignup = () => {
  router.push('/signup');
};
</script>

<template>
  <v-container>
    <v-form @submit.prevent="login">
      <v-text-field
        v-model="username"
        label="Username"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        required
      ></v-text-field>
      <v-btn type="submit" color="primary">Login</v-btn>
    </v-form>
    <v-btn text @click="goToSignup">Don't have an account? Signup</v-btn>
  </v-container>

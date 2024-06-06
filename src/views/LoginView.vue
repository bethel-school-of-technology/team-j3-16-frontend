<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useUserStore } from '@/stores/user';

const username = ref('');
const password = ref('');
const router = useRouter();
const userStore = useUserStore();

const login = async () => {
  try {
    const loginResponse = await axios.post('http://localhost:3000/api/user/login', {
      username: username.value,
      password: password.value,
    });

    const { token, user } = loginResponse.data;
    localStorage.setItem('signUserToken', token);
    userStore.login(user, token); // Save user and token in the store

    console.log('Successfully logged in:', user);
    router.push('/home');
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
  <h1>Login</h1>
  <br>
    <v-form @submit.prevent="login">
      <v-text-field v-model="username" label="Username" required></v-text-field>
      <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
      <v-btn type="submit" color="primary">Login</v-btn>
    </v-form>
    <br>
    <v-btn text @click="goToSignup">Don't have an account? Signup</v-btn>
  </v-container>
</template>

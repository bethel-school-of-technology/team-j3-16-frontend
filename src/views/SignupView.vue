
<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const username = ref('');
const email = ref('');
const password = ref('');
const store = useStore();
const router = useRouter();

const register = async () => {
  try {
    await store.dispatch('auth/register', { username: username.value, email: email.value, password: password.value });
    router.push('/login');
  } catch (error) {
    console.error('Registration failed:', error);
  }
};

const goToLogin = () => {
  router.push('/');
};
</script>

<template>
  <v-container>
    <v-form @submit.prevent="register">
      <v-text-field
        v-model="username"
        label="Username"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        label="Email"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        required
      ></v-text-field>
      <v-btn type="submit" color="primary">Signup</v-btn>
    </v-form>
    <br>
    <v-btn text @click="goToLogin">Already have an account? Login</v-btn>
  </v-container>
</template>
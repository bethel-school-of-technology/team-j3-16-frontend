<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const username = ref('');
const email = ref('');
const password = ref('');
const city_state = ref('');
const country = ref('');
const authStore = useAuthStore();
const router = useRouter();

const register = async () => {
  try {
    await authStore.register({ 
      username: username.value, 
      email: email.value, 
      password: password.value,
      city_state: city_state.value,
      country: country.value 
    });
    router.push('/login');
  } catch (error) {
    console.error('Registration failed:', error);
  }
};

const goToLogin = () => {
  router.push('/login');
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
      <v-text-field
        v-model="city_state"
        label="City/State"
        required
      ></v-text-field>
      <v-text-field
        v-model="country"
        label="Country"
        required
      ></v-text-field>
      <v-btn type="submit" color="primary">Signup</v-btn>
    </v-form>
    <v-btn text @click="goToLogin">Already have an account? Login</v-btn>
  </v-container>
</template>

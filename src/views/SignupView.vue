
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  name: 'Signup',
  setup() {
    const username = ref('');
    const password = ref('');
    const city_state = ref('');
    const country = ref('');
    const router = useRouter();

    const register = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/user/register', {
          username: username.value,
          password: password.value,
          city_state: city_state.value,
          country: country.value
        });

        if (response.status === 201) {
          console.log('Sign up success: ', username.value);
          router.push('/home');
        } else {
          console.log('Error, try signing up again: ', username.value);
        }
      } catch (error) {
        console.error('Registration failed:', error);
      }
    };

    const goToLogin = () => {
      router.push('/login');
    };

    return {
      username,
      password,
      city_state,
      country,
      register,
      goToLogin
    };
  }
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
        v-model="password"
        label="Password"
        type="password"
        required
      ></v-text-field>
      <v-text-field
        v-model="city_state"
        label="City, State"
        required
      ></v-text-field>
      <v-text-field
        v-model="country"
        label="Country"
        required
      ></v-text-field>
      <v-btn type="submit" color="primary">Sign Up</v-btn>
    </v-form>
    <br>
    <v-btn text @click="goToLogin">Already have an account? Login</v-btn>
  </v-container>
</template>

<script>
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const GStore = inject('GStore')

export default {
  name: 'Signup',
  setup() {
    const username = ref('');
    const password = ref('');
    const place = ref('');
    const region = ref('');
    const country = ref('');
    const router = useRouter();

    const register = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/user/register', {
          username: username.value,
          password: password.value,
          place: place.value,
          region: region.value,
          country: country.value
          
        });

        if (response.status === 201) {
          console.log('Sign up success: ', username.value);
          router.push('/');
        } else {
          console.log('Error, try signing up again: ', username.value);
        }
      } catch (error) {
        console.error('Registration failed:', error);
      }
    };

    const goToLogin = () => {
      router.push('/');
    };

    return {
      username,
      password,
      place,
      region,
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
        v-model="place"
        label="City / Place"
        required
      ></v-text-field>
      <v-text-field
        v-model="region"
        label="State / Province"
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
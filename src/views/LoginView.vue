<script > // DELETED SETUP
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';


export default {
  name: 'Login',
  setup() {
      const username = ref('');
      const password = ref('');
      const router = useRouter();

      const login = async () => {
        try {

          const loginResponse = await axios.post('http://localhost:3000/api/user/login', {
            username: username.value,
            password: password.value
          });

          const { username: existingUser, password: existingPass, token } = loginResponse.data
          localStorage.setItem('signUserToken', token);

          console.log(loginResponse.data);

            if (loginResponse.data) {
              console.log('Successfully logged in:', username.value);
              router.push('/home');

            } else {
              console.log('Error: Invalid user credentials')
            }

        } catch (error) {
          console.error('Login failed:', error);
          }
        };


      const goToSignup = () => {
        router.push('/signup');
      };

    return {
      username,
      password,
      login,
      goToSignup
    };

  }
}

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
</template>
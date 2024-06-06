<script setup>
import { ref, computed, watch } from 'vue';
import { useRouter, useRoute, RouterLink, RouterView } from 'vue-router';
import { useUserStore } from './stores/user'; 
import { VApp, VAppBar, VMain, VContainer, VBtn, VIcon, VSpacer } from 'vuetify/components';
import 'vuetify/styles';
import 'primeicons/primeicons.css';

const router = useRouter();
const route = useRoute();
const userStore = useUserStore();
const isLoggedIn = computed(() => userStore.isLoggedIn);

const signOut = () => {
  console.log('Logging out...');
  userStore.logout(); 
  router.push('/'); 
  console.log('Logged out. isLoggedIn:', isLoggedIn.value);
};

const showNavBar = ref(isLoggedIn.value || route.path === '/login');

// Watch for changes in the login status and route to update the navigation visibility
watch([isLoggedIn, route], () => {
  showNavBar.value = isLoggedIn.value || route.path === '/';
  console.log('Route or login status changed. showNavBar:', showNavBar.value);
});

console.log('Component setup complete. Initial showNavBar:', showNavBar.value, 'isLoggedIn:', isLoggedIn.value);



</script>

<template>
  <v-app>
    <v-app-bar app>
      <h2> PrayerIT </h2>
      <i class="pi pi-sparkles"></i>

      <nav  >
        <RouterLink to="/home">
          <v-btn text class="mx-2">
            Prayers
          </v-btn>
        </RouterLink>
        <RouterLink to="/testimony">
          <v-btn text class="mx-2">
            Testimonies
          </v-btn>
        </RouterLink>
        <RouterLink to="/scripture">
          <v-btn text class="mx-2">
            Scripture
          </v-btn>
        </RouterLink>

        <v-spacer></v-spacer>

        <RouterLink to="/profile" >
          <v-btn icon>
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </RouterLink>

        <!-- Logout Button -->
        <v-btn  text @click="signOut" class="mx-2">
          Logout
        </v-btn>
      </nav>
    </v-app-bar>

    <v-main>
      <v-container class="mt-4">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  width: 100%;
}

.v-btn {
  text-transform: none;
  font-size: 16px;
}

h2 {
  margin-left: 1rem;
}
</style>

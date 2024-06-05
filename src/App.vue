<script setup>
import { ref } from 'vue';
import { useRouter, RouterLink, RouterView } from 'vue-router';
import { VApp, VAppBar, VMain, VContainer, VBtn, VIcon, VSpacer } from 'vuetify/components';
import { useUserStore } from './stores/user';
import 'vuetify/styles';
import 'primeicons/primeicons.css';

const router = useRouter();
const userStore = useUserStore();

const signOut = () => {
  userStore.logout();
  router.push('/');
};
</script>

<template>
  <v-app>
    <v-app-bar app>
      <h2> PrayerIT </h2>
      <i class="pi pi-sparkles"></i>

      <nav v-if="userStore.isLoggedIn">
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

        <RouterLink to="/profile">
          <v-btn icon>
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </RouterLink>

        <v-btn text @click="signOut" class="mx-2">
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

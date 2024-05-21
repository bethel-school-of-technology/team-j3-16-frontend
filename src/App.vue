<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter, RouterLink, RouterView } from 'vue-router';
import { VApp, VAppBar, VMain, VContainer, VBtn, VImg, VIcon, VSpacer } from 'vuetify/components';
import 'vuetify/styles';

</script>



<template>
  <v-app>
    <v-app-bar app>
      <v-img alt="Vue logo" src="@/assets/logo.svg" contain max-width="125" max-height="125" class="ma-4" />

      <nav>
        <RouterLink to="/">
          <v-btn text class="mx-2">
            Prayers
          </v-btn>
        </RouterLink>
        <RouterLink to="/about">
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

        <RouterLink :to="{ name: 'profile', params: { username: 'mark2021' } }">
          <v-btn icon>
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </RouterLink>
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
</style>

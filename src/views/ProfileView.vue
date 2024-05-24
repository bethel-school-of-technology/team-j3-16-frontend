<script>

import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import PrayerForm from '@/components/PrayerForm.vue';
import ProfilePage from '@/components/ProfilePage.vue';


// const route = useRoute()

// const username = ref(route.params.id);

export default {
  name: 'Profile',
  components: {
    ProfilePage,
    PrayerForm
  },
  methods: {

    fetchPosts() { this.$refs.all-posts.fetchPosts(); },
  }
}

</script>

<template>

  <div class="profile">
    <h1>Profile Information </h1>

    <v-card class="infoCard">
    <v-card-text>
      <v-row>
        <v-col cols="auto">
          <span>Username:</span>
        </v-col>
        <v-col>
          <v-text
            outlined
            dense
          > {{ username }}
        </v-text>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-text>
      <v-row>
        <v-col cols="auto">
          <span>Password:</span>
        </v-col>
        <v-col>
          <v-text-field
            v-model="hashedPassword"
            type="password"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-text>
      <v-row>
        <v-col cols="auto">
          <span>City, State:</span>
        </v-col>
        <v-col>
          <v-text-field
            v-model="city_state"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-text>
      <v-row>
        <v-col cols="auto">
          <span>Country:</span>
        </v-col>
        <v-col>
          <v-text-field
            v-model="country"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-btn variant="elevated" color="info" @click="editUserInfo">Edit Information</v-btn>
    </v-card-actions>
  </v-card>

    <!-- // <p>{{ $route.params.username }}</p> -->

    <h1> All Posts </h1>
    <!-- {{  this.fetchPosts() }} -->
       
    <all-posts ref="fetchPosts"></all-posts>

  </div>

</template>

<style>
/* @media (min-width: 1024px) {
  .profile {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */

.profile {
  margin-left:3%;
  margin-right: 3%;
}

.infoCard {
  margin-bottom: 1rem;
}


</style>
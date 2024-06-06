<script setup>
import PrayerForm from '../components/PrayerForm.vue';
import TestimonyForm from '../components/TestimonyForm.vue';
import MapboxCluster from '../components/MapboxCluster.vue'
import FeedConfig from '@/components/FeedConfig.vue';
import { useDisplay } from 'vuetify'
import { computed } from 'vue'


</script>

<template>
  <div>
    <v-container class="flex-wrap justify-center">
      <v-row >
        <v-col cols="12" class="text-center">
          <h1>Global Prayer Network</h1>
            
            <div>
            
            <h3>Submit a prayer request or pray for a request to join in on the action!</h3>
            <br>
            <br>
            </div>
            
        </v-col>
      </v-row>

      <div>
      <v-row>
        <v-col cols="12" md="6">
          <MapboxCluster />
        </v-col>
        <v-col cols="12" md="6">

          <PrayerForm />
          
        </v-col>
      </v-row>
      </div>

    </v-container>
  </div>
</template>

<style scoped>
.sticky-top {
  position: -webkit-sticky; 
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>

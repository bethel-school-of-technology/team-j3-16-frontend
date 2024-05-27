<script setup>
import PrayerForm from '../components/PrayerForm.vue';
import TestimonyForm from '../components/TestimonyForm.vue';
import MapboxCluster from '../components/MapboxCluster.vue'

//until backend connected
import MockPreview from '../components/MockPreview.vue';

</script>

<template>
  <div>
    <h1>Global Active Prayer Network</h1>
    <PrayerForm />
    <!-- <MockPreview /> -->
<br>
    <MapboxCluster />


  </div>
</template>

<style scoped>
/* Add your styles here if needed */
</style>

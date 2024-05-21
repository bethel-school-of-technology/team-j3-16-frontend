<template>
  <div>
    <h2>Prayer Post Card Preview</h2>
    <PrayerPostCard :post="mockPost" />
  </div>
</template>

<script setup>
import PrayerPostCard from './PrayerPostCard.vue';

const mockPost = {
  userName: 'Jane Doe',
  date: new Date().toLocaleDateString(),
  type: 'Prayer',
  content: 'This is a sample prayer request for preview purposes.',
  likes: 5, // Sample initial likes
};
</script>

<style scoped>
/* Add your styles here if needed */
</style>


<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import PrayerPostCard from '../components/PrayerPostCard.vue';
import TestimonyPostCard from '../components/TestimonyPostCard.vue';

export default {
  name: 'FeedConfig',
  components: {
    PrayerPostCard,
    TestimonyPostCard
  },
  setup() {
    const prayerPosts = ref([]);
    const testimonyPosts = ref([]);
    const sortedPosts = ref([]);

    const fetchPosts = async () => {
      try {
        const prayerResponse = await axios.get('http://localhost:3000/api/prayer');
        const testimonyResponse = await axios.get('http://localhost:3000/api/testimony');

        prayerPosts.value = prayerResponse.data.map(post => ({
          ...post,
          type: 'Prayer',
          date: new Date(post.date).toLocaleString(),
        }));

        testimonyPosts.value = testimonyResponse.data.map(post => ({
          ...post,
          type: 'Testimony',
          date: new Date(post.date).toLocaleString(),
        }));

        sortedPosts.value = [...prayerPosts.value, ...testimonyPosts.value].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    onMounted(() => {
      fetchPosts();
    });

    return {
      sortedPosts
    };
  }
};
</script>


<template>
  <div>
    <div v-for="post in sortedPosts" :key="post._id">
      <PrayerPostCard v-if="post.type === 'Prayer'" :post="post" />
      <TestimonyPostCard v-else-if="post.type === 'Testimony'" :post="post" />
    </div>
  </div>
</template>

<style scoped>
/* Add any necessary styling here */
</style>


<style scoped>
/* Add any necessary styling here */
</style>



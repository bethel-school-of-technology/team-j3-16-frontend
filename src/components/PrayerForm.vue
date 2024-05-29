<template>
  <div>
    <!-- Prayer request form -->
    <v-form @submit.prevent="submitForm" ref="form">
      <v-text-field
        v-model="formData.prayerRequest"
        label="Prayer Request"
        required
      ></v-text-field>

      <v-btn type="submit" color="primary">Submit</v-btn>
    </v-form>

    <!-- Posts feed, only displayed if there are posts -->
    <div v-if="posts.length > 0" class="posts-feed">
      <v-divider class="my-4"></v-divider>
      <PrayerPostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import PrayerPostCard from './PrayerPostCard.vue';

// Simulating a logged-in user
const user = ref({
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
});

const formData = ref({
  prayerRequest: '',
});

const form = ref(null);

// State for posts
const posts = ref([]);

// Function to fetch posts from the backend
const fetchPosts = async () => {
  try {
    // Fetch prayer requests
    const prayerResponse = await axios.get('api/prayer');
    const prayerPosts = prayerResponse.data.map(post => ({
      ...post,
      type: 'Prayer',
      date: new Date(post.date).toLocaleDateString(),
    }));

    // Fetch testimonies to show them on the home page too
    const testimonyResponse = await axios.get('/api/testimony');
    const testimonyPosts = testimonyResponse.data.map(post => ({
      ...post,
      type: 'Testimony',
      date: new Date(post.date).toLocaleDateString(),
    }));

    // Combine and sort posts by date
    posts.value = [...prayerPosts, ...testimonyPosts].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  } catch (error) {
    console.error('Error fetching posts:', error);
    posts.value = []; // Ensure posts is empty if there's an error
  }
};

// Function to submit form
const submitForm = async () => {
  if (form.value.validate()) {
    const postData = {
      userId: user.value.id,
      userName: user.value.name,
      content: formData.value.prayerRequest,
      type: 'Prayer',
      date: new Date().toISOString(),
    };

    try {
      const response = await axios.post('/api/prayer', postData);
      posts.value.push({
        ...response.data,
        type: 'Prayer',
        date: new Date(response.data.date).toLocaleDateString(),
      });
      formData.value.prayerRequest = ''; // Reset the prayer request field
      // Sort posts after adding new one
      posts.value = posts.value.sort((a, b) => new Date(b.date) - new Date(a.date));
    } catch (error) {
      console.error('Error posting prayer request:', error);
    }
  }
};

// Fetch posts on component mount
onMounted(() => {
  fetchPosts();
});
</script>

<style scoped>
.posts-feed {
  margin-top: 20px;
}

.v-card {
  margin-bottom: 20px;
}
</style>

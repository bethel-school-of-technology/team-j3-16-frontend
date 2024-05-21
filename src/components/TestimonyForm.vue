<template>
  <div>
    <!-- Testimony form -->
    <v-form @submit.prevent="submitForm" ref="form">
      <v-text-field
        v-model="formData.testimony"
        label="Testimony"
        required
      ></v-text-field>

      <v-btn type="submit" color="primary">Submit</v-btn>
    </v-form>

    <!-- Testimonies feed, only displayed if there are testimonies -->
    <div v-if="testimonies.length > 0" class="testimony-feed">
      <v-divider class="my-4"></v-divider>
      <TestimonyPostCard v-for="testimony in testimonies" :key="testimony.id" :post="testimony" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import TestimonyPostCard from './TestimonyPostCard.vue';

// Simulating a logged-in user
const user = ref({
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
});

const formData = ref({
  testimony: '',
});

const form = ref(null);

// State for testimonies
const testimonies = ref([]);

// Function to fetch testimonies from the backend
const fetchTestimonies = async () => {
  try {
    const response = await axios.get('your-backend-url/testimonies');
    testimonies.value = response.data.map(testimony => ({
      ...testimony,
      type: 'Testimony',
      date: new Date(testimony.date).toLocaleDateString(),
    }));
  } catch (error) {
    console.error('Error fetching testimonies:', error);
    testimonies.value = []; // Ensure testimonies is empty if there's an error
  }
};

// Function to submit form
const submitForm = async () => {
  if (form.value.validate()) {
    const postData = {
      userId: user.value.id,
      userName: user.value.name,
      content: formData.value.testimony,
      type: 'Testimony',
      date: new Date().toISOString(),
    };

    try {
      const response = await axios.post('your-backend-url/testimonies', postData);
      testimonies.value.push({
        ...response.data,
        type: 'Testimony',
        date: new Date(response.data.date).toLocaleDateString(),
      });
      formData.value.testimony = ''; // Reset the testimony field
    } catch (error) {
      console.error('Error posting testimony:', error);
    }
  }
};

// Fetch testimonies on component mount
onMounted(() => {
  fetchTestimonies();
});
</script>

<style scoped>
.testimony-feed {
  margin-top: 20px;
}

.v-card {
  margin-bottom: 20px;
}
</style>

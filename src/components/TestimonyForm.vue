
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import VueJwtDecode from 'vue-jwt-decode';
import TestimonyPostCard from './TestimonyPostCard.vue';


const formData = ref({
  testimony: '',
});

// State for testimonies
const testimonies = ref([]);

// Function to fetch testimonies from the backend
const fetchTestimonies = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/testimony');
    testimonies.value = response.data.map(testimony => ({
      ...testimony,
      type: 'Testimony',
      date: new Date(testimony.testyDate).toLocaleString(),
    }));

      // Combine and sort posts by date
    //   posts.value = [...testimonyPosts].sort(
    //   (a, b) => new Date(b.date) - new Date(a.date)
    // );
  } catch (error) {
    console.error('Error fetching testimonies:', error);
    testimonies.value = []; // Ensure testimonies is empty if there's an error
  }
  console.log(testimonies.value);
};

// Function to submit form
const submitForm = async () => {
  
    try {
      
          const token = localStorage.getItem('signUserToken');
          const decodedToken = VueJwtDecode.decode(token);
          const userId = decodedToken.userId;

           await axios.post(`http://localhost:3000/api/testimony`, {
            testimony: formData.value.testimony, 
            }, {
            headers: {
              Authorization: `Bearer ${token}`
            }
            
          });

        fetchTestimonies();
        formData.value.testimony = ''; // Clear the text-field after submission

    } catch (error) {
      console.error('Error posting testimony:', error);
    }
  
};

// Fetch testimonies on component mount
onMounted(() => {
  fetchTestimonies();
});
</script>



<template>
  <div>
    <!-- Testimony form -->
    <v-form @submit.prevent="submitForm">
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


<style scoped>
.testimony-feed {
  margin-top: 20px;
}

.v-card {
  margin-bottom: 20px;
}
</style>
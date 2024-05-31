
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import PrayerPostCard from './PrayerPostCard.vue';
import VueJwtDecode from 'vue-jwt-decode'


const formData = ref({
  prayerRequest: '',
});

const form = ref(null);
const posts = ref([]);


const fetchPrayers = async () => {
  try {
   
    const response = await axios.get('http://localhost:3000/api/prayer');
    posts.value = response.data.map(prayers => ({
      ...prayers,
      type: 'Prayer',
      date: new Date(prayers.postDate).toLocaleString(),
    })).sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

  } catch (error) {
    console.error('Error fetching prayer requests:', error);
    posts.value = []; // Ensure posts is empty if there's an error
  }
};

// Function to submit form
const submitForm = async () => {
  if (form.value.validate()) {
    try {
      const token = localStorage.getItem('signUserToken');
      const decodedToken = VueJwtDecode.decode(token);
      const userId = decodedToken.userId;

      const response = await axios.post('http://localhost:3000/api/prayer', 
      {
        prayerReq: formData.value.prayerReq,
      }, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      fetchPrayers();
      formData.value.prayerReq = ''; // Clear the text-field after submission
      
    } catch (error) {
      console.error('Error posting prayer request:', error);
    }
  }
};

// Fetch posts on component mount
onMounted(() => {
  fetchPrayers();
});

</script>



<template>
  <div>
    <!-- Prayer request form -->
    <v-form @submit.prevent="submitForm" ref="form">
      <v-text-field
        v-model="formData.prayerReq"
        label="Prayer Request"
        required
      ></v-text-field>

      <v-btn type="submit" color="primary">Submit</v-btn>
    </v-form>

    <!-- Posts feed, only displayed if there are posts -->
    <div v-if="posts.length > 0" class="requests-feed">
      <v-divider class="my-4"></v-divider>

      <PrayerPostCard v-for="prayerReq in posts" :key="prayerReq.id" :post="prayerReq" />
    </div>
  </div>
</template>


<style scoped>
.requests-feed {
  margin-top: 20px;
}

.v-card {
  margin-bottom: 20px;
}
</style>

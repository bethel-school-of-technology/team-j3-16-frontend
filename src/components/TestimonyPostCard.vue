<script setup>
import { ref, onMounted } from 'vue';
import { defineProps } from 'vue';
import axios from 'axios';

const props = defineProps({
  post: Object
});

const userName = ref('');

const findUsername = async () => {
  try {

    const userId = props.post.postedBy;
    const testyId = props.post.testyId;

    const testyResponse = await axios.get(`http://localhost:3000/api/testimony/${userId}/${testyId}`);
    const userNum = testyResponse.data.postedBy;

    const userData = await axios.get(`http://localhost:3000/api/user/${userNum}`);
    userName.value = userData.data.searchUser.username;

  } catch (error) {
        console.error('Error finding username:', error);
      }
};

onMounted(() => {
  findUsername();
});
</script>


<template>
  <v-card class="my-2">
    <v-card-text>
      <div><strong>{{ userName }}</strong> <small>{{ post.date }}</small></div>
      <v-chip class="my-2" :color="post.type === 'Prayer' ? 'primary' : 'secondary'" label>{{ post.type }}</v-chip>
      <div>{{ post.testimony }}</div>
    </v-card-text>
  </v-card>
</template>


<style scoped>
.v-chip {
  margin-bottom: 10px;
}
</style>

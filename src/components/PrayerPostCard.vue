

<script setup>
import { ref, onMounted } from 'vue';
import { defineProps } from 'vue';
import axios from 'axios';
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiHandsPray } from '@mdi/js'


const props = defineProps({
  post: Object
});

const isLiked = ref(false);
const likes = ref(props.post.likes || 0);
const userName = ref('');

const toggleLike = () => {

  if (isLiked.value) {
    likes.value--;
  } else {
    likes.value++;
  } 
};


const findUsername = async () => {
  try {

    const userId = props.post.postedBy;
    const prayerId = props.post.prayerId;

    const prayerResponse = await axios.get(`http://localhost:3000/api/prayer/${userId}/${prayerId}`);
    const userNum = prayerResponse.data.postedBy;

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
      <div>
        <strong>{{ userName }} </strong> - <small>  {{ post.date }}</small>
      </div>
      <v-chip class="my-2" :color="post.type === 'Prayer' ? 'primary' : 'secondary'" label> {{ post.type }} </v-chip>

      <div>{{ post.prayerReq }}</div>
    </v-card-text>


    <v-card-actions>
      <v-btn icon @click="toggleLike">
        
          <svg-icon type="mdi" :path="mdiHandsPray"></svg-icon>
    
      </v-btn>
      <span>{{ likes }}</span>
    </v-card-actions>

  </v-card>
</template>



<style scoped>
.v-chip {
  margin-bottom: 10px;
}

.v-card {
  margin-bottom: 20px;
}

.v-btn {
  margin-left: 8px;
}
</style>

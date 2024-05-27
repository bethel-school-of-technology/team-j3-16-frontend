

<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  post: Object
});

const isLiked = ref(false);
const likes = ref(props.post.likes || 0);

const toggleLike = () => {
  if (isLiked.value) {
    likes.value--;
  } else {
    likes.value++;
  }
  isLiked.value = !isLiked.value;
};
</script>



<template>
  <v-card class="my-2">
    <v-card-text>
      <div>
        <strong>{{ post.userName }}</strong> 
        <small>{{ post.date }}</small>
      </div>
      <v-chip class="my-2" :color="post.type === 'Prayer' ? 'primary' : 'secondary'" label>
        {{ post.type }}
      </v-chip>
      <div>{{ post.content }}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn icon @click="toggleLike">
        <v-icon>{{ isLiked ? 'mdi-hand-pray' : 'mdi-hand-pray-outline' }}</v-icon>
      </v-btn>
      <span>{{ likes }}</span>
    </v-card-actions>
  </v-card>
</template>



<style scoped>
.v-card {
  margin-bottom: 20px;
}
.v-btn {
  margin-left: 8px;
}
</style>

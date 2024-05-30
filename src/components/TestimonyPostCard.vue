<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  post: Object
});
</script>


<template>
  <v-card class="my-2">
    <v-card-text>
      <div><strong>{{ post.postedBy.username }}</strong> <small>{{ post.date }}</small></div>
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

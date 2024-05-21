<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()

const username = ref(route.params.id)
</script>

<template>
  <div class="about">
    <h1>Profile info</h1>
    <p>{{ $route.params.username }}</p>
  </div>
</template>
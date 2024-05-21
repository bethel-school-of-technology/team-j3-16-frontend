<script setup>
import { ref } from 'vue';
import TestimonyForm from '../components/TestimonyForm.vue';


const newTestimony = ref(null);

const addTestimony = (testimony) => {
  newTestimony.value = testimony;
};

</script>

<template>

  <div>
    <h1>Testimonies</h1>
    <div>
    <TestimonyForm />
    </div>
  </div>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>




<script setup>
import { ref } from 'vue';
import TestimonyForm from '../components/TestimonyForm.vue';
import TestimonyPostCard from '@/components/TestimonyPostCard.vue';


const newTestimony = ref(null);

const addTestimony = (testimony) => {
  newTestimony.value = testimony;
};

</script>

<template>

    <h1>Testimonies</h1>
<p>Share and testify to what He has done!</p>
<br>
    <div class="testyForm">
    
    <TestimonyForm />
    </div>



</template>

<style>
@media (min-width: 1024px) {
  .testimony {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>




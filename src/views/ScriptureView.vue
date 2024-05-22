
<template>
  <div  class="scripture">
    <h1> Scripture </h1>
    <h4> Find scripture to encourage you and share with others  </h4>

    <p> Find by topic: </p>

    <v-btn 
      variant="tonal" color="yellow"
      rounded="xl" size="small"
      @click="health" 
      > Health 
    </v-btn>

    <v-btn 
      variant="tonal" color="secondary"
      rounded="xl" size="small"
      @click="faith" 
      > Faith 
    </v-btn>

    <v-btn 
      variant="tonal" color="info"
      rounded="xl" size="small"
      @click="finance" 
      > Finance 
    </v-btn>

    <v-btn 
      variant="tonal" color="red"
      rounded="xl" size="small"
      @click="love" 
      > Love 
    </v-btn>

    <v-btn 
      variant="tonal" color="orange"
      rounded="xl" size="small"
      @click="family" 
      > Family 
    </v-btn>

    <v-btn 
      variant="tonal" color="brown"
      rounded="xl" size="small"
      @click="loss" 
      > Loss 
    </v-btn>

    <v-btn 
      variant="tonal" color="green"
      rounded="xl" size="small"
      @click="anger" 
      > Anger 
    </v-btn>

    <v-btn 
      variant="tonal" color="blue"
      rounded="xl" size="small"
      @click="stress" 
      > Stress 
    </v-btn>

    <v-btn 
      variant="tonal" color="purple"
      rounded="xl" size="small"
      @click="pride" 
      > Pride 
    </v-btn>

    <v-btn 
      variant="tonal" color="black"
      rounded="xl" size="small"
      @click="depression" 
      > Depression 
    </v-btn>

    <!-- <div class="versesBox">
      {{ VersesEvent }}
    </div> -->

  </div>
</template>


<script>
import VersesEvent from '../components/VersesEvent.vue';

export default {
  name: 'Scripture',
  components: {
    VersesEvent
  },
  methods: {
    health() { VersesEvent.methods.health(); },
    faith() { VersesEvent.methods.faith(); },
    finance() { VersesEvent.methods.finance(); },
    love() { VersesEvent.methods.love(); },
    family() { VersesEvent.methods.family(); },
    loss() { VersesEvent.methods.loss(); },
    anger() { VersesEvent.methods.anger(); },
    stress() { VersesEvent.methods.stress(); },
    pride() { VersesEvent.methods.pride(); },
    depression() { VersesEvent.methods.depression(); }
  }
}

</script>



<style>
@media (min-width: 1024px) {
  .scripture {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.scripture {
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
}

.scripture h4 {
  margin-bottom: 2rem;
}

.scripture p {
  color: gray;
}
</style>

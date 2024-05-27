
<template>
  <div  class="scripture">
    <h1> Scripture </h1>
    <h4> Find scripture to encourage you and share with others  </h4>

    <p> Find by topic: </p>

    <v-btn 
      variant="tonal" color="amber"
      rounded="xl" size="small"
      @click="health" 
      > Health 
    </v-btn>

    <v-btn 
      variant="tonal" color="green"
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
      variant="tonal" color="lime"
      rounded="xl" size="small"
      @click="anger" 
      > Anger 
    </v-btn>

    <v-btn 
      variant="tonal" color="deep-orange"
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
      variant="tonal" color="teal"
      rounded="xl" size="small"
      @click="depression" 
      > Depression 
    </v-btn>

    <verses-event ref="versesEvent"></verses-event>

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

    health() { this.$refs.versesEvent.health(); },
    faith() { this.$refs.versesEvent.faith(); },
    finance() { this.$refs.versesEvent.finance(); },
    love() { this.$refs.versesEvent.love(); },
    family() { this.$refs.versesEvent.family(); },
    loss() { this.$refs.versesEvent.loss(); },
    anger() { this.$refs.versesEvent.anger(); },
    stress() { this.$refs.versesEvent.stress(); },
    pride() { this.$refs.versesEvent.pride(); },
    depression() { this.$refs.versesEvent.depression(); }
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

.scripture button {
  margin: .5rem;
}

 .versesBox {
  margin: 1.5rem;
}

</style>

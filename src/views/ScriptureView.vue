<script>
import VersesEvent from '../components/VersesEvent.vue';

export default {
  name: 'Scripture',
  components: {
    VersesEvent
  },
  data() {
    return {
      activeButton: null
    };
  },
  methods: {
    setActiveButton(button) {
      this.activeButton = button;
    },
    health() { this.$refs.versesEvent.health(); this.setActiveButton('health'); },
    faith() { this.$refs.versesEvent.faith(); this.setActiveButton('faith'); },
    finance() { this.$refs.versesEvent.finance(); this.setActiveButton('finance'); },
    love() { this.$refs.versesEvent.love(); this.setActiveButton('love'); },
    family() { this.$refs.versesEvent.family(); this.setActiveButton('family'); },
    loss() { this.$refs.versesEvent.loss(); this.setActiveButton('loss'); },
    anger() { this.$refs.versesEvent.anger(); this.setActiveButton('anger'); },
    stress() { this.$refs.versesEvent.stress(); this.setActiveButton('stress'); },
    pride() { this.$refs.versesEvent.pride(); this.setActiveButton('pride'); },
    depression() { this.$refs.versesEvent.depression(); this.setActiveButton('depression'); }
  }
}
</script>


<template>
  <v-container class="sticky-top">
    <v-row>
      <v-col cols="12">
        <div class="scripture">
          <v-container class="flex-wrap justify-center">
            <div class="text-center">
              <h1> Scripture </h1>
              <h4> Find scripture to encourage you and share with others </h4>
              <p> Find by topic: </p>
            </div>
            <v-btn 
              :class="{ 'v-btn--active': activeButton === 'health' }"
              variant="tonal" color="amber"
              rounded="xl" size="small"
              @click="health" 
              > Health 
            </v-btn>

            <v-btn 
              :class="{ 'v-btn--active': activeButton === 'faith' }"
              variant="tonal" color="green"
              rounded="xl" size="small"
              @click="faith" 
              > Faith 
            </v-btn>

            <v-btn 
              :class="{ 'v-btn--active': activeButton === 'finance' }"
              variant="tonal" color="info"
              rounded="xl" size="small"
              @click="finance" 
              > Finance 
            </v-btn>

            <v-btn 
              :class="{ 'v-btn--active': activeButton === 'love' }"
              variant="tonal" color="red"
              rounded="xl" size="small"
              @click="love" 
              > Love 
            </v-btn>

            <v-btn 
              :class="{ 'v-btn--active': activeButton === 'family' }"
              variant="tonal" color="orange"
              rounded="xl" size="small"
              @click="family" 
              > Family 
            </v-btn>

            <v-btn 
              :class="{ 'v-btn--active': activeButton === 'loss' }"
              variant="tonal" color="brown"
              rounded="xl" size="small"
              @click="loss" 
              > Loss 
            </v-btn>

            <v-btn 
              :class="{ 'v-btn--active': activeButton === 'anger' }"
              variant="tonal" color="lime"
              rounded="xl" size="small"
              @click="anger" 
              > Anger 
            </v-btn>

            <v-btn 
              :class="{ 'v-btn--active': activeButton === 'stress' }"
              variant="tonal" color="deep-orange"
              rounded="xl" size="small"
              @click="stress" 
              > Stress 
            </v-btn>

            <v-btn 
              :class="{ 'v-btn--active': activeButton === 'pride' }"
              variant="tonal" color="purple"
              rounded="xl" size="small"
              @click="pride" 
              > Pride 
            </v-btn>

            <v-btn 
              :class="{ 'v-btn--active': activeButton === 'depression' }"
              variant="tonal" color="teal"
              rounded="xl" size="small"
              @click="depression" 
              > Depression 
            </v-btn>

            <verses-event ref="versesEvent"></verses-event>
          </v-container>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>






<style scoped>
.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  padding: 16px 0;
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

.v-btn--active {
  background-color: rgba(0, 0, 0, 0.5); 
  color: white;
  border: 2px solid black;
}

.versesBox {
  margin: 1.5rem;
}
</style>

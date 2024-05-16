app.component('testimony-display', {
  template:
    /*html*/
    `<div class="testimony-display">
      <div class="testimony-container">
      <div class="testimony-info">
         
    
        </div>
          </div>
          <testimonies-list v-if="testimonies.length" :reviews="testimonies"></testimonies-list>
          <testimonies-form @review-submitted="addTestimonies"></testimonies-form>
        </div>`,
  data() {
    return {
      testimonies: [],
    }
  },
  methods: {
    addTestimonies(testimonies) {
      this.testimonies.push(testimonies)
    },
  },
})

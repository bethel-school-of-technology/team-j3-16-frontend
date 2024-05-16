app.component('testimonies-form', {
  template:
    /*html*/
    `<form class="testimonies-form" @submit.prevent="onSubmit">
      
      <label for="name">Name:</label>
      <input id="name" v-model="name">
  
      <label for="testimonies">Testimony:</label>      
      <textarea id="testimonies" v-model="testimonies"></textarea>

      <input class="button" type="submit" value="Submit">  
  
    </form>`,
  data() {
    return {
      name: '',
      testimonies: '',
    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.testimonies === '') {
        alert('Testimoney is incomplete. Please fill out every field.')
        return
      }

      let testimony = {
        name: this.name,
        testimonies: this.testimonies,
      }
      this.$emit('testimonies-submitted', testimony)

      this.name = ''
      this.testimonies = ''
    },
  },
})

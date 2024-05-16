app.component('testimonies-list', {
  props: {
    testimonies: {
      type: Array,
      required: true,
    },
  },
  template:
    /* we need to add the dynamic date field in this template {{review.date}} */
    /*html*/
    `
    
    <div class="testimonies-container">
    <h3>Testimonies:</h3>
      <ul>
        <li v-for="(testimonies, index) in testimonies" :key="index">
          {{ testimonies.name }} has a testimony 
          <br/>
          "{{ testimonies.testimonies }}"
          <br/>
        
         
        </li>
      </ul>
    </div>
  `,
})

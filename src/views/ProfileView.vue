
<template>
  
  <div class="profileView">

    <h1>Profile Information </h1>
    <ProfilePage ref="profilepage" />

    <h1> All Posts </h1>
    <p>test</p>
    <!-- <HomeConfig ref="homeconfig" /> -->

  </div>

</template>


<script>

import PrayerForm from '@/components/PrayerForm.vue';
import ProfilePage from '@/components/ProfilePage.vue';
import TestimonyForm from '@/components/TestimonyForm.vue';


export default {

  name: 'ProfileView',
  components: {
    ProfilePage,
    PrayerForm,
    TestimonyForm
  },
  methods: {

    fetchPrayers() { this.$refs.profilePage.fetchPrayers(); },
    fetchTestimonies() { this.$refs.profilePage.fetchTestimonies(); },

    showUserInfo() { this.$refs.profilePage.showUserInfo(); },
    toggleEdit() { this.$refs.profilePage.toggleEdit() },
    mounted() { this.showUserInfo(); }
  }
}

</script>



<style>
@media (min-width: 1024px) {

  .profileView {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-color: lightslategray;
  }

}

.profileView h1 {
  background-color: powderblue;
}

</style>
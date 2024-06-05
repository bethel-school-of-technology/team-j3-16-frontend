
<script>

import ProfilePage from '@/components/ProfilePage.vue';
import ProfileFeed from '../components/ProfileFeed.vue';


export default {

  name: 'ProfileView',
  components: {
    ProfilePage,
    ProfileFeed
  },
  methods: {

    showUserInfo() { this.$refs.profilePage.showUserInfo(); },
    toggleEdit() { this.$refs.profilePage.toggleEdit() },
    
    showUserPosts() { this.$refs.profileFeed.showUserPosts(); },

    onMounted() { this.showUserInfo(); this.showUserPosts(); }
  }
}

</script>



<template>
  
  <div class="profileView">

    <h1>Profile Information </h1>
    <ProfilePage ref="profilepage" />

    <h1> All Posts </h1>

    <ProfileFeed ref="profilefeed" />

    <br>

  </div>

</template>



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

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

</script>a



<template>
  
  <div class="flex-wrap justify-center">

    <h1>Profile Information </h1>
    <ProfilePage ref="profilepage" />
<br>
<br>

    <h1> All Posts </h1>

    <ProfileFeed ref="profilefeed" />

    <br>

  </div>

</template>



<style>


</style>
<script>
export default {
name: 'ProfilePage',
  data() {
    return {
     username: this.username,
      hashedPassword: '',
      city_state: '',
      country: ''
    };
  },
  methods: {

    showUserInfo () {
        try {

            const userInfo = axios.get('http://localhost:3000/api/user/userId');
            console.log(userInfo);

        } catch (error) {
            console.error('Error fetching user information:', error);
        }
    },

    editUserInfo() {
        try {
            console.log('Testing edit button for profile page');

            // const editInfo = axios.put('http://localhost:3000/api/user/userId');

            console.log(editInfo);
            console.log('User info edited:'
            // , {
            // username: this.username,
            // hashedPassword: this.hashedPassword,
            // city_state: this.city_state,
            // country: this.country
            // } 
            );
        } catch (error) {
            console.error('Error editing user information:', error);
        }
    },

    mounted() {
        this.editUserInfo;
        this.showUserInfo;
    }

  }
};
</script>

<template>

    <!-- <div class="saveEditBtn" v-if="isVisible" > 
    <v-card-actions>
      <v-btn variant="elevated" color="danger" @click="saveEditedInfo">Save New Information</v-btn>
    </v-card-actions>
    </div> -->
</template>

<style>


</style>
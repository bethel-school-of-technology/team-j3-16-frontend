
<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import VueJwtDecode from 'vue-jwt-decode'


export default {
  name: 'ProfilePage',
  setup() {
    const username = ref('');
    const password = ref('');
    const city_state = ref('');
    const country = ref('');
    const isEditing = ref(false);
    const router = useRouter();

    const showUserInfo = async () => {
      try {
        const token = localStorage.getItem('signUserToken');
        if (!token) {
          console.log('Login required');
          router.push('/login');
          return;
        } else {

          const decodedToken = VueJwtDecode.decode(token);
          const userId = decodedToken.userId;
          console.log(userId)

          const response = await axios.get(`http://localhost:3000/api/user/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
            
          });

          const info = response.data.searchUser;
          username.value = info.username;
          password.value = info.password;
          city_state.value = info.city_state;
          country.value = info.country;

          console.log('User info:', info);
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
        throw error;
      }
    };

    const toggleEdit = async () => {

      if (isEditing.value) {
        try {

          const token = localStorage.getItem('signUserToken');

          const decodedToken = VueJwtDecode.decode(token);
          const userId = decodedToken.userId;

          await axios.put(`http://localhost:3000/api/user/${userId}`, {
            password: password.value,
            city_state: city_state.value,
            country: country.value
          }, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

            console.log('User info updated successfully');

        } catch (error) {
          console.error('Error updating user info:', error);
        }
      }

      isEditing.value = !isEditing.value;
    };

    const cancelEdit = () => {
      isEditing.value = false;
      showUserInfo();
    };

    // const saveUserInfo = async () => {
    //   try {
    //     const updatedInfo = {
    //       password: password.value,
    //       city_state: city_state.value,
    //       country: country.value
    //     };
    //     await axios.put('http://localhost:3000/api/user', updatedInfo);
    //     console.log('User info saved:', updatedInfo);
    //   } catch (error) {
    //     console.error('Error saving user info:', error);
    //     throw error;
    //   }
    // };

    onMounted(() => {
      showUserInfo();
    });

    return {
      username,
      password,
      city_state,
      country,
      showUserInfo,
      isEditing,
      toggleEdit,
      cancelEdit
    };

  },


};

</script>


<template>

  <div class="profilePage">

    <v-card class="infoCard">
    <v-card-text>
      <v-row>
        <v-col cols="auto">
          <span class="label" >Username:</span>
        </v-col>
        <v-col>
          <span class="value"><strong>{{ username }}</strong></span>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-text>
      <v-row>
        <v-col cols="auto">
          <span class="label" >Password:</span>
        </v-col>
        <v-col>

          <span v-if="!isEditing">*****</span>
          <v-text-field 
            v-if="isEditing"  
            outlined
            dense
            v-model="password"
            type="password"
          ></v-text-field>

        </v-col>
      </v-row>
    </v-card-text>

    <v-card-text>
      <v-row>
        <v-col cols="auto">
          <span class="label" >City, State:</span>
        </v-col>
        <v-col>

          <span v-if="!isEditing"> {{ city_state }} </span>
          <v-text-field
            v-if="isEditing"
            outlined
            dense
            v-model="city_state"
          ></v-text-field>

        </v-col>
      </v-row>
    </v-card-text>

    <v-card-text>
      <v-row>
        <v-col cols="auto">
          <span class="label" >Country:</span>
        </v-col>
        <v-col>

          <span v-if="!isEditing">{{ country }}</span>
          <v-text-field
            v-if="isEditing"
            outlined
            dense
            v-model="country"
          ></v-text-field>

        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions>

      <v-btn variant="elevated" color="info" @click="toggleEdit">
          {{ isEditing ? 'Save Information' : 'Edit Information' }}
        </v-btn>
        <v-btn v-if="isEditing" variant="elevated" color="warning" @click="cancelEdit">
          Cancel
        </v-btn>

    </v-card-actions>
  </v-card>

  </div>

  <div class="profileFeed">

      <!-- {{  this.fetchPosts() }} -->
        
      <!-- <all-posts ref="fetchPosts"></all-posts> -->

  </div>

</template>



<style scoped>
@media (min-width: 1024px) {

  .profilePage {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .label {
  font-weight: bold;
  margin-right: 8px;
  }

  .value {
    font-weight: bold;
  }

  
.profile {
  margin-left:3%;
  margin-right: 3%;
}

.infoCard {
  margin-bottom: 1rem;
}

}

.profilePage {
  background-color: powderblue;
  margin-bottom: 1rem;
}

</style>
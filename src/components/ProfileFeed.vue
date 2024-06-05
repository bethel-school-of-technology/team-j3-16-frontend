
<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import VueJwtDecode from 'vue-jwt-decode'


export default {
  name: 'ProfileFeed',
  setup() {

    const isEditing = ref(false);
    const editPostContent = ref('');
    const currentPostId = ref(null);
    const postsByUser = ref([]);
    const router = useRouter();


    const showUserPosts = async () => {
      try {
        const token = localStorage.getItem('signUserToken');
        if (!token) {
          console.log('Login required');
          router.push('/login');
          return;
        }

        const decodedToken = VueJwtDecode.decode(token);
        const postedBy = decodedToken.userId;
        console.log(postedBy);

        const response = await axios.get(`http://localhost:3000/api/user/posts/${postedBy}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        postsByUser.value = response.data.userPosts.map(post => ({
          ...post,
          type: post.prayerReq ? 'Prayer' : post.testimony ? 'Testimony' : 'Unknown',
          testimony: post.testimony || '',
          prayerReq: post.prayerReq || '',
          date: new Date(post.postDate || post.testyDate).toLocaleString(),
        })).sort((a, b) => new Date(b.date) - new Date(a.date));

        console.log(postsByUser.value);

        // await Promise.all(posts.map(async post => {
        //   const userResponse = await axios.get(`http://localhost:3000/api/user/${post.postedBy}`);
        //   post.userName = userResponse.data.username;
        // }));

        // postsByUser.value = posts;
      
      } catch (error) {
        console.error('Error fetching all posts by user:', error);
        throw error;
      }
    };


    const startEdit = (post) => {
      isEditing.value = true;
      currentPostId.value = post._id;
      editPostContent.value = post.prayerReq || post.testimony || '';
    };

    const saveEdit = async () => {
      try {
        const token = localStorage.getItem('signUserToken');
        const post = postsByUser.value.find(p => p._id === currentPostId.value);
        if (!post) return;

        if (post.prayerReq) {
          await axios.put(`http://localhost:3000/api/prayer/${post.prayerId}`, {
            prayerReq: editPostContent.value
          }, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        }

        if (post.testimony) {
          await axios.put(`http://localhost:3000/api/testimony/${post.testyId}`, {
            testimony: editPostContent.value
          }, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        }

        console.log('Post updated successfully');
        await showUserPosts(); // Refresh posts after editing
        cancelEdit();

      } catch (error) {
        console.error('Error updating post:', error);
      }
    };

    const cancelEdit = () => {
      isEditing.value = false;
      currentPostId.value = null;
      editPostContent.value = '';
    };

    const deletePost = async (post) => {
      try {
        const token = localStorage.getItem('signUserToken');

        if (post.prayerReq) {
          await axios.delete(`http://localhost:3000/api/prayer/${post.prayerId}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        }

        if (post.testimony) {
          await axios.delete(`http://localhost:3000/api/testimony/${post.testyId}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        }

        console.log('Post deleted successfully');
        await showUserPosts(); // Refresh posts after deleting

      } catch (error) {
        console.error('Error deleting post:', error);
      }
    };

    onMounted(showUserPosts);

    return {
      postsByUser,
      isEditing,
      editPostContent,
      currentPostId,
      startEdit,
      saveEdit,
      cancelEdit,
      deletePost
    };
  },
};
</script>

<template>
  <div class="profileFeed">
    <div v-for="(post, index) in postsByUser" :key="index">
      <v-card class="my-2">
        <v-card-text>
          <div><strong>{{ post.userName }}</strong> <small>{{ post.date }}</small></div>
          <v-chip class="my-2" :color="post.type === 'Prayer' ? 'primary' : 'secondary'" label>{{ post.type }}</v-chip>

          <div v-if="!isEditing || currentPostId !== post._id"> {{ post.text || post.testimony || post.prayerReq }} </div>

          <v-text-field v-if="isEditing && currentPostId === post._id" outlined dense v-model="editPostContent"></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-btn variant="elevated" color="warning" @click="isEditing && currentPostId === post._id ? saveEdit() : startEdit(post)">
            {{ isEditing && currentPostId === post._id ? 'Save Post' : 'Edit Post' }}
          </v-btn>

          <v-btn variant="elevated" color="red-darken-1" @click="deletePost(post)">
            {{ isEditing && currentPostId === post._id ? 'Delete Post' : 'Delete Post' }}
          </v-btn>

          <v-btn v-if="isEditing && currentPostId === post._id" variant="elevated" color="yellow" @click="cancelEdit">
            Cancel
          </v-btn>

        </v-card-actions>
      </v-card>
    </div>
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

// const toggleEdit = async () => {

    //   if (isEditing.value) {
    //     try {

    //       const token = localStorage.getItem('signUserToken');

    //       const decodedToken = VueJwtDecode.decode(token);
    //       const userId = decodedToken.userId;

    //       await axios.put(`http://localhost:3000/api/user/${userId}`, {
    //         password: password.value,
    //         city_state: city_state.value,
    //         country: country.value
    //       }, {
    //         headers: {
    //           Authorization: `Bearer ${token}`
    //         }
    //       });

    //         console.log('User info updated successfully');

    //     } catch (error) {
    //       console.error('Error updating user info:', error);
    //     }
    //   }

    //   isEditing.value = !isEditing.value;
    // };

    // const cancelEdit = () => {
    //   isEditing.value = false;
    //   showUserInfo();
    // };
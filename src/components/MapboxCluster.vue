
<script setup>
import { ref, watch, onMounted } from 'vue'; 
import axios from 'axios'; 
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'; 
import { useUserStore } from '../stores/user'; 
import 'mapbox-gl/dist/mapbox-gl.css';

const userStore = useUserStore(); // Access user store to track user data

const geojsonData = ref([]); // Holds the geocoded user data
const isLoading = ref(true); // Tracks loading state of data

// Function to fetch user data from API
const fetchUserData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/user'); // Make GET request to fetch user data
    return response.data; // Return fetched data
  } catch (error) {
    console.error('Error fetching user data:', error); // Log error if request fails
    return []; // Return empty array in case of error
  }
};

// Function to geocode user locations using Mapbox API
const geocodeLocations = async (users) => {
  const features = []; // Initialize array to hold geocoded features

  for (const user of users) { // Loop through each user
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${user.place},${user.region},${user.country}.json?access_token=pk.eyJ1Ijoic3RlaW5rLWtleSIsImEiOiJjbHdwOW96MTMyYTBkMmp1ZjhtcG94dzVvIn0.MmUk4XrW8OeT7tchpMDrZw`
      ); // Fetch geocoding data for user location
      const data = await response.json(); // Parse response as JSON
      if (data.features.length > 0) { // Check if any features were returned
        const [lng, lat] = data.features[0].geometry.coordinates; // Extract coordinates
        console.log(`User: ${user.username}, Coordinates: [${lng}, ${lat}]`); // Log user coordinates
        features.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [lng, lat], // Ensure coordinates are in array form
          }
        }); // Add feature to array
      }
    } catch (error) {
      console.error('Error fetching geocoding data:', error); // Log error if geocoding fails
    }
  }

  geojsonData.value = features; // Update geojsonData with geocoded features
  isLoading.value = false; // Set loading state to false
};

// Fetch and geocode user data when the component is mounted
onMounted(async () => {
  const users = await fetchUserData(); // Fetch user data
  if (users.length > 0) {
    await geocodeLocations(users); // Geocode locations if users are found
  } else {
    isLoading.value = false; // Set loading state to false if no users found
  }
});

// Watch for changes in user data and geocode new user locations immediately
watch(() => userStore.users, async (newUsers) => {
  if (newUsers.length > 0) {
    await geocodeLocations(newUsers); // Geocode new user locations
  }
}, { deep: true, immediate: true });
</script>

<template>
  <div class="map-container">
    <MapboxMap
      v-if="!isLoading" 
      map-style="mapbox://styles/steink-key/clwpd72eo00oh01rb6eboatve" 
      access-token="pk.eyJ1Ijoic3RlaW5rLWtleSIsImEiOiJjbHdwOW96MTMyYTBkMmp1ZjhtcG94dzVvIn0.MmUk4XrW8OeT7tchpMDrZw" 
      :center="[-90, 50]" 
      :zoom="2" 
      :projection="'globe'" 
      :attribution-control="true" 
      :interactive="true" 
      class="map"
    >
      <!-- Render markers for each feature in geojsonData -->
      <MapboxMarker
        v-for="feature in geojsonData"
        :key="feature.geometry.coordinates.toString()"
        :lng-lat="feature.geometry.coordinates"
        class="dot-marker"
      />
    </MapboxMap>
    <div v-else>Loading...</div> <!-- Display loading text while data is loading -->
  </div>
</template>



<style>
.map-container {
  height: 100vh; 
  width: 100%;
}

.map {
  height: 100%; 
  width: 100%; 
}


</style>




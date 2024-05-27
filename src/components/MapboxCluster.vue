

<script setup>
import { ref, onMounted } from 'vue';
import { MapboxMap, MapboxCluster } from '@studiometa/vue-mapbox-gl';
import mapboxgl from 'mapbox-gl';

const props = defineProps({ 
  locations: {
    type: Array, 
    required: true, 
  },
});

const geojsonData = ref({ 
  type: 'FeatureCollection',
  features: [],
});

const geocodeLocations = async () => {
  const features = [];
  for (const location of props.locations) {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location.city}, ${location.state}, ${location.country}.json?access_token=pk.eyJ1Ijoic3RlaW5rLWtleSIsImEiOiJjbHdwOW96MTMyYTBkMmp1ZjhtcG94dzVvIn0.MmUk4XrW8OeT7tchpMDrZw`
    );
    const data = await response.json();
    if (data.features.length > 0) {
      const [lng, lat] = data.features[0].geometry.coordinates;
      features.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [lng, lat],
        },
        properties: {},
      });
    }
  }
  geojsonData.value.features = features;
};

onMounted(async () => {
  await geocodeLocations();
});
</script>

<template>
  <div class="map-container">
    <MapboxMap
      map-style="mapbox://styles/steink-key/clwpd72eo00oh01rb6eboatve"
      access-token="pk.eyJ1Ijoic3RlaW5rLWtleSIsImEiOiJjbHdwOW96MTMyYTBkMmp1ZjhtcG94dzVvIn0.MmUk4XrW8OeT7tchpMDrZw"
      :center="[0, 0]"
      :zoom="1"
      :projection="'globe'"
      :attributionControl="true"
      :interactive="true"
      class="map"
    >
      <!-- MapboxCluster component for clustering points on the map -->
      <MapboxCluster :data="geojsonData" :cluster-radius="50" :cluster-max-zoom="14" />
    </MapboxMap>
  </div>
</template>

<style>
.map-container {
  height: 100vh; 
  width: 100%;
}

.map {
  height: 50%; 
  width: 50%; 
}
</style>

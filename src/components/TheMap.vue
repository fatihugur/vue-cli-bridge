<template>
  <div id="container">
    <div id="mapContainer"></div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  name: "Map",
  data() {
    return {
      center: [51.499, -0.1],
      //51.505, -0.09
    };
  },
  methods: {
    setupLeafletMap() {
      var mymap = L.map("mapContainer").setView([51.499, -0.1], 14);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          accessToken:
            "pk.eyJ1IjoiZmF0aWh1Z3VyIiwiYSI6ImNra3M3cjg5czBiMW0yb3A2bnkzaDZ5NGoifQ.nQzrWXrV3iev_guKGxn5Ew",
        }
      ).addTo(mymap);
    },
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>

<style scoped>
#mapContainer {
  width: 100%;
  min-height: 100vh;
  z-index: 0;
}
</style>

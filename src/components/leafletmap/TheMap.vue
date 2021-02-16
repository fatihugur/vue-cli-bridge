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
      //center: [51.499, -0.1],
      //51.505, -0.09
    };
  },
  methods: {
    // setupPolylines() {
    //   // Creating map options
    //   var mapOptions = {
    //     center: [51.499, -0.1],
    //     zoom: 14,
    //   };
    //   // Creating a map object
    //   var mymap = new L.map("mapContainer", mapOptions);

    //   // Creating a Layer object
    //   var layer = new L.TileLayer(
    //     "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    //     {
    //       attribution:
    //         'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //       maxZoom: 18,
    //       id: "mapbox/streets-v11",
    //       accessToken:
    //         "pk.eyJ1IjoiZmF0aWh1Z3VyIiwiYSI6ImNra3M3cjg5czBiMW0yb3A2bnkzaDZ5NGoifQ.nQzrWXrV3iev_guKGxn5Ew",
    //     }
    //   );

    //   // Adding layer to the map
    //   mymap.addLayer(layer);

    // var latlang = [
    //   [
    //     [51.5106928, -0.09846100000000002],
    //     [51.5086182, -0.09859819999999997],
    //   ],
    //   [
    //     [51.5116521, -0.10426800000000003],
    //     [51.5109589, -0.10436809999999996],
    //   ],
    // ];
    //   var multiPolyLineOptions = {
    //     color: "red",
    //     weight: 9,
    //     opacity: 0.9,
    //     zindex: 66,
    //   };
    //   var multipolyline = L.multiPolyline(latlang, multiPolyLineOptions);
    //   multipolyline.addTo(mymap);
    //   console.log.setupPolylines();
    // },
    setupLeafletMap() {
      // Adding multi poly-line to map

      // var polyline1 = new L.Polyline(
      //   [
      //     [51.5106928, -0.09846100000000002],
      //     [51.5086182, -0.09859819999999997],
      //   ],
      //   {
      //     color: "blue",
      //     weight: 5,
      //     opacity: 0.6,
      //   }
      // );

      // var polyline2 = new L.Polyline(
      //   [
      //     [51.5116521, -0.10426800000000003],
      //     [51.5109589, -0.10436809999999996],
      //   ],
      //   {
      //     color: "red",
      //     weight: 5,
      //     opacity: 0.6,
      //   }
      // );

      var mymap = L.map("mapContainer").setView([51.499, -0.1], 12);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 15,
          id: "mapbox/streets-v11",
          accessToken:
            "pk.eyJ1IjoiZmF0aWh1Z3VyIiwiYSI6ImNra3M3cjg5czBiMW0yb3A2bnkzaDZ5NGoifQ.nQzrWXrV3iev_guKGxn5Ew",
        }
      ).addTo(mymap);

      var latlngs = [
        [
          [51.5106928, -0.09846100000000002],
          [51.5086182, -0.09859819999999997],
        ],
        [
          [51.5109589, -0.10436809999999996],
          [51.5087357, -0.10434810000000005],
        ],
      ];
      var polyline = L.polyline(latlngs, {
        color: "blue",
        weight: 6,
        opacity: 0.6,
      }).addTo(mymap);
      mymap.fitBounds(polyline.getBounds());
    },
  },
  mounted() {
    this.setupLeafletMap();
    // this.setupPolylines();
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

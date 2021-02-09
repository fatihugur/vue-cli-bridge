<template>
  <div class="hello-bridge">
    <the-header></the-header>
    <div class="map">
      <the-map></the-map>
    </div>
    <div>
      <bridge-box></bridge-box>
    </div>
  </div>
</template>

<script>
import BridgeBox from "./BridgeBox.vue";
import TheHeader from "./TheHeader.vue";
import TheMap from "./TheMap.vue";

export default {
  components: { TheHeader, TheMap, BridgeBox },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
map {
  width: 100%;
  min-height: 100vh;
  color: whitesmoke;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #010704;
}
</style>

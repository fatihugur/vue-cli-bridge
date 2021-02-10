<template>
  <div class="hello-bridge">
    <the-header></the-header>
    <div class="container-main">
      <!-- container news -->
      <div class="continer-news">
        <div class="newsall">
          <news-list v-if="selectedList === 'news-list'"></news-list>
        </div>
      </div>
      <!-- container maps-->
      <div class="container-maps">
        <div class="map">
          <the-map></the-map>
        </div>
      </div>
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
import NewsList from "./NewsList.vue";

export default {
  data() {
    return {
      selectedList: true,
    };
  },
  components: {
    TheHeader,
    TheMap,
    BridgeBox,
    NewsList,
  },
  methods: {
    setSelectedList(list) {
      this.selectedList = list;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
map {
  width: 100%;
  min-height: 100vh;
  color: grey;
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

<template>
  <div class="hello-bridge">
    <div class="w-full">
      <div class="h-full">
        <div class="newsall z-55 p-4">
          <news-list v-if="selectedList === 'news-list'"></news-list>
        </div>
      </div>
    </div>
    <!-- end newsall container -->
    <!-- container news button -->
    <div class="continer-news">
      <div class="news">
        <button @click="setSelectedList('news-list')" class="btn btn-news">
          <img alt="news icon" src="@/assets/icon_news.svg" />
        </button>
      </div>
    </div>

    <the-header></the-header>
    <div class="container-main flex relative">
      <!-- container maps-->
      <div class="container-maps ">
        <div class="map w-full h-full overflow-hidden">
          <the-map></the-map>
        </div>
        <div>
          <bridge-box></bridge-box>
        </div>
      </div>
      <!-- end container maps -->
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
.btn-news {
  display: none;
}

img {
  vertical-align: middle;
}
.newsall {
  z-index: 10;
  width: 350px;
}

@media (max-width: 615px) {
  .btn-news {
    display: block;
    border-radius: 50%;
    border: 1px solid #0f5b69;
    background: #0f5b69;
    padding: 10px 14px;
    font-size: 15px;
    cursor: pointer;
    width: 61px;
    height: 61px;
    position: absolute;
    top: 10px;
    right: 30px;
  }
}
</style>

<template>
  <div class="w-full">
    <div class=" flex h-full">
      <!--Header-Logo en NieuwsIcon-->
      <div class="absolute">
        <div class="main-header">
          <the-header></the-header>
          <div class="continer-news">
            <div class="news">
              <button
                @click="setSelectedList('news-list')"
                class="btn btn-news"
              >
                <img alt="news icon" src="@/assets/icon_news.svg" />
              </button>
            </div>
          </div>
        </div>

        <!--MOBILE-->
        <div class="h-full overflow-hidden">
          <!--NewsList NewsItem-->
          <div class="absolute inline-block z-55 h-full p-4">
            <div class="flex h-full">
              <news-list v-if="selectedList === 'news-list'"></news-list>
            </div>
          </div>
        </div>
      </div>

      <!--DESKTOP-->

      <!--BridgeAll BridgeItem-->

      <div class="absolute left-0 top-0 w-full h-full overflow-hidden">
        <div class="float-right sm:w-1/3 md:w-1/4 h-0">
          <div class="absolute top-10 right-0 p-2 z-10">
            <bridge-all class="all"></bridge-all>
            <!-- <bridge-box></bridge-box> -->
          </div>
        </div>
      </div>

      <the-map></the-map>
    </div>
  </div>
</template>

<script>
import BridgeAll from "./BridgeAll.vue";
//import BridgeBox from "./BridgeBox.vue";
import TheHeader from "./TheHeader.vue";
import TheMap from "./leafletmap/TheMap.vue";
import NewsList from "./news/NewsList.vue";

export default {
  data() {
    return {
      selectedList: true,
      // expand_mobile_connections: false,
      // connections: true,
    };
  },
  components: {
    TheHeader,
    TheMap,
    //BridgeBox,
    BridgeAll,
    NewsList,
  },
  // computed: {
  //   carouselActiveItem() {
  //     return this.$store.state.connections.carousel_active_item;
  //   },
  //   isMobile() {
  //     return this.$store.state.settings.isMobile;
  //   },
  // },
  methods: {
    setSelectedList(list) {
      this.selectedList = list;
    },
    // handleTap() {
    //   this.expand_mobile_connections = !this.expand_mobile_connections;
    // },
    // handleSwipe(direction) {
    //   if (direction === "top" || direction === "up") {
    //     this.expandMobileConnections();
    //   }
    //   if (direction === "bottom" || direction === "down") {
    //     this.hideMobileConnections();
    //   }
    // },
    // expandMobileConnections() {
    //   this.expand_mobile_connections = true;
    // },
    // hideMobileConnections() {
    //   this.expand_mobile_connections = false;
    // },
    // handleCarouselChange(index) {
    //   this.$store.state.connections.carousel_active_item = index;
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all {
  background: tomato;
  max-width: 300px;
  top: 30;
  right: 0;
  left: 0;
}
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

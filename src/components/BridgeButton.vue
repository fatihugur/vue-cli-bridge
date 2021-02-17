<template>
  <div class="flex absolute -top-2">
    <div class="connection-info">
      <span></span>
      <span></span>
    </div>
    <button @click="bridgButtonClick">
      <!-- <h1>{{ name }}</h1> -->
      <h1>Show bridge</h1>
    </button>

    <!-- 
    <div class="bridge-buttons">
      <div class="flex flex-column">
        <button
          @click="setSelectedTab('bridge-one')"
          :mode="firstBridgeButtonMode"
        >
          <base-button>
            <h1>Blackfrairs</h1>
          </base-button>
        </button>
      </div>

      
    </div> -->
    <!--end-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      //selectedTab: "bridge-two",
    };
  },
  methods: {
    bridgButtonClick() {
      this.$emit("bridgeButtonClicked");
    },
  },

  //   computed: {
  //     firstBridgeButtonMode() {
  //       return this.selectedTab === "bridge-one" ? null : "flat";
  //     },
  //     secondBridgeButtonMode() {
  //       return this.selectedTab === "bridge-two" ? null : "flat";
  //     },
  //   },
  //   methods: {
  //     setSelectedTab(tab) {
  //       this.selectedTab = tab;
  //     },
  //   },
};
</script>

<style scoped></style>

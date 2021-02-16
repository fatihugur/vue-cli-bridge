<template>
  <div class="bridge-box">
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
      <div>
        <button
          @click="setSelectedTab('bridge-two')"
          :mode="secondBridgeButtonMode"
        >
          <base-button>
            <h1>Millenium</h1>
          </base-button>
        </button>
      </div>
    </div>
    <div class="info-box box-1">
      <base-box>
        <bridge-one v-if="selectedTab === 'bridge-one'"></bridge-one>
      </base-box>
    </div>
    <div class="info-box box-2">
      <base-box>
        <bridge-two v-if="selectedTab === 'bridge-two'"></bridge-two>
      </base-box>
    </div>
  </div>
</template>

<script>
import BaseBox from "./UI/BaseBox.vue";
import BaseButton from "./UI/BaseButton.vue";
import BridgeOne from "./BridgeOne.vue";
import BridgeTwo from "./BridgeTwo.vue";

export default {
  components: {
    BaseBox,
    BaseButton,
    BridgeOne,
    BridgeTwo,
  },

  data() {
    return {
      selectedTab: "bridge-two",
    };
  },

  //   provide() {
  //     return {
  //       bridgeOne: this.firstBridge,
  //       bridgeTwo: this.secondBridge,
  //     };
  //   },
  computed: {
    firstBridgeButtonMode() {
      return this.selectedTab === "bridge-one" ? null : "flat";
    },
    secondBridgeButtonMode() {
      return this.selectedTab === "bridge-two" ? null : "flat";
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

<style scoped>
.bridge-box {
  display: flex;
  flex-direction: column;
}
.bridge-buttons {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 35%;
  left: 40%;
  z-index: 10;
  width: 100%;
}
.info-box {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 30%;
  top: 30%;
  width: 100%;
  height: 5vh;
  z-index: 9;
}
.box-1 {
  top: 33%;
}
.box-2 {
  top: 40%;
}
.newsall {
  min-width: 100%;
  min-height: 100%;
}
</style>

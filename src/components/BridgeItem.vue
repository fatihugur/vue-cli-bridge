<template>
  <div class="bridge-item absolute">
    <li>
      <!-- BRIDGEBOX SECTION-->
      <section v-if="bridgeBoxIsVisible">
        First Div
        <div class="box_header mb-2">
          <div>
            <span class="flex flex-1 justify-center w-10">
              <h1 class="text-primary has-text-white w-6">{{ name }}</h1>
            </span>
          </div>
          <div>
            <span class="flex flex-1 justify-center w-10 ">
              <img src="@/assets/icon_warning.svg" alt="warning" class="mr-2" />
            </span>
            <span class="flex flex-1 justify-center w-10 ">
              <img src="@/assets/icon_info.svg" alt="info" class="mr-2" />
            </span>
            <span class="flex flex-1 justify-center w-10 ">
              <button @click="toggleBridgeInfo">
                {{ bridgeInfoIsVisible ? "Hide" : "Show" }}
              </button>
            </span>
          </div>
        </div>
        <!--Bridge Header End -->
        <div>
          Second Div
          <div class="box_liften mb-2">
            <div>
              <span class="flex flex-grow-0 justify-center w-10 ">
                <img src="@/assets/lift.svg" alt="liften" class="mr-2" /> </span
              ><span class="has-text-white w-4">Liften</span>
            </div>
            <div>
              <span class="flex flex-column justify-center has-text-grey px-1"
                >Lo</span
              >
              <span class="flex flex-column justify-center">
                <span class="icon has-text-danger">
                  <!-- <b-icon pack="ionicons" icon="circle" size="is-small">
                  </b-icon> -->
                  <i class="mdi mdi-checkbox-blank-circle mdi-24px"></i>
                </span>
              </span>
            </div>
            <div>
              <span class="flex flex-column justify-center has-text-grey px-1"
                >Ro</span
              >
              <span class="flex flex-column justify-center">
                <span class="icon has-text-danger">
                  <!-- <b-icon pack="ionicons" icon="circle" size="is-small">
                  </b-icon> -->
                  <i class="mdi mdi-checkbox-blank-circle mdi-24px"></i>
                </span>
              </span>
            </div>
          </div>

          <div class="box_stairs mb-4">
            <div>
              <span class="flex flex-grow-0 justify-center w-10">
                <img
                  src="@/assets/stairs.svg"
                  alt="stairs"
                  class="mr-2"
                /> </span
              ><span class="has-text-white">Roltrappen</span>
            </div>
            <div>
              <span class="flex flex-column justify-center has-text-grey px-1"
                >Lo</span
              >
              <span class="flex flex-column justify-center">
                <span class="icon has-text-danger">
                  <!-- <b-icon pack="ionicons" icon="circle" size="is-small">
                  </b-icon> -->
                  <i class="mdi mdi-checkbox-blank-circle mdi-24px"></i>
                </span>
              </span>
            </div>
            <div>
              <span class="flex flex-column justify-center has-text-grey px-1"
                >Ro</span
              >
              <span class="flex flex-column justify-center">
                <span class="icon has-text-danger">
                  <!-- <b-icon pack="ionicons" icon="circle" size="is-small">
                  </b-icon> -->
                  <i class="mdi mdi-checkbox-blank-circle mdi-24px"></i>
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <!-- INFO SECTION-->
      <section v-if="bridgeInfoIsVisible">
        Third Div
        <div class="box_info_liften mb-4">
          <div>
            <span class="flex flex-grow-0 justify-center w-10">
              <img
                src="@/assets/icon_info.svg"
                alt="info"
                class="mr-2"
              /> </span
            ><span class="has-text-white">Liften</span>
          </div>
          <div>
            <span
              class="flex flex-column justify-center has-text-white px-1 mb-3"
            >
              {{ current_info }}
              <!-- Wegens voorbereidende onderhoudswerken is de LO buiten dienst.
              Onze excuses voor het ongemak. fietsers wordt aangeraden gebruik
              te maken van de Millenium Bridge -->
            </span>
          </div>
        </div>
        <!-- -->
        <div class="box_warning mb-4">
          <div>
            <span class="flex flex-grow-0 justify-center w-10">
              <img
                src="@/assets/icon_warning.svg"
                alt="warning"
                class="mr-2"
              /> </span
            ><span class="has-text-white">Liften</span>
          </div>
          <div>
            <span
              class="flex flex-column justify-center has-text-white px-1 mb-3"
            >
              In het kader van de maatregelen tegen het CORONAvirus: HOU AUB
              VOLDOENDE AFSTAND
            </span>
          </div>
        </div>
        <!-- Toegankelijkheid-->
        <div class="box_toegang mb-4">
          <div>
            <div class="mb-3">
              <span class="has-text-white">Toegankelijkheid</span>
            </div>

            <div>
              <span class="flex flex-1 justify-center w-10">
                <img src="@/assets/acc_walk.svg" alt="walk" class="mr-4" />
              </span>
              <span class="flex flex-1 justify-center w-10">
                <img
                  src="@/assets/acc_weelchair.svg"
                  alt="weelchair"
                  class="mr-3"
                />
              </span>
              <span class="flex flex-1 justify-center w-14">
                <img src="@/assets/acc_bike.svg" alt="bike" class="mr-3" />
              </span>
              <span class="flex flex-1 justify-center w-14">
                <img
                  src="@/assets/acc_bakfiets.svg"
                  alt="bakfiets"
                  class="mr-3"
                />
              </span>
              <span class="flex flex-1 justify-center w-14">
                <img
                  src="@/assets/acc_scooter.svg"
                  alt="scotter"
                  class="mr-3"
                />
              </span>
            </div>
          </div>
        </div>
      </section>
    </li>
  </div>
</template>

<script>
//import BridgeButton from "./BridgeButton.vue";
export default {
  components: {
    //BridgeButton,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    current_info: {
      type: String,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
    connection_ends: {
      type: Array,
      required: true,
    },
    accessibility: {
      type: Array,
      required: true,
    },
    isBridge: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["is-bridge"],

  data() {
    return {
      bridgeBoxIsVisible: true,
      bridgeInfoIsVisible: false,
    };
  },
  methods: {
    toggleBridgeBox() {
      this.bridgeBoxIsVisible = !this.bridgeBoxIsVisible;
      // this.$emit("toggle-bridge", this.id);
    },

    toggleBridgeInfo() {
      this.bridgeInfoIsVisible = !this.bridgeInfoIsVisible;
    },
  },
};
</script>

<style scoped>
.bridge-item {
  width: 100%;
  max-width: 300px;
  top: 25%;
  right: 30%;
}
.box_header,
.box_liften,
.box_stairs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

img.mr-2 {
  width: 20px;
}
img.mr-3 {
  min-width: 25px;
}
</style>

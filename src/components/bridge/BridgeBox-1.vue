<template>
  <div class="bridge-box">
    <div class="bridge-buttons">
      <div class="flex flex-column">
        <base-button><h1>Blackfrairs</h1></base-button>
      </div>
      <div>
        <base-button><h1>Millenium</h1></base-button>
      </div>
    </div>
    <div class="info-box">
      <base-box>
        <div class="flex ">
          <h1>Millenium</h1>
          <div class="flex justify-between mb-3 px-1">
            <div class="flex flex-grow-1">
              <span class="flex flex-grow-0 justify-center w-10">
                <img
                  src="@/assets/icon_warning.svg"
                  alt="warning"
                  class="mr-2"
                />
              </span>
            </div>
            <div class="flex flex-grow-1 ">
              <span class="flex flex-grow-0 justify-center w-10">
                <img src="@/assets/icon_info.svg" alt="info" class="mr-2" />
              </span>
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="flex justify-between mb-3 px-1">
            <div class="flex flex-grow-1 ">
              <span class="flex flex-grow-0 justify-center w-10">
                <img src="@/assets/lift.svg" alt="liften" class="mr-2" /> </span
              ><span class="has-text-white">Liften</span>
            </div>
          </div>
          <div class="flex flex-grow-0 rounded-full border px-2">
            <span class="flex">
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
            </span>
            <span>
              <span class="flex">
                <span class="flex flex-column justify-center has-text-grey px-1"
                  >Ro</span
                >
                <span class="flex flex-column justify-center">
                  <span class="icon has-text-danger">
                    <i class=" mdi mdi-checkbox-blank-circle mdi-24px"></i>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div class="flex justify-between mb-3 px-1">
            <div class="flex flex-grow-1">
              <span class="flex flex-grow-0 justify-center  w-10">
                <img src="@/assets/stairs.svg" alt="roltrappen" class="mr-2" />
              </span>
              <span class="has-text-white">Roltrappen</span>
            </div>
          </div>
          <div class="flex flex-grow-0 rounded-full border px-2">
            <span class="flex">
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
            </span>
            <span>
              <span class="flex">
                <span class="flex flex-column justify-center has-text-grey px-1"
                  >Ro</span
                >
                <span class="flex flex-column justify-center">
                  <span class="icon has-text-danger">
                    <i class=" mdi mdi-checkbox-blank-circle mdi-24px"></i>
                  </span>
                </span>
              </span>
            </span>
          </div>
        </div>
      </base-box>
    </div>
  </div>
</template>

<script>
import BaseBox from "./UI/BaseBox.vue";
import BaseButton from "./UI/BaseButton.vue";
export default {
  components: {
    BaseBox,
    BaseButton,
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
  top: 170px;
  left: 60px;
  z-index: 10;
  width: 100%;
}
.info-box {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 300px;
  right: 60px;
  width: 100%;
}
</style>

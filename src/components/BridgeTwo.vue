<template>
  <div>
    <div class="secondbridge flex flex-row">
      <div class="flex justify-between mb-3 px-1">
        <div>
          <h1>Millenium</h1>
        </div>
        <div class="flex flex-grow-1">
          <span class="flex flex-grow-0 justify-center w-5">
            <img src="@/assets/icon_warning.svg" alt="warning" class="mr-2" />
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      secondBridge: [
        {
          //   id: 2,
          title: "Millenium",
          description: "London bridges second bridge..",
          info: "This bridge is closed",
        },
      ],
    };
  },
};
</script>

<style scoped>
.secondbridge {
  width: 100%;
  min-width: 300px;
}
img.mr-2 {
  width: 20px;
}
</style>

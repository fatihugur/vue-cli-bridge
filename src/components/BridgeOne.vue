<template>
  <div class="firstbridge flex">
    <div class="box_1">
      <div><h1>Blackfrairs</h1></div>
      <div>
        <img src="@/assets/icon_warning.svg" alt="warning" class="mr-2" />
      </div>
      <div>
        <img src="@/assets/icon_info.svg" alt="info" class="mr-2" />
      </div>
    </div>

    <div class="box_liften">
      <div>
        <span class="flex flex-grow-0 justify-center w-10">
          <img src="@/assets/lift.svg" alt="liften" class="mr-2" /> </span
        ><span class="has-text-white">Liften</span>
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

    <div class="box_stairs">
      <div>
        <span class="flex flex-grow-0 justify-center w-10">
          <img src="@/assets/stairs.svg" alt="stairs" class="mr-2" /> </span
        ><span class="has-text-white">Roltrapen</span>
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
</template>

<script>
export default {
  data() {
    return {
      //   id: 1,
      title: "Blackfrairs",
      description: "London bridges first bridge..",
      info: "This bridge is open",
    };
  },
};
</script>

<style scoped>
.firstbridge {
  width: 100%;
  min-width: 300px;
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
</style>

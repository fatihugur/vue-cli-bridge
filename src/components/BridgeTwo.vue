<template>
  <div class="secondbridge flex">
    <div class="box_header mb-2">
      <div>
        <span class="flex flex-1 justify-center w-10">
          <h1 class="text-primary w-6">Millenium</h1>
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
          <!-- <button class="has-text-grey-light" @click="toggleShowInfo">
            {{ infoIsVisible ? "Hide" : "Show" }}
          </button> -->
          <b-button @click="toggleShowInfo" class="mr-2">
            <!-- <b-icon
              :icon="infoIsVisible ? chevron - up : chevron - down"
            ></b-icon> -->
            Details
          </b-button>
        </span>
      </div>
    </div>

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
          <img src="@/assets/stairs.svg" alt="stairs" class="mr-2" /> </span
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
    <div v-if="infoIsVisible">
      <div class="box_info_liften mb-4">
        <div>
          <span class="flex flex-grow-0 justify-center w-10">
            <img src="@/assets/icon_info.svg" alt="info" class="mr-2" /> </span
          ><span class="has-text-white">Liften</span>
        </div>
        <div>
          <span
            class="flex flex-column justify-center has-text-white px-1 mb-3"
          >
            Wegens voorbereidende onderhoudswerken is de LO buiten dienst. Onze
            excuses voor het ongemak. fietsers wordt aangeraden gebruik te maken
            van de Millenium Bridge
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
              <img src="@/assets/acc_scooter.svg" alt="scotter" class="mr-3" />
            </span>
          </div>
        </div>
      </div>
    </div>

    <!--end infoShow -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoIsVisible: false,

      // secondBridge: [
      //   {
      //     //   id: 2,
      //     title: "Millenium",
      //     description: "London bridges second bridge..",
      //     info: "This bridge is closed",
      //   },
      // ],
    };
  },

  methods: {
    toggleShowInfo() {
      this.infoIsVisible = !this.infoIsVisible;
    },
    // deleteNews(){
    //   this.$emit('delete');
    // }
  },
};
</script>

<style scoped>
.secondbridge {
  width: 100%;
  max-width: 300px;
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

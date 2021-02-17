<template>
  <div class="flex">
    <div class="box-1">
      <header>
        <!-- <h1>{{ bridge.name }}</h1> -->
      </header>
      <ul class="m-0 p-0 list-none">
        <bridge-item
          v-for="bridge in bridges"
          :key="bridge.id"
          :id="bridge.id"
          :state_id="bridge.state_id"
          :name="bridge.name"
          :current_info="bridge.current_info"
          :lat="bridge.lat"
          :long="bridge.long"
          :connection_ends="bridge.connection_ends"
          :accessibility="bridge.accessibility"
          @is-bridge="toggleBridgeBoxStatus"
        >
          <base-box></base-box>
        </bridge-item>
        <bridge-button>
          <base-button @buttonClicked="toggleBridgeBoxStatus"></base-button>
        </bridge-button>
        <bridge-button>
          <base-button @buttonClicked="toggleBridgeBoxStatus"></base-button>
        </bridge-button>
        <!-- <bridge-item>
          <base-box></base-box>
        </bridge-item> -->
      </ul>
    </div>
  </div>
</template>

<script>
import BridgeItem from "./BridgeItem.vue";
import BridgeButton from "./BridgeButton.vue";
import BaseBox from "./UI/BaseBox.vue";
import BaseButton from "./UI/BaseButton.vue";

export default {
  components: {
    BridgeItem,
    BridgeButton,
    BaseBox,
    BaseButton,
  },
  methods: {
    toggleBridgeBoxStatus(bridgeId) {
      console.log("button");
      const identifiedBridge = this.bridges.find(
        (bridge) => bridge.id === bridgeId
      );
      identifiedBridge.isBridge = !identifiedBridge.isBridge;
    },
  },

  data() {
    return {
      bridges: [
        {
          id: 1,
          state_id: 1,
          name: "Blackfriars",
          current_info: "Millenium bridge is open.",
          lat: 51.5111837,
          long: -0.09832070000000004,
          isBridge: true,
          connection_ends: [
            {
              id: 1,
              shore: {
                id: 1,
                name: "Linkeroever",
                short_name: "LO",
              },
              lat: 51.5106928,
              long: -0.09846100000000002,
              image_url: "",
              services: [
                {
                  id: 12,
                  title: "test",
                  description: "",
                  current_info:
                    "ut ultrices. Vestibulum felis diam, ornare sed elit id, fermentum volutpat quam. Nulla massa enim, cursus a lacinia non, fermentum in augue. Etiam ut ante id arcu malesuada maximus. Mauris a elementum elit. Integer vitae est accumsan, dapibus velit elementum, iaculis risus.\r\n\r\nVivamus arcu orci, interdum eget libero sed, congue lacinia nisi. Donec consectetur ut dui id euismod. Sed id augue lacinia, placerat massa ut, lobortis lectus. Curabitur nibh ex, eleifend nec volutpat in, suscipit a magna.",
                  type: {
                    id: 1,
                    name: "Lift",
                    icon_url: "",
                  },
                  state: {
                    id: 2,
                    name: "Waarschuwing",
                    icon_url: "",
                  },
                },
              ],
            },
            {
              id: 2,
              shore: {
                id: 2,
                name: "Rechteroever",
                short_name: "RO",
              },
              lat: 51.5086182,
              long: -0.09859819999999997,
              image_url: "",
              services: [
                {
                  id: 9,
                  title: "Lift RO Kennedy",
                  description: "",
                  current_info: "",
                  type: {
                    id: 1,
                    name: "Lift",
                    icon_url: "",
                  },
                  state: {
                    id: 2,
                    name: "Waarschuwing",
                    icon_url: "",
                  },
                },
              ],
            },
          ],
          accessibility: [
            {
              id: 1,
              name: "walk",
              possible: 1,
            },
            {
              id: 2,
              name: "wheelchair",
              possible: 1,
            },
            {
              id: 3,
              name: "bike",
              possible: 1,
            },
            {
              id: 5,
              name: "cargo-bike",
              possible: 1,
            },
            {
              id: 6,
              name: "moped",
              possible: 1,
            },
          ],
        },
        {
          id: 5,
          state_id: 1,
          name: "Millenium",
          current_info:
            "weekdagen: LO 7u-18u / RO 7u15-18u15 weekends/feestdagen: LO 10u-21u / RO 10u15-21u15",
          lat: 51.5116521,
          long: -0.10426800000000003,
          isBridge: true,
          connection_ends: [
            {
              id: 9,
              shore: {
                id: 1,
                name: "Linkeroever",
                short_name: "LO",
              },
              lat: 51.5109589,
              long: -0.10436809999999996,
              image_url: "",
              services: [
                {
                  id: 27,
                  title: "test",
                  description: "",
                  current_info:
                    "Omwille van een evenement kan de wachttijd oplopen",
                  type: {
                    id: 1,
                    name: "Lift",
                    icon_url: "",
                  },
                  state: {
                    id: 1,
                    name: "Actief",
                    icon_url: "",
                  },
                },
                {
                  id: 28,
                  title: "Roltrap LO defect",
                  description: "",
                  current_info:
                    "Roltrap buiten dienst. Onze excuses voor het ongemak.",
                  type: {
                    id: 2,
                    name: "Roltrap",
                    icon_url: "",
                  },
                  state: {
                    id: 3,
                    name: "Inactief",
                    icon_url: "",
                  },
                },
              ],
            },
            {
              id: 10,
              shore: {
                id: 2,
                name: "Rechteroever",
                short_name: "RO",
              },
              lat: 51.5087357,
              long: -0.10434810000000005,
              image_url: "",
              services: [
                {
                  id: 21,
                  title: "Lift RO Sint-Anna",
                  description: "",
                  current_info:
                    "Omwille van een evenement kan de wachttijd oplopen 2",
                  type: {
                    id: 1,
                    name: "Lift",
                    icon_url: "",
                  },
                  state: {
                    id: 1,
                    name: "Actief",
                    icon_url: "",
                  },
                },
                {
                  id: 26,
                  title: "test",
                  description: "",
                  current_info: "",
                  type: {
                    id: 2,
                    name: "Roltrap",
                    icon_url: "",
                  },
                  state: {
                    id: 1,
                    name: "Actief",
                    icon_url: "",
                  },
                },
              ],
            },
          ],
          accessibility: [
            {
              id: 1,
              name: "walk",
              possible: 1,
            },
            {
              id: 2,
              name: "wheelchair",
              possible: 1,
            },
            {
              id: 3,
              name: "bike",
              possible: 1,
            },
            {
              id: 5,
              name: "cargo-bike",
              possible: 1,
            },
            {
              id: 6,
              name: "moped",
              possible: 1,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped></style>

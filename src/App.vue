<template>
  <bridge-home></bridge-home>
</template>

<script>
import BridgeHome from "./components/BridgeHome.vue";

export default {
  name: "App",
  components: {
    BridgeHome,
  },
};
</script>
<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
body {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  color: #777;
  box-sizing: border-box;
  background-color: #2c3035;
}
</style>

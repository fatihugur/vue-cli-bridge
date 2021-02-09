<template>
  <div class="firstbridge flex w-full">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
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
</style>

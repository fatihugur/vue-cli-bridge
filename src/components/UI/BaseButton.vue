<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["type", "mode"],
};
</script>

<style scoped>
button {
  padding: 0.25rem 0.5rem;
  font-family: inherit;
  border-radius: 5%;
  background-color: #0f5b69;
  border-color: #0f5b69;
  color: #fff;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #3ec7ff;
  border-color: #3ec7ff;
}

.flat {
  background-color: #3ec7ff;
  color: #fff;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #3ec7ff;
}
</style>

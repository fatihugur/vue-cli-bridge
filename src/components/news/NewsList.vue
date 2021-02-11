<template>
  <div class="has-text-white bg-gray">
    <h1>Nieuwsberichten</h1>
    <news-item> </news-item>
  </div>
</template>

<script>
import NewsItem from "./NewsItem.vue";
export default {
  components: { NewsItem },
};
</script>

<style scoped></style>

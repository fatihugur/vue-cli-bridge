<template>
  <div>
    <li>
      <h2>{{ title }}</h2>
      <p>{{ description.substr(0, 80) + "..." }}</p>
      <button @click="toggleNewsDetails">
        {{ newsDetailsAreVisible ? "Hide" : "Show" }}FullNews
      </button>
      <ul v-if="newsDetailsAreVisible">
        <div>
          <img src="" alt="" />
          <li>{{ image_url }}</li>
        </div>
        <div class="newsdetails">
          <li>{{ created_at }}</li>
          <li>{{ updated_at }}</li>
          <li>{{ title }}</li>
          <li>{{ description }}</li>
        </div>
      </ul>
      <button @click="$emit('delete', id)">Delete News</button>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    created_at: {
      type: String,
      required: true,
    },
    updated_at: {
      type: String,
      required: true,
    },
  },
  emits: ["delete"],
  data() {
    return {
      newsDetailsAreVisible: false,
    };
  },
  methods: {
    toggleNewsDetails() {
      this.newsDetailsAreVisible = !this.newsDetailsAreVisible;
    },
    // deleteNews(){
    //   this.$emit('delete');
    // }
  },
};
</script>

<style scoped></style>

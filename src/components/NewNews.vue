<template>
  <div>
    <h1>Add News</h1>
    <form @submit.prevent="submitData">
      <div>
        <label>Title</label>
        <input type="text" v-model="enteredTitle" />
      </div>
      <div>
        <label>Description</label>
        <textarea
          v-model="enteredDescription"
          name="news-area"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div>
        <label>New Url</label>
        <input type="text" v-model="enteredImage_url" />
      </div>
      <div>
        <label>Created</label>
        <input type="text" v-model="enteredCreated_at" />
      </div>
      <div>
        <label>Update</label>
        <input type="text" v-model="enteredUpdated_at" />
      </div>
      <div>
        <button>Add News</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["add-news"],
  data() {
    return {
      enteredTitle: "",
      enteredDescription: "",
      enteredImage_url: "",
      enteredCreated_at: "",
      enteredUpdated_at: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredTitle,
        this.enteredDescription,
        this.enteredImage_url,
        this.enteredCreated_at,
        this.enteredUpdated_at
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>

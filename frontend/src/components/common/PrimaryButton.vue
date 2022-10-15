<template>
  <button class="btn my-btn" @click="handleButtonClick">Add Project</button>
</template>

<script>
export default {
  name: "primary-button",
  methods: {
    handleButtonClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style>
.my-btn {
  background-color: #3891a6;
  color: white;
  min-width: 200px;
  border-radius: 50px;
}
.my-btn:hover {
  background-color: #338395;
  color: #fde74c;
}
</style>

<template>
  <nav class="navbar navbar-expand-lg" style="background: #3891a6">
    <div class="container-fluid col-12">
      <a class="navbar-brand ms-auto text-white" href="#">{{ username }}</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "user-navigation",
  props: {
    username: String,
  },
};
</script>

<style></style>

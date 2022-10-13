<template>
  <div class="card h-100 ms-2 me-2">
    <img :src="image_url" class="card-img-top" alt="" height="200" />
    <div class="card-body">
      <p class="card-text">
        <router-link to="#" class="link">{{ title }}</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "project-card",
  props: {
    image_url: String,
    title: String,
  },
};
</script>

<style>
.card-text {
  text-align: left;
}
.link {
  text-decoration: none;
  color: #3891a6;
  text-overflow: ellipsis;
  max-height: 20px;
}
.link:hover {
  color: #205a67;
}
</style>

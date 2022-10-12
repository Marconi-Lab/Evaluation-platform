<template>
  <nav class="navbar navbar-expand-lg" style="background: #3891a6">
    <div class="container-fluid col-12">
      <a class="navbar-brand ms-auto text-white" href="#">Navbar</a>
    </div>
  </nav>
  <div class="container">
    <div>
      <h4 class="text-dark mt-3">The Marconi Lab ML Evaluation Platform</h4>
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-4 mt-5">
      <div class="col" v-for="project in projects" :key="project.id">
        <ImageCard :title="project.title" :image_url="project.image_url" />
      </div>
    </div>
  </div>
</template>

<script>
import projects from "@/services/projects";
import ImageCard from "@/components/common/ImageCard.vue";
export default {
  components: {
    ImageCard,
  },
  data: function () {
    return {
      img1: "../assets/images/audio processing.png",
      projects,
    };
  },
};
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>

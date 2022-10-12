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
        <div class="card h-100 ms-2 me-2">
          <img
            :src="project.image_url"
            class="card-img-top"
            alt=""
            height="200"
          />
          <div class="card-body me-2">
            <p class="card-text">
              <a href="#" class="btn text-primary"
                >Detecting diseases in a cassava crop</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects from "@/services/projects";
export default {
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

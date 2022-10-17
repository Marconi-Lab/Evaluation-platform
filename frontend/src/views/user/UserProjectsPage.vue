<template>
  <div>
    <UserNavigation :username="'Team 1'" />
    <div class="container">
      <div>
        <h4 class="text-dark mt-3" style="text-align: center">
          The Marconi Lab ML Evaluation Platform
        </h4>
        <SearchBar />
      </div>
      <div class="row row-cols-1 row-cols-md-4 g-4 mt-5">
        <div class="col" v-for="project in projects" :key="project.id">
          <ImageCard
            :title="project.title"
            :image_url="project.image_url"
            :id="project.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects from "@/services/projects";
import ImageCard from "@/components/common/ImageCard.vue";
import SearchBar from "@/components/common/SearchBar.vue";
import UserNavigation from "@/components/common/UserNavigation.vue";
export default {
  components: {
    ImageCard,
    SearchBar,
    UserNavigation,
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

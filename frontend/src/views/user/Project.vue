<template>
  <div>
    <div class="my-img">
      <img :src="data.image_url" alt="" />
    </div>
    <div class="desc">{{ data.description }}</div>
  </div>
</template>
<script>
import projects from "@/services/projects";

export default {
  name: "project-view",
  data() {
    return {
      data: {},
    };
  },
  methods: {
    getProject(id, projects) {
      let project = projects.filter((x) => x.id === parseInt(id))[0];
      console.log("Project ", project);
      return project;
    },
  },
  async created() {
    console.log("Projects ", projects);
    let id = this.$route.params.id;
    this.data = await this.getProject(id, projects);
    console.log(this.data);
  },
};
</script>
<style scoped>
.my-img {
  width: 100vw;
}
</style>

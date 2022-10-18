<template>
  <usernavigation />
  <div class="p-5">
    <h4 class="mb-4">Project Title</h4>
    <div class="my-img">
      <img :src="data.image_url" alt="" class="img-fluid" />
    </div>
    <div class="desc">{{ data.description }}</div>
  </div>
  <div class="col ms-5">
    <div class="row justify-content-between">
      <div class="col-4">
        <!-- <ChooseFile /> -->
        <div
          class="image-upload border border-light justify-content-center rounded-5"
        >
          <label for="file-input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="200"
              fill="currentColor"
              class="icon bi bi-cloud-upload p-4 justify-content-center"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
              />
              <path
                fill-rule="evenodd"
                d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
              /></svg
          ></label>
          <input id="file-input" type="file" />
        </div>
      </div>
      <div class="col-4"><h4>Evaluation History</h4></div>
    </div>
  </div>
</template>
<script>
import projects from "@/services/projects";
import usernavigation from "@/components/common/UserNavigation";
// import ChooseFile from "@/components/common/chooseFile.vue";

export default {
  name: "project-view",
  components: {
    usernavigation,
    // ChooseFile,
  },

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
.img-fluid {
  height: 300px;
  width: 100%;
  object-fit: cover;
}
.image-upload > input {
  display: none;
}
.image-upload {
  background-color: rgb(230, 228, 228);
}
.bord {
  width: 100%;
  height: 100%;
}
.icon {
  align-items: center;
}
</style>

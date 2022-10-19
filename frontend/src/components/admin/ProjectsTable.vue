<template>
  <table class="table table-bordered">
    <thead>
      <tr class="table-row">
        <th>Project</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data" :key="row.id">
        <td class="project-name">{{ row.title }}</td>
        <td>
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash-fill delete-icon"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
              /></svg
          ></span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import projects from "@/services/projects";
export default {
  name: "projects-table",

  data() {
    return {
      data: [],
    };
  },
  methods: {
    async getProjects() {
      this.data = projects;
      console.log(this.data);
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<style>
.project-name {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.delete-icon {
  color: #3891a6;
}
.delete-icon:hover {
  color: red;
}
.table-row {
  background-color: #eaeaea;
}
</style>

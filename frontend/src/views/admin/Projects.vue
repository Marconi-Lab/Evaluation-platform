<template>
  <div>
    <UserNavigation :username="'Admin'" />
    <div class="container">
      <div class="my-4">
        <h4 class="text-center">The Marconi Lab ML Evaluation Platform</h4>
        <SearchBar />
        <div class="m-5">
          <div class="mb-3">
            <PrimaryButton @onClick="handleAddProject" />
          </div>

          <ProjectsTable />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserNavigation from "@/components/common/UserNavigation.vue";
import SearchBar from "@/components/common/SearchBar.vue";
import ProjectsTable from "@/components/admin/ProjectsTable.vue";
import PrimaryButton from "@/components/common/PrimaryButton.vue";
export default {
  name: "admin-projects",
  components: {
    UserNavigation,
    SearchBar,
    ProjectsTable,
    PrimaryButton,
  },
  data() {
    return {};
  },
};
</script>

<style></style>

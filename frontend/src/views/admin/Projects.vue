<template>
  <div>
    <UserNavigation :username="'Admin'" />
    <div class="container">
      <div class="my-4">
        <h4>The Marconi Lab ML Evaluation Platform</h4>
        <SearchBar />
      </div>
    </div>
  </div>
</template>

<script>
import UserNavigation from "@/components/common/UserNavigation.vue";
import SearchBar from "@/components/common/SearchBar.vue";
export default {
  name: "admin-projects",
  components: {
    UserNavigation,
    SearchBar,
  },
  data() {
    return {};
  },
};
</script>

<style></style>

<template>
  <div>
    <UserNavigation :username="'Admin'" />
  </div>
</template>

<script>
import UserNavigation from "@/components/common/UserNavigation.vue";
export default {
  name: "admin-projects",
  components: {
    UserNavigation,
  },
  data() {
    return {};
  },
};
</script>

<style></style>

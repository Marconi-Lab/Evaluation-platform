<template>
  <landing-navigation />
  <div class="container" style="height: 90vh">
    <div class="row">
      <div
        class="col-sm-6 d-flex justify-content-center align-items-center text-left"
      >
        <div class="d-flex flex-column align-items-start">
          <h2 class="heading">The Marconi Lab</h2>
          <p class="sub-heading">ML Research Evalution Platform</p>
        </div>
      </div>
      <div class="col-sm-6 d-flex justify-content-center align-items-center">
        <auth-form />
      </div>
    </div>
  </div>
</template>

<script>
import LandingNavigation from "@/components/common/LandingNavigation.vue";
import AuthForm from "@/components/common/AuthForm.vue";
export default {
  name: "login-screen",
  components: {
    LandingNavigation,
    AuthForm,
  },
};
</script>

<style scoped>
.form-control {
  width: 83%;
}
.btn {
  width: 83%;
}
.row {
  height: 100%;
}
.heading {
  font-size: 40px;
}
.sub-heading {
  font-size: 24px;
}
</style>

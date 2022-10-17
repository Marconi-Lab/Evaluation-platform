<template>
  <nav class="navbar navbar-expand-sm text-right">
    <div class="nav-list d-flex justify-content-end">
      <router-link class="px-5 navlink" to="/user">Login</router-link>
      <router-link class="px-5 mr-5 navlink" to="/user/signup"
        >Register</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "landing-navigation",
};
</script>

<style lang="scss">
.navbar {
  background-color: #3891a6;
}
.nav-list {
  width: 100%;
}
.navlink {
  color: white;
  text-decoration: none;
  font-size: 12px;
}
.navlink:hover {
  color: #fde74c;
}
</style>

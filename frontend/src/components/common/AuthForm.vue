<template>
  <form class="auth-form px-5 pb-5 pt-2">
    <div class="mb-3 text-start">
      <label for="validationCustom01" class="form-label text-dark mt-5"
        >Team name</label
      >
      <input
        type="text"
        class="form-control input"
        id="validationCustom01"
        required
      />
    </div>
    <div class="mb-4 text-start">
      <label for="exampleInputPassword1" class="form-label text-dark"
        >Password</label
      >
      <input
        v-model="password"
        :rules="passwordRules"
        :type="passwordShow ? 'text' : 'password'"
        prepend-inner-icon="mdi-key"
        :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="passwordShow = !passwordShow"
        required
        class="form-control input"
        id="exampleInputPassword1"
      />
    </div>
    <router-link to="/user/projects" class="text-white"
      ><button
        type="submit"
        class="btn btn-primary my-4"
        style="background-color: #3891a6"
        @click="doLogin"
      >
        Login
        <!-- <RouterLink h></RouterLink><a href="/#/landingpage" class="text-white">Login</a> -->
      </button></router-link
    >
  </form>
</template>

<script>
export default {
  name: "auth-form",
  data() {
    return {
      passwordShow: false,
      password: "",
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 6) || "Password must be 6  characters or more!",
      ],
    };
  },
};
</script>

<style>
.input {
  width: 70%;
  min-width: 300px;
  border-radius: 100px;
}
.btn {
  width: 100%;
  border-radius: 100px;
  border: 0px;
}
.auth-form {
  background-color: #f5f5f5;
}
</style>

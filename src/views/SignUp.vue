<template>
  <nav
    class="navbar navbar-expand-lg text-start"
    style="background-color: #3891a6"
  >
    <div class="container-fluid">
      <a
        class="navbar-brand text-white"
        style="font-family: Times New Roman"
        href="/#/login"
        >Login</a
      >
      <a
        class="navbar-brand"
        style="font-family: Times New Roman; color: yellow"
        aria-current="page"
        href="/#/signup"
        >Register</a
      >
    </div>
  </nav>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <br />
        <br />
        <br />
        <b
          ><h2 class="mt-5">The Marconi Lab</h2>
          <p>ML Research Evalution Platform</p></b
        >
      </div>
      <div class="col">
        <form style="background-color: rgb(215, 215, 215)">
          <div class="mb-3 text-start">
            <label
              for="validationCustom01"
              class="form-label text-dark mt-5 ms-5 rounded-4"
              >Team name</label
            >
            <input
              type="text"
              class="form-control ms-5 me-2"
              id="validationCustom01"
              required
            />
          </div>
          <div class="mb-4 text-start">
            <label for="exampleInputPassword1" class="form-label text-dark ms-5"
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
              class="form-control ms-5"
              id="exampleInputPassword1"
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary mb-5 ms-1"
            style="background-color: #3891a6"
            @click="doLogin"
          >
            <a href="/#/landingpage" class="text-white">SignUp</a>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login-screen",
  data: () => ({
    passwordShow: false,
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 6) || "Password must be 6  characters or more!",
    ],
  }),
};
</script>

<style scoped>
.container {
  margin-top: 10%;
  margin-bottom: 10%;
}
.form-control {
  width: 83%;
}
.btn {
  width: 83%;
}
</style>

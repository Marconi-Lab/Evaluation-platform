<template>
  <div class="page d-flex justify-content-center align-items-center">
    <div class="model">
      <label
        for="exampleFormControlTextarea1"
        class="form-label ms-4 mt-4"
        id="exampleModalLabel"
        ><h6>Project Title</h6></label
      >
      <input class="form-control ms-4" type="text" />
      <label for="exampleFormControlTextarea1" class="form-label ms-4 mt-3"
        ><h6>Project Description</h6></label
      >
      <textarea
        class="form-control ms-4"
        id="exampleFormControlTextarea1"
        rows="5"
      ></textarea>
      <div class="row mt-4">
        <div class="col-sm-5">
          <label for="formFile" class="form-label ms-4"
            ><h6>Validation File Labels</h6></label
          >
          <input class="form-control ms-4" type="file" id="formFile" />
        </div>
        <div class="col-sm-5">
          <label for="formFile" class="form-label ms-4"
            ><h6>Project Cover Image</h6></label
          >
          <input class="form-control ms-4" type="file" />
        </div>
      </div>
      <div class="mt-4" style="text-align: center">
        <PrimaryButton />
      </div>

      <slot></slot>
    </div>
  </div>
</template>
<script>
import PrimaryButton from "@/components/common/PrimaryButton.vue";

export default {
  name: "model-page",
  components: { PrimaryButton },
};
</script>
<style scoped>
.form-control {
  background-color: #eaeaea;
  border-radius: 0%;
}
.page {
  background-color: rgba(0, 0, 0, 0.192);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 222;
}
.model {
  width: 40%;
  height: 80%;
  background-color: white;
}
.button {
  padding: 20px 30px;
  border: none;
  font-size: 16px;
  background-color: crimson;
  color: #fff;
  cursor: pointer;
}
</style>

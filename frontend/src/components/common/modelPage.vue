<template>
  <!-- Scrollable modal -->
  <!-- Button trigger modal -->
  <!-- <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Launch demo modal
  </button> -->

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content p-3">
        <div class="p-3">
          <label
            for="exampleFormControlTextarea1"
            class="form-label"
            id="exampleModalLabel"
            ><h6>Project Title</h6></label
          >
          <input class="form-control" type="text" />
        </div>
        <div class="modal-body">
          <div class="mb-4">
            <label for="exampleFormControlTextarea1" class="form-label"
              ><h6>Project Description</h6></label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>
          <div class="row mt-4">
            <div class="col-sm">
              <label for="formFile" class="form-label"
                ><h6>Validation File Labels</h6></label
              >
              <input class="form-control" type="file" id="formFile" />
            </div>
            <div class="col-sm">
              <label for="formFile" class="form-label"
                ><h6>Project Cover Image</h6></label
              >
              <input class="form-control" type="file" />
            </div>
          </div>
          <div class="mb-2 mt-5" style="text-align: center">
            <PrimaryButton />
          </div>
        </div>
      </div>
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
</style>

<template>
  <div class="d-flex justify-content-center pt-2">
    <div class="d-flex justify-content-end">
      <input type="text" class="form-control search-input" />
      <span class="input-group-text mx-2 mt-1 text-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "search-bar",
};
</script>

<style>
.search-input {
  width: 30vw;
  min-width: 300px;
  border-radius: 100px;
}
.input-group-text {
  background: white;
  position: absolute;
  float: right;
  z-index: 22;
  border: 0px;
  margin-top: 3px;
}
</style>

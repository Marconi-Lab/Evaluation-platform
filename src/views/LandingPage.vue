<template>
  <nav class="navbar navbar-expand-lg" style="background: #3891a6">
    <div class="container-fluid col-12">
      <a class="navbar-brand ms-auto text-white" href="#">Navbar</a>
    </div>
  </nav>
  <div>
    <h4 class="text-dark mt-3">The Marconi Lab ML Evaluation Platform</h4>
  </div>
  <div class="row row-cols-1 row-cols-md-4 g-4 mt-5">
    <div class="col">
      <div class="card h-100 ms-2 me-2">
        <img
          src="../assets/images/A-cassava-plant-affected-by-mosaic-wilt.-Source-Flickr.webp"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <p class="card-text">
            <a href="#" class="btn">Determining cassava disease</a>
          </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100 ms-2 me-2">
        <img src="" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a short card.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100 ms-2 me-2">
        <img :src="img2" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content.
          </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100 ms-2 me-2">
        <img :src="img3" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content.
          </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100 ms-2 me-2">
        <img :src="img4" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content.
          </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100 ms-2 me-2">
        <img :src="img5" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content.
          </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100 ms-2 me-2">
        <img :src="img6" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content.
          </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100 ms-2 me-2">
        <img :src="img7" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      img1: "../assets/images/audio processing.png",
    };
  },
};
</script>

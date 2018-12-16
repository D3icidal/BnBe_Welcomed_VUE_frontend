<template>
  <div class="home">
    <div class="parallax bg-white overlay overlay-default overlay-op-6 text-center px-3 py-5 py-lg-10 flex-valign" data-bg-img="assets/img/index_background1.jpg" data-css='{"background-position": "center bottom","background-attachment": "fixed"}'data-toggle="full-height">
      <h2 class="display-4 text-white" data-animate="fadeIn" data-animate-delay="0.5">
        BnBe <span class="font-weight-bold">Welcomed</span>
      </h2>
      <h3 class="text-grey font-weight-normal" data-animate="fadeIn" data-animate-delay="1.75">
        Your Guide To A Happy Home
      </h3>
      <hr class="hr hr-lg w-20 mx-auto my-4" data-animate="fadeIn" data-animate-delay="1" />
      <div> <a href="#about" class="btn btn-dark btn-rounded btn-lg py-lg-3 px-lg-5" data-toggle="scroll-link" data-animate="fadeIn" data-animate-delay="1.50">Find Out More</a>
    </div>
    </div>  

  </div>
</template>

<style>
  .parallax { 

    /* Set a specific height */
    height: 500px; 

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>

<script>
export default {
  data: function() {
    return {
      message: "BnBe Welcomed"
      //TODO add carasol here, login/signup links, how it works.
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};
</script>
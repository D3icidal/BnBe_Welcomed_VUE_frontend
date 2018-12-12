<template>
  <!-- Show PAGE FOR A USERS HOMES -->
  <!--
    <main class="GuidePage">
      <div class="m-5">
        <div class="container col-md-offset-2">
          <div class="row mb-5 pt-3"><h1>Welcome to The Teahouse</h1></div>
          <div class="row">
            <div class="sidebar-section col col-2 d-none d-sm-block">
              <div class="row"><a href="category.html">Kitchen</a></div>
              <div class="row"><a href="category.html">Bathroom</a></div>
            </div>

            <div class="col col-md-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  -->
  <!--
    ======== @Region: Standout (Working but saved for 'nice to haves"') ========
  -->
  <div id="details">
    <div
      data-toggle="full-height"
      class="text-center overlay overlay-op-2 p-3 d-lg-flex align-items-lg-center"
      data-bg-img="assets/img/index-realestate-single/standout.jpg"
      data-css="{&quot;background-position&quot;: &quot;center center&quot;}"
    >
      <div class="p-4 p-lg-6 bg-white container">
        <h2
          class="font-weight-normal mb-2 text-green-bright font-md-x3 font-sm-x2"
        >
          Luxury Villa in Heliopolis
        </h2>
        <h4
          class="font-weight-light text-dark op-9 mb-lg-4 mb-sm-4 font-md-x2 font-sm-x1"
        >
          26300 Pacific Coast, CA 32300
        </h4>
        <div class="text-dark op-9 mb-4">
          Viderer erroribus scribentur id ius. Nec at autem scripserit, meicase
          nonumy eu. Eum in labore invenire, idque expetenda vix ea. Ex duo
          novum antiopam, case reque eripuit in vel. Nam ancillae contentiones
          no. Veniam postea labitur qui et, in esse labore reprimique sit.
        </div>
        <div class="row row grid-inner-borders-dotted">
          <div
            class="p-3 col-6 col-md-4"
            data-animate="fadeIn"
            data-animate-delay="0.3"
          >
            <div class=""><i class="la la-arrows-h icon-3x text-blue"></i></div>
            <h4 class="text-dark op-9">Square feet</h4>
            <h4 class="text-dark op-9">3200</h4>
          </div>
          <div
            class="p-3 col-6 col-md-4"
            data-animate="fadeIn"
            data-animate-delay="0.2"
          >
            <i class="la la-bed icon-3x text-blue"></i>
            <h4 class="text-dark op-9">Badrooms</h4>
            <h4 class="text-dark op-9">3</h4>
          </div>
          <div
            class="p-3 col-6 col-md-4"
            data-animate="fadeIn"
            data-animate-delay="0.1"
          >
            <i class="la la-archive icon-3x text-blue"></i>
            <h4 class="text-dark op-9">Bathroom</h4>
            <h4 class="text-dark op-9">3</h4>
          </div>
          <div
            class="p-3 col-6 col-md-4"
            data-animate="fadeIn"
            data-animate-delay="0.4"
          >
            <i class="la la-calendar icon-3x text-blue"></i>
            <h4 class="text-dark op-9">Year build</h4>
            <h4 class="text-dark op-9">2015</h4>
          </div>
          <div
            class="p-3 col-6 col-md-4"
            data-animate="fadeIn"
            data-animate-delay="0.5"
          >
            <i class="la la-car icon-3x text-blue"></i>
            <h4 class="text-dark op-9">Car parking</h4>
            <h4 class="text-dark op-9">2</h4>
          </div>
          <div
            class="p-3 col-6 col-md-4"
            data-animate="fadeIn"
            data-animate-delay="0.6"
          >
            <i class="la la-pagelines icon-3x text-blue"></i>
            <h4 class="text-dark op-9">Large Garden</h4>
            <h4 class="text-dark op-9">1</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Standout -->
</template>

<style></style>

<script>
// var axios = require('axios');
import axios from "axios";
export default {
  data: function() {
    return {
      message: "HomesShow.vue Show page for one home - host view",
      home: {}
    };
  },
  created: function() {
    axios
      .get("http://localhost:3000/guides/" + this.$route.params.booking_code)
      .then(response => {
        console.log(response.data);
        this.home = response.data;
      });
  },
  methods: {},
  computed: {}
};
</script>

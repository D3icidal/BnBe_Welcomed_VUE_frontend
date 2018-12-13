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
    ======== @Region: Standout  ========
  -->
  <main class="GuideShow">
    <div class="content">
      <div id="details">
        <div
          data-toggle="full-height"
          class="text-center parallax overlay overlay-op-2 p-6 d-lg-flex align-items-lg-center"
          data-bg-img="assets/img/home2.jpeg"
          data-css="{&quot;background-position&quot;: &quot;center center&quot;}"
        >
          <div class="p-4 p-lg-6 bg-white container">
            <h2 class="font-weight-normal mb-2 text-green-bright font-md-x3 font-sm-x2" >
              {{ home.details.name }} in {{ home.details.state }}
            </h2>
            <h4
              class="font-weight-light text-dark op-9 mb-lg-4 mb-sm-4 font-md-x2 font-sm-x1"
            >
              {{ home.details.street_address }}
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
                <!-- {{Home.details.square_feet}}</h4> -->
              </div>
              <div
                class="p-3 col-6 col-md-4"
                data-animate="fadeIn"
                data-animate-delay="0.2"
              >
                <i class="la la-bed icon-3x text-blue"></i>
                <h4 class="text-dark op-9">Badrooms</h4>
                <h4 class="text-dark op-9">{{ home.details.bedrooms }}</h4>
              </div>
              <div
                class="p-3 col-6 col-md-4"
                data-animate="fadeIn"
                data-animate-delay="0.1"
              >
                <i class="la la-archive icon-3x text-blue"></i>
                <h4 class="text-dark op-9">Bathrooms</h4>
                <h4 class="text-dark op-9">{{ home.details.bathrooms }}</h4>
              </div>
              <div
                class="p-3 col-6 col-md-4"
                data-animate="fadeIn"
                data-animate-delay="0.4"
              >
                <i class="la icon-3x text-blue" :class="home.amenities[0].icon_url"></i>
                <h4 class="text-dark op-9">{{home.amenities[0].name}}</h4>
              </div>
              <div
                class="p-3 col-6 col-md-4"
                data-animate="fadeIn"
                data-animate-delay="0.5"
              >
                <i class="la icon-3x text-blue" :class="home.amenities[1].icon_url"></i>
                <h4 class="text-dark op-9">{{home.amenities[1].name}}</h4>
              </div>
              <div
                class="p-3 col-6 col-md-4"
                data-animate="fadeIn"
                data-animate-delay="0.6"
              >
                <i class="la icon-3x text-blue" :class="home.amenities[2].icon_url"></i>
                <h4 class="text-dark op-9">{{home.amenities[2].name}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="contaier mx-10 my-8" > 
        <h2 class="title-divider">
          <span>Guide:</span><span class="font-weight-normal">Features</span>
        </h2>
        <br>
        <div class="row"> <!-- Guides Body (Sidebar and features/amenities) -->
            <div class="col-md-3"> <!-- sidebar -->
              sidebar goes here
            </div>
            <!-- Guide Content -->
            <div class="col-md-9">
              <div class="card card-body mb-5" v-for="amenity in home.amenities">
                <h4 class="card-title">
                  {{amenity.name}}
                </h4>
                <img class="card-img-top img-fluid" src="assets/img/backgrounds/picjumbo.com_P1010041.jpg" alt="Card image cap">
                <p class="card-text">{{amenity.instructions}}</p>
                <br />
                <p class="card-text">Location: {{amenity.location}}</p>
              </div>
            </div>         
        </div>
      </div>
    </div>    
  </main>
</template>
<!--
  bathrooms
  bedrooms
  comment_id
  created_at
  guest_password
  id
  is_active
  name
  state
  street_address
  updated_at
  user_id
  wifi_password
  zipcode
-->

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

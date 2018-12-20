<template>
  <!-- Show PAGE FOR A USERS HOMES -->
  <!-- IGNORE THIS PAGE FOR NOW - WET CODE, work on GUIDES SHOW  -->
  <main class="GuideShow">
    <div>
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
                <h4 class="text-dark op-9">Bedrooms</h4>
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



      <!-- Guide Content -->
      <div id="guide-content" class="container"> <!-- Should take up most of the width now, will display menu on left 1/4 and content on right 3/4 -->
        <div id="amenities" class="row"> <!-- #TODO make amenities only 3/4 col -->
          <div class="col-sm-4"> <!-- Left Menu -->
             
          </div>
          <div class="col-sm-8">
            <div class="card card-body" v-for="amenity in home.amenities">
              <!-- <div class="card card-body"> -->
                <h4 class="card-title">
                  {{amenity.name}}
                </h4>
                <img class="card-img-top img-fluid" src="assets/img/backgrounds/picjumbo.com_P1010041.jpg" alt="Card image cap">
                <p class="card-text">{{amenity.instructions}}</p>
                <br />
                <p class="card-text">Where to find me: {{amenity.location}}</p>
              <!-- </div> -->
            </div>          
          </div>
          <div class="col-sm-2">

          </div>
        </div>
      </div>
      <!-- END Standout -->      
    </div>    
  </main>
  <!-- <div class="home">
    <h1>{{ message }}</h1> <br>
    <div class="homeShow">
      <br>
      <p>Name: {{home.name}} </p>
      <p>Bedrooms: {{home.bedrooms}}  |  
      Bathrooms: {{home.bathrooms}}<br>
      State: {{home.state}}<br>
      ID: {{home.id}}</p><br>
      <br> 
    </div>
  </div>   -->
</template>

<style>
</style>

<script>
  // var axios = require('axios');
  import axios from 'axios'
  export default {
    data: function() {
      return {
        message: "HomesShow.vue Show page for one home - host view",
        home: {}
      };
    },
    created: function() {
      axios.get('http://localhost:3000/homes/' + this.$route.params.id).then(response => {
        console.log(response.data);
        this.home = response.data;
      });
    },
    methods: {},
    computed: {}
  };
</script>
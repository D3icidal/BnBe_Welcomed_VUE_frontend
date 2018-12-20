<template>
  <!-- Show a GUIDE PAGE FOR A USERS HOMES -->
  <main class="GuideShow">
    <div class="content">
      <!-- ======== @Region: Details/Standout  ======== -->
      <div id="details">
        <div
          data-toggle="full-height"
          class="text-center parallax overlay overlay-op-2 p-6 d-lg-flex align-items-lg-center"
          data-bg-img="assets/img/home2.jpeg"
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
              Viderer erroribus scribentur id ius. Nec at autem scripserit,
              meicase nonumy eu. Eum in labore invenire, idque expetenda vix ea.
              Ex duo novum antiopam, case reque eripuit in vel. Nam ancillae
              contentiones no. Veniam postea labitur qui et, in esse labore
              reprimique sit.
            </div>
            <div class="row row grid-inner-borders-dotted">
              <div
                class="p-3 col-6 col-md-4"
                data-animate="fadeIn"
                data-animate-delay="0.3"
              >
                <div class="">
                  <i class="la la-arrows-h icon-3x text-blue"></i>
                </div>
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
                <i
                  class="la icon-3x text-blue"
                  :class="home.amenities[0].icon_url"
                ></i>
                <h4 class="text-dark op-9">{{ home.amenities[0].name }}</h4>
              </div>
              <div
                class="p-3 col-6 col-md-4"
                data-animate="fadeIn"
                data-animate-delay="0.5"
              >
                <i
                  class="la icon-3x text-blue"
                  :class="home.amenities[1].icon_url"
                ></i>
                <h4 class="text-dark op-9">{{ home.amenities[1].name }}</h4>
              </div>
              <div
                class="p-3 col-6 col-md-4"
                data-animate="fadeIn"
                data-animate-delay="0.6"
              >
                <i
                  class="la icon-3x text-blue"
                  :class="home.amenities[2].icon_url"
                ></i>
                <h4 class="text-dark op-9">{{ home.amenities[2].name }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--
        ======== @Region: Guide Pages and Content  ========
        TODO get amenity icons to vertically align
      -->
      <div class="contaier mx-10 my-8">
        <h2 class="title-divider">
          <span>Guide:</span><span class="font-weight-normal">Features</span>
        </h2>
        <br />
        <div class="row">
          <!-- Guides Body (Sidebar and features/amenities) -->
          <div class="col-md-3">
            <!-- sidebar -->
            sidebar goes here
            <br />
            <hr />
            <br />
            <h5>Weather</h5>
            <!-- <img :src="home.weather[0].iconLink" class="weatherIcon"> -->
            <p>              
            <span class="weather mt-7">Today: {{home.weather[0].highTemperature}}&deg {{home.weather[0].description}}</span><br>
            <span class="weather">{{home.weather[1].weekday}}: {{home.weather[1].highTemperature}}&deg {{home.weather[1].description}}</span><br>
            <!-- <span class="weather">{{home.weather[2].weekday}}: {{home.weather[2].highTemperature}}&deg {{home.weather[2].description}}</span><br> -->
            </p>

          </div>
          <!--
            Guide Content

            "Welcome"
            "WiFi"
            "Parking"
            "Nearby Attractions"
            "Contact Me"
            "Emergencies"
            "Checkout"
          -->
          <div class="col-md-9">
            <!-- Guide Content / SECTIONS -->
            <!-- <div v-for="section in filterBy(sections, 'Welcome', 'name')">
              <span class="welcome"> 
                <div class="card mr-md-10 mb-6">
                  <img
                    class="card-img-top img-fluid"
                    src="https://via.placeholder.com/600x400amenity.icon_url"
                    alt=""
                  />
                  <div class="card-body px-2">
                    <h4 class="card-title text-center">Welcome to my home</h4>
                    <p class="card-text">
                      {{section.content}}
                    </p>
                  </div>
                  <div class="card-footer w-100 text-muted">
                    Nice phrase or saying
                  </div>
                </div>
              </span>
            </div> -->

            <span class="unused"> <!-- unused SECTION --> </span>

            <span class="amenities">
              <!-- AMENITIES SECTION -->
              <div class="card mr-md-10 mb-6" v-for="amenity in home.amenities">
                <!-- EACH AMENITIY -->
                <div class="row no-gutters">
                  <div class="col-auto card-amenity-image">
                    <img
                      class="amenity-img img-fluid d-block my-auto"
                      :src="amenity.icon_url"
                      :alt="amenity.name"
                    />
                  </div>
                  <div class="col my-5">
                    <div class="card-block px-2">
                      <h4 class="card-title">{{ amenity.name }}</h4>
                      <p class="card-text">{{ amenity.instructions }}</p>
                    </div>
                  </div>
                  <div class="card-footer w-100 text-muted">
                    Location: {{ amenity.location }}
                  </div>
                </div>
              </div>
            </span>
          </div>
          <!--
            <div class="col-md-9">
            <div class="card card-body mb-5" v-for="amenity in home.amenities">
              <h4 class="card-title">
                {{amenity.name}}
              </h4>
              <img class="amenity-img" :src="amenity.icon_url" :alt="amenity.name">
              <p class="card-text">{{amenity.instructions}}</p>
              <br />
              <p class="card-text">Location: {{amenity.location}}</p>
            </div>
          -->
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

.card-amenity-image {
  min-width: 100px;
  min-height: 200px;
  max-width: 400px;
  max-height: 400px;
  /*max-width: 600px;*/
  /*height: auto;*/
  /*height: 600px;*/
}

.amenity-img {
  display: block;
  margin: auto;
}

.weather{
  text-align: right;  
  margin-top: 10px;
}
</style>

<script>
// var axios = require('axios');
import axios from "axios";
export default {
  data: function() {
    return {
      message: "",
      home: {},
      sections: {}
    };
  },
  created: function() {
    axios //Fetch guide for home
      .get("http://localhost:3000/guides/" + this.$route.params.booking_code)
      .then(response => {
        console.log(response.data);
        this.home = response.data;
      });
    axios //fetch sections for home
      .get("http://localhost:3000/sections")
      .then(response => {
        console.log(response.data);
        this.sections = response.data;
      });

  },
  methods: {},
  computed: {}
};
</script>

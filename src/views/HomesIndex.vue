<template>
  <!--
    INDEX PAGE FOR ALL OF A USERS HOMES - If they have multiple (otherwise sent to single show)
  -->
  <!--
    <div class="home">
      <h1>{{ message }}</h1>
      <br />
      <div v-for="home in homes">
        <br />
        <p>Name: {{ home.name }}</p>
        <p>
          Bedrooms: {{ home.bedrooms }} | Bathrooms: {{ home.bathrooms }}<br />
          State: {{ home.state }}<br />
          ID: {{ home.id }}
          <br>
          <a v-bind:href="'/#/homes/' + home.id + '/edit'" class="btn btn-primary">Edit</a> |
          <a v-bind:href="'/#/amenities/' + home.id" class="btn btn-primary">Amenities</a>
        </p>
        <br />
        <br />
      </div>
    </div>
  -->
  <div id="content" class="py-0">
    <div class="container-fluid px-6 py-5 px-lg-6 py-lg-8 bg-grey">
      <div v-for="home in homes">
        <article
          class="row mb-5 mt-8 mx-6 center"
          data-animate="fadeIn"
          data-animate-delay="2"
        >
          <div class="col-md-10 order-md-2 px-5">
            <p class="text-sm text-muted mb-0 text-slab">
              <time datetime="2018/04/03">{{ home.create_date }}</time>
            </p>
            <!-- <a :href="'/job/' + r.id"> -->
            <!-- Home Title -->
            <h2 class="text-slab">
              <a :href="'/#/homes/' + home.id" :title="home.name">{{
                home.name
              }}</a>
            </h2>
            <!-- #TODO image url, then maybe carosel or paralax? -->
            <a
              :href="'/#/homes/' + home.id"
              title="Go To This Home"
              class="d-block"
            >
              

            <!--  CAROUSEL - TODO vertical images with blurred letterbox sides -->            
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="2500">
              <div class="carousel-inner">
                  <div v-for="(image, index) in home.images" :class="{ active: index==0 }" class="carousel-item">
                   <img class="carousel-image d-block img-padded rounded" :src="image.url" alt="">            
                 </div>
             </div>
             <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon img-padded" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon img-padded" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>



            </a>
          </div>
          <!--
            Large: left side view #TODO make available in small or get moved to top
          -->
          <div class="col-md-2 order-md-1 text-md-right">
            <!-- Home small round badge / image / icon -->
            <a :href="'/#/homes/' + home.id" :title="home.name">
              <img
                :src="home.images[0].url"
                :alt="home.name"
                class="rounded-circle img-padded"
                width="100"
                height="100"
              />
            </a>
            <h5 class="text-slab">
              <a :href="'/#/homes/' + home.id">{{ home.name }}</a>
            </h5>
            <br />
            <p class="text-s mb-2">Bedrooms: {{ home.bedrooms }}</p>
            <p class="text-s mb-2">Bathrooms: {{ home.bathrooms }}</p>
            <p class="text-s mb-2">ID: {{ home.id }}</p>
            <hr />
            <h6 class="text-slab">
              Home Address <br />
              {{ home.street_address }}
            </h6>
            <hr />
            <h6 class="text-slab">Guest Guide Code</h6>
            <a :href="'/#/guides/' + home.guest_password">{{
              home.guest_password
            }}</a>
            <!-- <label for="change-guide-input">Change Code</label> -->
            <form v-on:submit.prevent="submit(home);">
              <input
                type="text"
                v-model="home.guest_password_new"
                placeholder="Change Code?"
                class="form-control text-center mt-4"
              />

              <input
                type="submit"
                class="btn btn-primary col-sm-12 my-2"
                value="Submit"
              />
            </form>
            <li class="text-danger" v-for="error in home.errors">
              {{ error }}
            </li>
            <hr />
            <!--
              <div class="container-fluid">
              <div class="row">
            -->
            <a
              v-bind:href="'/#/homes/' + home.id + '/edit'"
              class="btn btn-primary my-2 col-sm-12"
              >Edit</a
            >
            <br />
            <a
              v-bind:href="'/#/amenities/' + home.id"
              class="btn btn-primary my-2 shadow col-sm-12"
              >Amenities</a
            >
            <!--
              </div>
              </div>
            -->
            <hr />
          </div>
        </article>
      </div>
    </div>
    <a href="https://icons8.com/icon/48655/cafe">Icons by Icons8</a>
  </div>
</template>

<style>
  .carousel {    
    width:  900px !important; 
    height: 600px !important;
  }
  .carousel-image {
    margin: auto;
    height: 600px;
    /*overflow-y: hidden;*/
    /*-ms-interpolation-mode: bicubic;*/
  }

</style>

<script>
// var axios = require('axios');
import axios from "axios";
export default {
  data: function() {
    return {
      message: "",
      homes: [], //#homes array for DOM
      // errors: [],
      code: "",
      slide: 0,
      sliding: null
    };
  },
  beforeCreate: function() {    
  },
  created: function() {    
    axios.get("http://localhost:3000/homes")
      .then(response => {
        console.log(response.data);
        this.homes = response.data;
        console.log("homes: " + this.homes);
        console.log("homes.length: " + this.homes.length);
        console.log("thishomes.length: " + this.homes.length);
        if (this.homes.length === 1) {
          this.$router.push("/homes/" + this.homes[0].id );
        }
        if (this.homes.length === 0 || this.homes === null ) {
          this.$router.push("/homes/new");
        }
        if (this.homes.length > 1) {
          this.$router.push("/homes");
        }
      });

  },
  methods: {
    submit: function(homeObject) {
      console.log(homeObject);
      var params = {
        code: homeObject.guest_password_new
      };
      axios
        .patch("http://localhost:3000/guides/login/" + homeObject.id, params)
        .then(response => {
          this.$router.push("/guides/login"); //#TODO No need to redirect, just refresh data for homes to display new updated password (backend should return json "update")
          console.log(response.data.messages);
        })
        .catch(error => {
          homeObject.errors = [];
          if (error.response) {
            console.log("errors.response:" + error.response.data);
            // The request was made and the server responded with a status code other than 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            if (error.response.data.messages) {
              homeObject.errors.push(error.response.data.messages); //#TODO clean up errors
            } else {
              homeObject.errors.push(error.response.data);
            }
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
          console.log(error.response.data.errors);
          // this.errors.push(error.response.data.errors);
        });
    },

    onSlideStart (slide) {
      this.sliding = true
    },

    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  computed: {}
};
</script>

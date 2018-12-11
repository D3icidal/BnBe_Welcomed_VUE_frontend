<template>
  <!-- INDEX PAGE FOR ALL OF A USERS HOMES - If they have multiple (otherwise sent to single show) -->
<!--   <div class="home">
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
  </div> --> 
  <div id="content" class="py-0 ">
    <div class="container-fluid px-3 py-5 px-lg-4 py-lg-6 bg-grey">
      <div v-for="home in homes">
        <article class="row mb-5 pr-xl-6" data-animate="fadeIn" data-animate-delay="2">
          <div class="col-md-10 order-md-2 pr-xl-10">
            <!-- Post date & mobile author(removed)-->
            <p class="text-sm text-muted mb-0 text-slab">
              <time datetime="2018/04/03">Apr 3, 2018</time>
            </p>
            <!-- Home Title -->
            <h2 class="text-slab">
              <a :href="home.name" :title="home.name">{{home.name}}</a>
            </h2>
            <!-- #TODO image url, then maybe carosel or paralax? -->
            <a href="demo-travel-blog-post.html" title="View post" class="d-block">
              <img src="assets/img/home2.jpeg" alt="alt" class="img-fluid img-padded rounded" />
            </a>
          </div>
            <!-- Large: left side view #TODO make available in small or get moved to top -->
          <div class="col-md-2 order-md-1 text-md-right">
            <!-- Home small round badge / image / icon -->
            <a :href="home.name" :title="home.name">
              <img src="home3.jpeg" :alt="home.name" class="rounded-circle img-padded" width="80" height="80">
            </a>
            <h5 class="text-slab">
              <a :href="home.name">{{ home.name }}</a>
            </h5>
            <br>
            <p class="text-s mb-2">Bedrooms: {{ home.bedrooms }}</p>
            <p class="text-s mb-2">Bathrooms: {{ home.bathrooms }}</p>
            <p class="text-s mb-2">ID: {{ home.id }}</p>
            <hr />
            <h5 class="text-slab">
              home address:
              <br>
              {{ home.street_address }}              
            </h5>
            <hr />
            <a v-bind:href="'/#/homes/' + home.id + '/edit'" class="btn btn-primary">Edit</a>
            <br> 
            <a v-bind:href="'/#/amenities/' + home.id" class="btn btn-primary">Amenities</a>
          </div>
          
        </article>
      </div>      
    </div>
  </div>
</template>

<style></style>

<script>
// var axios = require('axios');
import axios from "axios";
export default {
  data: function() {
    return {
      message: "",
      homes: [] //#homes array for DOM
    };
  },
  created: function() {
    axios.get("http://localhost:3000/homes").then(response => {
      console.log(response.data);
      this.homes = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>

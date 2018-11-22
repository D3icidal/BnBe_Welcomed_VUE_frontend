<template>
  <!-- INDEX PAGE FOR ALL OF A USERS HOMES -->
  <div class="home">
    <h1>{{ message }}</h1> <br>
    <div v-for="home in homes">
      <br>
      <p>Name: {{home.name}} </p>
      <p>Bedrooms: {{home.bedrooms}}  |  
      Bathrooms: {{home.bathrooms}}<br>
      State: {{home.state}}</p><br>
      <br> 
      <!-- ADD BUTTON TO GO TO SHOW TODO -->
    </div>
  </div>
  
</template>

<style>
</style>

<script>
  // var axios = require('axios');
  import axios from 'axios'
  export default {
    data: function() {
      return {
        message: "Homes.vue INDEX PAGE FOR ALL OF A USERS HOMES",
        homes: [] //#homes array for DOM
      };
    },
    created: function() {
      axios.get('http://localhost:3000/homes').then(response => {
        console.log(response.data);
        this.homes = response.data;
      });
    },
    methods: {},
    computed: {}
  };
</script>
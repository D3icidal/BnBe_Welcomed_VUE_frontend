<template>
  <!-- INDEX PAGE FOR ALL OF A USERS HOMES -->
  <div class="home">
    <h1>{{ message }}</h1> <br>
    <div class="homeShow">
      <br>
      <p>Name: {{home.name}} </p>
      <p>Bedrooms: {{home.bedrooms}}  |  
      Bathrooms: {{home.bathrooms}}<br>
      State: {{home.state}}</p><br>
      <br> 
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
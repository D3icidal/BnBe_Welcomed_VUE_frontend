<template>
  <!-- Edit PAGE FOR A USERS HOMES -->
  <div class="home">
    <h1>{{ message }}</h1> <br>
    <div class="homeEdit">      
      <form v-on:submit.prevent="submit();">
            <h1>Edit home</h1>
            <div class="form-group">
              <label>{{ home.name }}</label>
              <input type="text" class="form-control" v-model="home.name" />
            </div>
            <div class="form-group">
              <label>street_address:</label>
              <input type="text" class="form-control" v-model="home.street_address" />
            </div>
            <div class="form-group">
              <label>bedrooms:</label>
              <input type="text" class="form-control" v-model="home.bedrooms" />
            </div>
            <div class="form-group">
              <label>bathrooms:</label>
              <input type="text" class="form-control" v-model="home.bathrooms" />
            </div>
            <input type="submit" class="btn btn-primary" value="Submit" />
          </form>
    </div>
  </div>  
</template>

<style>
</style>
<!-- 
home.name
home.street_address
home.bedrooms
home.bathrooms 
-->
<script>
  // var axios = require('axios');
  import axios from 'axios';
  export default {
    data: function() {
      return {
        message: "HomesEdit.vue edit page for one home - host view",
        home: {},
        errors: {}
      };
    },
    created: function() {
      axios.get('http://localhost:3000/homes/' + this.$route.params.id).then(response => {
        console.log(response.data);
        this.home = response.data;
      });
    },
    methods: {
      submit: function() {
        var params = {
          name: this.home.name,
          street_address: this.home.street_address,
          bedrooms: this.home.bedrooms,
          bathrooms: this.home.bathrooms
        };
        axios
          .patch("http://localhost:3000/homes/" + this.$route.params.id, params)
          .then(response => {
            this.$router.push("/");
          });
          // .catch(error => {
          //   this.errors = error.response.data.errors;
          // });
      }
    },
    computed: {}
  };
</script>
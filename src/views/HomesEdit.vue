<template>
  <!-- Edit PAGE FOR A USERS HOMES -->
  <div class="home">
    <br>
    <div class="homeEdit">      
      <div class="row">      
        <div class="col-8 my-6 mx-8 flex">  
        <form v-on:submit.prevent="submit();">
              <h1>Edit your home details here</h1>
              <div class="form-group">
                <label>Name:{{ home.name }}</label>
                <input type="text" class="form-control" v-model="home.name" :placeholder="home.details.name"/>
              </div>
              <div class="form-group">
                <label>street_address:</label>
                <input type="text" class="form-control" v-model="home.street_address" :placeholder="home.details.street_address"/>
              </div>
              <span class="row">
                <div class="form-group col-3">
                  <label>bedrooms:</label>
                  <input type="text" class="form-control" v-model="home.bedrooms" :placeholder="home.details.bedrooms"/>
                </div>
                <div class="form-group col-3">
                  <label>bathrooms:</label>
                  <input type="text" class="form-control" v-model="home.bathrooms" :placeholder="home.details.bathrooms" />
                </div>
              </span>
              <input type="submit" class="btn btn-primary" value="Submit" />
            </form>
          </div>
        </div>
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
      axios.get('http://localhost:3000/homes/' + this.$route.params.id)
        .then(response => {
          console.log(response.data);
          this.home = response.data;
          console.log("this.home: " + this.home)
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
            this.$router.push("/#/homes");
          });
          // .catch(error => {
          //   this.errors = error.response.data.errors;
          // });
      }
    },
    computed: {}
  };
</script>
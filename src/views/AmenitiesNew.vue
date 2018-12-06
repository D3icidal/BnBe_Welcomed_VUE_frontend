<template>
  <div class="create">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Enter a new amenity!</h1>
        input all details below
        <ul>
          <li class="text-warning" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label> 
          <input type="text" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label>location:</label> 
          <input type="text" class="form-control" v-model="location">
        </div>
        <div class="form-group">
          <label>instructions:</label>
          <input type="text" class="form-control" v-model="instructions">
        </div>
        <!-- <div class="form-group">
          <label>home_id:</label>
          <input type="number" class="form-control" v-model="home_id">
        </div>   -->     
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      location: "",
      instructions: "",
      home_id: "",
      errors: [""],
    };
  },
  created: function() {
    console.log('route param');
    console.log(this.$route.params.id);
    this.home_id = this.$route.params.id;
  },
  methods: {
    submit: function() {
      var params = {        
        name: this.name,
        instructions: this.instructions,
        home_id: this.home_id,
        location: this.location,
      };
      axios
        .post("http://localhost:3000/amenities", params)
        .then(response => {
          this.$router.push("/homes"); //TODO maybe redirect to show instead of index?
        })
        .catch(error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx            
            if (error.response.status === 401) {
              console.log("testttttttttttt");
              this.errors.push(error.response.status);
              console.log(this.errors);
            }
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
          console.log('inside amenitysnew.vue - error caught');
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>

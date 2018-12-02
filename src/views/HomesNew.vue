<template>
  <div class="create">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Enter a new home!</h1>
        input all details below
        <ul>
          <li class="text-warning" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label> 
          <input type="text" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label>Address:</label> 
          <input type="text" class="form-control" v-model="address">
        </div>
        <div class="form-group">
          <label>Bedrooms:</label>
          <input type="number" class="form-control" v-model="bedrooms">
        </div>
        <div class="form-group">
          <label>Bathrooms:</label>
          <input type="number" class="form-control" v-model="bathrooms">
        </div>       
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
      address: "",
      bedrooms: "",
      bathrooms: "",
      errors: ["test"],
    };
  },
  methods: {
    submit: function() {
      var params = {        
        name: this.name,
        bedrooms: this.bedrooms,
        bathrooms: this.bathrooms,
        street_address: this.address,
      };
      axios
        .post("http://localhost:3000/homes", params)
        .then(response => {
          this.$router.push("/homes"); //TODO maybe redirect to show instead of index?
        })
        .catch(error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx            
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            if (error.response.status === 401) {
              console.log("testttttttttttt");
              this.errors.push(error.response.status);
              this.errors.push("test222");
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
          console.log('inside homesnew.vue - error caught');
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>

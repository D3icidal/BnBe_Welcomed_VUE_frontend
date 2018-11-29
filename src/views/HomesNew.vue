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
          <input type="bedrooms" class="form-control" v-model="bedrooms">
        </div>
        <div class="form-group">
          <label>Bathrooms:</label>
          <input type="bathrooms" class="form-control" v-model="bathrooms">
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
      errors: []
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
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
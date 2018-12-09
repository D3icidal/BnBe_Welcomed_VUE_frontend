<!-- Guest login page to see home -->
<template>
  <div class="login">
    <div class="container">
      <form v-on:submit.prevent="submit();">
        <h1>Please enter the login code for the home</h1>
        Don't worry, capitallization does not matter.
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Home Code</label> <br />
          <input type="text" class="form-control" v-model="code" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // template: "#login-page",
  data: function() {
    return {
      code: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        code: this.code
      };
      axios
        .get("http://localhost:3000/guides/" + this.code)
        .then(response => {
          this.$router.push("http://localhost:3000/guides/" + this.code);
        })
        .catch(error => {
          if (error.response) {
            console.log("errors.response:" + error.response.data);
            // The request was made and the server responded with a status code other than 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            this.errors.push(error.response.data);            
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
    }
  }
};
</script>

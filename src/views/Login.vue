<template>
  <div class="login">
    <!-- <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div> -->
    <div class="container">
        <!-- Login form -->
        <form v-on:submit.prevent="submit()" class="form-login form-wrapper form-narrow">
          <h3 class="title-divider">
            <span>Login</span> 
            <small class="mt-4">Not signed up? <a href="/#/signup">Sign up here</a>.</small>
          </h3>
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
          <div class="form-group">
            <label class="sr-only" for="login-email-page">Email</label>
            <input type="email" id="login-email-page" class="form-control email" placeholder="Email" v-model="email">
          </div>
          <div class="form-group">
            <label class="sr-only" for="login-password-page">Password</label>
            <input type="password" id="login-password-page" v-model="password" class="form-control password" placeholder="Password" >
          </div>
          <input type="submit" class="btn btn-primary" value="Login">
          <!-- <button type="button" class="btn btn-primary">Login</button> -->
          <!-- |  -->
          <!-- <small><a href="#">Forgotten Password?</a></small> -->
          <!-- #TODO add "forgot password?" with a contact us page -->
        </form>
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password        
      };
      axios
        .post("http://localhost:3000/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/homes");
        })
        .catch(error => {    
          this.errors = []; //clear error log      
          this.errors.push(error.response.status + ": " + error.response.data);
          this.password = "";
        });
    }
  }
};
</script>

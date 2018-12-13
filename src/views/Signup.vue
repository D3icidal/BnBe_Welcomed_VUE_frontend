<template>
  <div class="signup">
    <div class="container">
        <!-- Sign Up form -->
        <form class="form-login form-wrapper form-medium" role="form" v-on:submit.prevent="submit()">
          <h3 class="title-divider">
            <span>Sign Up</span> 
            <small class="mt-4">Already signed up? <a href="/#/login">Login here</a>.</small>
          </h3>          
          <hr />
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
          <h5>
            Account Information
          </h5>
          <div class="form-group">
            <label class="sr-only" for="signup-first-name-page">First Name</label>
            <input type="text" class="form-control" v-model="first_name" id="signup-first-name-page" placeholder="First name">
          </div>
          <div class="form-group">
            <label class="sr-only" for="signup-last-name-page">Last Name</label>
            <input type="text" class="form-control" v-model="last_name" id="signup-last-name-page" placeholder="Last name">
          </div>
          <div class="form-group">
            <label class="sr-only" for="signup-email-page">Email address</label>
            <input type="email" class="form-control" v-model="email" id="signup-email-page" placeholder="Email address">
          </div>
          <div class="form-group">
            <label class="sr-only" for="signup-password-page">Password</label>
            <input type="password" class="form-control" v-model="password" id="signup-password-page" placeholder="Password">
          </div>
          <div class="form-group">
            <label class="sr-only" for="signup-password-page">Password Confirmation</label>
            <input type="password" class="form-control" v-model="passwordConfirmation" id="signup-password-page" placeholder="Password">
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" value="term" class="form-check-input">
              I agree with the Terms and Conditions. 
            </label>
            <!-- #TODO Make terms and conditions a link to BS terms -->
          </div>
          <hr />
          <!-- #TODO set button class to warning type (yellow) until all fields are filled out -->
          <button class="btn btn-primary" type="submit">Sign up</button>
        <!-- <input type="submit" class="btn btn-primary" value="Submit"> -->
        </form>
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("http://localhost:3000/users", params)
        .then(response => {
          this.$router.push("/#/login");
        })
        .catch(error => {
          this.errors = []; //clear error log      
          this.errors.push(error.response.status + ": " + error.response.data);
          this.errors.push(error.reponse.data.errors);
        });
    }
  }
};
</script>
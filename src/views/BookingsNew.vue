// This page allows host to make a new booking - creates db
<template>
  <div class="create">
    <div class="container">
      <form v-on:submit.prevent="submit();">
        <h1>New booking for this home:</h1>
        input all details below
        <ul>
          <li class="text-warning" v-for="error in errors">
            {{ error }}<br />
          </li>
        </ul>
        <p>Home id: {{ home_id }}</p>
        <!--
          <div class="form-group">
            <label>Home: TODO will be dropbox</label>
            <input type="number" class="form-control" v-model="name" />
          </div>
        -->
        <div class="form-group">
          <label>checkin:</label> (TODO put button for todays date)
          <input type="date" class="form-control" v-model="checkin" />
        </div>
        <div class="form-group">
          <label>checkout:</label>
          <input type="date" class="form-control" v-model="checkout" />
        </div>
        <div class="form-group">
          <label
            >Unqiue code for this booking: TODO make it random hex prefilled in,
            but editable</label
          >
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
  data: function() {
    return {
      home_id: "",
      checkin: "",
      checkout: "",
      code: "",
      errors: ["test-prefilled error"]
    };
  },
  created: function() {
    this.home_id = this.$route.params.home_id;
    console.log(this.home_id);
  },
  methods: {
    submit: function() {
      var params = {
        home_id: this.home_id,
        checkin: this.checkin,
        checkout: this.checkout,
        code: this.code
      };
      axios
        .post("http://localhost:3000/bookings", params)
        .then(response => {
          this.$router.push("/homes"); //TODO maybe send to booking pages/index depending on number of bookings
        })
        .catch(error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            if (error.response.status === 401) {
              console.log("test inside of bookingsnew catch errors 401");
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
            console.log("Error", error.message);
          }
          console.log(error.config);
          console.log("inside homesnew.vue - error caught");
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>

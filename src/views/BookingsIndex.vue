<template>
  <!-- INDEX PAGE FOR ALL OF A USERS Bookings for all of their bookings - If they have multiple (otherwise sent to single show) -->
  <div class="booking">
    <h1>{{ message }}</h1>
    <br />
    <div v-for="booking in bookings">
      <br />
      <p>Home: {{ booking.home_id}} </p>
      Checkin: {{booking.checkin}}<br>
      Checkout: {{booking.checkout}}<br>
      BookingID: {{booking.id}}</p><br>
        <!-- go to the show page -->
        <br><a v-bind:href="'/#/bookings/' + booking.id + '/edit'" class="btn btn-primary">Edit</a>
      </p>
      <br />
      <br />
    </div>
  </div>
</template>

<style></style>

<script>
// var axios = require('axios');
import axios from "axios";
export default {
  data: function() {
    return {
      message: "BookingsIndex.vue INDEX PAGE FOR ALL OF A USERS Bookings",
      bookings: [] //#bookings array for DOM
    };
  },
  created: function() {
    axios.get("http://localhost:3000/bookings").then(response => {
      console.log(response.data);
      this.bookings = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>

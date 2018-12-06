<template>
  <!-- Show PAGE FOR A HOME'S BOOKINGS -->
  <div class="booking">
    <h1>{{ message }}</h1> <br>
    <div class="bookingShow">
      <br>
      <p>Home: {{ booking.home_id}} </p>
      Checkin: {{booking.checkin}}<br>
      Checkout: {{booking.checkout}}<br>
      BookingID: {{booking.id}}</p><br>
      <br> 
    </div>
  </div>  
</template>

<style>
</style>

<script>
  import axios from 'axios';
  export default {
    data: function() {
      return {
        message: "BookingShow.vue show a bookings booking",
        booking: {}
      };
    },
    created: function() {
      axios.get('http://localhost:3000/bookings/' + this.$route.params.id).then(response => {
        console.log(response.data);
        this.booking = response.data;
      });
    },
    methods: {},
    computed: {}
  };
</script>
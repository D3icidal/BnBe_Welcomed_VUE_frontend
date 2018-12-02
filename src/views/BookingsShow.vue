<template>
  <!-- Show PAGE FOR A HOME'S BOOKINGS NOT COMPLETE -->
  <div class="home">
    <h1>{{ message }}</h1> <br>
    <div class="bookingShow">
      <br>
      <p>Home: {{home.name}} </p>
      <p>bookin: {{home.bedrooms}}  |  
      Bathrooms: {{home.bathrooms}}<br>
      State: {{home.state}}<br>
      ID: {{home.id}}</p><br>
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
        message: "BookingShow.vue show a homes booking NOT COMPLTE",
        home: {}
      };
    },
    created: function() {
      axios.get('http://localhost:3000/homes/' + this.$route.params.id).then(response => {
        console.log(response.data);
        this.home = response.data;
      });
    },
    methods: {},
    computed: {}
  };
</script>
<template>
  <!-- Show PAGE FOR A HOME'S Amenities -->
  <div class="amenity">
    <h1>{{ message }}</h1> <br>
    <div v-for="amenity in amenities">
    <!-- <div class="amenityShow"> -->
      <br>
      <p>Home: {{amenity.home_id}} </p>
      {{amenity.name}}<br>
      Location: {{amenity.location}}<br>
      instructions: {{amenity.instructions}}<br>
      icon: {{amenity.icon_url}}<br>
      AmenityID: {{amenity.id}}</p><br>
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
        message: "AmenityShow.vue show a Homes amenity ",
        amenities: {}
      };
    },
    created: function() {
      axios.get('http://localhost:3000/amenities/' + this.$route.params.id).then(response => {
        console.log(response.data);
        this.amenities = response.data;
      });
    },
    methods: {},
    computed: {}
  };
</script>
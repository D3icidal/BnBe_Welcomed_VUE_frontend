<template>
  <!-- INDEX PAGE FOR ALL OF A USERS HOMES - If they have multiple (otherwise sent to single show) -->
  <div class="home">
    <h1>{{ message }}</h1>
    <br />
    <div v-for="home in homes">
      <br />
      <p>Name: {{ home.name }}</p>
      <p>
        Bedrooms: {{ home.bedrooms }} | Bathrooms: {{ home.bathrooms }}<br />
        State: {{ home.state }}<br />
        ID: {{ home.id }}
        <!-- go to the show page -->
        <br><a v-bind:href="'/#/homes/' + home.id + '/edit'" class="btn btn-primary">Edit</a>
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
      message: "Homes.vue INDEX PAGE FOR ALL OF A USERS HOMES",
      homes: [] //#homes array for DOM
    };
  },
  created: function() {
    axios.get("http://localhost:3000/homes").then(response => {
      console.log(response.data);
      this.homes = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>

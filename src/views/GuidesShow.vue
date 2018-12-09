<template>
  <!-- Show PAGE FOR A USERS HOMES -->
  <main class="GuidePage">
    <div class="m-5">
      <div class="container col-md-offset-2">
        <div class="row mb-5 pt-3"><h1>Welcome to The Teahouse</h1></div>
        <div class="row">
          <div class="sidebar-section col col-2 d-none d-sm-block">
            <div class="row"><a href="category.html">Kitchen</a></div>
            <div class="row"><a href="category.html">Bathroom</a></div>
          </div>

          <div class="col col-md-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>

<script>
// var axios = require('axios');
import axios from "axios";
export default {
  data: function() {
    return {
      message: "HomesShow.vue Show page for one home - host view",
      home: {}
    };
  },
  created: function() {
    axios
      .get("http://localhost:3000/homes/" + this.$route.params.id)
      .then(response => {
        console.log(response.data);
        this.home = response.data;
      });
  },
  methods: {},
  computed: {}
};
</script>

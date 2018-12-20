import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "./../node_modules/jquery/dist/jquery.min.js";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import vSelect from "vue-select";
// import VueCarousel from "vue-carousel";

// Vue.use(VueCarousel);

// Vue.component("v-select", vSelect);

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

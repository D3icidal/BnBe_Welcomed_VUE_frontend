import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import HomesIndex from "./views/HomesIndex.vue";
import HomesShow from "./views/HomesShow.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/homes",
      name: "homesIndex",
      component: HomesIndex
    },

    {
      path: "/homes/:id",
      name: "homesShow",
      component: HomesShow
    },

    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/home",
      name: "home",
      component: Home
    },

    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

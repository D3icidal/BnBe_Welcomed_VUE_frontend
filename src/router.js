import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue"; //HOMEPAGE

//HOMES
import HomesNew from "./views/HomesNew.vue";
import HomesIndex from "./views/HomesIndex.vue";
import HomesShow from "./views/HomesShow.vue";
import HomesEdit from "./views/HomesEdit.vue";

//USERS/HOSTs
import HostsLogin from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      //HOMEPAGE
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/homes",
      name: "homesIndex",
      component: HomesIndex
    },

    { path: "/homes/:id/edit", name: "homesEdit", component: HomesEdit },

    { path: "/homes/new", name: "homesNew", component: HomesNew },

    {
      path: "/homes/:id",
      name: "homesShow",
      component: HomesShow
    },

    {
      path: "/login",
      name: "hostlogin",
      component: HostsLogin
    },
    { path: "/signup", name: "signup", component: Signup },
    // { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },

    // {
    //   path: "/home",
    //   name: "home",
    //   component: Home
    // },

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

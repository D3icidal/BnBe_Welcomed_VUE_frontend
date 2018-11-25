import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import HomesIndex from "./views/HomesIndex.vue";
import HomesShow from "./views/HomesShow.vue";
import HostsLogin from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import Logout from "./views/Logout.vue";
import HomesEdit from "./views/HomesEdit.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/homes",
      name: "homesIndex",
      component: HomesIndex
    },

    {
      path: "/login",
      name: "hostlogin",
      component: HostsLogin
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
    { path: "/signup", name: "signup", component: Signup },
    // { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: "/homes/:id/edit", name: "homesEdit", component: HomesEdit },

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

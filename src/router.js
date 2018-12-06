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

//BOOKINGS
import BookingsNew from "./views/BookingsNew.vue";
import BookingsIndex from "./views/BookingsIndex.vue";
import BookingsShow from "./views/BookingsShow.vue";

//GUEST-HOME
import GuestLogin from "./views/GuestLogin.vue";
import GuestShow from "./views/GuestShow.vue";

//AMENITIES
import AmenitiesShow from "./views/AmenitiesShow.vue";
// import AmenitiesIndex from "./views/AmenityIndex.vue";

Vue.use(Router);

export default new Router({
  routes: [
    //HOMEPAGE
    { path: "/", name: "home", component: Home },

    //HOMES - HOST view
    { path: "/homes", name: "homesIndex", component: HomesIndex },
    { path: "/homes/:id/edit", name: "homesEdit", component: HomesEdit },
    { path: "/homes/new", name: "homesNew", component: HomesNew },
    { path: "/homes/:id", name: "homesShow", component: HomesShow },

    //BOOKINGS (host side)
    {
      path: "/bookings/:home_id/new",
      name: "bookingsNew",
      component: BookingsNew
    },
    {
      path: "/bookings/:id",
      name: "bookingsShow",
      component: BookingsShow
    },
    { path: "/bookings", name: "bookingsIndex", component: BookingsIndex },

    //AMENITIES
    // { path: "/amenities", name: "amenitiesIndex", component: AmenitiesIndex },
    { path: "/amenities/:id", name: "amenitiesShow", component: AmenitiesShow },

    //GUIDE GUEST-HOME (login, views) ('GUIDE' => bookings view as guest)
    {
      path: "/guide/guestlogin",
      name: "guestlogin",
      component: GuestLogin
    },
    {
      path: "/guide/:booking_code",
      name: "GuestShow",
      component: GuestShow
    },

    //HOST LOGIN / SESSIONS
    { path: "/login", name: "hostlogin", component: HostsLogin },
    { path: "/signup", name: "signup", component: Signup },
    // { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout }

    // { path: "/about", name: "about", route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});

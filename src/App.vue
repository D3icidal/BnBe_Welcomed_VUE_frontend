<template>
  <div id="app">
      <!-- ======== @Region: #header ======== -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
        </li>
        <li class="nav-item d-lg-none catagories_small">
          <a class="nav-link" href="#/welcome">Welcome</a> | 
        </li>
        <li class="nav-item d-md-none catagories_small">
          <a class="nav-link" href="#/parking">parking</a> | 
        </li>
        <li class="nav-item catagories_small">
          <a class="nav-link" href="#/amenities">amenities</a> | 
        </li>
        <li class="nav-item catagories_small">
          <a class="nav-link" href="#/checkout">checkout</a> | 
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/home">Home</a> | 
        </li><li class="nav-item">
          <a class="nav-link" href="#/homes">My Homes</a> |
        </li><li class="nav-item">
          <a class="nav-link" href="#/homes/new">Add new Home</a> |
        </li><li class="nav-item">
          <a class="nav-link" href="#/about">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Auth
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#/signup">Signup</a>
            <a class="dropdown-item" href="#/login">Login</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#/logout">Logout</a>
          </div>
        </li>      
        <li class="nav-item">
          <a class="nav-link" href="#/bookings">bookings</a>
        </li>
      </ul>        
    </div>
    </nav>
    <router-view/>
    <!-- ======== @Region: #footer ======== -->
      <!-- Removed -->
  </div>
</template>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}*/
.GuestLogin .jumbotron {
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}


</style>

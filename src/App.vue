<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      -_- 
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
        </ul> -->
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
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>  |
      <router-link to="/homes">HomesIndex</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

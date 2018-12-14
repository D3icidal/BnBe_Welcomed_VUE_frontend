<template>
  <div id="app">
    <div class="page page-elements-navs navbar-layout-default">
      <div class="header">
          <div class="header-inner container">
            <!--branding/logo -->
            <div class="header-brand">
              <a class="header-brand-text" href="/#/" title="Home">
                <h1 class="h2">
                  <span class="header-brand-text-alt">BnBe</span>Welcomed<span class="header-brand-text-alt">.</span>
                </h1>
              </a>
              <div class="header-divider d-none d-lg-block"></div>
              <div class="header-slogan d-none d-lg-block">Your Guide To A Happy Home</div>
            </div>
            <div class="header-block order-12"> <!-- BREAKS WITHOUT THIS - Don't know why TODO -->
              
            </div>
            
            <div class="navbar navbar-expand-md navbar-static-top">
              <!--everything within this div is collapsed on mobile-->
              <div> <!-- class="navbar-main"> -->
                <!--main navigation-->
                <ul class="nav navbar-nav navbar-nav-stretch float-lg-right dropdown-effect-fade">
                  
                  <!-- Homepages -->
                  <!-- TODO make this open up to the left- otherwise gets cut off -->
                  <li class="nav-item dropdown dropdown-mega-menu">
                    <a href="#" class="nav-link dropdown-toggle" id="indexs-drop" data-toggle="dropdown" data-hover="dropdown"> <i class="fa fa-home nav-link-icon"></i> <span class=""> Homes </span> </a>
                    <!-- Dropdown Menu - mega menu-->
                    <div class="dropdown-menu">
                      <div class="row">
                        <div class="col-lg-6">
                          <h4 class="dropdown-header d-none d-lg-block mt-0">
                            All About My Homes
                          </h4>
                          <div class="row">
                            <div class="col-lg-8"> 
                              <a href="#/homes" class="dropdown-item"> See All My Homes</a> 
                              <a href="#/homes/new" class="dropdown-item"> Add A New Home</a> 
                              <a href="#/bookings" class="dropdown-item">  Upcoming Bookings</a> 
                              <h4 class="dropdown-header d-none d-lg-block mt-0">
                                My Photos(coming soon) 
                              </h4>
                              <a href="#/guides/login" class="dropdown-item">  Login To A Guide</a> 
                            </div>
                            <div class="col-lg-4"> 
                            </div>
                          </div>
                        </div>         
                      </div>
                    </div>
                  </li>

                  <li class="nav-item">
                    <a href="#/guides/login" class="nav-link"> Guides </a> 
                  </li>
                  <li class="nav-item">
                    <a href="#/login" class="nav-link"> Login </a> 
                  </li>
                  <li class="nav-item">
                    <a href="#/signup" class="nav-link"> Signup </a> 
                  </li>
                  <li class="nav-item">
                    <a href="#/logout" class="nav-link"> Logout </a> 
                  </li>

                </ul>
              </div>
              <!--/.navbar-collapse -->
            </div>
          </div>
        </div>
    </div>



  <router-view/>
    
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

/*.navbar-main .collapse {
  max-height: 314px !important;
}*/


</style>

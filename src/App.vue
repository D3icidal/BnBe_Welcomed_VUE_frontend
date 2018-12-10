<template>
  <div id="app">
    <!-- ======== @Region: #header ======== -->
    <div id="header">
      
      <!--Header upper region-->
        <!-- removed -->
      <div data-toggle="sticky">
        
        <!--Header search region - hidden by default -->
          <!-- removed -->
        
        <!--Header & Branding region-->
        <div class="header">
          <!-- all direct children of the .header-inner element will be vertically aligned with each other you can override all the behaviours using the flexbox utilities (flexbox.html) All elements with .header-brand & .header-block-flex wrappers will automatically be aligned inline & vertically using flexbox, this can be overridden using the flexbox utilities (flexbox.htm) Use .header-block to stack elements within on small screen & "float" on larger screens use .order-first or/and .order-last classes to make an element show first or last within .header-inner or .headr-block elements -->
          <div class="header-inner container">
            <!--branding/logo -->
            <div class="header-brand">
              <a class="header-brand-text" href="index.html" title="Home">
                <h1 class="h2">
                  <span class="header-brand-text-alt">BnBe</span>Welcomed<span class="header-brand-text-alt">.</span>
                </h1>
              </a>
              <div class="header-divider d-none d-lg-block"></div>
              <div class="header-slogan d-none d-lg-block">Your Guide To A Happy Home</div>
            </div>
            <!-- other header content -->
            <div class="header-block order-12">
              
              <!--Search trigger -->
              <!-- <a href="#search" class="btn btn-icon btn-link header-btn float-right order-11" data-toggle="search-form" data-target=".header-search"><i class="fa fa-search fa-flip-horizontal search-icon"></i></a> -->
              
              <!-- mobile collapse menu button - data-toggle="collapse" = default BS menu - data-toggle="off-canvas" = Off-cavnas Menu - data-toggle="overlay" = Overlay Menu -->
              <a href="#top" class="btn btn-link btn-icon header-btn float-right d-lg-none" data-toggle="off-canvas" data-target=".navbar-main" data-settings='{"cloneTarget":true, "targetClassExtras": "navbar-offcanvas"}'> <i class="fa fa-bars"></i> </a>
              <!--Show/hide trigger for #offcanvas-sidebar -->
              <a href="#" title="Click me you'll get a surprise" class="btn btn-icon btn-link header-btn float-right order-last" data-toggle="off-canvas" data-target="#offcanvas-sidebar" data-settings='{"cloneTarget":false}'> <i class="ion-android-more-vertical"></i> </a>
            </div>
            
            <div class="navbar navbar-expand-md navbar-static-top">
              <!--everything within this div is collapsed on mobile-->
              <div class="navbar-main collapse">
                <!--main navigation-->
                <ul class="nav navbar-nav navbar-nav-stretch float-lg-right dropdown-effect-fade">
                  
                  <!-- Homepages -->
                  <li class="nav-item dropdown dropdown-mega-menu active">
                    <a href="#" class="nav-link dropdown-toggle" id="indexs-drop" data-toggle="dropdown" data-hover="dropdown"> <i class="fa fa-home nav-link-icon"></i> <span class="d-none">Home</span> </a>
                    <!-- Dropdown Menu - mega menu-->
                    <div class="dropdown-menu">
                      <div class="row">
                        <div class="col-lg-6">
                          <h4 class="dropdown-header d-none d-lg-block mt-0">
                            Classic Homepages
                          </h4>
                          <div class="row">
                            <div class="col-lg-6"> <a href="intro.html" class="dropdown-item">Intro</a> <a href="index.html" class="dropdown-item active">Homepage (default)</a> <a href="index-static.html" class="dropdown-item">Homepage No Slider</a> <a href="index-boxed.html" class="dropdown-item">Homepage Boxed</a> <a href="index-promo-header.html" class="dropdown-item">Promo Header</a> <a href="index-coming-soon.html" class="dropdown-item">Coming Soon</a> <a href="index-coming-soon-newsletter.html" class="dropdown-item">Coming Soon with newsletter</a> <a href="index-onepager.html" class="dropdown-item">One Pager Slideshow</a> </div>
                            <div class="col-lg-4"> <a href="index-onepager-image.html" class="dropdown-item">One Pager Image</a> <a href="index-onepager-image-full-height.html" class="dropdown-item">One Pager Image Full Height</a> <a href="index-onepager-bg-slideshow.html" class="dropdown-item">One Pager Background Slideshow</a> <a href="index-onepager-dotted-menu-left.html" class="dropdown-item">One Pager Dotted Menu Left</a> <a href="index-onepager-dotted-menu-right.html" class="dropdown-item">One Pager Dotted Menu Right</a> <a href="index-onepager-dotted-menu-bottom.html" class="dropdown-item">One Pager Dotted Menu Bottom</a> <a href="index-onepager-submenu.html" class="dropdown-item">One Pager Submenu</a> </div>
                          </div>
                        </div>                        
                      </div>
                    </div>
                  </li>
                  
                  <!-- Pages -->
                  <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" id="pages-drop" data-toggle="dropdown" data-hover="dropdown">Pages</a> 
                    <!-- Menu -->
                    <div class="dropdown-menu">
                      
                      <div class="dropdown dropdown-submenu">
                        <a href="blog.html" class="dropdown-item dropdown-toggle" id="blog-drop" data-toggle="dropdown" data-hover="dropdown" data-close-others="false">Blog</a> 
                        <!-- Dropdown Menu -->
                        <div class="dropdown-menu"> <a href="blog.html" class="dropdown-item">Blog List Right Sidebar</a> <a href="blog-leftbar.html" class="dropdown-item">Blog List Left Sidebar</a> <a href="blog-timeline.html" class="dropdown-item">Blog List Timeline</a> <a href="blog-grid.html" class="dropdown-item">Blog List Grid</a> <a href="blog-post.html" class="dropdown-item">Blog Post</a> <a href="blog-post-video.html" class="dropdown-item">Blog Post With Video</a> <a href="blog-post-slideshow.html" class="dropdown-item">Blog Post With Slideshow</a> <a href="blog-post-audio.html" class="dropdown-item">Blog Post With Audio Clip</a> </div>
                      </div>                      
                      <a href="customers.html" class="dropdown-item">Customers</a> <a href="features.html" class="dropdown-item">Features/Services</a> <a href="login.html" class="dropdown-item">Login</a> <a href="signup.html" class="dropdown-item">Sign Up</a> <a href="starter.html" class="dropdown-item">Starter Snippets</a> <a href="page-404.html" class="dropdown-item">404 Error</a> <a href="page-maintenance.html" class="dropdown-item">Maintenance</a> <a href="page-site-status.html" class="dropdown-item">Site Status</a> 
                    </div>
                  </li>
                  
                  <!-- Features -->
                  <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" id="more-drop" data-toggle="dropdown" data-hover="dropdown">Features</a> 
                    <!-- Dropdown Menu -->
                    <div class="dropdown-menu">
                      <div class="dropdown dropdown-submenu dropdown-menu-left">
                        <a href="headers.html" class="dropdown-item dropdown-toggle" id="headers-drop" data-toggle="dropdown" data-hover="dropdown" data-close-others="false">Header Variations (19)</a> 
                        <!-- Header variations -->
                        <div class="dropdown-menu" role="menu" aria-labelledby="headers-drop"> <a href="header-elements.html" class="dropdown-item">Header Elements</a> <a href="header-offcanvas.html" class="dropdown-item">Header Off Canvas</a> <a href="header-collapse-menu.html" class="dropdown-item">Header Collapse Menu</a> <a href="header-overlay-menu-responsive.html" class="dropdown-item">Header Responsive Overlay Menu</a> <a href="header-overlay-menu.html" class="dropdown-item">Header Overlay Menu</a> <a href="header-collapse-menu-responsive.html" class="dropdown-item">Header Responsive Collapse Menu</a> <a href="header-fullwidth.html" class="dropdown-item">Header Full Width</a> <a href="header-navbar-below.html" class="dropdown-item">Header Navbar Below</a> <a href="header-compact.html" class="dropdown-item">Header Compact</a> <a href="header-dark.html" class="dropdown-item">Header Dark</a> <a href="header-primary.html" class="dropdown-item">Header Primary</a> <a href="header-transparent.html" class="dropdown-item">Header Transparent</a> <a href="header-transparent-dark.html" class="dropdown-item">Header Transparent Dark</a> <a href="header-transparent-primary.html" class="dropdown-item">Header Transparent Primary</a> <a href="header-translucent.html" class="dropdown-item">Header Translucent</a> <a href="header-translucent-dark.html" class="dropdown-item">Header Translucent Dark</a> <a href="header-translucent-primary.html" class="dropdown-item">Header Translucent Primary</a> <a href="header-nav-left.html" class="dropdown-item">Header Nav Left</a> <a href="header-nav-fullheight.html" class="dropdown-item">Header Nav Full Height</a> <a href="header-bottom.html" class="dropdown-item">Header Bottom</a> </div>
                      </div>
                      <div class="dropdown dropdown-submenu dropdown-menu-left">
                        <a href="headers.html" class="dropdown-item dropdown-toggle" id="footers-drop" data-toggle="dropdown" data-hover="dropdown" data-close-others="false">Footer Variations (5)</a> 
                        <!-- Header variations -->
                        <div class="dropdown-menu" role="menu" aria-labelledby="footers-drop"> <a href="footer-light.html" class="dropdown-item">Footer Light</a> <a href="footer-compact.html" class="dropdown-item">Footer Compact</a> <a href="footer-menus.html" class="dropdown-item">Footer Menus</a> <a href="footer-compact-light.html" class="dropdown-item">Footer Compact Light</a> <a href="footer-menus-light.html" class="dropdown-item">Footer Menus Light</a> </div>
                      </div>
                      <div class="dropdown dropdown-submenu dropdown-menu-left">
                        <a href="sliders.html" class="dropdown-item dropdown-toggle" id="slider-drop" data-toggle="dropdown" data-hover="dropdown" data-close-others="false">Sliders</a> 
                        <!-- Sliders -->
                        <div class="dropdown-menu">
                          <!--Slider Revolution -->
                          <h4 class="dropdown-header">
                            Slider Revolution
                          </h4>
                          <a href="slider-revolution-default.html" class="dropdown-item">Default</a> <a href="slider-revolution-full.html" class="dropdown-item">Full Width</a> <a href="slider-revolution-behind.html" class="dropdown-item">Behind Navbar</a> <a href="slider-revolution-boxed.html" class="dropdown-item">Boxed</a> 
                          <!--Backstretch Slider-->
                          <h4 class="dropdown-header">
                            Backstretch
                          </h4>
                          <a href="backstretch.html" class="dropdown-item">Background Slideshow</a> <a href="backstretch-boxed.html" class="dropdown-item">Boxed Background Slideshow</a> 
                          <!--Flexslider-->
                          <h4 class="dropdown-header">
                            Flexslider
                          </h4>
                          <a href="flexslider-default.html" class="dropdown-item">Default</a> <a href="flexslider-full.html" class="dropdown-item">Full Width</a> <a href="flexslider-behind.html" class="dropdown-item">Behind Navbar</a> <a href="flexslider-boxed.html" class="dropdown-item">Boxed</a> 
                        </div>
                      </div>
                      <a href="grid.html" class="dropdown-item">Grid System</a> <a href="flexbox.html" class="dropdown-item">Flexbox!</a> <a href="colours.html" class="dropdown-item">Theme Colours</a> 
                    </div>
                  </li>                  
                </ul>
              </div>
              <!--/.navbar-collapse -->
            </div>
          </div>
        </div>
      </div>
    </div>

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

</style>

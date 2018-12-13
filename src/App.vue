<template>
  <div id="app">
    <div class="page page-elements-navs navbar-layout-default">
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
                            
              <!-- mobile collapse menu button - data-toggle="collapse" = default BS menu - data-toggle="off-canvas" = Off-cavnas Menu - data-toggle="overlay" = Overlay Menu -->
              <a href="#top" class="btn btn-link btn-icon header-btn float-right d-lg-none" data-toggle="off-canvas" data-target=".navbar-main" data-settings='{"cloneTarget":true, "targetClassExtras": "navbar-offcanvas"}'> <i class="fa fa-bars"></i> </a>
              <!--Show/hide trigger for #offcanvas-sidebar -->
              
            </div>
            
            <div class="navbar navbar-expand-md navbar-static-top">
              <!--everything within this div is collapsed on mobile-->
              <div class="navbar-main collapse">
                <!--main navigation-->
                <ul class="nav navbar-nav navbar-nav-stretch float-lg-right dropdown-effect-fade">
                  
                  <!-- Homepages -->
                  <li class="nav-item dropdown dropdown-mega-menu">
                    <a href="#" class="nav-link dropdown-toggle" id="indexs-drop" data-toggle="dropdown" data-hover="dropdown"> <i class="fa fa-home nav-link-icon"></i> <span class="d-none">Home</span> </a>
                    <!-- Dropdown Menu - mega menu-->
                    <div class="dropdown-menu">
                      <div class="row">
                        <div class="col-lg-6">
                          <h4 class="dropdown-header d-none d-lg-block mt-0">
                            Classic Homepages
                          </h4>
                          <div class="row">
                            <div class="col-lg-6"> <a href="intro.html" class="dropdown-item">Intro</a> <a href="index.html" class="dropdown-item">Homepage (default)</a> <a href="index-static.html" class="dropdown-item">Homepage No Slider</a> <a href="index-boxed.html" class="dropdown-item">Homepage Boxed</a> <a href="index-promo-header.html" class="dropdown-item">Promo Header</a> <a href="index-coming-soon.html" class="dropdown-item">Coming Soon</a> <a href="index-coming-soon-newsletter.html" class="dropdown-item">Coming Soon with newsletter</a> <a href="index-onepager.html" class="dropdown-item">One Pager Slideshow</a> </div>
                            <div class="col-lg-6"> <a href="index-onepager-image.html" class="dropdown-item">One Pager Image</a> <a href="index-onepager-image-full-height.html" class="dropdown-item">One Pager Image Full Height</a> <a href="index-onepager-bg-slideshow.html" class="dropdown-item">One Pager Background Slideshow</a> <a href="index-onepager-dotted-menu-left.html" class="dropdown-item">One Pager Dotted Menu Left</a> <a href="index-onepager-dotted-menu-right.html" class="dropdown-item">One Pager Dotted Menu Right</a> <a href="index-onepager-dotted-menu-bottom.html" class="dropdown-item">One Pager Dotted Menu Bottom</a> <a href="index-onepager-submenu.html" class="dropdown-item">One Pager Submenu</a> </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <h4 class="dropdown-header d-none d-lg-block mt-0">
                            Industry/Niche Homepages
                          </h4>
                          <div class="row">
                            <div class="col-lg-6"> <a href="demo-travel-blog.html" class="dropdown-item">Travel Blog</a> <a href="index-app-landing.html" class="dropdown-item">App Landing Page</a> <a href="index-music.html" class="dropdown-item">Music Homepage</a> <a href="index-event.html" class="dropdown-item">Event Homepage</a> <a href="index-gym.html" class="dropdown-item">Gym Homepage</a> <a href="index-jobs.html" class="dropdown-item">Jobs Homepage</a> <a href="index-corporate.html" class="dropdown-item">Corporate Homepage</a> <a href="index-restaurant.html" class="dropdown-item">Restaurant Homepage</a> <a href="index-photographer.html" class="dropdown-item">Photographer Homepage</a> <a href="index-freelancer-portfolio.html" class="dropdown-item">Freelancer Homepage</a> </div>
                            <div class="col-lg-6"> <a href="index-wedding.html" class="dropdown-item">Wedding Homepage</a> <a href="index-realestate-single.html" class="dropdown-item">Real Estate (Single) Homepage</a> <a href="index-technology.html" class="dropdown-item">Technology Homepage</a> <a href="index-forum.html" class="dropdown-item">Forum Homepage</a> <a href="index-charity.html" class="dropdown-item">Charity Homepage</a> <a href="index-church.html" class="dropdown-item">Church Homepage</a> <a href="index-knowledgebase.html" class="dropdown-item">Knowledgebase</a> <a href="index-magazine.html" class="dropdown-item">Magazine Homepage</a> <a href="shop.html" class="dropdown-item">Shop Homepage</a> </div>
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
                        <a href="about.html" class="dropdown-item dropdown-toggle" id="about-drop" data-toggle="dropdown" data-hover="dropdown" data-close-others="false">About</a> 
                        <!-- Dropdown Menu -->
                        <div class="dropdown-menu" role="menu" aria-labelledby="about-drop"> <a href="about.html" class="dropdown-item">About Us Basic</a> <a href="about-extended.html" class="dropdown-item">About Us Extended</a> <a href="about-me.html" class="dropdown-item">About Me</a> <a href="team.html" class="dropdown-item">Team List</a> <a href="team-grid.html" class="dropdown-item">Team Grid</a> <a href="team-member.html" class="dropdown-item">Team Member</a> <a href="contact.html" class="dropdown-item">Contact</a> <a href="contact.php" class="dropdown-item">Contact (PHP)</a> </div>
                      </div>
                      <div class="dropdown dropdown-submenu">
                        <a href="blog.html" class="dropdown-item dropdown-toggle" id="blog-drop" data-toggle="dropdown" data-hover="dropdown" data-close-others="false">Blog</a> 
                        <!-- Dropdown Menu -->
                        <div class="dropdown-menu"> <a href="blog.html" class="dropdown-item">Blog List Right Sidebar</a> <a href="blog-leftbar.html" class="dropdown-item">Blog List Left Sidebar</a> <a href="blog-timeline.html" class="dropdown-item">Blog List Timeline</a> <a href="blog-grid.html" class="dropdown-item">Blog List Grid</a> <a href="blog-post.html" class="dropdown-item">Blog Post</a> <a href="blog-post-video.html" class="dropdown-item">Blog Post With Video</a> <a href="blog-post-slideshow.html" class="dropdown-item">Blog Post With Slideshow</a> <a href="blog-post-audio.html" class="dropdown-item">Blog Post With Audio Clip</a> </div>
                      </div>
                      <div class="dropdown dropdown-submenu">
                        <a href="pricing.html" class="dropdown-item dropdown-toggle" id="pricing-drop" data-toggle="dropdown" data-hover="dropdown" data-close-others="false">Pricing</a> 
                        <!-- pricing pages -->
                        <div class="dropdown-menu"> <a href="pricing.html" class="dropdown-item">Pricing Plans</a> <a href="pricing-tables.html" class="dropdown-item">Comparison Tables</a> </div>
                      </div>
                      <div class="dropdown dropdown-submenu">
                        <a href="timeline.html" class="dropdown-item dropdown-toggle" id="timeline-drop" data-toggle="dropdown" data-hover="dropdown" data-close-others="false">Timeline</a> 
                        <!-- timelines -->
                        <div class="dropdown-menu" role="menu" aria-labelledby="timeline-drop"> <a href="timeline.html" class="dropdown-item">Timeline Default</a> <a href="timeline-left.html" class="dropdown-item">Timeline Left</a> <a href="timeline-right.html" class="dropdown-item">Timeline Right</a> <a href="timeline-stacked.html" class="dropdown-item">Timeline Stacked</a> </div>
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
                  
                  <!-- Shop megamenu -->
                  <li class="nav-item dropdown dropdown-mega-menu dropdown-mega-menu-75">
                    <a href="#" class="nav-link dropdown-toggle" id="shop-drop" data-toggle="dropdown" data-hover="dropdown">Shop</a> 
                    <!-- Dropdown Menu - mega menu-->
                    <div class="dropdown-menu dropdown-menu-right">
                      <div class="row">
                        <div class="col-lg-6">
                          <h3 class="dropdown-header mt-0 pt-0">
                            Pages
                          </h3>
                          <a href="shop.html" class="dropdown-item">Shop Homepage</a> <a href="shop-cart.html" class="dropdown-item">Cart</a> <a href="shop-checkout.html" class="dropdown-item">Checkout</a> <a href="shop-confirmation.html" class="dropdown-item">Confirmation</a> <a href="shop-grid.html" class="dropdown-item">Products Grid</a> <a href="shop-list.html" class="dropdown-item">Products List</a> <a href="shop-product.html" class="dropdown-item">Product View</a> 
                        </div>
                        <div class="col-lg-6 d-none d-lg-block">
                          <h3 class="dropdown-header mt-0 pt-0">
                            Widget <span class="badge badge-primary text-uppercase">Hot</span>
                          </h3>
                          <div class="dropdown-widget">
                            <!-- Shop product carousel Uses Owl Carousel plugin All options here are customisable from the data-owl-carousel-settings="{OBJECT}" item via data- attributes: http://www.owlgraphic.com/owlcarousel/#customizing ie. data-settings="{"items": "4", "lazyLoad":"true", "navigation":"true"}" -->
                            <div class="products-carousel owl-nav-over" data-toggle="owl-carousel" data-owl-carousel-settings='{"items": 1,"responsive":{"0":{"items":1,"nav":true, "dots":false}}}'>
                              <a href="#">
                                <img src="assets/img/shop/jacket-1.jpg" alt="Item 1 image" class="lazyOwl img-fluid" />
                              </a>
                              <a href="#">
                                <img src="assets/img/shop/jacket-2.jpg" alt="Item 2 image" class="lazyOwl img-fluid" />
                              </a>
                              <a href="#">
                                <img src="assets/img/shop/jacket-3.jpg" alt="Item 3 image" class="lazyOwl img-fluid" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  
                  <!-- Elements/shortcodes -->
                  <li class="nav-item dropdown dropdown-mega-menu active">
                    <a href="#" class="nav-link dropdown-toggle" id="elements-drop" data-toggle="dropdown" data-hover="dropdown">Elements</a> 
                    <!-- Dropdown Menu - mega menu-->
                    <div class="dropdown-menu">
                      <h4 class="dropdown-header d-none d-lg-block mt-0">
                        39 pages of elements/snippets <i class="new-tag">Updated!</i>
                      </h4>
                      <div class="row">
                        <div class="col-lg-3"> <a href="elements-alerts.html" class="dropdown-item">Alerts</a> <a href="elements-animation.html" class="dropdown-item">Animations</a> <a href="elements-badges.html" class="dropdown-item">Badges</a> <a href="elements-button-groups.html" class="dropdown-item">Button Groups</a> <a href="elements-buttons.html" class="dropdown-item">Buttons</a> <a href="elements-cards.html" class="dropdown-item">Cards</a> <a href="elements-carousels.html" class="dropdown-item">Carousels</a> <a href="elements-collapse.html" class="dropdown-item">Collapse / Accordions</a> <a href="elements-colour-utils.html" class="dropdown-item">Colours Utils</a> <a href="elements-counters.html" class="dropdown-item">Counters</a> </div>
                        <div class="col-lg-3"> <a href="elements-ctas.html" class="dropdown-item">Call To Action Blocks</a> <a href="elements-dividers.html" class="dropdown-item">Dividers</a> <a href="elements-dropdowns.html" class="dropdown-item">Dropdowns</a> <a href="elements-forms.html" class="dropdown-item">Forms</a> <a href="elements-forms-input-groups.html" class="dropdown-item">Forms Input Groups</a> <a href="elements-icons.html" class="dropdown-item">Icons</a> <a href="elements-icons-flags.html" class="dropdown-item">Icons: Flags</a> <a href="elements-icons-fontawesome.html" class="dropdown-item">Icons: Font Awesome</a> <a href="elements-icons-ionicons.html" class="dropdown-item">Icons: Ionicons</a> <a href="elements-icons-linearicons.html" class="dropdown-item">Icons: Linearicons</a> </div>
                        <div class="col-lg-3"> <a href="elements-icons-lineawesome.html" class="dropdown-item">Icons: Line Awesome</a> <a href="elements-list-groups.html" class="dropdown-item">List Groups</a> <a href="elements-modals.html" class="dropdown-item">Modals</a> <a href="elements-modals-onload.html" class="dropdown-item">Modals Onload</a> <a href="elements-navs.html" class="dropdown-item active">Navs</a> <a href="elements-navs-tabbable.html" class="dropdown-item">Tabbable Navs</a> <a href="elements-overlays.html" class="dropdown-item">Overlays</a> <a href="elements-progressbars.html" class="dropdown-item">Progress Bars</a> <a href="elements-select-pickers.html" class="dropdown-item">Select Picker</a> <a href="elements-shadows.html" class="dropdown-item">Shadows</a> </div>
                        <div class="col-lg-3"> <a href="elements-social-media.html" class="dropdown-item">Social Media Branding</a> <a href="elements-spacers.html" class="dropdown-item">Spacers</a> <a href="elements-tables.html" class="dropdown-item">Tables</a> <a href="elements-tooltips-popovers.html" class="dropdown-item">Tooltips & Popovers</a> <a href="elements-type-effect.html" class="dropdown-item">Type Effect</a> <a href="elements-typography.html" class="dropdown-item">Typography</a> <a href="elements-utils.html" class="dropdown-item">Utilities</a> <a href="elements-video-blocks.html" class="dropdown-item">Video Blocks</a> <a href="page-titles.html" class="dropdown-item">Page Titles</a> </div>
                      </div>
                    </div>
                  </li>
                  
                  <!-- Mega menu example -->
                  <li class="nav-item dropdown dropdown-persist dropdown-mega-menu dropdown-mega-menu-50">
                    <a href="#" class="nav-link dropdown-toggle" id="megamenu-drop" data-toggle="dropdown" data-hover="dropdown">Mega Menu</a> 
                    <!-- Dropdown Menu - Mega Menu -->
                    <div class="dropdown-menu dropdown-menu-right">
                      <!-- Nav tabs -->
                      <ul class="nav nav-pills nav-pills-border-bottom-inside flex-column flex-lg-row" role="tablist">
                        <li class="nav-item"> <a class="nav-link p-3 active text-center font-weight-bold text-uppercase" data-toggle="tab" data-target=".menu-tab-1" role="tab">Mega Menu Tab 1</a> </li>
                        <li class="nav-item"> <a class="nav-link p-3 text-center font-weight-bold text-uppercase" data-toggle="tab" data-target=".menu-tab-2" role="tab">Mega Menu Tab 2</a> </li>
                      </ul>
                      <!-- Tab panes -->
                      <div class="tab-content py-3">
                        <div class="tab-pane active show menu-tab-1" role="tabpanel">
                          <div class="row text-center">
                            <div class="col-lg-4 py-2">
                              <i class="fa fa-tachometer-alt icon-3x op-6"></i> 
                              <h5 class="mt-2">
                                Fully Optimized
                              </h5>
                              <p class="text-sm mb-0">Esca ex ludus melior modo quis sagaciter te.</p>
                            </div>
                            <div class="col-lg-4 py-2">
                              <i class="fa fa-wrench icon-3x op-6"></i> 
                              <h5 class="mt-2">
                                Free Support
                              </h5>
                              <p class="text-sm mb-0">Ad commodo incassum paratus quidem singularis zelus.</p>
                            </div>
                            <div class="col-lg-4 py-2">
                              <i class="fa fa-rocket icon-3x op-6"></i> 
                              <h5 class="mt-2">
                                Free Upgrades
                              </h5>
                              <p class="text-sm mb-0">Abico acsi sed. Abdo appellatio lucidus probo quia si venio.</p>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane menu-tab-2" role="tabpanel">
                          <div class="row text-center">
                            <div class="col-lg-4 py-2">
                              <i class="fa fa-chart-line icon-3x op-6"></i> 
                              <h5 class="mt-2">
                                99.9% Uptime
                              </h5>
                              <p class="text-sm mb-0">Caecus damnum dignissim ea exputo iusto obruo veniam.</p>
                            </div>
                            <div class="col-lg-4 py-2">
                              <i class="fa fa-users icon-3x op-6"></i> 
                              <h5 class="mt-2">
                                Multiuser
                              </h5>
                              <p class="text-sm mb-0">Augue distineo dolus illum iustum magna mauris paratus uxor vulpes.</p>
                            </div>
                            <div class="col-lg-4 py-2">
                              <i class="fa fa-plug icon-3x op-6"></i> 
                              <h5 class="mt-2">
                                Plug n play
                              </h5>
                              <p class="text-sm mb-0">Fere feugiat ideo. Aliquip melior nobis pecus pneum.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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


</style>

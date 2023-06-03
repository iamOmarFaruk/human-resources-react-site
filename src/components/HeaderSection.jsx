import React from 'react'

function HeaderSection ({
  promoText
}) {
  return (
    <>
      
      <header className="header--sticky header-one six">
        <div className="header-top header-top-one bg-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-xl-block d-none">
                <div className="left">
                  <p className="left-text">
                    {promoText}
                  </p>
                </div>
              </div>
              <div className="col-lg-6 d-xl-block d-none">
                <div className="right">
                  <div className="mail">
                    <i className="fas fa-envelope" />
                    <a href="#">info@example.com</a>
                  </div>
                  <div className="call">
                    <i className="fas fa-phone-alt" />
                    <a href="#">Hoteline: +210-9856988</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-main-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-4">
                <div className="thumbnail">
                  <a href="">
                    <img
                      src="assets/images/logo/logo-1.svg"
                      alt="finbiz-logo"
                    />
                  </a>
                </div>
              </div>
              <div className=" col-xl-9 col-lg-8 col-md-8 col-sm-8 col-8">
                <div className="main-header">
                  <nav className="nav-main mainmenu-nav d-none d-xl-block">
                    <ul className="mainmenu">
                      <li>
                        <a href="#banner">Home</a>
                      </li>
                      <li>
                        <a href="#service">Services</a>
                      </li>
                      <li>
                        <a href="#about">About</a>
                      </li>
                      <li>
                        <a href="#blog">blog</a>
                      </li>
                      <li>
                        <a href="#team">Team</a>
                      </li>
                      <li>
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  </nav>
                  <div className="button-area">
                    <div className="search-input-area">
                      <div className="container">
                        <div className="search-input-inner">
                          <div className="input-div">
                            <input
                              id="searchInput1"
                              className="search-input"
                              type="text"
                              placeholder="Search by keyword or #"
                            />
                            <button>
                              <i className="far fa-search" />
                            </button>
                          </div>
                          <div id="close" className="search-close-icon">
                            <i className="far fa-times" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btn"
                    >
                      Get Quote
                    </a>
                    <button
                      id="menu-btn"
                      className="menu rts-btn btn-primary-alta ml--20 ml_sm--5"
                    >
                      <img
                        className="menu-dark"
                        src="assets/images/icon/menu.png"
                        alt="Menu-icon"
                      />
                      <img
                        className="menu-light"
                        src="assets/images/icon/menu-light.png"
                        alt="Menu-icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* End header area */}
      <div id="side-bar" className="side-bar">
        <button className="close-icon-menu">
          <i className="far fa-times" />
        </button>
        {/* inner menu area desktop start */}
        <div className="rts-sidebar-menu-desktop">
          <a className="logo-1" href="index.html">
            <img
              className="logo"
              src="assets/images/logo/logo-1.svg"
              alt="finbiz_logo"
            />
          </a>
          <a className="logo-2" href="index.html">
            <img
              className="logo"
              src="assets/images/logo/logo-4.svg"
              alt="finbiz_logo"
            />
          </a>
          <a className="logo-3" href="index.html">
            <img
              className="logo"
              src="assets/images/logo/logo-3.svg"
              alt="finbiz_logo"
            />
          </a>
          <a className="logo-4" href="index.html">
            <img
              className="logo"
              src="assets/images/logo/logo-5.svg"
              alt="finbiz_logo"
            />
          </a>
          <div className="body d-none d-xl-block">
            <p className="disc">
              We must explain to you how all seds this mistakens idea denouncing
              pleasures and praising account.
            </p>
            <div className="get-in-touch">
              {/* title */}
              <div className="h6 title">Get In Touch</div>
              {/* title End */}
              <div className="wrapper">
                {/* single */}
                <div className="single">
                  <i className="fas fa-phone-alt" />
                  <a href="#">+8801234566789</a>
                </div>
                {/* single ENd */}
                {/* single */}
                <div className="single">
                  <i className="fas fa-envelope" />
                  <a href="#">example@gmail.com</a>
                </div>
                {/* single ENd */}
                {/* single */}
                <div className="single">
                  <i className="fas fa-globe" />
                  <a href="#">www.webexample.com</a>
                </div>
                {/* single ENd */}
                {/* single */}
                <div className="single">
                  <i className="fas fa-map-marker-alt" />
                  <a href="#">13/A, New Pro State, NYC</a>
                </div>
                {/* single ENd */}
              </div>
              <div className="social-wrapper-two menu">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-whatsapp" />
                </a>
                {/* <a href="#"><i class="fab fa-linkedin"></i></a> */}
              </div>
            </div>
          </div>
          <div className="body-mobile d-block d-xl-none">
            <nav className="nav-main mainmenu-nav">
              <ul className="mainmenu">
                <li className="has-droupdown">
                  <a href="#">Home</a>
                  <ul className="submenu">
                    <li>
                      <a href="index.html">Main Home</a>
                    </li>
                    <li>
                      <a href="index-two.html">Consulting Home</a>
                    </li>
                    <li>
                      <a href="index-three.html">Corporate Home</a>
                    </li>
                    <li>
                      <a href="index-four.html">Insurance Home</a>
                    </li>
                    <li>
                      <a href="index-five.html">Marketing Home</a>
                    </li>
                    <li>
                      <a href="index-six.html">Home finance</a>
                    </li>
                    <li>
                      <a href="index-seven.html">Human Resources</a>
                    </li>
                    <li>
                      <a href="onepage-one.html">Main Home Onepage</a>
                    </li>
                    <li>
                      <a href="onepage-two.html">Consulting Home Onepage</a>
                    </li>
                    <li>
                      <a href="onepage-three.html">Corporate Home Onepage</a>
                    </li>
                    <li>
                      <a href="onepage-four.html">Insurance Home Onepage</a>
                    </li>
                    <li>
                      <a href="onepage-five.html">Marketing Home Onepage</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about-us.html">About Us</a>
                </li>
                <li className="has-droupdown">
                  <a href="#">Services</a>
                  <ul className="submenu">
                    <li>
                      <a href="our-service.html">Our Service</a>
                    </li>
                    <li>
                      <a href="service-details.html">Service Details</a>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <a href="#">Pages</a>
                  <ul className="submenu">
                    <li>
                      <a href="project.html">Project</a>
                    </li>
                    <li>
                      <a href="project-details.html">Project Details</a>
                    </li>
                    <li>
                      <a href="team.html">Team</a>
                    </li>
                    <li>
                      <a href="team-details.html">Team Details</a>
                    </li>
                    <li>
                      <a href="appoinment.html">appoinment</a>
                    </li>
                    <li>
                      <a href="price-plan.html">Price Plan</a>
                    </li>
                    <li>
                      <a href="404.html">404 Page</a>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <a href="#">Blog</a>
                  <ul className="submenu">
                    <li>
                      <a href="blog-list.html">Blog List</a>
                    </li>
                    <li>
                      <a href="blog-grid.html">Blog Grid</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contactus.html">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="social-wrapper-two menu mobile-menu">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-whatsapp" />
              </a>
              {/* <a href="#"><i class="fab fa-linkedin"></i></a> */}
            </div>
            <a
              href="#"
              className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btnmenu"
            >
              Get Quote
            </a>
          </div>
        </div>
        
      </div>
      <div id="anywhere-home" />
     

    </>
  )
}

export default HeaderSection
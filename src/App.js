import "./App.css";
import HeroSection from "./components/HeroSection";
import HeaderSection from "./components/HeaderSection";
import Button from "./components/elements/Button";

function App() {
  return (
    <>
      <HeaderSection />
      <HeroSection />

      {/* rts service area start */}
      <div className="rts-service-area home-seven rts-section-gap" id="service">
        <div className="shape-business-service">
          <img src="assets/images/service/icon/shape-1.png" alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-area-with-btn-home-6">
                <div className="title-area-style-six text-start">
                  <div className="pre-title">
                    <img
                      src="assets/images/banner/shape/pre-title.png"
                      alt="pre-title"
                    />
                    <span className="pre">Business Progress</span>
                    <img
                      className="two"
                      src="assets/images/banner/shape/pre-title.png"
                      alt="pre-title"
                    />
                  </div>
                  <h2 className="title">
                    Together we can envision <br />
                    your business
                  </h2>
                </div>
                <Button buttonText="View All Services" buttonUrl="" />
              </div>
            </div>
          </div>
          <div className="row g-5 mt--80">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="service-single-style-six">
                <div className="icon">
                  <img
                    src="assets/images/service/icon/22.svg"
                    alt="service_icon"
                  />
                </div>
                <h5 className="title">Team Leadership</h5>
                <p className="disc">
                  Dictumst enim tristique conubia parturient ornare vivamus
                  euismod pulvinar habitasse porttitor aptent dignissim.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="service-single-style-six">
                <div className="icon">
                  <img
                    src="assets/images/service/icon/23.svg"
                    alt="service_icon"
                  />
                </div>
                <h5 className="title">People Cohesion</h5>
                <p className="disc">
                  Dictumst enim tristique conubia parturient ornare vivamus
                  euismod pulvinar habitasse porttitor aptent dignissim.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="service-single-style-six">
                <div className="icon">
                  <img
                    src="assets/images/service/icon/24.svg"
                    alt="service_icon"
                  />
                </div>
                <h5 className="title">Team Build Up</h5>
                <p className="disc">
                  Dictumst enim tristique conubia parturient ornare vivamus
                  euismod pulvinar habitasse porttitor aptent dignissim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts service area end */}
      <div className="bg-shape-wrapper-main">
        {/* rts about area start */}
        <div className="rts-about-area-start rts-section-gapBottom" id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 pr--70">
                <div className="title-area-style-six text-start">
                  <div className="pre-title">
                    <img
                      src="assets/images/banner/shape/pre-title.png"
                      alt="pre-title"
                    />
                    <span className="pre">More ABOUT US</span>
                    <img
                      className="two"
                      src="assets/images/banner/shape/pre-title.png"
                      alt="pre-title"
                    />
                  </div>
                  <h2 className="title">
                    Here is your perfect <br />
                    Marketing Solution
                  </h2>
                </div>
                <div className="about-content-inner-style-six">
                  <p className="disc">
                    Platea vehicula rutrum curae magna tacitiacut msuada
                    inceptos phasellus massa, eget ultres tempor lacinia
                    dictumst tincidunt leo mollis luctus varius gravida eleifend
                    cursus litora
                  </p>
                  <div className="item-check-inner">
                    <div className="single-col">
                      <div className="single-check">
                        <i className="fas fa-check-circle" />
                        24/7 Call Services Avilable
                      </div>
                      <div className="single-check">
                        <i className="fas fa-check-circle" />
                        Great Skilled Consultant
                      </div>
                      <div className="single-check">
                        <i className="fas fa-check-circle" />
                        Expert Team Members
                      </div>
                    </div>
                    <div className="single-col">
                      <div className="single-check">
                        <i className="fas fa-check-circle" />
                        How to improve business
                      </div>
                      <div className="single-check">
                        <i className="fas fa-check-circle" />
                        Business is the best plan
                      </div>
                      <div className="single-check">
                        <i className="fas fa-check-circle" />
                        Services we provide
                      </div>
                    </div>
                  </div>
                  <div className="contact-inner-about">
                    <div className="single-left">
                      <img
                        src="assets/images/about/main/user/04.png"
                        alt="user"
                      />
                      <div className="details-area">
                        <h6 className="title">Adrew David</h6>
                        <span className="designation">CEO &amp; Founder</span>
                      </div>
                    </div>
                    <div className="single-right">
                      <img
                        src="assets/images/about/main/user/05.png"
                        alt="call"
                      />
                      <div className="details-area">
                        <span>Call us anytime</span>
                        <a href="#" className="number">
                          +256 214582146
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="thumbnail-about-six">
                  <img src="assets/images/about/02.png" alt="about-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* rts about area end */}
        {/* client rationg area start */}
        <div className="rts-client-rating rts-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 position-relative">
                <div className="swiper clients-review-7">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="single-testimonials-styele-clients-7 text-center">
                        <div className="logo">
                          <img
                            src="assets/images/testimonials/icon/logo-04.png"
                            alt=""
                          />
                        </div>
                        <div className="inner">
                          <p className="disc">
                            4.88 out of 5 star from 1,645 reviews
                          </p>
                          <div className="stars-area">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="single-testimonials-styele-clients-7 text-center">
                        <div className="logo">
                          <img
                            src="assets/images/testimonials/icon/logo-04.png"
                            alt=""
                          />
                        </div>
                        <div className="inner">
                          <p className="disc">
                            4.88 out of 5 star from 1,645 reviews
                          </p>
                          <div className="stars-area">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="single-testimonials-styele-clients-7 text-center">
                        <div className="logo">
                          <img
                            src="assets/images/testimonials/icon/logo-04.png"
                            alt=""
                          />
                        </div>
                        <div className="inner">
                          <p className="disc">
                            4.88 out of 5 star from 1,645 reviews
                          </p>
                          <div className="stars-area">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
              </div>
            </div>
          </div>
        </div>
        {/* client rationg area end */}
        {/* working process start */}
        <div className="rts-working-process rts-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-area-style-six text-center">
                  <div className="pre-title">
                    <img
                      src="assets/images/banner/shape/pre-title.png"
                      alt="pre-title"
                    />
                    <span className="pre">Work Process</span>
                    <img
                      className="two"
                      src="assets/images/banner/shape/pre-title.png"
                      alt="pre-title"
                    />
                  </div>
                  <h2 className="title">Why Choose us?</h2>
                </div>
              </div>
            </div>
            <div className="row mt--20">
              <div className="col-xl-3 col-md-4">
                {/* single-service area start */}
                <div className="rts-single-service-style-process text-center">
                  <div className="icon">
                    <img src="assets/images/service/icon/22.svg" alt="" />
                  </div>
                  <h5 className="title">Create an account</h5>
                  <p className="disc">
                    Dictum stem tristique conubia arturie ornare vivamus euismod
                  </p>
                  <a href="#" className="rts-btn btn-primary-5 rounded-2">
                    <i className="fal fa-arrow-right" />
                  </a>
                </div>
                {/* single-service area end */}
              </div>
              <div className="col-xl-3 col-md-4">
                {/* single-service area start */}
                <div className="rts-single-service-style-process text-center">
                  <div className="icon">
                    <img src="assets/images/service/icon/23.svg" alt="" />
                  </div>
                  <h5 className="title">Consult with us</h5>
                  <p className="disc">
                    Dictum stem tristique conubia arturie ornare vivamus euismod
                  </p>
                  <a href="#" className="rts-btn btn-primary-5 rounded-2">
                    <i className="fal fa-arrow-right" />
                  </a>
                </div>
                {/* single-service area end */}
              </div>
              <div className="col-xl-3 col-md-4">
                {/* single-service area start */}
                <div className="rts-single-service-style-process text-center">
                  <div className="icon">
                    <img src="assets/images/service/icon/24.svg" alt="" />
                  </div>
                  <h5 className="title">Fill up the form</h5>
                  <p className="disc">
                    Dictum stem tristique conubia arturie ornare vivamus euismod
                  </p>
                  <a href="#" className="rts-btn btn-primary-5 rounded-2">
                    <i className="fal fa-arrow-right" />
                  </a>
                </div>
                {/* single-service area end */}
              </div>
              <div className="col-xl-3 col-md-4">
                {/* single-service area start */}
                <div className="rts-single-service-style-process text-center">
                  <div className="icon">
                    <img src="assets/images/service/icon/22.svg" alt="" />
                  </div>
                  <h5 className="title">Get Started!</h5>
                  <p className="disc">
                    Dictum stem tristique conubia arturie ornare vivamus euismod
                  </p>
                  <a href="#" className="rts-btn btn-primary-5 rounded-2">
                    <i className="fal fa-arrow-right" />
                  </a>
                </div>
                {/* single-service area end */}
              </div>
            </div>
          </div>
        </div>
        {/* working process end */}
        {/* start vedio area start */}
        <div className="rts-vedio-area-home-6 rts-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="thumbnail-image-gallery">
                  <img
                    src="assets/images/gallery/01.jpg"
                    alt="thumbnail-image"
                  />
                  <a href="#" className="vedio-icone">
                    <span id="play-video" className="video-play-button">
                      <img
                        src="assets/images/about/shape/play-btn.png"
                        alt="Play btn"
                      />
                      <span />
                    </span>
                    <div id="video-overlay" className="video-overlay">
                      <span className="video-overlay-close">×</span>
                    </div>
                  </a>
                  <div className="vedio-title-area">
                    <h2 className="title">Watch Video Here</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-shape-vedio-section">
            <img src="assets/images/gallery/bg-vedio.png" alt="bg" />
          </div>
        </div>
        {/* start vedio area end */}
      </div>
      {/* team area start */}
      <div className="rts-team-area-style-six rts-section-gap" id="team">
        <div className="team-bg-image-style-six">
          <img src="assets/images/team/bg-02.png" alt="bg" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-style-six text-center">
                <div className="pre-title">
                  <img
                    src="assets/images/banner/shape/pre-title.png"
                    alt="pre-title"
                  />
                  <span className="pre">Team Members</span>
                  <img
                    className="two"
                    src="assets/images/banner/shape/pre-title.png"
                    alt="pre-title"
                  />
                </div>
                <h2 className="title color-white">Finbiz Professionals</h2>
              </div>
            </div>
          </div>
          <div className="row mt--30 g-5">
            {/* single team area start */}
            <div className="col-lg-3">
              {/* single team start */}
              <div className="single-team-style-six">
                <div className="inner">
                  <div className="thumbnail">
                    <div className="social-team">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a href="#">
                      <img
                        src="assets/images/team/tm/14.png"
                        alt="team-image"
                      />
                    </a>
                    <div className="content-inner">
                      <div className="text">
                        <h5 className="title">Andreas Menor</h5>
                        <span className="designation">Sr. Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* single team end */}
            </div>
            {/* single team end */}
            {/* single team area start */}
            <div className="col-lg-3">
              {/* single team start */}
              <div className="single-team-style-six">
                <div className="inner">
                  <div className="thumbnail">
                    <div className="social-team">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a href="#">
                      <img
                        src="assets/images/team/tm/15.png"
                        alt="team-image"
                      />
                    </a>
                    <div className="content-inner">
                      <div className="text">
                        <h5 className="title">Andreas Menor</h5>
                        <span className="designation">Sr. Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* single team end */}
            </div>
            {/* single team end */}
            {/* single team area start */}
            <div className="col-lg-3">
              {/* single team start */}
              <div className="single-team-style-six">
                <div className="inner">
                  <div className="thumbnail">
                    <div className="social-team">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a href="#">
                      <img
                        src="assets/images/team/tm/16.png"
                        alt="team-image"
                      />
                    </a>
                    <div className="content-inner">
                      <div className="text">
                        <h5 className="title">Andreas Menor</h5>
                        <span className="designation">Sr. Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* single team end */}
            </div>
            {/* single team end */}
            {/* single team area start */}
            <div className="col-lg-3">
              {/* single team start */}
              <div className="single-team-style-six">
                <div className="inner">
                  <div className="thumbnail">
                    <div className="social-team">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a href="#">
                      <img
                        src="assets/images/team/tm/17.png"
                        alt="team-image"
                      />
                    </a>
                    <div className="content-inner">
                      <div className="text">
                        <h5 className="title">Andreas Menor</h5>
                        <span className="designation">Sr. Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* single team end */}
            </div>
            {/* single team end */}
          </div>
        </div>
      </div>
      {/* team area end */}
      {/* rts portfolio area start */}
      <div className="rts-portfolio-area mt-decress rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-with-btn-home-6 portfolio-area">
                <div className="title-area-style-six text-start">
                  <div className="pre-title">
                    <img
                      src="assets/images/banner/shape/pre-title.png"
                      alt="pre-title"
                    />
                    <span className="pre">Business Progress</span>
                    <img
                      className="two"
                      src="assets/images/banner/shape/pre-title.png"
                      alt="pre-title"
                    />
                  </div>
                  <h2 className="title">
                    Together we can envision <br />
                    your business
                  </h2>
                </div>
                <div className="tab-buttons-portfolio">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        All
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        {" "}
                        Financial{" "}
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact"
                        type="button"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        {" "}
                        Human{" "}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt--70">
            <div className="col-lg-12">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row g-5">
                    <div className="col-lg-4">
                      {/* single business case */}
                      <div className="rts-business-case-s-2 style-home-7S">
                        <a href="project-details.html" className="thumbnail">
                          <img
                            src="assets/images/business-case/04.jpg"
                            alt="Business_case"
                          />
                        </a>
                        <div className="inner">
                          <a href="project-details.html">
                            <h5 className="title">Business Growth</h5>
                          </a>
                          <span>Business Strategy</span>
                        </div>
                        <a href="project-details.html" className="over_link" />
                      </div>
                      {/* single business case End */}
                    </div>
                    <div className="col-lg-4">
                      {/* single business case */}
                      <div className="rts-business-case-s-2 style-home-7S">
                        <a href="project-details.html" className="thumbnail">
                          <img
                            src="assets/images/business-case/05.jpg"
                            alt="Business_case"
                          />
                        </a>
                        <div className="inner">
                          <a href="project-details.html">
                            <h5 className="title">Business Growth</h5>
                          </a>
                          <span>Business Strategy</span>
                        </div>
                        <a href="project-details.html" className="over_link" />
                      </div>
                      {/* single business case End */}
                    </div>
                    <div className="col-lg-4">
                      {/* single business case */}
                      <div className="rts-business-case-s-2 style-home-7S">
                        <a href="project-details.html" className="thumbnail">
                          <img
                            src="assets/images/business-case/06.jpg"
                            alt="Business_case"
                          />
                        </a>
                        <div className="inner">
                          <a href="project-details.html">
                            <h5 className="title">Business Growth</h5>
                          </a>
                          <span>Business Strategy</span>
                        </div>
                        <a href="project-details.html" className="over_link" />
                      </div>
                      {/* single business case End */}
                    </div>
                    <div className="col-lg-4">
                      {/* single business case */}
                      <div className="rts-business-case-s-2 style-home-7S">
                        <a href="project-details.html" className="thumbnail">
                          <img
                            src="assets/images/business-case/07.jpg"
                            alt="Business_case"
                          />
                        </a>
                        <div className="inner">
                          <a href="project-details.html">
                            <h5 className="title">Business Growth</h5>
                          </a>
                          <span>Business Strategy</span>
                        </div>
                        <a href="project-details.html" className="over_link" />
                      </div>
                      {/* single business case End */}
                    </div>
                    <div className="col-lg-4">
                      {/* single business case */}
                      <div className="rts-business-case-s-2 style-home-7S">
                        <a href="project-details.html" className="thumbnail">
                          <img
                            src="assets/images/business-case/04.jpg"
                            alt="Business_case"
                          />
                        </a>
                        <div className="inner">
                          <a href="project-details.html">
                            <h5 className="title">Business Growth</h5>
                          </a>
                          <span>Business Strategy</span>
                        </div>
                        <a href="project-details.html" className="over_link" />
                      </div>
                      {/* single business case End */}
                    </div>
                    <div className="col-lg-4">
                      {/* single business case */}
                      <div className="rts-business-case-s-2 style-home-7S">
                        <a href="project-details.html" className="thumbnail">
                          <img
                            src="assets/images/business-case/07.jpg"
                            alt="Business_case"
                          />
                        </a>
                        <div className="inner">
                          <a href="project-details.html">
                            <h5 className="title">Business Growth</h5>
                          </a>
                          <span>Business Strategy</span>
                        </div>
                        <a href="project-details.html" className="over_link" />
                      </div>
                      {/* single business case End */}
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row g-5">
                    <div className="col-lg-4">
                      {/* single business case */}
                      <div className="rts-business-case-s-2 style-home-7S">
                        <a href="project-details.html" className="thumbnail">
                          <img
                            src="assets/images/business-case/04.jpg"
                            alt="Business_case"
                          />
                        </a>
                        <div className="inner">
                          <a href="project-details.html">
                            <h5 className="title">Business Growth</h5>
                          </a>
                          <span>Business Strategy</span>
                        </div>
                        <a href="project-details.html" className="over_link" />
                      </div>
                      {/* single business case End */}
                    </div>
                    <div className="col-lg-4">
                      {/* single business case */}
                      <div className="rts-business-case-s-2 style-home-7S">
                        <a href="project-details.html" className="thumbnail">
                          <img
                            src="assets/images/business-case/05.jpg"
                            alt="Business_case"
                          />
                        </a>
                        <div className="inner">
                          <a href="project-details.html">
                            <h5 className="title">Business Growth</h5>
                          </a>
                          <span>Business Strategy</span>
                        </div>
                        <a href="project-details.html" className="over_link" />
                      </div>
                      {/* single business case End */}
                    </div>
                    <div className="col-lg-4">
                      {/* single business case */}
                      <div className="rts-business-case-s-2 style-home-7S">
                        <a href="project-details.html" className="thumbnail">
                          <img
                            src="assets/images/business-case/06.jpg"
                            alt="Business_case"
                          />
                        </a>
                        <div className="inner">
                          <a href="project-details.html">
                            <h5 className="title">Business Growth</h5>
                          </a>
                          <span>Business Strategy</span>
                        </div>
                        <a href="project-details.html" className="over_link" />
                      </div>
                      {/* single business case End */}
                    </div>
                    <div className="col-lg-4">
                      {/* single business case */}
                      <div className="rts-business-case-s-2 style-home-7S">
                        <a href="project-details.html" className="thumbnail">
                          <img
                            src="assets/images/business-case/07.jpg"
                            alt="Business_case"
                          />
                        </a>
                        <div className="inner">
                          <a href="project-details.html">
                            <h5 className="title">Business Growth</h5>
                          </a>
                          <span>Business Strategy</span>
                        </div>
                        <a href="project-details.html" className="over_link" />
                      </div>
                      {/* single business case End */}
                    </div>
                    <div className="col-lg-4">
                      {/* single business case */}
                      <div className="rts-business-case-s-2 style-home-7S">
                        <a href="project-details.html" className="thumbnail">
                          <img
                            src="assets/images/business-case/04.jpg"
                            alt="Business_case"
                          />
                        </a>
                        <div className="inner">
                          <a href="project-details.html">
                            <h5 className="title">Business Growth</h5>
                          </a>
                          <span>Business Strategy</span>
                        </div>
                        <a href="project-details.html" className="over_link" />
                      </div>
                      {/* single business case End */}
                    </div>
                    <div className="col-lg-4">
                      {/* single business case */}
                      <div className="rts-business-case-s-2 style-home-7S">
                        <a href="project-details.html" className="thumbnail">
                          <img
                            src="assets/images/business-case/07.jpg"
                            alt="Business_case"
                          />
                        </a>
                        <div className="inner">
                          <a href="project-details.html">
                            <h5 className="title">Business Growth</h5>
                          </a>
                          <span>Business Strategy</span>
                        </div>
                        <a href="project-details.html" className="over_link" />
                      </div>
                      {/* single business case End */}
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="row g-5">
                    <div className="col-lg-4">
                      {/* single business case */}
                      <div className="rts-business-case-s-2 style-home-7S">
                        <a href="project-details.html" className="thumbnail">
                          <img
                            src="assets/images/business-case/04.jpg"
                            alt="Business_case"
                          />
                        </a>
                        <div className="inner">
                          <a href="project-details.html">
                            <h5 className="title">Business Growth</h5>
                          </a>
                          <span>Business Strategy</span>
                        </div>
                        <a href="project-details.html" className="over_link" />
                      </div>
                      {/* single business case End */}
                    </div>
                    <div className="col-lg-4">
                      {/* single business case */}
                      <div className="rts-business-case-s-2 style-home-7S">
                        <a href="project-details.html" className="thumbnail">
                          <img
                            src="assets/images/business-case/05.jpg"
                            alt="Business_case"
                          />
                        </a>
                        <div className="inner">
                          <a href="project-details.html">
                            <h5 className="title">Business Growth</h5>
                          </a>
                          <span>Business Strategy</span>
                        </div>
                        <a href="project-details.html" className="over_link" />
                      </div>
                      {/* single business case End */}
                    </div>
                    <div className="col-lg-4">
                      {/* single business case */}
                      <div className="rts-business-case-s-2 style-home-7S">
                        <a href="project-details.html" className="thumbnail">
                          <img
                            src="assets/images/business-case/06.jpg"
                            alt="Business_case"
                          />
                        </a>
                        <div className="inner">
                          <a href="project-details.html">
                            <h5 className="title">Business Growth</h5>
                          </a>
                          <span>Business Strategy</span>
                        </div>
                        <a href="project-details.html" className="over_link" />
                      </div>
                      {/* single business case End */}
                    </div>
                    <div className="col-lg-4">
                      {/* single business case */}
                      <div className="rts-business-case-s-2 style-home-7S">
                        <a href="project-details.html" className="thumbnail">
                          <img
                            src="assets/images/business-case/07.jpg"
                            alt="Business_case"
                          />
                        </a>
                        <div className="inner">
                          <a href="project-details.html">
                            <h5 className="title">Business Growth</h5>
                          </a>
                          <span>Business Strategy</span>
                        </div>
                        <a href="project-details.html" className="over_link" />
                      </div>
                      {/* single business case End */}
                    </div>
                    <div className="col-lg-4">
                      {/* single business case */}
                      <div className="rts-business-case-s-2 style-home-7S">
                        <a href="project-details.html" className="thumbnail">
                          <img
                            src="assets/images/business-case/04.jpg"
                            alt="Business_case"
                          />
                        </a>
                        <div className="inner">
                          <a href="project-details.html">
                            <h5 className="title">Business Growth</h5>
                          </a>
                          <span>Business Strategy</span>
                        </div>
                        <a href="project-details.html" className="over_link" />
                      </div>
                      {/* single business case End */}
                    </div>
                    <div className="col-lg-4">
                      {/* single business case */}
                      <div className="rts-business-case-s-2 style-home-7S">
                        <a href="project-details.html" className="thumbnail">
                          <img
                            src="assets/images/business-case/07.jpg"
                            alt="Business_case"
                          />
                        </a>
                        <div className="inner">
                          <a href="project-details.html">
                            <h5 className="title">Business Growth</h5>
                          </a>
                          <span>Business Strategy</span>
                        </div>
                        <a href="project-details.html" className="over_link" />
                      </div>
                      {/* single business case End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts portfolio area end */}
      {/* start call to action area */}
      <div className="rts-callto-acation-area rts-callto-acation-area4 bg-call-to-action-two">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cta-two-wrapper">
                <div className="title-area">
                  <h3 className="title">
                    Let’s discuss about how we can help <br />
                    make your insurance better
                  </h3>
                </div>
                <a className="rts-btn btn-primary-5" href="contactus.html">
                  Lets Work Together
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end call to action area */}
      <div className="bg-shape-wrapper-two">
        {/* customers testimonials start */}
        <div className="rts-testimonials-6 rts-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title-area-style-six text-center">
                  <div className="pre-title">
                    <img
                      src="assets/images/banner/shape/pre-title.png"
                      alt="pre-title"
                    />
                    <span className="pre">Business Progress</span>
                    <img
                      className="two"
                      src="assets/images/banner/shape/pre-title.png"
                      alt="pre-title"
                    />
                  </div>
                  <h2 className="title">Customer Testimonials</h2>
                </div>
              </div>
            </div>
            <div className="row g-5 mt--30">
              <div className="col-lg-12">
                <div className="swiper clients-review-testimonials-7">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonials-7-style">
                        <a className="thumb" href="#">
                          <img
                            src="assets/images/testimonials/08.png"
                            alt="image"
                          />
                        </a>
                        <div className="body">
                          <h5 className="title">The quick settle tips</h5>
                          <p className="disc">
                            “Itae varius intger justo neque massa facisi orci,
                            lobortis rutrum dictumst morbi metus aptent sem nunc
                            a conubia”
                          </p>
                        </div>
                        <div className="footer">
                          <div className="name-area">
                            <a href="#">
                              <h6 className="title">Andrew Smith</h6>
                            </a>
                            <span>Zoko Author</span>
                          </div>
                          <div className="stars-area">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonials-7-style">
                        <a className="thumb" href="#">
                          <img
                            src="assets/images/testimonials/08.png"
                            alt="image"
                          />
                        </a>
                        <div className="body">
                          <h5 className="title">The quick settle tips</h5>
                          <p className="disc">
                            “Itae varius intger justo neque massa facisi orci,
                            lobortis rutrum dictumst morbi metus aptent sem nunc
                            a conubia”
                          </p>
                        </div>
                        <div className="footer">
                          <div className="name-area">
                            <a href="#">
                              <h6 className="title">Andrew Smith</h6>
                            </a>
                            <span>Zoko Author</span>
                          </div>
                          <div className="stars-area">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonials-7-style">
                        <a className="thumb" href="#">
                          <img
                            src="assets/images/testimonials/08.png"
                            alt="image"
                          />
                        </a>
                        <div className="body">
                          <h5 className="title">The quick settle tips</h5>
                          <p className="disc">
                            “Itae varius intger justo neque massa facisi orci,
                            lobortis rutrum dictumst morbi metus aptent sem nunc
                            a conubia”
                          </p>
                        </div>
                        <div className="footer">
                          <div className="name-area">
                            <a href="#">
                              <h6 className="title">Andrew Smith</h6>
                            </a>
                            <span>Zoko Author</span>
                          </div>
                          <div className="stars-area">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonials-7-style">
                        <a className="thumb" href="#">
                          <img
                            src="assets/images/testimonials/08.png"
                            alt="image"
                          />
                        </a>
                        <div className="body">
                          <h5 className="title">The quick settle tips</h5>
                          <p className="disc">
                            “Itae varius intger justo neque massa facisi orci,
                            lobortis rutrum dictumst morbi metus aptent sem nunc
                            a conubia”
                          </p>
                        </div>
                        <div className="footer">
                          <div className="name-area">
                            <a href="#">
                              <h6 className="title">Andrew Smith</h6>
                            </a>
                            <span>Zoko Author</span>
                          </div>
                          <div className="stars-area">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="col-lg-4">
                  <div class="testimonials-7-style">
                      <a class="thumb" href="#"><img src="assets/images/testimonials/08.png" alt="image"></a>
                      <div class="body">
                          <h5 class="title">
                              The quick settle tips
                          </h5>
                          <p class="disc">
                              “Itae varius intger justo neque massa facisi orci, lobortis rutrum dictumst morbi metus
                              aptent sem nunc a conubia”
                          </p>
                      </div>
                      <div class="footer">
                          <div class="name-area">
                              <a href="#">
                                  <h6 class="title">
                                      Andrew Smith
                                  </h6>
                              </a>
                              <span>Zoko Author</span>
                          </div>
                          <div class="stars-area">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4">
                  <div class="testimonials-7-style">
                      <a class="thumb" href="#"><img src="assets/images/testimonials/08.png" alt="image"></a>
                      <div class="body">
                          <h5 class="title">
                              The quick settle tips
                          </h5>
                          <p class="disc">
                              “Itae varius intger justo neque massa facisi orci, lobortis rutrum dictumst morbi metus
                              aptent sem nunc a conubia”
                          </p>
                      </div>
                      <div class="footer">
                          <div class="name-area">
                              <a href="#">
                                  <h6 class="title">
                                      Andrew Smith
                                  </h6>
                              </a>
                              <span>Zoko Author</span>
                          </div>
                          <div class="stars-area">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4">
                  <div class="testimonials-7-style">
                      <a class="thumb" href="#"><img src="assets/images/testimonials/08.png" alt="image"></a>
                      <div class="body">
                          <h5 class="title">
                              The quick settle tips
                          </h5>
                          <p class="disc">
                              “Itae varius intger justo neque massa facisi orci, lobortis rutrum dictumst morbi metus
                              aptent sem nunc a conubia”
                          </p>
                      </div>
                      <div class="footer">
                          <div class="name-area">
                              <a href="#">
                                  <h6 class="title">
                                      Andrew Smith
                                  </h6>
                              </a>
                              <span>Zoko Author</span>
                          </div>
                          <div class="stars-area">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                          </div>
                      </div>
                  </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* customers testimonials end */}
        {/* business progress area start */}
        <div className="business-progress-area rts-section-gapBottom">
          <div className="box">
            <img src="assets/images/business-goal/icon/box.png" alt="box" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="thumbnail-progress-7">
                  <img
                    src="assets/images/business-goal/05.png"
                    alt="progress"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="title-area-style-six text-start">
                  <div className="pre-title">
                    <img
                      src="assets/images/banner/shape/pre-title.png"
                      alt="pre-title"
                    />
                    <span className="pre">Business Progress</span>
                    <img
                      className="two"
                      src="assets/images/banner/shape/pre-title.png"
                      alt="pre-title"
                    />
                  </div>
                  <h2 className="title">
                    We’re Solve Revolutionary for your Company
                  </h2>
                </div>
                <div className="inner-goal-progress-7">
                  <p className="disc">
                    Vehicula euismod ante dis ullamcorper quam orci facilisis,
                    condimentum cursus mattis tincidunt vitae porta litora, dui
                    ridiculus enim lacinia blandit curabitur. Dui dapibus
                    praesent magna tempor metus facilisis proin imperdiet
                  </p>
                  <div className="row mb--50 g-5">
                    <div className="col-lg-6">
                      <div className="left-business-goal">
                        <div className="left">
                          <h4 className="title">98%</h4>
                          <p className="dsic">Company Growth</p>
                        </div>
                        <div className="right">
                          <img
                            src="assets/images/business-goal/icon/05.svg"
                            alt="logo"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="left-business-goal">
                        <div className="left">
                          <h4 className="title">98%</h4>
                          <p className="dsic">Company Growth</p>
                        </div>
                        <div className="right">
                          <img
                            src="assets/images/business-goal/icon/05.svg"
                            alt="logo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="rts-btn btn-primary-5">
                    Let’s Work Together
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* business progress area end */}
        {/* rts blog area start */}
        <div className="rts-blog-area rts-section-gapBottom" id="blog">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title-area-style-six text-center">
                  <div className="pre-title">
                    <img
                      src="assets/images/banner/shape/pre-title.png"
                      alt="pre-title"
                    />
                    <span className="pre">Business Progress</span>
                    <img
                      className="two"
                      src="assets/images/banner/shape/pre-title.png"
                      alt="pre-title"
                    />
                  </div>
                  <h2 className="title">Latest Blog Posts</h2>
                </div>
              </div>
            </div>
            <div className="row mt--10 g-5">
              <div className="col-lg-4">
                {/* single blog area start */}
                <div className="rts-blog-area-style-seven">
                  <div className="thumbnail">
                    <a href="#">
                      <img src="assets/images/blog/14.png" alt="blog-area" />
                    </a>
                    <div className="badge">
                      <span>25. 05. 2023</span>
                    </div>
                  </div>
                  <div className="content-inner">
                    <div className="top-blog">
                      <span className="main">Business Solution</span>
                      <span> / by David Dolean</span>
                    </div>
                    <a className="title" href="#">
                      <h5 className="title">
                        The quick settle tips of the new ages exist
                      </h5>
                    </a>
                    <a
                      className="rts-read-more btn-primary"
                      href="blog-details.html"
                    >
                      <i className="far fa-arrow-right" />
                      Read More
                    </a>
                  </div>
                </div>
                {/* single blog area end */}
              </div>
              <div className="col-lg-4">
                {/* single blog area start */}
                <div className="rts-blog-area-style-seven">
                  <div className="thumbnail">
                    <a href="#">
                      <img src="assets/images/blog/15.png" alt="blog-area" />
                    </a>
                    <div className="badge">
                      <span>25. 05. 2023</span>
                    </div>
                  </div>
                  <div className="content-inner">
                    <div className="top-blog">
                      <span className="main">Business Solution</span>
                      <span> / by David Dolean</span>
                    </div>
                    <a className="title" href="#">
                      <h5 className="title">
                        The quick settle tips of the new ages exist
                      </h5>
                    </a>
                    <a
                      className="rts-read-more btn-primary"
                      href="blog-details.html"
                    >
                      <i className="far fa-arrow-right" />
                      Read More
                    </a>
                  </div>
                </div>
                {/* single blog area end */}
              </div>
              <div className="col-lg-4">
                {/* single blog area start */}
                <div className="rts-blog-area-style-seven">
                  <div className="thumbnail">
                    <a href="#">
                      <img src="assets/images/blog/16.png" alt="blog-area" />
                    </a>
                    <div className="badge">
                      <span>25. 05. 2023</span>
                    </div>
                  </div>
                  <div className="content-inner">
                    <div className="top-blog">
                      <span className="main">Business Solution</span>
                      <span> / by David Dolean</span>
                    </div>
                    <a className="title" href="#">
                      <h5 className="title">
                        The quick settle tips of the new ages exist
                      </h5>
                    </a>
                    <a
                      className="rts-read-more btn-primary"
                      href="blog-details.html"
                    >
                      <i className="far fa-arrow-right" />
                      Read More
                    </a>
                  </div>
                </div>
                {/* single blog area end */}
              </div>
            </div>
          </div>
        </div>
        {/* rts blog area edn */}
      </div>
      {/* start footer area */}
      {/* rts footer area start */}
      <div className="rts-footer-area footer-one rts-section-gapTop bg-footer-one">
        <div className="container bg-shape-f1">
          {/* footer call to action area */}
          <div className="row">
            <div className="col-12">
              <div className="rts-cta-wrapper">
                <div className="background-cta">
                  <div className="row">
                    {/* cta-left */}
                    <div className="col-lg-6">
                      <div className="cta-left-wrapepr">
                        <p className="cta-disc">Latest Business Ideas</p>
                        <h3 className="title">Sign Up Newsletter</h3>
                      </div>
                    </div>
                    {/* cta left end */}
                    <div className="col-lg-6">
                      {/* cta right */}
                      <form className="cta-input-arae">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter Email Address"
                          required=""
                        />
                        <button type="submit" className="rts-btn btn-primary">
                          Subscribe Now
                        </button>
                      </form>
                      {/* cta right End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer call to action area End */}
          {/* rts footer area */}
          <div className="row pt--120 pt_sm--80 pb--80 pb_sm--40">
            <div className="col-xl-4 col-md-6 col-sm-12 col-12">
              <div className="footer-one-single-wized seven">
                <div className="wized-title">
                  <h5 className="title">Quick Links</h5>
                  <img
                    src="assets/images/footer/under-title.png"
                    alt="finbiz_footer"
                  />
                </div>
                <div className="quick-link-inner">
                  <ul className="links">
                    <li>
                      <a href="#">
                        <i className="far fa-arrow-right" /> Forum Support
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-arrow-right" /> Help &amp; FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-arrow-right" /> Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-arrow-right" /> Pricing &amp; Plans
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-arrow-right" /> Cookie Policy
                      </a>
                    </li>
                  </ul>
                  <ul className="links margin-left-70">
                    <li>
                      <a href="#">
                        <i className="far fa-arrow-right" /> About Us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-arrow-right" /> My Account
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-arrow-right" />
                        Our Company
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-arrow-right" />
                        Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* footer mid area */}
            <div className="col-xl-4 col-md-6 col-sm-12 col-12">
              <div className="footer-one-single-wized mid-bg">
                <div className="wized-title">
                  <h5 className="title">Opening Hours</h5>
                  <img
                    src="assets/images/footer/under-title.png"
                    alt="finbiz_footer"
                  />
                </div>
                <div className="opening-time-inner">
                  <div className="single-opening">
                    <p className="day">Week Days</p>
                    <p className="time">09.00 - 24:00</p>
                  </div>
                  <div className="single-opening">
                    <p className="day">Saturday</p>
                    <p className="time">08:00 - 03.00</p>
                  </div>
                  <div className="single-opening mb--30 mb_sm--10">
                    <p className="day">Sunday</p>
                    <p className="time">Day Off</p>
                  </div>
                  <a href="#" className="rts-btn btn-primary contact-us">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            {/* footer mid area end */}
            {/* footer end area post */}
            <div className="col-xl-4 col-md-6 col-sm-12 col-12">
              <div className="footer-one-single-wized seven margin-left-65">
                <div className="wized-title">
                  <h5 className="title">Popular Updates</h5>
                  <img
                    src="assets/images/footer/under-title.png"
                    alt="finbiz_footer"
                  />
                </div>
                <div className="post-wrapper">
                  {/* single post */}
                  <div className="single-footer-post mb--30">
                    <div className="left-thumbnail">
                      <img
                        src="assets/images/footer/post/01.png"
                        alt="finbiz_business-post"
                      />
                    </div>
                    <div className="post-right">
                      <p>
                        {" "}
                        <i className="fal fa-clock" /> 15th April, 2022
                      </p>
                      <a href="blog-details.html">
                        <h6 className="title">
                          Best Business Ideas For Getting Solution
                        </h6>
                      </a>
                      <a className="red-more" href="blog-details.html">
                        Read More
                        <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  {/* single post End */}
                  {/* single post */}
                  <div className="single-footer-post">
                    <div className="left-thumbnail">
                      <img
                        src="assets/images/footer/post/02.png"
                        alt="finbiz_business-post"
                      />
                    </div>
                    <div className="post-right">
                      <p>
                        {" "}
                        <i className="fal fa-clock" /> 15th April, 2022
                      </p>
                      <a href="blog-details.html">
                        <h6 className="title">
                          Best Business Ideas For Getting Solution
                        </h6>
                      </a>
                      <a className="red-more" href="blog-details.html">
                        Read More
                        <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  {/* single post End */}
                </div>
              </div>
            </div>
            {/* footer end area post end*/}
          </div>
          {/* rts footer area End */}
        </div>
        {/* copyright area start */}
        <div className="rts-copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-center">
                  <p>FINBIZ - Copyright 2022. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* copyright area end */}
      </div>
      {/* rts footer area end */}
      {/* ENd footer Area */}
      {/* start loader */}
      <div className="loader-wrapper">
        <div className="loader"></div>
        <div className="loader-section section-left" />
        <div className="loader-section section-right" />
      </div>
      {/* End loader */}
      {/* progress Back to top */}
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* progress Back to top End */}
      {/* scripts start form hear */}
      {/* main Js */}
      {/* scripts end form hear */}
    </>
  );
}

export default App;

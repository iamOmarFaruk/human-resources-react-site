import React from 'react'

const PortfolioSection = () => {
  return (
    <>
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
    </>
  )
}

export default PortfolioSection
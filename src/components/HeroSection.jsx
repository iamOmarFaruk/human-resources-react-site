import React from 'react'
import Typewriter from 'typewriter-effect';


function HeroSection() {
  return (
    <>
      {/* rts banner area start */}
      <div
        className="rts-banner-area banner-human-bg rts-section-gap"
        id="banner"
      >
        <div className="shape">
          <img src="assets/images/banner/shape/h7-banner.png" alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* banner area inner six */}
              <div className="banner-inner-six">
                <h1 className="title mb--30">
                  <span className="pre">
                    <Typewriter
                      options={{
                        strings: ['Let’s create', 'Awesome things with ReactJS'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                  your <span className="primary">success.</span>
                </h1>
                <p className="disc">
                  HR consulting expertise that helps your business thrive.
                </p>
                <a href="#" className="rts-btn btn-primary-5 rounded-2">
                  Let’s Work Together
                </a>
              </div>
              {/* banner area inner six end */}
            </div>
          </div>
        </div>
      </div>
      {/* rts banner area end */}
    </>
  )
}

export default HeroSection
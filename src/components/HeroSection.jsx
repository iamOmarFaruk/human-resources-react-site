import React from 'react'
import Typewriter from 'typewriter-effect';
import Button from './elements/Button';


function HeroSection ({ typingText, headingText, headingTextBold, subHeading, buttonText, buttonLink  }) {
  return (
    <>
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

              <div className="banner-inner-six">
                <h1 className="title mb--30">
                  <span className="pre">
                    <Typewriter
                      options={{
                        strings: typingText,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                  your <span className="primary">success.</span>
                </h1>
                <p className="disc">
                  {subHeading}
                </p>

                <Button
                  buttonText={buttonText}
                  buttonUrl={buttonLink}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
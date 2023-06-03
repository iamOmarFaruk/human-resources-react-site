import React from 'react'

function LatestBlog() {
  return (
    <>
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
    </>
  )
}

export default LatestBlog
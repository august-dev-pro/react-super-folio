import React from "react";

const Portfolio = () => {
  return (
    <div className="section px-2 px-lg-4 pt-5" id="portfolio">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="marker marker-center">Portfolio </h2>
        </div>
        <div
          className="grid bp-gallery pb-3"
          data-aos="zoom-in-up"
          data-aos-delay="100"
        >
          <div className="grid-sizer"></div>
          <div className="grid-item">
            <a href="https://dribbble.com">
              <figure className="portfolio-item">
                <img
                  alt="descr"
                  src="images/portfolio/1-small.png"
                  data-bp="images/portfolio/1.jpg"
                />
                <figcaption>
                  <h4 className="h5 mb-0">Web Design</h4>
                  <div>Dribbble.com</div>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="grid-item">
            <a href="https://github.com">
              <figure className="portfolio-item">
                <img
                  alt="descr"
                  src="images/portfolio/2-small.png"
                  data-bp="images/portfolio/2.jpg"
                  data-caption="Example of an optional caption."
                />
                <figcaption>
                  <h4 className="h5 mb-0">Web Development</h4>
                  <div>GitHub.com</div>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="grid-item">
            <a href="https://soundcloud.com/">
              <figure className="portfolio-item">
                <img
                  alt="descr"
                  src="images/portfolio/3-small.png"
                  data-bp="images/portfolio/3.jpg"
                  data-caption="Example of an optional caption."
                />
                <figcaption>
                  <h4 className="h5 mb-0">Audio Mixing</h4>
                  <div>Soundcloud.com</div>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="grid-item">
            <a href="https://www.adobe.com/">
              <figure className="portfolio-item">
                <img
                  alt="descr"
                  src="images/portfolio/4-small.png"
                  data-bp="images/portfolio/4.jpg"
                />
                <figcaption>
                  <h4 className="h5 mb-0">Video Editing</h4>
                  <div>Adobe After Effects</div>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="grid-item">
            <a href="https://www.adobe.com/">
              <figure className="portfolio-item">
                <img
                  alt="descr"
                  src="images/portfolio/5-small.png"
                  data-bp="images/portfolio/5.jpg"
                />
                <figcaption>
                  <h4 className="h5 mb-0">Photography</h4>
                  <div>Adobe Photoshop</div>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="grid-item">
            <a href="https://www.android.com/">
              <figure className="portfolio-item">
                <img
                  alt="descr"
                  src="images/portfolio/6-small.png"
                  data-bp="images/portfolio/6.jpg"
                />
                <figcaption>
                  <h4 className="h5 mb-0">App Development</h4>
                  <div>Android</div>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="grid-item">
            <a href="https://flutter.dev/">
              <figure className="portfolio-item">
                <img
                  alt="descr"
                  src="images/portfolio/7-small.png"
                  data-bp="images/portfolio/7.jpg"
                />
                <figcaption>
                  <h4 className="h5 mb-0">App Design</h4>
                  <div>Flutter</div>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="grid-item">
            <a href="https://flutter.dev/">
              <figure className="portfolio-item">
                <img
                  alt="descr"
                  src="images/portfolio/8-small.png"
                  data-bp="images/portfolio/8.jpg"
                />
                <figcaption>
                  <h4 className="h5 mb-0">App Development</h4>
                  <div>Flutter</div>
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

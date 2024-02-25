import React from "react";

const TestImonials = () => {
  return (
    <div className="section px-3 px-lg-4 pt-5" id="testimonials">
      <div className="container-narrow">
        <div className="text-center mb-5">
          <h2 className="marker marker-center">Client Testimonials</h2>
        </div>
        <div className="row">
          <div
            className="col-md-6 mb-5"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="d-flex ms-md-3">
              <span>
                <i className="fas fa-2x fa-quote-left"></i>
              </span>
              <span className="m-2">
                Walter displays exemplary professionalism and is able to take on
                challenges. He learns quickly and is an asset to any team.
              </span>
            </div>
            <div className="d-flex justify-content-end align-items-end">
              <div className="text-end me-2">
                <div className="fw-bolder">Aiyana</div>
                <div className="text-small">CEO / Web Design Company</div>
              </div>
              <img
                className="me-md-3 rounded"
                src="images/testimonials/client1.jpg"
                width="96"
                height="96"
                alt="client 1"
              />
            </div>
          </div>
          <div
            className="col-md-6 mb-5"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="d-flex ms-md-3">
              <span>
                <i className="fas fa-2x fa-quote-left"></i>
              </span>
              <span className="m-2">
                Walter displays exemplary professionalism and is able to take on
                challenges. He learns quickly and is an asset to any team.
              </span>
            </div>
            <div className="d-flex justify-content-end align-items-end">
              <div className="text-end me-2">
                <div className="fw-bolder">Alexander</div>
                <div className="text-small">CEO / Web Design Company</div>
              </div>
              <img
                className="me-md-3 rounded"
                src="images/testimonials/client2.jpg"
                width="96"
                height="96"
                alt="client 1"
              />
            </div>
          </div>
          <div
            className="col-md-6 mb-5"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="d-flex ms-md-3">
              <span>
                <i className="fas fa-2x fa-quote-left"></i>
              </span>
              <span className="m-2">
                Walter is a great co-worker and problem solver. He is quick to
                extend his helping hand and makes a good team player.
              </span>
            </div>
            <div className="d-flex justify-content-end align-items-end">
              <div className="text-end me-2">
                <div className="fw-bolder">Ariya</div>
                <div className="text-small">Web Developer</div>
              </div>
              <img
                className="me-md-3 rounded"
                src="images/testimonials/client3.jpg"
                width="96"
                height="96"
                alt="client 1"
              />
            </div>
          </div>
          <div
            className="col-md-6 mb-5"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="d-flex ms-md-3">
              <span>
                <i className="fas fa-2x fa-quote-left"></i>
              </span>
              <span className="m-2">
                Walter is a great co-worker and problem solver. He is quick to
                extend his helping hand and makes a good team player.
              </span>
            </div>
            <div className="d-flex justify-content-end align-items-end">
              <div className="text-end me-2">
                <div className="fw-bolder">Braiden</div>
                <div className="text-small">Web Designer</div>
              </div>
              <img
                className="me-md-3 rounded"
                src="images/testimonials/client4.jpg"
                width="96"
                height="96"
                alt="client 1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestImonials;

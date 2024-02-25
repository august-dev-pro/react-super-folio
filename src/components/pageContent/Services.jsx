import React from "react";

const Services = () => {
  return (
    <div class="section px-3 px-lg-4 pt-5" id="services">
      <div class="container-narrow">
        <div class="text-center mb-5">
          <h2 class="marker marker-center">My Services</h2>
        </div>
        <div class="text-center">
          <p class="mx-auto mb-3" style={{ maxWidth: "600px" }}>
            I offer services fit for any website or app. I can quickly maximize
            timely deliverables for real-time schemas.
          </p>
        </div>
        <div class="row py-3">
          <div
            class="col-md-3 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              class="mb-2"
              src="images/services/web-design.svg"
              width="96"
              height="96"
              alt="web design"
            />
            <div class="h5">Web Design</div>
          </div>
          <div
            class="col-md-3 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              class="mb-2"
              src="images/services/graphic-design.svg"
              width="96"
              height="96"
              alt="graphic design"
            />
            <div class="h5">Graphic Design</div>
          </div>
          <div
            class="col-md-3 text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              class="mb-2"
              src="images/services/ui-ux.svg"
              width="96"
              height="96"
              alt="ui-ux"
            />
            <div class="h5">UI/UX</div>
          </div>
          <div
            class="col-md-3 text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              class="mb-2"
              src="images/services/app-development.svg"
              width="96"
              height="96"
              alt="app development"
            />
            <div class="h5">App Development</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

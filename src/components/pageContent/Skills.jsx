import React from "react";

const Skills = () => {
  return (
    <div class="section px-3 px-lg-4 pt-5" id="skills">
      <div class="container-narrow">
        <div class="text-center mb-5">
          <h2 class="marker marker-center">My Skills</h2>
        </div>
        <div class="text-center">
          <p
            class="mx-auto mb-3"
            //style="max-width:600px"
            style={{ maxWidth: "90%" }}
          >
            I am a quick learner and specialize in multitude of skills required
            for Web Application Development and Product Design
          </p>
        </div>
        <div class="bg-light p-3">
          <div class="row">
            <div class="col-md-5">
              <div class="py-1">
                <div class="d-flex text-small fw-bolder">
                  <span class="me-auto">HTML5</span>
                  <span>90%</span>
                </div>
                <div class="progress my-1">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    data-aos="zoom-in-right"
                    data-aos-delay="100"
                    data-aos-anchor=".skills-section"
                    //   style="width: 90%"
                    style={{ width: "90%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="py-1">
                <div class="d-flex text-small fw-bolder">
                  <span class="me-auto">CSS3</span>
                  <span>90%</span>
                </div>
                <div class="progress my-1">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    data-aos="zoom-in-right"
                    data-aos-delay="200"
                    data-aos-anchor=".skills-section"
                    //style="width: 90%"
                    style={{ width: "90%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="py-1">
                <div class="d-flex text-small fw-bolder">
                  <span class="me-auto">JavaScript</span>
                  <span>80%</span>
                </div>
                <div class="progress my-1">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    data-aos="zoom-in-right"
                    data-aos-delay="300"
                    data-aos-anchor=".skills-section"
                    //style="width: 80%"
                    style={{ width: "80%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="py-1">
                <div class="d-flex text-small fw-bolder">
                  <span class="me-auto">React</span>
                  <span>75%</span>
                </div>
                <div class="progress my-1">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    data-aos="zoom-in-right"
                    data-aos-delay="300"
                    data-aos-anchor=".skills-section"
                    //style="width: 75%"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div class="col-md-5 offset-md-2">
              <div class="py-1">
                <div class="d-flex text-small fw-bolder">
                  <span class="me-auto">PHP</span>
                  <span>70%</span>
                </div>
                <div class="progress my-1">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    data-aos="zoom-in-right"
                    data-aos-delay="400"
                    data-aos-anchor=".skills-section"
                    //style="width: 70%"
                    style={{ width: "70%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="py-1">
                <div class="d-flex text-small fw-bolder">
                  <span class="me-auto">WordPress</span>
                  <span>70%</span>
                </div>
                <div class="progress my-1">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    data-aos="zoom-in-right"
                    data-aos-delay="500"
                    data-aos-anchor=".skills-section"
                    //style="width: 70%"
                    style={{ width: "70%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="py-1">
                <div class="d-flex text-small fw-bolder">
                  <span class="me-auto">MySQL</span>
                  <span>60%</span>
                </div>
                <div class="progress my-1">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    data-aos="zoom-in-right"
                    data-aos-delay="600"
                    data-aos-anchor=".skills-section"
                    //style="width: 60%"
                    style={{ width: "60%" }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="py-1">
                <div class="d-flex text-small fw-bolder">
                  <span class="me-auto">Photoshop</span>
                  <span>60%</span>
                </div>
                <div class="progress my-1">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    data-aos="zoom-in-right"
                    data-aos-delay="600"
                    data-aos-anchor=".skills-section"
                    //style="width: 60%"
                    style={{ width: "60%" }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

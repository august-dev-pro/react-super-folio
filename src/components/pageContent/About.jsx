import React from "react";

const About = () => {
  return (
    <div className="section pt-4 px-3 px-lg-4" id="about">
      <div className="container-narrow">
        <div className="row">
          <div className="col-md-6">
            <h2 className="h4 my-2">Hello! I’m Walter Patterson.</h2>
            <p>
              I am passionate about UI/UX design and Web Design. I am a skilled
              front-end developer and master of graphic design tools such as
              Photoshop and Sketch. I am a quick learner and a team worker that
              gets the job done. I can easily capitalize on low hanging fruits
              and quickly maximize timely deliverables for real-time schemas.
            </p>
            <div className="row mt-3">
              <div className="col-sm-2">
                <div className="pb-1">Age:</div>
              </div>
              <div className="col-sm-10">
                <div className="pb-1 fw-bolder">28</div>
              </div>
              <div className="col-sm-2">
                <div className="pb-1">Email:</div>
              </div>
              <div className="col-sm-10">
                <div className="pb-1 fw-bolder">walter@company.com</div>
              </div>
              <div className="col-sm-2">
                <div className="pb-1">Skype:</div>
              </div>
              <div className="col-sm-10">
                <div className="pb-1 fw-bolder">username@skype.com</div>
              </div>
              <div className="col-sm-2">
                <div className="pb-1">Phone:</div>
              </div>
              <div className="col-sm-10">
                <div className="pb-1 fw-bolder">+0718-111-0011</div>
              </div>
              <div className="col-sm-2">
                <div className="pb-1">Address:</div>
              </div>
              <div className="col-sm-10">
                <div className="pb-1 fw-bolder">New Delhi, India</div>
              </div>
              <div className="col-sm-2">
                <div className="pb-1">Staus:</div>
              </div>
              <div className="col-sm-10">
                <div className="pb-1 fw-bolder">Available</div>
              </div>
            </div>
          </div>
          <div
            className="col-md-5 offset-md-1"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <img
              className="avatar img-fluid mt-2"
              src="images/avatar.jpg"
              width="400"
              height="400"
              alt="Walter Patterson"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

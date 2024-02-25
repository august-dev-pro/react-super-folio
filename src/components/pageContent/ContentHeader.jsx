import React from "react";

const ContentHeader = () => {
  return (
    <header>
      <div className="cover bg-light">
        <div className="container px-3">
          <div className="row">
            <div className="col-lg-6 p-2">
              <img
                className="img-fluid"
                src="images/illustrations/hello3.svg"
                alt="hello"
              />
            </div>
            <div className="col-lg-6">
              <div className="mt-5">
                <p className="lead text-uppercase mb-1">Hello!</p>
                <h1
                  className="intro-title marker"
                  data-aos="fade-left"
                  data-aos-delay="50"
                >
                  I’m Walter Patterson
                </h1>
                <p
                  className="lead fw-normal mt-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Web Developer & Mobile Application Developer
                </p>
                <div
                  className="social-nav"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <nav role="navigation">
                    <ul className="nav justify-content-left">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://twitter.com/templateflip"
                          title="Twitter"
                        >
                          <i className="fab fa-twitter"></i>
                          <span className="menu-title sr-only">Twitter</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://www.facebook.com/templateflip"
                          title="Facebook"
                        >
                          <i className="fab fa-facebook"></i>
                          <span className="menu-title sr-only">Facebook</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://www.instagram.com/templateflip"
                          title="Instagram"
                        >
                          <i className="fab fa-instagram"></i>
                          <span className="menu-title sr-only">Instagram</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://www.linkedin.com/"
                          title="LinkedIn"
                        >
                          <i className="fab fa-linkedin"></i>
                          <span className="menu-title sr-only">LinkedIn</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://www.behance.net/templateflip"
                          title="Behance"
                        >
                          <i className="fab fa-behance"></i>
                          <span className="menu-title sr-only">Behance</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="mt-3" data-aos="fade-up" data-aos-delay="200">
                  <a
                    className="btn btn-primary shadow-sm mt-1 hover-effect"
                    href="#contact"
                  >
                    Get In Touch <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wave-bg"></div>
    </header>
  );
};

export default ContentHeader;

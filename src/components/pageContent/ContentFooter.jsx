import React from "react";

const ContentFooter = () => {
  return (
    <footer className="pt-4 pb-4 text-center bg-light">
      <div className="container">
        <div className="my-3">
          <div className="h4">Walter Patterson</div>
          <p>Web Developer & Mobile Application Developer</p>
          <div className="social-nav">
            <nav role="navigation">
              <ul className="nav justify-content-center">
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
        </div>
        <div className="text-small text-secondary">
          <div className="mb-1">&copy; Super Folio. All rights reserved.</div>
          <div>
            {/* <!-- Make sure to buy a license for the template before removing the line below. Buy license on https://templateflip.com/ --> */}{" "}
            Design -{" "}
            <a
              href="https://templateflip.com/"
              target="_blank"
              rel="noreferrer"
            >
              TemplateFlip
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContentFooter;

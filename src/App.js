import "./App.css";
import "./css/main.css";
import "./css/aos.css";
import "./css/bootstrap.min.css";
import "./css/bootstrap-icons/bootstrap-icons.css";
import "./css/font-awesome/css/all.min.css";

/* js import */
import "./scripts/main.js";
import "./scripts/aos.min.js";
import "./scripts/bootstrap.bundle.min.js";
import "./scripts/purecounter.min.js";
import "./scripts/BigPicture.min.js";
import "./scripts/masonry.pkgd.min.js";
import "./scripts/imagesloaded.pkgd.min.js";

import Header from "./components/layouts/Header";
import About from "./components/pageContent/About";
import Contact from "./components/pageContent/Contact";
import ContentFooter from "./components/pageContent/ContentFooter";
import ContentHeader from "./components/pageContent/ContentHeader";
import Experience from "./components/pageContent/Experience";
import Portfolio from "./components/pageContent/Portfolio";
import Services from "./components/pageContent/Services";
import Skills from "./components/pageContent/Skills";
import TestImonials from "./components/pageContent/TestImonials";

function App() {
  return (
    <div className="App" id="top">
      <Header />
      <div class="page-content">
        <div id="content">
          <ContentHeader />
          <About />
          <Services />
          <Skills />
          <Portfolio />
          <Experience />
          <TestImonials />
          <Contact />
          <ContentFooter />
        </div>
      </div>
      <div id="scrolltop">
        <a class="btn btn-secondary" href="#top">
          <span class="icon">
            <i class="fas fa-angle-up fa-x"></i>
          </span>
        </a>
      </div>
    </div>
  );
}

export default App;

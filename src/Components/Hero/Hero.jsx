import React, { useEffect, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./Hero.css";
import Hero1 from "../../Assets/Hero1.svg";
import Hero2 from "../../Assets/Hero2.svg";
import Hero3 from "../../Assets/Hero3.svg";
import Hero4 from "../../Assets/Hero4.svg";
import Hero5 from "../../Assets/Hero5.svg";
import Hero6 from "../../Assets/Hero6.png";
import { Fade, Zoom } from "react-reveal";
import { AiOutlineLine } from "react-icons/ai";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Work from "../Work/Work";
import Reviews from "../Reviews/Reviews";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
const Hero = ({ onNavLinkClick }) => {
  const handleLinkClick = (section) => {
    onNavLinkClick(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const topFloatLeft = document.querySelector(".top-float-left");
      const topFloatRight = document.querySelector(".top-float-right");
      const bottomFloatLeft = document.querySelector(".bottom-float-left");
      const bottomFloatRight = document.querySelector(".bottom-float-right");

      if (scrollTop < 180) {
        topFloatLeft.style.transform = `translateX(${-scrollTop * 0.3}px)`;
        topFloatRight.style.transform = `translateX(${scrollTop * 0.3}px)`;
        bottomFloatLeft.style.transform = `translateX(${-scrollTop * 0.3}px)`;
        bottomFloatRight.style.transform = `translateX(${scrollTop * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section id="hero" className="overflow-x-hidden">
        <div className="row row-gap-5 text-white pt-5 px-4 justify-content-around align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="main-head">
              <Fade top duration={2000} delay={1700}>
                <h6 className="hero-heading w-5 hero-heading-h6 fw-medium">
                  <span>
                    <AiOutlineLine />
                  </span>
                  Introducing
                </h6>
              </Fade>
            </div>
            <Fade top duration={2000} distance="15%" delay={1500}>
              <div className="large-heading">
                <h1 className="display-1">
                  <span> Hello </span>
                  <br />
                  <span>
                    I'm Jessy <br />
                    Walter
                  </span>
                </h1>
              </div>
              <div className="paragraph">
                <p>
                  Since beginning my journey as a freelance designer nearby 7
                  years ago, I 've done remote work for agencies, consulted for
                  startup, and collaborated with talented people to create
                  digital products.
                </p>
              </div>
              <div className="hero-button">
                <button className="btn btn-large">
                  <Link to="/contact" className="text-dark">
                    Contact Us
                  </Link>
                </button>
              </div>
            </Fade>
          </div>

          <div className="col-lg-7 col-md-6 hero-images  ">
            <Zoom delay={500} duration={2000}>
              <div className="image-1">
                <img src={Hero5} alt="round image" className="img-fluid" />
              </div>
            </Zoom>
            <div className="image-2">
              <Fade delay={800} duration={1500} bottom>
                <img src={Hero6} alt="round image" className="img-fluid" />
              </Fade>
              <Zoom delay={1000} duration={3000}>
                <div className="floating-images">
                  <div className="top-float">
                    <div className="top-float-left">
                      <img src={Hero1} alt="" className="img-fluid" />
                    </div>
                    <div className="top-float-right">
                      <img src={Hero2} alt="" className="img-fluid" />
                    </div>
                  </div>

                  <div className="bottom-float">
                    <div className="bottom-float-left">
                      <img src={Hero3} alt="" className="img-fluid" />
                    </div>
                    <div className="bottom-float-right">
                      <img src={Hero4} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <Projects />
      <Work />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};

export default Hero;

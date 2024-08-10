import React from "react";
import "./Contact.css";
import hollowImg from "../../Assets/Hero5.svg";
import { AiOutlineLine } from "react-icons/ai";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <section id="contact" className="py-5">
        <div className="container-s contact-content text-center text-light rounded-5">
          <div className="yellow-contact-img overflow-x-hidden"></div>
          <Fade bottom duration={1000}>
            <div className="outline text-center">
              <AiOutlineLine className="ai" />
            </div>
            <h1 className="mt-2 mb-4">Lets Work Together</h1>
            <p className="lead my-4">
              The technological revolution is changing aspect of our lives, and
              the fabric of society itself. it's also changing the way we learn
              and what we learn
            </p>
          </Fade>
          <Fade bottom duration={1000} delay={400}>
            <div className="hero-button text-center my-4">
              <button className="btn btn-large">
                <Link to="/contact" className="text-dark">
                  Contact Us
                </Link>
              </button>
            </div>
          </Fade>
          <div className="hollow-contact-img overflow-x-hidden">
            <img src={hollowImg} className="img-fluid" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

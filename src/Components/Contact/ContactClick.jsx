import React from "react";
import "./ContactUs.css";
import { AiOutlineLine } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { LuMail } from "react-icons/lu";
import Fade from "react-reveal/Fade";
const ContactUs = () => {
  return (
    <>
      <section id="contact-us-section" className="p-5 text-light">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <Fade right duration={1000}>
              <h6 className="hero-heading w-5 hero-heading-h6 fw-medium mb-3">
                <span>
                  <AiOutlineLine />
                </span>
                Contact Me
              </h6>
            </Fade>
            <Fade bottom duration={1000}>
              <h4 className="mb-3 contact-us-head">Get In Touch With Me</h4>
              <p className="mb-3 contact-us-content">
                The technological revolution is changing aspect of our lives,
                and the fabric of society itself. it's also changing the way we
                learn and what we learn. Factual knowledge is less prized when
                everything you ever need to know can be found on your phone.
                There's no imperative to be an expert Factual knowledge is less
                prized when everything you ever need to know can be found at
                doing everything.
              </p>
            </Fade>
            <Fade right duration={1000} delay={500} distance="10%">
              <div className="my-4 w-5">
                <div className="contact-us-main row ">
                  <div className="col-lg-6 contac-us-sub">
                    <span className="contact-us-icon">
                      <BiSolidPhoneCall className="main-icon" />
                    </span>
                    <span>
                      <h3 className="my-2">Phone</h3>
                      <p>
                        +99 (0) 101 0000 888
                        <br />
                        +99 (0) 101 0000 777
                      </p>
                    </span>
                  </div>
                  <div className="col-lg-6 contac-us-sub">
                    <span className="contact-us-icon">
                      <LuMail className="main-icon" />
                    </span>
                    <span>
                      <h3 className="my-2">Phone</h3>
                      <p>
                        +99 (0) 101 0000 888
                        <br />
                        +99 (0) 101 0000 777
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <Fade bottom duration={1000} delay={500} distance="10%">
            <div className="col-lg-5 px-3">
              <div class="row g-3 mb-5">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
                <div class="col-12">
                  <textarea
                    type="text"
                    class="form-control rounded-4 text-light"
                    placeholder="Messages *"
                    aria-label="Messages *"
                    style={{ width: "100%", height: "200px" }}
                  />
                </div>
              </div>
              <div className="hero-button">
                <button className="btn btn-large">Send To Me</button>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

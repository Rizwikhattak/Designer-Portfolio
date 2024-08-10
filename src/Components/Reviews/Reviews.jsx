import React from "react";
import "./Reviews.css";
import ReviewApi from "./ReviewApi";
import blackImg from "../../Assets/blackImg.svg";
import commasImg from "../../Assets/comma.png";
import { Fade } from "react-reveal";
const Reviews = () => {
  return (
    <>
      <section id="reviews-section">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-inner">
            {ReviewApi.map((currElem, index) => {
              return (
                <>
                  <div class={`carousel-item ${index === 0 && "active"}`}>
                    <div className="row mt-5 pt-5 pb-3 justify-content-center ">
                      <div className="col-lg-5 imagess">
                        <div className="black-review-img">
                          <img src={blackImg} className="img-fluid" alt="" />
                        </div>
                        <div className="asset-5">
                          <img
                            src={currElem.imgSrc}
                            className="img-fluid w-sm-50"
                            alt=""
                          />
                        </div>
                      </div>
                      <Fade bottom duration={1000} position="5%">
                        <div className="col-lg-5 px-5">
                          <div className="commas-img my-5">
                            <img src={commasImg} className="img-fluid" alt="" />
                          </div>
                          <div className="content-review my-5">
                            <p>
                              The quick, brown fox jumps over a lazy dog. DJs
                              flock by when MTV ax quiz prog. Junk MTV quiz
                              graced by fox whelps. Bawds jog, flick quartz, vex
                              nymphs. Waltz, bad nymph, for quick jigs vex!
                            </p>
                          </div>
                          <div className="person my-5">
                            <h6 className="hero-heading w-5 hero-heading-h6 fw-medium">
                              {currElem.title}
                            </h6>
                            <p className="lead">CEO of Figma</p>
                          </div>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;

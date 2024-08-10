import React, { useEffect, useState } from "react";
import WorkApi from "./WorkApi";
import "./Work.css";
import CountUp from "react-countup";
import hollowImg from "../../Assets/Hero5.svg";

import { Fade } from "react-reveal";
const Work = () => {
  const [state1, setState1] = useState();
  const [state2, setState2] = useState();
  const [state3, setState3] = useState();
  const [state4, setState4] = useState();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop >= 3380) {
        setState1(<CountUp end={56} duration={3} />);
        setState2(<CountUp end={87} duration={3} />);
        setState3(<CountUp end={16} duration={3} />);
        setState4(<CountUp end={7} duration={3} />);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollDown =
        window.pageYOffset || document.documentElement.scrollDown;
      const topFloatRight = document.querySelector(".hollow-img");
      const topFloatLeft = document.querySelector(".yellow-img");

      topFloatRight.style.transform = `translateX(${-scrollTop * 0.3}px)`;
      topFloatLeft.style.transform = `translateX(${scrollTop * 0.3}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section id="work-section" className="p-5 text-light overflow-x-hidden">
        <div className="hollow-img overflow-x-hidden">
          <img src={hollowImg} className="img-fluid" alt="" />
        </div>
        <div class="row py-5">
          {WorkApi.map((currElem, index) => {
            return (
              <>
                <div class="col-lg-3 pe-1 mb-3" id="cds">
                  <div class={`cardNum-${index + 1} card work-cards`}>
                    <div class="card-body text-center">
                      <Fade bottom duration={1000}>
                        <h5 class="card-title">
                          {index === 0 && state1}
                          {index === 1 && state2}
                          {index === 2 && state3}
                          {index === 3 && state4}
                        </h5>
                        <p class="card-text">{currElem.content}</p>
                      </Fade>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="yellow-img overflow-x-hidden"></div>
      </section>
    </>
  );
};

export default Work;

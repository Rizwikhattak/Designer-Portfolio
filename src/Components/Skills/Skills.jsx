import React from "react";
import "./Skills.css";
import SkillCards from "./SkillCards";
import SkillsApi from "./SkillsApi";
import { AiOutlineLine } from "react-icons/ai";
import Fade from "react-reveal/Fade";
const Skills = () => {
  return (
    <section className="p-4 skills">
      <div className="row align-items-center flex-column-reverse flex-md-row ">
        <div className="col-lg-8 text-center order-1 order-md-2 order-lg-1">
          {SkillsApi.map((currElem, index) => {
            if (index % 2 === 0) {
              return (
                <div className="row my-3" key={index}>
                  <div className="col-sm-6 col-lg-5 mb-3 mb-sm-0">
                    <SkillCards
                      image={currElem.imgSrc}
                      heading={currElem.heading}
                      content={currElem.content}
                    />
                  </div>
                  {index + 1 < SkillsApi.length && (
                    <div
                      className="col-sm-6 col-lg-5 mb-3 mb-sm-0"
                      id="inner-cards"
                    >
                      <SkillCards
                        image={SkillsApi[index + 1].imgSrc}
                        heading={SkillsApi[index + 1].heading}
                        content={SkillsApi[index + 1].content}
                      />
                    </div>
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>

        <div className="col-lg-4 col-md-12 skills-content order-2 order-md-1 order-lg-2 my-4">
          <Fade bottom duration={2000}>
            <div className="main-head ">
              <h6 className="hero-heading w-5 hero-heading-h6 fw-medium">
                <span>
                  <AiOutlineLine />
                </span>
                My Skills
              </h6>
            </div>
          </Fade>
          <Fade bottom duration={2000} distance="15%">
            <div className="large-heading skills-card-heading">
              <h5 className="display-1 ">Why Hire Me For Next Project?</h5>
            </div>
            <div className="paragraph">
              <p className="lead">
                The technological revolution is changing aspect of our lives,
                and the fabric of society itself. it's also changing the way we
                learn and what we learn. Factual knowledge is less prized when
                everything you ever need to know can be found on your phone.
                There's no imperative to be an expert at doing everything when
                you can.
              </p>
            </div>
          </Fade>

          <Fade bottom duration={2000} distance="15%">
            <div className="hero-button">
              <button className="btn ">Download CV</button>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Skills;

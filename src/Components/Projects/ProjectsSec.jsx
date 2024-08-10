import React, { useEffect, useRef } from "react";
import Fade from "react-reveal/Fade";
import blackImg from "../../Assets/blackImg.svg";
import { AiOutlineLine } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
const ProjectsSec = (props) => {
  const projectImgRef = useRef(null);

  const originalRotation = -90;

  useEffect(() => {
    const handleScroll = (props) => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      console.log(props.rotSrc);

      let rotation = originalRotation + scrollTop * 0.05;
      if (rotation >= 0) {
        rotation = 0;
      } else {
        rotation = originalRotation + scrollTop * 0.05;
      }

      projectImgRef.current.style.transform = `rotateZ(${rotation}deg)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const rotImage = document.querySelector(".project-1-img-right");

  console.log(rotImage);

  return (
    <>
      <div
        className={`col-lg-6 col-md-12 skills-content my-4 px-5 ${props.orderOne}`}
      >
        <Fade bottom duration={2000}>
          <div className="main-head ">
            <h6 className="hero-heading w-5 hero-heading-h6 fw-medium">
              <span>
                <AiOutlineLine />
              </span>
              {props.project}
            </h6>
          </div>
        </Fade>
        <Fade bottom duration={2000} distance="15%">
          <div className="large-heading skills-card-heading">
            <h5 className="display-1 ">{props.heading}</h5>
          </div>
          <div className="paragraph">
            <p className="lead">{props.content}</p>
          </div>
        </Fade>

        <Fade bottom duration={2000} distance="15%">
          <div className="hero-button">
            <a href="#" className="lead">
              <span className="me-3">
                <BsArrowRight className="lead" />
              </span>{" "}
              <span className="read">Read More</span>
            </a>
          </div>
        </Fade>
      </div>
      <div className={`col-lg-6 col-md-12 project-images ${props.orderTwo}`}>
        <div className={props.blackImgSrc}>
          <img src={blackImg} className="img-fluid" alt="" />
        </div>
        <div
          className={props.rotSrc}
          ref={projectImgRef}
          style={{ transition: "transform 1s ease" }}
        >
          <img src={props.imgSrc} className="img-fluid " alt="" />
        </div>
      </div>
    </>
  );
};

export default ProjectsSec;

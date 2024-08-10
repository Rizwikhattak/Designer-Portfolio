import React, { useEffect, useRef } from "react";
import Fade from "react-reveal/Fade";
import blackImg from "../../Assets/blackImg.svg";
import { AiOutlineLine } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import "./Projects.css";
import ProjectsApi from "./ProjectsApi";
import ProjectsSec from "./ProjectsSec";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Projects = () => {
  const location = useLocation();

  // Check if the current location matches the desired URL
  const isOnProjectsPage = location.pathname === "/projects";

  return (
    <>
      <section
        className="py-5  overflow-x-hidden overflow-y-hidden"
        id="projects"
      >
        {ProjectsApi.map((currElem, index) => {
          return isOnProjectsPage ? (
            <>
              <div className="row py-5 overflow-x-hidden overflow-y-hidden align-items-center justify-content-center">
                <ProjectsSec
                  project={currElem.project}
                  heading={currElem.heading}
                  content={currElem.content}
                  imgSrc={currElem.imgSrc}
                  orderOne={currElem.orderOne}
                  orderTwo={currElem.orderTwo}
                  blackImgSrc={currElem.blackImgSrc}
                  rotSrc={currElem.rotSrc}
                />
              </div>
              {index < ProjectsApi.length - 1 && (
                <div className={`overflow-x-hidden ${currElem.floatName}`}>
                  <img src={currElem.heroSrc} className="img-fluid" alt="" />
                </div>
              )}
            </>
          ) : (
            index < 3 && (
              <>
                <div className="row py-5 overflow-x-hidden overflow-y-hidden align-items-center justify-content-center">
                  <ProjectsSec
                    project={currElem.project}
                    heading={currElem.heading}
                    content={currElem.content}
                    imgSrc={currElem.imgSrc}
                    orderOne={currElem.orderOne}
                    orderTwo={currElem.orderTwo}
                    blackImgSrc={currElem.blackImgSrc}
                    rotSrc={currElem.rotSrc}
                  />
                </div>
                {index < ProjectsApi.length - 1 && (
                  <div className={`overflow-x-hidden ${currElem.floatName}`}>
                    <img src={currElem.heroSrc} className="img-fluid" alt="" />
                  </div>
                )}
              </>
            )
          );
        })}
        <div className="project-btn text-center">
          <a href="">
            <Link to="/projects" className=" btn btn-lg btn-light">
              <span>View More</span>
            </Link>
          </a>
        </div>
      </section>
    </>
  );
};

export default Projects;

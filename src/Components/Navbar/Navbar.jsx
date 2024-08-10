import React, { useState, useRef, useEffect } from "react";
import logoImg from "../../Assets/logo.svg";
import { FaDribbble } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [state, setState] = useState("mainNav");
  const [bars, setBars] = useState("bars");

  const activationFunction = () => {
    setState("mainNav activeNavbar");
    setBars("bars bars-active");
    document.body.classList.add("navbar-active");
  };

  const closingFunction = () => {
    setState("mainNav");
    setBars("bars ");
    document.body.classList.remove("navbar-active");
  };
  const activeRef1 = useRef(null);
  const activeRef2 = useRef(null);
  const activeRef3 = useRef(null);

  const handleActive1 = () => {
    if (!activeRef1.current.classList.contains("active-nav")) {
      activeRef1.current.classList.add("active-nav");
      activeRef2.current.classList.remove("active-nav");
      activeRef3.current.classList.remove("active-nav");
    }
  };

  const handleActive2 = () => {
    if (!activeRef2.current.classList.contains("active-nav")) {
      activeRef2.current.classList.add("active-nav");
      activeRef1.current.classList.remove("active-nav");
      activeRef3.current.classList.remove("active-nav");
    }
  };
  const handleActive3 = () => {
    if (!activeRef3.current.classList.contains("active-nav")) {
      activeRef3.current.classList.add("active-nav");
      activeRef1.current.classList.remove("active-nav");
      activeRef2.current.classList.remove("active-nav");
    }
  };

  return (
    <>
      <nav className="exclude-navbar">
        <Fade left duration={1500}>
          <div className="nav-logo">
            <img src={logoImg} alt="" />
          </div>
        </Fade>
        <Fade big delay={500} duration={1000}>
          <ul className={state}>
            <li onClick={closingFunction} className="li-close">
              <AiOutlineCloseCircle className="close-icon" />
            </li>
            <li>
              <a
                href="#"
                className="active-nav ho"
                ref={activeRef1}
                onClick={handleActive1}
              >
                <Link to="/">Home</Link>
              </a>
            </li>
            <li>
              <a href="#" className="po">
                <Link to="/projects" ref={activeRef2} onClick={handleActive2}>
                  Portfolio
                </Link>
              </a>
            </li>
            <li>
              <a href="#" className="co">
                <Link to="/contact" ref={activeRef3} onClick={handleActive3}>
                  Contact
                </Link>
              </a>
            </li>
          </ul>
        </Fade>
        <div className="nav-btns">
          <Fade right duration={1500}>
            <div className={bars} onClick={activationFunction}>
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="line-3"></div>
            </div>
            <Fade right duration={1500} delay={300}>
              <button className="first-btn">
                <FaDribbble className="nav-icon" />
              </button>
            </Fade>
          </Fade>
          <Fade right duration={1500} delay={300}>
            <button className="last-btn">
              <Link to="/contact" className="text-dark">
                Contact Us
              </Link>
            </button>
          </Fade>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

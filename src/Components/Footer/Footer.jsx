import React from "react";
import logoImg from "../../Assets/logo.svg";
import { GrLinkedinOption } from "react-icons/gr";
import { BiMessageDetail } from "react-icons/bi";
import { FaInstagram, FaBehance } from "react-icons/fa";
import "./Fotter.css";
const Footer = () => {
  return (
    <>
      <section id="footer" className="p-5 text-light">
        <div className="row justify-content-between text-md-center text-sm-center text-lg-start align-items-center">
          <div className="col-lg-3 mb-3">
            <img src={logoImg} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-7">
            <p className="m-0">
              © 2023 Freelancer - Phlox Elementor WordPress Theme. All rights
              reserved.
            </p>
          </div>
          <div className="col-lg-5 my-3">
            <div className="row">
              <div className="col-2 footer-div rounded-3 fs-4">
                <BiMessageDetail className="footer-icon" />
              </div>
              <div className="col-2 footer-div rounded-3 fs-4">
                <GrLinkedinOption className="footer-icon" />
              </div>
              <div className="col-2 footer-div rounded-3 fs-4">
                <FaInstagram className="footer-icon" />
              </div>
              <div className="col-2 footer-div rounded-3 fs-4">
                <FaBehance className="footer-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

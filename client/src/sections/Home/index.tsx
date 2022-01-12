import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "assets/logos/smi.png";
import flogo from "assets/logos/white.svg";

export const Home = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const refRowHome = useRef(null);
  const refSectionHome = useRef(null);
  const refSectionFooter = useRef(null);

  const onWindowClick = () => {
    setShowMobileMenu(false);
  };

  const onWindowScroll = () => {
    setShowMobileMenu(false);
  };

  useEffect(() => {
    document.body.classList.add("no-footer");
    return () => {
      document.body.classList.remove("no-footer");
    };
  }, []);

  return (
    <div className={"landing-page"}>
      <div className="main-container">
        <div className="content-container" id="home">
          <div className="section home" ref={refSectionHome}>
            <div className="container">
              <div className="row home-row" ref={refRowHome}>
                <div className="col-12 d-block d-md-none">
                  <NavLink to="/">
                    <img alt="mobile hero" className="mobile-hero" src={logo} />
                  </NavLink>
                </div>

                <div className="col-12 col-xl-4 col-lg-5 col-md-6">
                  <div className="home-text">
                    <div className="display-1">
                      BRANDS <br />
                      STATISTIC
                    </div>
                    <p className="white mb-5">
                      You are able to check all available brand on the database
                      <br />
                      <br />
                      Hope you enjoy it!
                    </p>
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a
                      className="btn btn-light btn-xl mr-2 mb-2"
                      href={"/brand/1368"}
                      target="_blank"
                    >
                      VIEW NOW <i className="simple-icon-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="col-12 col-xl-7 offset-xl-1 col-lg-7 col-md-6  d-none d-md-block">
                  {/* eslint-disable-next-line react/jsx-no-target-blank */}
                  <a href={"#"} target="_blank">
                    <img alt="hero" src={logo} />
                  </a>
                </div>
              </div>

              <div className="row">
                <div className="col-12 p-0">
                  <div className="home-carousel"></div>
                </div>
              </div>

              <div className="row">
                <a
                  className="btn btn-circle btn-outline-semi-light hero-circle-button"
                  href="#scroll"
                >
                  <i className="simple-icon-arrow-down" />
                </a>
              </div>
            </div>
          </div>

          <div className="section footer mb-0" ref={refSectionFooter}>
            <div className="container">
              <div className="row footer-row">
                <div className="col-12 text-right">
                  <a
                    className="btn btn-circle btn-outline-semi-light footer-circle-button c-pointer"
                    href="#scroll"
                  >
                    <i className="simple-icon-arrow-up" />
                  </a>
                </div>
                <div className="col-12 text-center footer-content">
                  <a className="c-pointer" href="#scroll">
                    <img
                      className="footer-logo"
                      alt="footer logo"
                      src={flogo}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="container copyright pt-5 pb-5">
              <div className="row">
                <div className="col-12" />
                <div className="col-12 text-center">
                  <p className="mb-0">2022 © Wbh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

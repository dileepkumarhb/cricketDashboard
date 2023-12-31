import React from "react";
import "./landingPage.css";
import Fade from "react-reveal";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <section className="lp-sec">
      <div className="lp-image">
        <Fade>
          {/* <img
            src="/sachinMain.jpg"
            alt="Sachin's poster"
            className="img-card"
          /> */}
        </Fade>
      </div>
      <div className="lp-content">
        <Fade bottom delay={1000}>
          {/* <span className="pd-700 name">Sachin Tendulkar</span> */}
        </Fade>
        <br />
        <Fade bottom delay={8000}>
          <p
            className="ssp-300 lp-subhead"
            style={{
              color: "white"
            }}
          >
            {/* “Sachin Tendulkar is a former Indian cricketer, widely regarded to
            be the greatest cricketer of all time. - <i>Wikipedia</i> ” */}
            <br />
            <br />
            Does the data agree? Let's find out.
          </p>
          <Link to="/stats" style={{ textDecoration: "none" }}>
            <Fade bottom delay={10000}>
              <button className="ssp-400 insights-button">
                See career insights
              </button>
            </Fade>
          </Link>
        </Fade>
      </div>
      <div className="lp-border" />
    </section>
  );
};

export default LandingPage;

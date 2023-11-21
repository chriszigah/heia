import React from "react";
import { heiabanner } from "../images";
import classes from "./style.module.css";

const About = () => {
  return (
    <>
      <div id="about" class={classes.aboutSection}>
        <div class={classes.aboutInfo}>
          <div class={classes.aboutInfoWrapper}>
            <div class={classes.aboutInfoColumn}>
              <div class={classes.aboutImg}>
                <img src={heiabanner} alt="About" width="100%" />
              </div>
            </div>
            <div class={classes.aboutInfoColumn}>
              <h3>About HEIA</h3>
              <p>
                High End International Academy had a successful 22-year history
                as a private school, offering education from the creche level to
                Junior High School (JHS). With a student population of 542, the
                school prided itself on providing a comprehensive educational
                experience. In addition to the core academic curriculum and
                extracurricular which includes culture, coding, choreography,
                choir, drama, and specialized programs in mathematics and
                science.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

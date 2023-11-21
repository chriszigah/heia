import React from "react";
import classes from "./style.module.css";
import { CARDS } from "./data";
const Consoles = () => {
  return (
    <>
      <div class={classes.consoleSection}>
        <h3 class={classes.consoleSectionHeader}>
          HIGH END INTERNATIONAL ACADEMY <br />
          SCHOOL MANAGEMENT SYSTEM
        </h3>
        <div className={classes.cardWrapper}>
          {CARDS.map((card) => (
            <div className={classes.cardColumn}>
              <div className={classes.card}>
                <img
                  className={classes.imgConsole}
                  src={card.image}
                  style={{ width: "100%" }}
                  alt={card.title}
                />
                <h2>{card.title}</h2>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Consoles;

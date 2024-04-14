import React from "react";
import styles from './HeroSection.module.css';
import HeroSubSection from "./HeroSubSection/HeroSubSection";

const HeroSection = () => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.item}>
        <nav className={styles.navContainer}>
          <div>
            <img
              src="./images/1200px-Swiggy_logo.png"
              alt="logo"
              className={styles.logo}
            />
          </div>
          <div>
            <button className={`${styles.loginBtn} ${styles.btn}`}>Login</button>
            <button className={`${styles.signupBtn} ${styles.btn}`}>Sign up</button>
          </div>
        </nav>

        <HeroSubSection />

      </div>
      <div className={styles.item}>
        <img
          src="./images/Lunch1_vlksgq.jpg"
          alt="lunchImage"
          className={styles.lunchImg}
        />
      </div>
    </div>
  );
};

export default HeroSection;

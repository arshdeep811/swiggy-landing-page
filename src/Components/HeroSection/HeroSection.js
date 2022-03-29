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
              src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png"
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
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"
          alt="lunch"
          className={styles.lunchImg}
        />
      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const BottomSection = () => {
  return (
    <div className="bottomflex">
      <div className="bottomItem">
        <img
          className="swiggyImg"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
          alt="Swiggy logo"
        />
      </div>
      <div className="bottomItem">
        <p style={{ color: "white", fontSize: "20px" }}>© 2021 Swiggy</p>
      </div>
      <div className="bottomItem">
        <a href="https://www.facebook.com/swiggy.in">
          <FontAwesomeIcon
            icon={faFacebookF}
            color="white"
            className="icon"
          />
        </a>
        <a href="https://pinterest.com/swiggyindia">
          <FontAwesomeIcon
            icon={faPinterest}
            color="white"
            className="icon"
          />
        </a>
        <a href="https://instagram.com/swiggyindia/">
          <FontAwesomeIcon
            icon={faInstagram}
            color="white"
            className="icon"
          />
        </a>
        <a href="https://twitter.com/swiggy_in">
          <FontAwesomeIcon
            icon={faTwitter}
            color="white"
            className="icon"
          />
        </a>
      </div>
    </div>
  );
};

export default BottomSection;

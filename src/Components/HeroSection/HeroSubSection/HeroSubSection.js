import React, { useRef, useState } from "react";
import styles from "./HeroSubSection.module.css";
import ChangeText from "./ChangeText/ChangeText";

const HeroSubSection = () => {
  const locationRef = useRef();
  let location = (
    <div>
      <div className={`${styles.btnInsideInput} ${styles.locateBtn}`}>
        <img
          src={"./crosshair-icon.png"}
          alt=""
          className={styles.locationIcon}
        />
        <span className={styles.btnText}>Locate Me</span>
      </div>
    </div>
  );
  let clear = (
    <div>
      <button className={`${styles.btnInsideInput} ${styles.clearBtn}`} onClick={()=> clearinput()}>Clear</button>
    </div>
  );

  const [flag, setFlag] = useState("location");
  const [state, setState] = useState(location);

  const valueEntered = () => {
    if (locationRef.current.value.length === 1 && flag === "location") {
      setState(clear);
      setFlag("clear");
    } 
    else if (locationRef.current.value.length === 0 && flag === "clear") {
      setState(location);
      setFlag("location");
    }
  }

  const clearinput = () =>{
    locationRef.current.value="";
    setState(location);
    setFlag("location");
  }

  const Search = () =>{
    if(locationRef.current.value.length>1){
      window.open(`https://www.swiggy.com/${locationRef.current.value}`, "_blank");
    }
  }

  return (
    <div className={styles.flexContainer}>
      <div>
        <ChangeText />

        <h2 className={styles.heading2}>
          Order food from favourite restaurants near you.
        </h2>
      </div>
      
      <form className={styles.searchWrap}>
        <div className={styles.search}>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter your delivery location"
            maxLength="30"
            onChange={valueEntered}
            ref={locationRef}
          />
          <div id="locationWrap">{state}</div>
          <button className={styles.findBtn} type="button" onClick={Search}>Find Food</button>
        </div>
      </form>
      
      <div>
        <h3 className={styles.heading3}>POPULAR CITIES IN INDIA</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="https://www.swiggy.com/ahmedabad" className={styles.listLink}>
              Ahmedabad
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="https://www.swiggy.com/bangalore" className={styles.listLink}>
              Bangalore
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="https://www.swiggy.com/chennai" className={styles.listLink}>
              Chennai
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="https://www.swiggy.com/delhi" className={styles.listLink}>
              Delhi
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="https://www.swiggy.com/gurgaon" className={styles.listLink}>
              Gurgaon
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="https://www.swiggy.com/hyderabad" className={styles.listLink}>
              Hyderabad
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="https://www.swiggy.com/kolkata" className={styles.listLink}>
              Kolkata
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="https://www.swiggy.com/mumbai" className={styles.listLink}>
              Mumbai
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="https://www.swiggy.com/pune" className={styles.listLink}>
              Pune
            </a>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listLink}>
              &amp; more.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSubSection;

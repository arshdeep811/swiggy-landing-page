import React from "react";

const TopSection = () => {
  return (
    <div className="topFlex">
      <div className="listWrap">
        <p className="topHeading">COMPANY</p>
        <ul>
          <li>
            <a href="/about">
              About us
            </a>
          </li>
          <li>
            <a href="/team">
              Team
            </a>
          </li>
          <li>
            <a href="/careers">
              Careers
            </a>
          </li>
          <li>
            <a href="/blog"alt="">
              Swiggy Blog
            </a>
          </li>
          <li>
            <a href="/bug-bounty">
              Bug Bounty
            </a>
          </li>
          <li>
            <a href="/swiggy-super">
              Swiggy Super
            </a>
          </li>
          <li>
            <a href="/corporate">
              Swiggy Corporate
            </a>
          </li>
          <li>
            <a href="/swiggy-instamart">
              Swiggy Instamart
            </a>
          </li>
        </ul>
      </div>
      <div className="listWrap">
        <div className="topHeading">CONTACT</div>
        <ul>
          <li>
            <a href="/support">
              Help &amp; Support
            </a>
          </li>
          <li>
            <a href="/partner">
              Partner with us
            </a>
          </li>
          <li>
            <a href="/ride">
              Ride with us
            </a>
          </li>
        </ul>
      </div>
      <div className="listWrap">
        <div className="topHeading">LEGAL</div>
        <ul>
          <li>
            <a href="/terms-and-conditions">
              Terms &amp; Conditions
            </a>
          </li>
          <li>
            <a href="/refund-policy">
              Refund &amp; Cancellation
            </a>
          </li>
          <li>
            <a href="/privacy-policy">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/cookie-policy">
              Cookie Policy
            </a>
          </li>
          <li>
            <a href="/offer-terms">
              Offer Terms
            </a>
          </li>
          <li>
            <a href="/beware-of-phishing-and-fraud">
              Phishing &amp; Fraud
            </a>
          </li>
        </ul>
      </div>
      <div className="listWrap">
        <a href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage">
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
          alt="Google Play" className="appImg" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&amp;referrer=utm_source%3Dswiggy%26utm_medium%3Dheader">
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
           alt="App Store" className="appImg" />
        </a>
      </div>
    </div>
  );
};

export default TopSection;

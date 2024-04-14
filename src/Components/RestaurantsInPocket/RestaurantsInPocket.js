import React from 'react';
import styles from './RestaurantsInPocket.module.css';

const RestaurantsInPocket = () => {
    return (
        <div className={styles.flexContainer}>
            <div className={styles.item1}>
                <p className={styles.heading}>Restaurants in your pocket</p>
                <p className={styles.subHeading}>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
                <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&amp;referrer=utm_source%3Dswiggy%26utm_medium%3Dheader">
                  <img style={{marginRight:"20px"}} src="./images/play_ip0jfp.webp" alt="Google Play" height="54" />
                </a>
                <a href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage">
                  <img src="./images/iOS_ajgrty.webp" alt="App Store" height="54" />
                </a>
            </div>
            <div className={styles.item2}>
                <img src="./images/pixel_wbdy4n.webp" alt="" width="384" height="489" />
            </div>
            <div className={styles.item3}>
            <img src="./images/iPhone_wgconp_j0d1fn.webp" alt="" width="384" height="489"/>
            </div>
        </div>
    );
};

export default RestaurantsInPocket;
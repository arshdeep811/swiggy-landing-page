import React from 'react';
import styles from './RestaurantsInPocket.module.css';

const RestaurantsInPocket = () => {
    return (
        <div className={styles.flexContainer}>
            <div className={styles.item1}>
                <p className={styles.heading}>Restaurants in your pocket</p>
                <p className={styles.subHeading}>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
                <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&amp;referrer=utm_source%3Dswiggy%26utm_medium%3Dheader">
                  <img style={{marginRight:"20px"}} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" alt="Google Play" height="54" />
                </a>
                <a href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage">
                  <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" alt="App Store" height="54" />
                </a>
            </div>
            <div className={styles.item2}>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n" alt="" width="384" height="489" />
            </div>
            <div className={styles.item3}>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn" alt="" width="384" height="489"/>
            </div>
        </div>
    );
};

export default RestaurantsInPocket;
import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  return (
    <div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
              alt="ability"
              className={styles.feautresImg}
            />
            <p className={styles.cardHeading}>No Minimum Order</p>
          </div>
          <div>
            <p className={styles.cardBody}>
              Order in for yourself or for the group, with no restrictions on
              order value
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
              alt="ability"
              className={styles.feautresImg}
            />
            <p className={styles.cardHeading}>Live Order Tracking</p>
          </div>
          <div>
            <p className={styles.cardBody}>
              Know where your order is at all times, from the restaurant to your
              doorstep
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
              alt="ability"
              className={styles.feautresImg}
            />
            <p className={styles.cardHeading}>Lightning-Fast Delivery</p>
          </div>
          <div>
            <p className={styles.cardBody}>
              Experience Swiggy's superfast delivery for food delivered fresh &
              on time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

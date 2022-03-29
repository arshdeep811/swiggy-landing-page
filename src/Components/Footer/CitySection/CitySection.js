import React from 'react';
import Citylist from "./CityList";
import city from "./city";

const CitySection = () => {

    const b = city;
    const a = b.citylist;

    return (
    <div>
      <p className="heading">WE DELIVER TO</p>
      <div className="actionflex">
        {a.map((arr, index) => {
          return <Citylist head={arr[0]} list={arr[1]} key={index}/>;
        })}
      </div>
    </div>

    );
};

export default CitySection;
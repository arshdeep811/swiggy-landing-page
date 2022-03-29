import React from 'react';

const CityList = (props) => {
    return (
        <div className="minwidth">
            <p style={{color:"#80807d",fontWeight:"600",fontSize:"15px"}}>{props.head}</p>
            <ul>
                {
                    props.list.map((arr,index)=>{
                     return(
                        <a href={arr} key={index}><li>{arr}</li></a>
                        );
                    })
                    
                }
                
            </ul>
        </div>
    );
};

export default CityList;
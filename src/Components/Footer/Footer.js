import React from 'react';
import './Footer.css';
import CitySection from './CitySection/CitySection';
import BottomSection from './BottomSection/BottomSection';
import TopSection from './TopSection/TopSection';

const Footer = () => {
    return (
        <div>
            <TopSection />
            <CitySection />
            <BottomSection />
        </div>
    );
};

export default Footer;
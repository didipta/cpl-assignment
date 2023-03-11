import React from 'react';
import Sliderslick from './Sliderslick';
import "../Homepage/style.css"
const Popular = () => {
    return (
        <div className="bg-imgset">
            <Sliderslick></Sliderslick>
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                <button className="bg-blue-900 p-2 text-white pl-5 pr-5 rounded-3xl font-medium">VIEW ALL PACKAGES</button>
            </div>
        </div>
    );
};

export default Popular;
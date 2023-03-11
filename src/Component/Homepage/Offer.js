import React from 'react';

const Offer = () => {
    return (
        <div className="relative">
        <div className="w-full h-[60vh] offer"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-4 z-50">
            <h1 className=" text-5xl text-white font-medium">DISCOVER SPECIAL OFFERS</h1>
            <p className=" text-lg text-white font-medium">Make sure to check out these special promotions.</p>
            <button  className="text-blue-800 p-3 pl-6 pr-6 rounded-3xl bg-white font-semibold mt-7">VIEW ALL OFFERS</button>
            </div>
        
        </div>
       
    );
};

export default Offer;
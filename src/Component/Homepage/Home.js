import React from 'react';
import img from '../img/resort.jpg';
import img1 from '../img/logo.jpg';
import "./style.css"
import Popular from '../Popular/Popular';
import Whychoose from '../Whychoose/Whychoose';
import Offer from './Offer';
import Comment from '../Comment/Comment';
const Home = () => {
    return (
        <div>
            <div className="w-full h-[80vh] relative overflow-hidden">
                <img src={img} alt="" className="w-full h-[80vh]"></img>
                <div className=" absolute w-full h-[30vh] bottom-0 box-img">
                 <button className="p-3 bg-white text-blue-800 pl-6 pr-6 rounded-xl absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 font-medium">VIEW ALL PACKAGES</button>
                 <img src={img1} alt="" className="w-16 h-16 rounded-full absolute top-0 right-20"></img>
                </div>
            </div>
            <div className="w-full h-[25vh] bg-blue-800 p-5">
             <h1 className="text-center text-white font-semibold text-xl p-3 ">RESERVE YOUR STAY</h1>
             <div className="flex justify-center items-center gap-3">
             <select className="select select-bordered w-40 max-w-xs">
            <option disabled selected>packages</option>
            
            </select>
             <select className="select select-bordered w-40 max-w-xs">
            <option disabled selected>Date</option>
            
            </select>
             <select className="select select-bordered w-40 max-w-xs">
            <option disabled selected>Guest</option>
            
            </select>
             <button className="bg-white p-3 pl-6 pr-6 rounded-lg font-bold  text-blue-700">BOOK NOW</button>
             </div>
            </div>
            <Whychoose></Whychoose>
            <Popular></Popular>
            <Comment></Comment>
            <Offer></Offer>
        </div>
    );
};

export default Home;
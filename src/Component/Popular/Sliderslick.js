import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./sliderstyle.css"
const Sliderslick = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 524,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
    return (
        <div className="p-5 mt-10 lg:w-7/12 w-10/12 m-auto absolute left-1/2 transform -translate-x-1/2">
            <h2 className="text-lg font-semibold mb-3 text-blue-800 uppercase">Find our Popular packages</h2>
        <Slider {...settings}>
        <div className="bg-white p-5 m-2">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/231800069.jpg?k=8c13286983411e1b80ae773f9cbe8bf5566f5272cd9ceb3cc01930bc2f83a910&o=&hp=1" className="w-60"></img>
            <p className="mt-2 font-semibold">SWIMMING PACKAGE</p>
          </div>
        <div className="bg-white p-5 m-2">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/231800069.jpg?k=8c13286983411e1b80ae773f9cbe8bf5566f5272cd9ceb3cc01930bc2f83a910&o=&hp=1" className="w-60"></img>
            <p className="mt-2 font-semibold">SWIMMING PACKAGE</p>
          </div>
        <div className="bg-white p-5 m-2">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/231800069.jpg?k=8c13286983411e1b80ae773f9cbe8bf5566f5272cd9ceb3cc01930bc2f83a910&o=&hp=1" className="w-60"></img>
            <p className="mt-2 font-semibold">SWIMMING PACKAGE</p>
          </div>
        <div className="bg-white p-5 m-2">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/231800069.jpg?k=8c13286983411e1b80ae773f9cbe8bf5566f5272cd9ceb3cc01930bc2f83a910&o=&hp=1" className="w-60"></img>
            <p className="mt-2 font-semibold">SWIMMING PACKAGE</p>
          </div>
        <div className="bg-white p-5 m-2">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/231800069.jpg?k=8c13286983411e1b80ae773f9cbe8bf5566f5272cd9ceb3cc01930bc2f83a910&o=&hp=1" className="w-60"></img>
            <p className="mt-2 font-semibold">SWIMMING PACKAGE</p>
          </div>
        <div className="bg-white p-5 m-2">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/231800069.jpg?k=8c13286983411e1b80ae773f9cbe8bf5566f5272cd9ceb3cc01930bc2f83a910&o=&hp=1" className="w-60"></img>
            <p className="mt-2 font-semibold">SWIMMING PACKAGE</p>
          </div>
        <div className="bg-white p-5 m-2">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/231800069.jpg?k=8c13286983411e1b80ae773f9cbe8bf5566f5272cd9ceb3cc01930bc2f83a910&o=&hp=1" className="w-60"></img>
            <p className="mt-2 font-semibold">SWIMMING PACKAGE</p>
          </div>
        <div className="bg-white p-5 m-2">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/231800069.jpg?k=8c13286983411e1b80ae773f9cbe8bf5566f5272cd9ceb3cc01930bc2f83a910&o=&hp=1" className="w-60"></img>
            <p className="mt-2 font-semibold">SWIMMING PACKAGE</p>
          </div>
        <div className="bg-white p-5 m-2">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/231800069.jpg?k=8c13286983411e1b80ae773f9cbe8bf5566f5272cd9ceb3cc01930bc2f83a910&o=&hp=1" className="w-60"></img>
            <p className="mt-2 font-semibold">SWIMMING PACKAGE</p>
          </div>
        </Slider>
        </div>
    );
};

export default Sliderslick;
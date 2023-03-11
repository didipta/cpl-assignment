import React from 'react';
import Slider from 'react-slick';
import img from "../img/comm.png"
const Comment = () => {
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
              infinite: false,
              dots: false
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
        <div className="p-10 h-[60vh]">
            <Slider {...settings}>
            <div className="relative h-96">
          <div className="relative w-96  shadow-2xl ml-10">
            <div className="absolute top-0 left-0">
                 <img src={img} alt="" className="w-20 rotate-180"></img>
            </div>
            <div className="text-sm m-10 p-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore consectetur rem. Necessitatibus repudiandae, aperiam laboriosam tenetur soluta nesciunt incidunt omnis earum animi iusto.
            </div>
            <div className="absolute bottom-0 right-0">
            <img src={img} alt="" className="w-20"></img>
            </div>
        </div>
        <div className="absolute bottom-12 flex items-center gap-3">
        <div className="avatar">
            <div className="w-16 rounded-full">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"  alt=""/>
            </div>
            </div>
            <div>
                <h1 className="text-lg font-bold text-blue-800">Jane Smith</h1>
                <p className="text-sm font-medium text-slate-600">CEO of LLC</p>
            </div>
        </div>
        </div>
            <div className="relative h-96">
          <div className="relative w-96  shadow-2xl ml-10">
            <div className="absolute top-0 left-0">
                 <img src={img} alt="" className="w-20 rotate-180"></img>
            </div>
            <div className="text-sm m-10 p-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore consectetur rem. Necessitatibus repudiandae, aperiam laboriosam tenetur soluta nesciunt incidunt omnis earum animi iusto.
            </div>
            <div className="absolute bottom-0 right-0">
            <img src={img} alt="" className="w-20"></img>
            </div>
        </div>
        <div className="absolute bottom-12 flex items-center gap-3">
        <div className="avatar">
            <div className="w-16 rounded-full">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"  alt=""/>
            </div>
            </div>
            <div>
                <h1 className="text-lg font-bold text-blue-800">Jane Smith</h1>
                <p className="text-sm font-medium text-slate-600">CEO of LLC</p>
            </div>
        </div>
        </div>
            <div className="relative h-96">
          <div className="relative w-96  shadow-2xl ml-10">
            <div className="absolute top-0 left-0">
                 <img src={img} alt="" className="w-20 rotate-180"></img>
            </div>
            <div className="text-sm m-10 p-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore consectetur rem. Necessitatibus repudiandae, aperiam laboriosam tenetur soluta nesciunt incidunt omnis earum animi iusto.
            </div>
            <div className="absolute bottom-0 right-0">
            <img src={img} alt="" className="w-20"></img>
            </div>
        </div>
        <div className="absolute bottom-12 flex items-center gap-3">
        <div className="avatar">
            <div className="w-16 rounded-full">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"  alt=""/>
            </div>
            </div>
            <div>
                <h1 className="text-lg font-bold text-blue-800">Jane Smith</h1>
                <p className="text-sm font-medium text-slate-600">CEO of LLC</p>
            </div>
        </div>
        </div>
            <div className="relative h-96">
          <div className="relative w-96  shadow-2xl ml-10">
            <div className="absolute top-0 left-0">
                 <img src={img} alt="" className="w-20 rotate-180"></img>
            </div>
            <div className="text-sm m-10 p-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore consectetur rem. Necessitatibus repudiandae, aperiam laboriosam tenetur soluta nesciunt incidunt omnis earum animi iusto.
            </div>
            <div className="absolute bottom-0 right-0">
            <img src={img} alt="" className="w-20"></img>
            </div>
        </div>
        <div className="absolute bottom-12 flex items-center gap-3">
        <div className="avatar">
            <div className="w-16 rounded-full">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"  alt=""/>
            </div>
            </div>
            <div>
                <h1 className="text-lg font-bold text-blue-800">Jane Smith</h1>
                <p className="text-sm font-medium text-slate-600">CEO of LLC</p>
            </div>
        </div>
        </div>
            <div className="relative h-96">
          <div className="relative w-96  shadow-2xl ml-10">
            <div className="absolute top-0 left-0">
                 <img src={img} alt="" className="w-20 rotate-180"></img>
            </div>
            <div className="text-sm m-10 p-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore consectetur rem. Necessitatibus repudiandae, aperiam laboriosam tenetur soluta nesciunt incidunt omnis earum animi iusto.
            </div>
            <div className="absolute bottom-0 right-0">
            <img src={img} alt="" className="w-20"></img>
            </div>
        </div>
        <div className="absolute bottom-12 flex items-center gap-3">
        <div className="avatar">
            <div className="w-16 rounded-full">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"  alt=""/>
            </div>
            </div>
            <div>
                <h1 className="text-lg font-bold text-blue-800">Jane Smith</h1>
                <p className="text-sm font-medium text-slate-600">CEO of LLC</p>
            </div>
        </div>
        </div>
            <div className="relative h-96">
          <div className="relative w-96  shadow-2xl ml-10">
            <div className="absolute top-0 left-0">
                 <img src={img} alt="" className="w-20 rotate-180"></img>
            </div>
            <div className="text-sm m-10 p-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore consectetur rem. Necessitatibus repudiandae, aperiam laboriosam tenetur soluta nesciunt incidunt omnis earum animi iusto.
            </div>
            <div className="absolute bottom-0 right-0">
            <img src={img} alt="" className="w-20"></img>
            </div>
        </div>
        <div className="absolute bottom-12 flex items-center gap-3">
        <div className="avatar">
            <div className="w-16 rounded-full">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"  alt=""/>
            </div>
            </div>
            <div>
                <h1 className="text-lg font-bold text-blue-800">Jane Smith</h1>
                <p className="text-sm font-medium text-slate-600">CEO of LLC</p>
            </div>
        </div>
        </div>
           
         
            </Slider>
           
        </div>
        
    );
};

export default Comment;
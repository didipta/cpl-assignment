import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'
const Whychoose = () => {
    return (
        <div className="w-full p-6">
            <div className="w-8/12 m-auto flex flex-col gap-6 items-center">
                <h1 className="text-2xl text-blue-800 font-semibold ">Why Choose Dhaka Resort</h1>
                <p className="w-6/12 text-center text-gray-500 font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugiat facilis aspernatur earum.</p>
            </div>
            <div className="flex gap-3 justify-center items-center w-8/12 h-[70vh] mx-auto p-5">
                <div className="w-7/12 grid grid-cols-2 grid-flow-row gap-2 p-5">
                    <img src='https://blog.flyticket.com.bd/wp-content/uploads/2019/06/neel-komol-resort.jpg' alt="" className="h-32 w-40 row-span-1 rounded-lg"></img>
                    <img src='https://blog.flyticket.com.bd/wp-content/uploads/2019/06/neel-komol-resort.jpg' alt="" className=" h-52 row-span-2 rounded-lg"></img>
                    <img src='https://blog.flyticket.com.bd/wp-content/uploads/2019/06/neel-komol-resort.jpg' alt="" className="h-40 row-span-3 rounded-lg"></img>
                    <img src='https://blog.flyticket.com.bd/wp-content/uploads/2019/06/neel-komol-resort.jpg' alt="" className=" h-48  row-span-3 rounded-lg"></img>

                   
                </div>
                <div className="w-7/12 p-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit, dolores officiis adipisci quisquam repellendus eligendi nesciunt nobis accusamus provident. Atque iure fugiat ipsa commodi velit repellendus corporis autem eos.</p>
                    <div className="mt-5 flex flex-col gap-2 text-sm text-gray-500">
                        <li className="flex items-center gap-3 "><FontAwesomeIcon icon={faCircleCheck} className="text-blue-800"></FontAwesomeIcon>Different Type of Cottages</li> 
                        <li className="flex items-center gap-3 "><FontAwesomeIcon icon={faCircleCheck} className="text-blue-800"></FontAwesomeIcon>Different Type of Cottages</li> 
                        <li className="flex items-center gap-3 "><FontAwesomeIcon icon={faCircleCheck} className="text-blue-800"></FontAwesomeIcon>Different Type of Cottages</li> 
                        <li className="flex items-center gap-3 "><FontAwesomeIcon icon={faCircleCheck} className="text-blue-800"></FontAwesomeIcon>Different Type of Cottages</li> 
                        <li className="flex items-center gap-3 "><FontAwesomeIcon icon={faCircleCheck} className="text-blue-800"></FontAwesomeIcon>Different Type of Cottages</li> 
                        <li className="flex items-center gap-3 "><FontAwesomeIcon icon={faCircleCheck} className="text-blue-800"></FontAwesomeIcon>Different Type of Cottages</li> 
                      
                      
                    </div>
                     <button className="bg-blue-800 p-3 pl-6 pr-6 rounded-3xl text-white font-semibold mt-7">DISCOVER NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Whychoose;
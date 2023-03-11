import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faPhone,faEnvelope,faLock,faUser} from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faInstagram,faLinkedin,faTwitter} from '@fortawesome/free-brands-svg-icons'
const Header = () => {
    const flex="flex items-center p-1 pl-4 pr-4 text-sm";
    return (
        <div className={`${flex} justify-between bg-blue-500 text-white shadow-lg`}>
           <div className={`${flex} gap-3`}>
            <p className={`${flex} gap-2`}><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>+8801762554444</p>
            <p className={`${flex} gap-2`}><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>dhakadreamlandpark@gmail.com</p>
           </div>
           <div className={`${flex} gap-3`}>
            <div className={`${flex} gap-3 text-lg`}>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </div>
            <div className={`${flex} gap-3`}>
                <button className=" bg-white p-1 pl-4 pr-4 rounded-xl text-blue-500"><FontAwesomeIcon icon={faLock}></FontAwesomeIcon> Login</button>
                <button className=" bg-blue-800 p-1 pl-4 pr-4 rounded-xl text-white"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Sign Up</button>
            </div>
           </div>
        </div>
    );
};

export default Header;
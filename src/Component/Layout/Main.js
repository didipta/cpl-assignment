import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Homepage/Home';
import Navbar from '../Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            {/* <Outlet></Outlet> */}
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default Main;
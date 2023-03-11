import React from 'react';
import { Link} from 'react-router-dom';
import logo from "../img/logo.jpg"
const Navbar = () => {
    const menu=[{
        id:1,
        url:"/",
        name:"Home",
    },
    {    id:2,
        url:"/About Us",
        name:"About Us"
    },
    {
        id:3,
        url:"/Packages",
        name:"Packages"
    },
    {
        id:4,
        url:"/Eco park",
        name:"Eco park"
    },
    {
        id:5,
        url:"/Cottage",
        name:"Cottage"
    },
    {
        id:6,
        url:"/our Resort",
        name:"our Resort"
    },
    {
        id:7,
        url:"/Events",
        name:"Events"
    },
    {
        id:8,
        url:"/contact",
        name:"contact"
    }
]
    return (
        <div>
            <div>
            <div className="navbar bg-blue-900 text-white pl-10 pr-10">
  <div className="navbar">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {
            menu.map(x=>
                <li className="uppercase"><a href={`${x.url}`} key={x.id}>{x.name}</a></li>
                )
        }
      </ul>
    </div>
    <a className=" "><img src={logo} alt="" class=" w-20"></img></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {
            menu.map(x=>
                <li className="uppercase"><a href={`${x.url}`} key={x.id}>{x.name}</a></li>
                )
        }
    </ul>
  </div>
</div>
            </div>
        </div>
    );
};

export default Navbar;
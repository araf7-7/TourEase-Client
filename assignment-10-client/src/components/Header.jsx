
import { Link, NavLink } from "react-router-dom";

import UseAuth from './UseAuth';
import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";


const Header = () => {
    const { logout, user } = UseAuth();
    const [theme,setTheme] = useState('light')
    useEffect(()=>{
        localStorage.setItem('theme',theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    },[theme])
    const handleToggle = (e) =>{
        if (e.target.checked){
            setTheme(' coffee')

        } else{
            setTheme('light')
        }
    }
    console.log(theme);
    const handleLogout = () => {
        logout(); // Invoke the logout function
    };

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start gap-14 lg:gap-0">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                            <NavLink to="/" className="hover:text-yellow-500 hover:border-2 hover:border-yellow-500 p-2 rounded-lg">Home</NavLink>
                            <Link to="/addTourist" className="hover:text-yellow-500 hover:border-2 hover:border-yellow-500 p-2 rounded-lg">Add Tourist Spots</Link>
                            <Link to="/allTourist" className="hover:text-white hover:bg-yellow-500 hover:border-2 hover:border-yellow-500 p-2 rounded-lg">All Tourist Spots</Link>
                            <NavLink to="/login" className="hover:text-yellow-500 hover:border-2 hover:border-yellow-500 p-2 rounded-lg">Login</NavLink>
                            <NavLink to="/register" className="hover:text-yellow-500 hover:border-2 hover:border-yellow-500 p-2 rounded-lg">Register</NavLink>
                            <Link to="/myList" className="hover:text-white hover:bg-yellow-500 hover:border-2 hover:border-yellow-500 p-2 rounded-lg">My List</Link>
                        </ul>
                    </div>
                    <div className="flex  justify-center item-center text-center">
                        <img src="https://i.ibb.co/BBq1HZ7/Purple-and-Blue-Grdient-Simple-Minimalist-Elegant-Website-Logo.png" alt="" className="w-[100px] h-auto" />
                        <h2 className="btn md:justify-end lg:justify-normal btn-ghost mt-6 text-2xl">TourEase</h2>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <Link to="/" className="hover:text-white hover:bg-yellow-500 hover:border-2 hover:border-yellow-500 p-2 rounded-lg">Home</Link>
                        <Link to="/addTourist" className="hover:text-white hover:bg-yellow-500 hover:border-2 hover:border-yellow-500 p-2 rounded-lg">Add Tourist Spots</Link>
                        <Link to="/allTourist" className="hover:text-white hover:bg-yellow-500 hover:border-2 hover:border-yellow-500 p-2 rounded-lg">All Tourist Spots</Link>
                        <Link to="/myList" className="hover:text-white hover:bg-yellow-500 hover:border-2 hover:border-yellow-500 p-2 rounded-lg">My List</Link>


                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <label className="cursor-pointer hidden lg:grid place-items-center">
                        <input
                        onChange={handleToggle}
                        type="checkbox" value= "coffee" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                    <div className="items-center  lg:flex">
                        {user ? (
                            <div className="flex">
                                <div className="dropdown dropdown-end mx-auto flex lg:mr-10">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full " data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
                                            <Tooltip id="my-tooltip" />
                                            {user.photoURL ? (
                                                <img src={user?.photoURL} alt={user?.displayName} />
                                            ) : (
                                                <span>{user?.displayName?.charAt(0)}</span>
                                            )}
                                        </div>

                                    </label>


                                </div>
                                <button className="btn bg-yellow-500 hover:bg-yellow-600 btn-base btn-ghost" onClick={handleLogout}>Logout</button>
                            </div>
                        ) : (
                            <><NavLink to="/login"><button className="self-center px-8 py-3 rounded hidden lg:flex">Login</button></NavLink>
                                <NavLink to="/register"><button className="self-center px-8 py-3 font-semibold rounded hidden lg:flex dark:bg-yellow-500 dark:text-gray-50">Register</button></NavLink></>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

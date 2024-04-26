
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
        <nav className="flex items-center justify-between   px-4 py-2   mb-10">
            <div className="scale-100  cursor-pointer rounded-2xl px-3 py-2 text-2xl font-semibold  transition-all duration-200 hover:scale-110">
                <NavLink to="/"><h2>TourEase</h2></NavLink>
            </div>
            <ul className="hidden text-xl items-center justify-between ml-16 gap-10 md:flex">
                <Link to="/">  <li className="group flex  cursor-pointer flex-col">
                    Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </li>
                </Link>
                <Link to="/allTourist">
                    <li className="group flex  cursor-pointer flex-col">
                        All Tourists Spot<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </Link>
                <Link to="/addTourist">
                    <li className="group flex  cursor-pointer flex-col">
                        Add Tourists Spot<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </Link>
                <li className="group flex  cursor-pointer flex-col">
                    My List<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </li>

            </ul>

            <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative ml-[230px] flex transition-transform  md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer justify-end" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                {dropDownState && (
                    <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                        <Link to='/'> <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-yellow-400 ">
                            Home
                        </li></Link>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-yellow-400 ">
                            All Tourists Spot
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-yellow-400 ">
                            Add Tourists Spot
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-yellow-400 ">
                            My List
                        </li>
                        <Link to="/register">
                            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-yellow-400 ">
                                Register
                            </li></Link>
                        <Link to="/login">
                            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-yellow-400 ">
                                Login
                            </li>

                        </Link>
                    </ul>
                )}
            </div>
            <div>
                <div className=' gap-6 hidden lg:flex md:flex '>
                    <Link to="/register">  <button className="relative h-14 w-32 origin-top transform rounded-lg border-2 border-yellow-400 text-xl text-yellow-400 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-black hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-yellow-400">Register</button></Link>

                    <Link to="/login">  <button className="relative h-14 w-32 origin-top transform rounded-lg border-2 border-yellow-400 text-xl text-yellow-400 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-black hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-yellow-400">Login</button> </Link>
                </div>
            </div>

        </nav>


    );
};

export default Header
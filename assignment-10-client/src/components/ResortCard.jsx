import { AiFillCopyrightCircle } from "react-icons/ai";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { MdVisibility } from "react-icons/md";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { TiWeatherCloudy } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const ResortCard = ({place}) => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const {_id,name, country, location, cost, seasonality, time, visitor, photo} = place||{}
    return (
        <div className="my-20 mx-auto "  >
            <div className="mx-w-auto p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img src={photo} alt="" className="object-cover object-center w-full rounded-md h-[300px] dark:bg-gray-500" />
                <div className="mt-6 mb-2 ">
                    <div className="flex justify-between " >
                    <div className="flex mx-auto justify-end items-center gap-2" >
                    <RiMoneyDollarBoxLine />
                    <span className="block text-base font-normal tracking-widest  dark:text-yellow-500"  > Cost: {cost}</span>
                    </div>
                    <div className="flex mx-auto justify-end items-center gap-2"   >
                    <MdVisibility />
                    <span className="block text-base font-normal tracking-widest dark:text-yellow-500" > Visitor: {visitor}</span>
                    </div>
                    </div>
                    <h2 className="text-xl font-semibold tracking-wide" >{name}</h2>
                    <div className="flex items-center gap-2"  >
                    <FaMapLocationDot />
                    <h2 className="text-xl font-semibold tracking-wide " > {location}</h2>
                    </div>
                   <div className="flex items-center gap-2"  >
                   <AiFillCopyrightCircle /><h2 className="text-xl font-semibold tracking-wide" >Country: {country}</h2>
                   </div>
                   <div className="flex items-center gap-2 "  >
                   <TiWeatherCloudy /><h2 className="text-xl font-semibold tracking-wide" >Season: {seasonality}</h2>
                   </div>
                   <div className="flex items-center gap-2"  >
                   <IoTime /><h2 className="text-xl font-semibold tracking-wide" >Travel Time: {time} Hours</h2>
                   </div>
                    
                </div>
                <Link to={`/place/${_id}`} > <button   className="btn bg-yellow-500 btn-block"  >View Details</button></Link>
               
            </div>
        </div>
    );
};

export default ResortCard;
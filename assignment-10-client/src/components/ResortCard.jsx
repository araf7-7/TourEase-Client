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
        <div className="my-20 mx-auto "  data-aos="fade-up">
            <div className="mx-w-auto p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img src={photo} alt="" className="object-cover object-center w-full rounded-md h-[300px] dark:bg-gray-500" />
                <div className="mt-6 mb-2 ">
                    <div className="flex justify-between " >
                    <div className="flex mx-auto justify-end items-center gap-2" data-aos="fade-up">
                    <RiMoneyDollarBoxLine />
                    <span className="block text-base font-normal tracking-widest  dark:text-yellow-500"  data-aos="fade-up"> Cost: {cost}</span>
                    </div>
                    <div className="flex mx-auto justify-end items-center gap-2"  data-aos="fade-up" >
                    <MdVisibility />
                    <span className="block text-base font-normal tracking-widest dark:text-yellow-500" data-aos="fade-up"> Visitor: {visitor}</span>
                    </div>
                    </div>
                    <h2 className="text-xl font-semibold tracking-wide" data-aos="fade-up">{name}</h2>
                    <div className="flex items-center gap-2"  data-aos="fade-up">
                    <FaMapLocationDot />
                    <h2 className="text-xl font-semibold tracking-wide " data-aos="fade-up"> {location}</h2>
                    </div>
                   <div className="flex items-center gap-2" data-aos="fade-up" >
                   <AiFillCopyrightCircle /><h2 className="text-xl font-semibold tracking-wide" data-aos="fade-up">Country: {country}</h2>
                   </div>
                   <div className="flex items-center gap-2 " data-aos="fade-up" >
                   <TiWeatherCloudy /><h2 className="text-xl font-semibold tracking-wide" data-aos="fade-up">Season: {seasonality}</h2>
                   </div>
                   <div className="flex items-center gap-2"  data-aos="fade-up">
                   <IoTime /><h2 className="text-xl font-semibold tracking-wide" data-aos="fade-up">Travel Time: {time} Hours</h2>
                   </div>
                    
                </div>
                <Link to={`/place/${_id}`} > <button  data-aos="fade-up" className="btn bg-yellow-500 btn-block"  >View Details</button></Link>
               
            </div>
        </div>
    );
};

export default ResortCard;
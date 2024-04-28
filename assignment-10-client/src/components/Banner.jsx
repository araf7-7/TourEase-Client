import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Pagination } from 'swiper/modules';
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import { Fade } from "react-awesome-reveal";

const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    return (
        <div className="grid grid-cols-2 mx-2  lg:mx-2 mt-4  md:mx-7 md:mt-10">
            <div className=" md:w-auto col-span-2 lg:col-span-1 items-center content-center">
                <div className="lg:pl-4">
                    <p className="font-bold">Streamlining Tourism Management</p>
                   <Fade duration={3000}>
                   <p className='md:text-4xl lg:text-3xl w-auto text-4xl mt-2 font-light font-serif' >Empowering Global Tourism Management Solutions</p>
                   </Fade>
                   <Fade duration={3000}>
                   <p className='md:text-xl w-[400px] text-base text-gray-500 md:mt-5'>TourEase is a comprehensive platform designed to revolutionize tourism management worldwide. With a robust suite of features, it offers unparalleled solutions for every aspect of the tourism industry. From itinerary planning and booking management to customer engagement and analytics, TourEase empowers businesses to streamline operations and enhance customer satisfaction. Its intuitive interface and advanced technology simplify complex processes</p>
                   </Fade>
                    
                    <button className="group mt-3 relative flex w-40 items-center rounded-lg border-2 border-yellow-500 p-4  text-yellow-500"><span>Explore More</span><span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-yellow-400 duration-300 group-hover:w-5/6"><svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>
                </div>
            </div>
            <div className="lg:col-span-1 lg:mt-0 mt-2 lg:w-auto md:w-full w-[400px] my-auto col-span-2 bg-white">
                <Swiper
                    pagination={
                        { clickable: true }}
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    autoplay={
                        { delay: 2001 }
                    }>
                    <SwiperSlide><img className='w-auto  lg:h-[450px] rounded-lg' src="https://i.ibb.co/0Kr6j64/1618245974-shutterstock-1186362172.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-auto h-[450px] rounded-lg' src="https://i.ibb.co/gdhkHpz/xwuihgglduacuo7margs.webp" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-auto h-[450px] rounded-lg' src="https://i.ibb.co/xhHDd6s/MALAYSIA.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-auto  h-[450px] rounded-lg' src="https://i.ibb.co/CQG1Wdg/Nha-Trangportpanoramio-20200906122537.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-[700px] md:h-auto h-[270px] lg:h-[450px] rounded-lg' src="https://i.ibb.co/qJ4n2RM/Performers-of-Water-Puppet-Show-20200928175046.jpg" alt="" /></SwiperSlide>
                  
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;
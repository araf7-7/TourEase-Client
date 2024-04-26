import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Pagination } from 'swiper/modules';
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    return (
        <div className="grid grid-cols-2 mx-2  lg:mx-2 mt-4  md:mx-7 md:mt-10">
            <div className=" md:w-auto col-span-2 lg:col-span-1 items-center content-center">
                <div className="lg:pl-4">
                    <p className="font-bold">Streamlining Tourism Management</p>
                    <p className='md:text-4xl lg:text-3xl w-auto text-4xl mt-2 font-light font-serif' data-aos="fade-left">Empowering Global Tourism Management Solutions</p>
                    <p className='md:text-xl w-[400px] text-base text-gray-500 md:mt-5' data-aos="fade-right">TourEase is a comprehensive platform designed to revolutionize tourism management worldwide. With a robust suite of features, it offers unparalleled solutions for every aspect of the tourism industry. From itinerary planning and booking management to customer engagement and analytics, TourEase empowers businesses to streamline operations and enhance customer satisfaction. Its intuitive interface and advanced technology simplify complex processes</p>
                    <button className="mb-3 btn mt-3 w-[130px] btn-outline text-yellow-500 hover:bg-yellow-500 hover:text-white hover:border-yellow-500">Explore More</button>
                </div>
            </div>
            <div className="lg:col-span-1 lg:w-auto md:w-full w-[400px] my-auto col-span-2 bg-white">
                <Swiper
                    pagination={
                        { clickable: true }}
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    autoplay={
                        { delay: 2001 }
                    }>
                    <SwiperSlide><img className='w-auto h-auto rounded-lg' src="https://i.ibb.co/0Kr6j64/1618245974-shutterstock-1186362172.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-auto h-auto rounded-lg' src="https://i.ibb.co/SXs9LXG/goycmp7sgrx6mqe4byg3o6kk6hbo-2595a1d7e592aeb5e81e1c6e432ceaef.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-auto h-auto rounded-lg' src="https://i.ibb.co/s1PW5sr/7dm8zgmet4qch5xguyx21ud4wnvs-1622033849-shutterstock-597391175.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-auto h-auto rounded-lg' src="https://i.ibb.co/mDHpc69/xjp5cwag6z2a18o2mswtal7djp2y-7d013fc8bd63f7a185c9aeb41864e919.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-auto h-auto rounded-lg' src="https://i.ibb.co/72HpjSX/tqoi06pkedw6xqpbapzvkhgylfu8-28849d88548b64a6f18ef8dd65b07539.jpg" alt="" /></SwiperSlide>
                  
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;
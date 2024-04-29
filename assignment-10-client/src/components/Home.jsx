import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";

// import ResortCard from "./ResortCard";
import CountryCard from './CountryCard';
import { useEffect, useState } from "react";
import TouristSection from "./TouristSection";
import Review from "./Review";







const Home = () => {
    const categories = useLoaderData();
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/place")
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, [])

    return (
        <>

            <Banner></Banner>

            <section className="max-w-6xl mx-auto mt-32">
                <h2 className="text-3xl lg:text-5xl font-bold  text-center mx-auto">Tourist Spots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mx-2">
                    {places?.slice(1, 7).map(place => <TouristSection key={place.id} place={place}></TouristSection>)}
                </div>
            </section>
            

            <div className="container mx-auto items-center justify-center mt-20">
                <h1 className="text-4xl font-bold text-center">Countries</h1>
                <p className="text-2xl font-semibold text-center mt-4">Find The Best Tourist Spots Of Each Countries</p>
            </div>
            <div className="container mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                {
                    categories?.map(category =>
                        <CountryCard key={category._id}
                            category={category}>

                        </CountryCard>)
                }
            </div>
                    <Review></Review>

        </>
    );
};

export default Home;
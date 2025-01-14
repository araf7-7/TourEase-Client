
import ResortCard from "./ResortCard";
import { useEffect, useState } from "react";


const TouristSpots = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-10-server-delta-dun.vercel.app/place`)
            .then((res) => res.json())
            .then((data) => setPlaces(data))
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    console.log("asdas", places);
    return (
        <div>
            <div>
                <div className="container mx-auto items-center justify-center ">
                    <h1 className="text-4xl font-bold text-center">Tourist Spots</h1>
                    <p className="text-2xl font-semibold text-center pt-10">Check Out Some Amazing Tourist Spots</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-2">
                {places.map(place => <ResortCard key={place._id}
                    place={place}>

                </ResortCard>)}
            </div>
        </div>
    );
};

export default TouristSpots;
// import { useLoaderData } from "react-router-dom";
import ResortCard from "./ResortCard";
import { useEffect, useState } from "react";


const AllTourist = () => {

    const [places, setPlaces] = useState([]);
    const [order, setOrder] = useState('');
  
    useEffect(() => {
        fetch(`http://localhost:5000/place?order=${order}`)
            .then((res) => res.json())
            .then((data) => setPlaces(data))


    },[order])
    return (
        <>
           
            <div>
                <div className="container mx-auto items-center justify-center ">
                    <h1 className="text-4xl font-bold text-center">Tourist Spots</h1>
                    <p className="text-2xl font-semibold text-center pt-10">Check Out Some Amazing Tourist Spots</p>
                </div>
               <div className="container text-xl mx-auto items-center justify-center ">
               <select className=" " value={order} onChange={(e) => setOrder(e.target.value)}>
                <option value="">All</option>
                <option value="acc">Ascending</option>
                <option value="dcc">Descending</option>


            </select>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-2">
                {places.map(place => <ResortCard key={place._id}
                    place={place}>

                </ResortCard>)}
            </div></>
    );
};

export default AllTourist;
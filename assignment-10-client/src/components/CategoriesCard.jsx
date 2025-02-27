// import { useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ResortCard from './ResortCard';
const CategoriesCard = () => {
    // const paintings = useLoaderData();
    const { id } = useParams();
    const category = id.split(' ').join('&')
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-10-server-delta-dun.vercel.app/category/${category}`)
            .then(res => res.json())
            .then(data => setPlaces(data))
    })
    console.log(places);
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Tourist Spot Of : {category}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2 container mx-auto">
                {places?.map(place => <ResortCard key={place._id} place={place}></ResortCard>)}
            </div>
        </div>
    );
};

export default CategoriesCard;
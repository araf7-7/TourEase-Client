// import { useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ResortCard from './ResortCard';
const CategoriesCard = () => {
    // const paintings = useLoaderData();
    const {id} = useParams();
    const category = id.split(' ').join('&')
    const [places, setPlaces] = useState([]); 
    useEffect(() => {
        fetch(`http://localhost:5000/category/${category}`)
        .then(res => res.json())
        .then(data => setPlaces(data))
    })
    console.log(places);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 container mx-auto">
                    {places?.map(place => <ResortCard key={place._id} place={place}></ResortCard>)}
            </div>
        </div>
    );
};

export default CategoriesCard;
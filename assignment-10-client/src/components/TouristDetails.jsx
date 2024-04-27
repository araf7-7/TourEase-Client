import { Link, useLoaderData, useParams } from "react-router-dom";


const TouristDetails = () => {
    const place = useLoaderData()
    const { id } = useParams()
    const places = place.find(place => place._id === id)
    console.log(places)
    return (

        <div>
            <div className="card container mx-auto  ">
                <div className="flex gap-10">
                <img className="w-[500px] rounded-lg" src={places.photo} alt="Album" />
                <div className="card-body bg-base-100 shadow-2xl rounded-xl">
                    <h2 className="card-title">{places.name}</h2>
                    <p className="text-xl "><span className="font-medium">Description:</span> {places.description}</p>
                    <p className="text-xl "><span className="font-medium">Country:</span> {places.country}</p>
                    <p className="text-xl "><span className="font-medium">location:</span> {places.location}</p>
                    <p className="text-xl "><span className="font-medium">Seasonality:</span> {places.seasonality}</p>
                    <p className="text-xl "><span className="font-medium">Travel Time:</span> {places.time} Hours</p>
                    <p className="text-xl "><span className="font-medium">Visitor:</span> {places.visitor}</p>
                    <Link to={`/updateSpots/${id}`}><button className="btn bg-yellow-500 btn-block">Update</button></Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default TouristDetails;
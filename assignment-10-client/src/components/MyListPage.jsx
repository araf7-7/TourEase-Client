import { useLoaderData } from "react-router-dom";


import MyListCard from "./MyListCard";


const MyListPage = () => {
    const places = useLoaderData()
    return (
       <div>
            <h2 className="mb-4 container text-center text-4xl font-semibold leading-tight">Tourist Spots</h2>

         <div>
                {places?.map(place => <MyListCard key={place._id}
                    place={place}>

                </MyListCard>)}
            </div>
       </div>
    );
};

export default MyListPage;
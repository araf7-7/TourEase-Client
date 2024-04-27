import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";

// import ResortCard from "./ResortCard";
import CountryCard from './CountryCard';


const Home = () => {
    const categories = useLoaderData();
    return (
        <>
       
            <Banner></Banner>
            <div className="container mx-auto items-center justify-center mt-20">
                <h1 className="text-4xl font-bold text-center">Countries</h1>
                <p className="text-2xl font-semibold text-center mt-4">Find The Best Tourist Spots Of Each Countries</p>
            </div>
            <div className="container mx-auto gap-4 grid grid-cols-3">
                
            {
                categories?.map(category =>
                    <CountryCard key={category._id}
                        category={category}>

                    </CountryCard>)
            }
            </div>
            

        </>
    );
};

export default Home;
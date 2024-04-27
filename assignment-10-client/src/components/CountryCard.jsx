import { Link } from "react-router-dom";

const CountryCard = ({ category }) => {
    const { country, image } = category || {}
    return (
        <div>
            <div className="my-20">
                <div className="card w-auto h-auto bg-base-100 shadow-xl border-2 p-2">
                    <figure className="px-10  bg-base-100 shadow-2xl">
                        <img className="h-52 rounded-xl" src={image} alt="Country" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{country}</h2>
                        <div className="card-actions">
                            <Link to="/allTourist"><button className="btn bg-gradient-to-r bg-yellow-500">Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;
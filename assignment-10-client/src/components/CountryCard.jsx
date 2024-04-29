import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const CountryCard = ({ category }) => {
    const { country, image } = category || {}
    console.log(country)
    const id = country.split(' ').join('&')
    console.log(id)
    return (
        <div>
          <Fade duration={3000}>
          <div className="my-20 ">
                <div className="card w-auto h-auto bg-base-100 shadow-xl border-2 p-2">
                    <figure className="px-10  bg-base-100 shadow-2xl">
                        <img className="h-52 rounded-xl" src={image} alt="Country" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{country}</h2>
                        <h3 className="text-base font-semibold">See The Best Tourist Spots Of {country}</h3>
                        <div className="w-full">
                            <Link to={`/category/${id}`}>  <button className="btn  w-full text-white bg-gradient-to-r bg-yellow-500 hover:bg-yellow-600"> Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
          </Fade>
        </div>
    );
};

export default CountryCard;
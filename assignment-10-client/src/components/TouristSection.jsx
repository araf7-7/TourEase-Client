import { Fade } from "react-awesome-reveal";
import { AiOutlineNumber } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";
import { Link } from "react-router-dom";

const TouristSection = ({ place }) => {

    const { _id, name, photo, visitor, country } = place || {};
    return (
        <div>
            <div
                className="max-w-full h-full max-h-auto rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 border-2" >
                <img
                    src={photo}

                    className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-2">
                    <div className="space-y-2">
                        <Fade duration={3000}>
                            <h2 className="text-lg font-semibold" >{name}</h2>
                          <div className="flex gap-2 items-center">
                          <FaGlobeAmericas />
                          <h2 className="text-lg font-semibold" > Country : {country}</h2>
                          </div>

                          <div className="flex gap-2 items-center">
                          <AiOutlineNumber />
                          <p className= "text-lg font-semibold dark:text-gray-800" > Total Visitor : { visitor}</p>
                          </div>
                            <div>
                                <Link to={`/place/${_id}`}>
                                    <button className="btn  w-full text-white bg-gradient-to-r bg-yellow-500 hover:bg-yellow-600">View Details</button>
                                </Link>
                            </div>
                        </Fade>



                    </div>

                </div>
            </div>
        </div>
    );
};

export default TouristSection;
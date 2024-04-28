import { Link } from "react-router-dom";


const MyListCard = ({ place }) => {
    const { name, _id, country, cost, photo } = place || {}
    return (
        <div>
            <div>

                <div className="container w-auto lg:w-[1200px] p-2 mx-auto sm:p-4 dark:text-gray-800">

                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col className="w-24" />
                            </colgroup>
                            <thead className="dark:bg-gray-300">
                                <tr className="text-left">
                                    <th className="p-3">ID</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Country</th>
                                    <th className="p-3">Image</th>
                                    <th className="p-3 text-right">Amount</th>
                                    <th className="p-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                    <td className="p-3">
                                        <p>{_id}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{name}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{country}</p>
                                    </td>
                                    <td className="p-3">
                                        <img className="w-14 rounded-lg" src={photo} alt="" />
                                    </td>
                                    <td className="p-3 text-right">
                                        <p>{cost}</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <Link to={`/place/${_id}`} > <button className="btn bg-yellow-500 btn-block"  >View Details</button></Link>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyListCard;
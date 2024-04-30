import Swal from "sweetalert2";



const MyCraftCard = ({ tourist , setTourists, tourists }) => {

    const { _id, name, country, cost, photo } = tourist || {}
   
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/userTourist/${_id}`,{
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire({
                        title: "Deleted!",
                        text: "Your craft has been deleted.",
                        icon: "success"
                        });
                        const remaining = tourists.filter(craf => craf._id !== _id);
                        setTourists(remaining)
                    }
                })
            }
        });

    }
    return (
        <div>
            <div>

                <div className="container justify-center lg:mx-[50px] w-auto lg:w-[1200px] p-2 mx-auto sm:p-4 dark:text-gray-800">

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

                                    <th className="p-3">Image</th>
                                    <th className="p-3">Country</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3 text-right">Amount</th>
                                    <th className="p-3 text-right">Delete</th>
                                    <th className="p-3 text-right">Update</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b . container mx-auto border-opacity-20 dark:border-gray-300 dark:bg-gray-50">

                                    <td className="p-3">
                                        <img className="w-14 h-auto rounded-lg" src={photo} alt="" />
                                    </td>
                                    <td className="p-3">
                                        <p>{name}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{country}</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <p>{cost}</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <button onClick={() => handleDelete(_id)} className="btn bg-yellow-500">Delete</button>
                                    </td>
                                    <td className="p-3 text-right">
                                        <button className="btn bg-yellow-500">Update</button>
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

export default MyCraftCard;
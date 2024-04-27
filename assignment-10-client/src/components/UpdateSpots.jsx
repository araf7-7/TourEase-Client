import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpots = () => {
   
    const place = useLoaderData();
    const {name, _id, country, location,  description, cost, seasonality, time, visitor, photo} = place||{}
    const handleAddPlace = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const country = form.country.value
        const location = form.location.value
        const description = form.description.value
        const cost = form.cost.value
        const seasonality = form.seasonality.value
        const time = form.time.value
        const visitor = form.visitor.value

        const photo = form.photo.value

        const updatedSpots = { name, country, location, description, cost, seasonality, time, visitor, photo,  }
        fetch(`http://localhost:5000/place/${_id}`, {
            method: 'PUT' ,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedSpots)
        }
        )

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>
           
            <div className="bg-yellow-100 mx-auto w-auto lg:w-[1000px] p-20 m-3 rounded-xl">
                <h2 className="text-3xl my-3 text-center font-extrabold">Update a Tourist Spot</h2>
                <form onSubmit={handleAddPlace} >
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Tourist Spot Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="Tourist Spot Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Country Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="country" defaultValue={country} placeholder="Country Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="location" placeholder="Location" defaultValue={location} className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" defaultValue={ description} placeholder="Short Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Average Cost</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="cost" defaultValue={cost} placeholder="Average Cost" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="seasonality" defaultValue={seasonality} placeholder="Seasonality" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="time" placeholder="Travel  Time" defaultValue={time} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Total Visitor</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="visitor" placeholder="Total Visitor" defaultValue={visitor} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" defaultValue={photo} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update" className="btn btn-block bg-yellow-500 text-white" />

                </form>
            </div>
        </div>
    );
};

export default UpdateSpots;
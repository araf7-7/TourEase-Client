import Swal from "sweetalert2";


const AddTourist = () => {
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
        const fullName = form.fullName.value
        const email = form.email.value
        const photo = form.photo.value

        const newPlace = { name, country, location, description, cost, seasonality, time, visitor, fullName, photo, email }
        fetch('http://localhost:5000/place', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPlace)
        }
        )

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourist Spot Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
               
            })
    }
    return (
        <div className="bg-yellow-100 mx-auto w-auto lg:w-[1000px] p-20 m-3 rounded-xl">
            <h2 className="text-3xl my-3 text-center font-extrabold">Add a Tourist Spot</h2>
            <form onSubmit={handleAddPlace} >

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Tourist Spot Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Tourist Spot Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="country" placeholder="Country Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="cost" placeholder="Average Cost" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Seasonality</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seasonality" placeholder="Seasonality" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Travel Time</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="time" placeholder="Travel Time" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Total Visitor</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="visitor" placeholder="Total Visitor" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="fullName" placeholder="Full Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" placeholder="email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Place" className="btn btn-block bg-yellow-500 text-white" />

            </form>
        </div>
    );
};

export default AddTourist;
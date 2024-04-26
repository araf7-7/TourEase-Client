

const Reg = () => {
    return (
        <div>
            <div>
                <div className=" mx-auto w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                    <h1 className="text-2xl font-bold text-center">Register</h1>
                    <form noValidate="" action="" className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-600">Full name</label>
                            <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-yellow-500" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="FullName" className="block dark:text-gray-600">Full Name</label>
                            <input type="text" name="FullName" id="FullName" placeholder="Full Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-yellow-500" />

                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="img" className="block dark:text-gray-600">Image URL</label>
                            <input  type="text" name="image" id="img" placeholder="Image Url" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-yellow-500" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-yellow-500" />

                        </div>
                        <button className="block w-full p-3 text-center rounded-sm dark:text-black dark:bg-yellow-500">Register</button>
                    </form>



                </div>
            </div>
        </div>
    );
};

export default Reg;
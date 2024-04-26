import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="text-center mt-[100px]">
            <h2 className="font-bold text-5xl mb-3">Oops!!!</h2>
            <p className="text-4xl">{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldnt find this page.</p>
                    <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                    <Link to="/"><button className="px-8 py-3 font-semibold rounded dark:bg-yellow-500 dark:text-gray-50">Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;
import { FaMapLocationDot } from "react-icons/fa6";
import { RiMoneyDollarBoxLine } from "react-icons/ri";


const ResortCard = () => {
    return (
        <div className="my-20">
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-auto dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <div className="flex mx-auto justify-end items-center gap-2">
                    <RiMoneyDollarBoxLine />
                    <span className="block text-xl font-medium tracking-widest uppercase dark:text-violet-600"> Cost</span>
                    </div>
                    <div className="flex mx-auto justify-end items-center gap-2">
                    <RiMoneyDollarBoxLine />
                    <span className="block text-xl font-medium tracking-widest uppercase dark:text-violet-600"> Cost</span>
                    </div>
                    <h2 className="text-xl font-semibold tracking-wide">Tourist Spots Name</h2>
                    <div className="flex items-center gap-2">
                    <FaMapLocationDot />
                    <h2 className="text-xl font-semibold tracking-wide"> Tourist Spots Name</h2>
                    </div>
                    <h2 className="text-xl font-semibold tracking-wide">Tourist Spots Name</h2>
                    <h2 className="text-xl font-semibold tracking-wide">Tourist Spots Name</h2>
                    <h2 className="text-xl font-semibold tracking-wide">Tourist Spots Name</h2>
                    <h2 className="text-xl font-semibold tracking-wide">Tourist Spots Name</h2>
                </div>
                <p className="dark:text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
            </div>
        </div>
    );
};

export default ResortCard;
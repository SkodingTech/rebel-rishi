
import { HiOutlineTruck } from "react-icons/hi2";

const HomeCard = () => {

    return (
        <>

            <div className="mx-4 sm:mx-20 md:mx-20 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 my-4">

                <div className="flex flex-col sm:flex-row items-center cursor-pointer gap-x-4 text-sm hover:scale-105 transition duration-500">
                    <div className="flex items-center p-6 bg-[#fff7ed] rounded-2xl">
                        <div className="bg-white rounded-full p-3"> <HiOutlineTruck size="30" /> </div>
                        <div className="w-full"><h3 className="ml-3 text-lg font-bold text-gray-800">Money Return</h3>
                            <p className="ml-3 text-gray-600 dark:text-gray-300">
                                Back gurantee under 7 days
                            </p>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col sm:flex-row items-center cursor-pointer gap-x-4 text-sm hover:scale-105 transition duration-500">
                    <div className="flex items-center p-6 bg-[#e6eef9] rounded-2xl">
                        <div className="bg-white rounded-full p-3"> <HiOutlineTruck size="30" /> </div>
                        <div className="w-full"><h3 className="ml-3 text-lg font-bold text-gray-800">Member Disount</h3>
                            <p className="ml-3 text-gray-600 dark:text-gray-300">
                                On every order over $2000
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center cursor-pointer gap-x-4 text-sm hover:scale-105 transition duration-500">
                    <div className="flex items-center p-6 bg-[#dff8f6] rounded-2xl">
                        <div className="bg-white rounded-full p-3"> <HiOutlineTruck size="30" /> </div>
                        <div className="w-full"><h3 className="ml-3 text-lg font-bold text-gray-800">Home Delivery</h3>
                            <p className="ml-3 text-gray-600 dark:text-gray-300">
                            Free delivery to your home
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center cursor-pointer gap-x-4 text-sm hover:scale-105 transition duration-500">
                    <div className="flex items-center p-6 bg-[#ffeef0] rounded-2xl">
                        <div className="bg-white rounded-full p-3"> <HiOutlineTruck size="30" /> </div>
                        <div className="w-full"><h3 className="ml-3 text-lg font-bold text-gray-800">24/7 Support</h3>
                            <p className="ml-3 text-gray-600 dark:text-gray-300">
                                Dedicated support in 24hrs
                            </p>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default HomeCard;
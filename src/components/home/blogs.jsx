import Image from 'next/image';
import { CiCalendar } from "react-icons/ci";

export default function Blog() {
    return (
        <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
            <div className="absolute inset-0">
                <div className="h-1/3 bg-white sm:h-2/3"></div>
            </div>
            <div className="relative mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Latest News
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                        This is your life and it's ending one minute @ a time...
                    </p>
                </div>
                
                <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">

                    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                        <div className="flex-shrink-0">
                            <Image
                                className="h-48 w-full object-cover"
                                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80"
                                alt=""
                                width={1679} // Add width and height for optimized images
                                height={48 * (1679 / 1679)} // Maintain aspect ratio
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                            <div className="flex-1">
                                <div className='max-w-[150px] flex border justify-center items-center rounded-2xl'>
                                    <CiCalendar size="18" className='mr-2' />
                                    
                                    <p className="text-sm font-medium">
                                        <time dateTime="2020-03-16">Mar 16, 2020</time>
                                    </p></div>

                                <a href="#" className="mt-2 block">
                                    <p className="text-xl font-semibold text-gray-900">
                                        Lorem ipsum dolor sit amet
                                    </p>
                                    <p className="mt-3 text-base text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Architecto accusantium praesentium eius, ut atque fuga culpa,
                                        similique sequi cum eos quis dolorum.
                                    </p>
                                </a>
                            </div>
                            <hr className='mt-6' />
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <a href="#">
                                        <span className="sr-only">Roel Aufderehar</span>
                                        <Image
                                            className="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                            alt=""
                                            width={256}
                                            height={256}
                                        />
                                    </a>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        <a href="#" className="hover:underline">
                                            Posted by admin
                                        </a>
                                    </p>
                                    {/* <div className="flex space-x-1 text-sm text-gray-500">
                                        
                                        <span aria-hidden="true">·</span>
                                        <span>6 min read</span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                        <div className="flex-shrink-0">
                            <Image
                                className="h-48 w-full object-cover"
                                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80"
                                alt=""
                                width={1679} // Add width and height for optimized images
                                height={48 * (1679 / 1679)} // Maintain aspect ratio
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                            <div className="flex-1">
                                <div className='max-w-[150px] flex border justify-center items-center rounded-2xl'>
                                    <CiCalendar size="18" className='mr-2' />
                                    
                                    <p className="text-sm font-medium">
                                        <time dateTime="2020-03-16">Mar 16, 2020</time>
                                    </p></div>

                                <a href="#" className="mt-2 block">
                                    <p className="text-xl font-semibold text-gray-900">
                                        Lorem ipsum dolor sit amet
                                    </p>
                                    <p className="mt-3 text-base text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Architecto accusantium praesentium eius, ut atque fuga culpa,
                                        similique sequi cum eos quis dolorum.
                                    </p>
                                </a>
                            </div>
                            <hr className='mt-6' />
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <a href="#">
                                        <span className="sr-only">Roel Aufderehar</span>
                                        <Image
                                            className="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                            alt=""
                                            width={256}
                                            height={256}
                                        />
                                    </a>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        <a href="#" className="hover:underline">
                                            Posted by admin
                                        </a>
                                    </p>
                                    {/* <div className="flex space-x-1 text-sm text-gray-500">
                                        
                                        <span aria-hidden="true">·</span>
                                        <span>6 min read</span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                        <div className="flex-shrink-0">
                            <Image
                                className="h-48 w-full object-cover"
                                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80"
                                alt=""
                                width={1679} // Add width and height for optimized images
                                height={48 * (1679 / 1679)} // Maintain aspect ratio
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                            <div className="flex-1">
                                <div className='max-w-[150px] flex border justify-center items-center rounded-2xl'>
                                    <CiCalendar size="18" className='mr-2' />
                                    
                                    <p className="text-sm font-medium">
                                        <time dateTime="2020-03-16">Mar 16, 2020</time>
                                    </p></div>

                                <a href="#" className="mt-2 block">
                                    <p className="text-xl font-semibold text-gray-900">
                                        Lorem ipsum dolor sit amet
                                    </p>
                                    <p className="mt-3 text-base text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Architecto accusantium praesentium eius, ut atque fuga culpa,
                                        similique sequi cum eos quis dolorum.
                                    </p>
                                </a>
                            </div>
                            <hr className='mt-6' />
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <a href="#">
                                        <span className="sr-only">Roel Aufderehar</span>
                                        <Image
                                            className="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                            alt=""
                                            width={256}
                                            height={256}
                                        />
                                    </a>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        <a href="#" className="hover:underline">
                                            Posted by admin
                                        </a>
                                    </p>
                                    {/* <div className="flex space-x-1 text-sm text-gray-500">
                                        
                                        <span aria-hidden="true">·</span>
                                        <span>6 min read</span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>



                    




                    {/*... other cards... */}

                </div>
            </div>
        </div>
    );
}
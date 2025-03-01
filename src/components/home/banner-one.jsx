'use client';
import { useState } from 'react';


const FeatureSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: 'Threads told the stories of tradition, while stitches explored innovation.',
      content: 'Rooted in the rich heritage of Thriprayar, Kerala, Rebel Rishi is the brainchild of Arjun Prathap, who grew up amidst the whirring sounds of sewing machines at his father’s tailoring shop, Shilpa Tailors. For over four decades, Shilpa Tailors has been synonymous with quality and precision. Today, Rebel Rishi honors that legacy while daring to push the boundaries of fashion.'
    },
  ];

  return (
    <section className="mt-24 w-full bg-[#3d1152] dark:bg-gray-700">
      <div className="w-full mx-auto flex flex-col sm:w-[90%] md:w-4/5 md:flex-row c-w-3xl-66">
        <div className="w-full flex md:w-1/2 flex-col text-center md:text-left px-2 py-0 md:py-6 self-center">
          {/* <h1 className="mt-5 sm:mt-0 text-4xl md:text-5xl text-[#fe4536] font-semibold ">
            REBEL <br /> RISHI
          </h1> */}
          <img src='/images/logo/icon.png' className='max-w-[250px]' />

        </div>
        <div className="w-full flex md:w-1/2 flex-col md:flex-row">
          <div

            className={`rounded-md md:min-h-80 md:max-h-80 mr-0 md:mr-2 pb-3 md:pb-0 mb-6 md:mb-0 cursor-pointer`} >
            <h1 className={`mx-4 mt-4 font-semibold`}>
              <span className="text-emerald-500"></span>
            </h1>
            <div className="transition-all duration-300 px-6 py-6">
              <h1 className="relative top-0 mb-4 font-semibold">
                <span className="text-white text-2xl">Threads told the stories of tradition, while stitches explored innovation.</span>
              </h1>
              <div className="duration-400 mb-6 w-[95%] text-sm text-white flex-none text-[90%] transition-all">
                Rooted in the rich heritage of Thriprayar, Kerala, Rebel Rishi is the brainchild of Arjun Prathap, who grew up amidst the whirring sounds of sewing machines at his father’s tailoring shop, Shilpa Tailors. For over four decades, Shilpa Tailors has been synonymous with quality and precision. Today, Rebel Rishi honors that legacy while daring to push the boundaries of fashion.
              </div>
              <button className="rounded-2xl bg-[#f88e0f] px-5 py-2 text-sm text-white hover:bg-white hover:text-gray-800">
                Discover now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
'use client';
import { useState } from 'react';
import { LiaTshirtSolid } from "react-icons/lia";
import { PiPantsLight } from "react-icons/pi";
import { PiDress } from "react-icons/pi";
import { PiDressLight } from "react-icons/pi";
import { IoShirtOutline } from "react-icons/io5";

const FeatureTWO = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const iconSize = "60"
  const features = [
    {
      id: 0,
      title: 'Threads told the stories of tradition, while stitches explored innovation.',
      content: 'Rooted in the rich heritage of Thriprayar, Kerala, Rebel Rishi is the brainchild of Arjun Prathap, who grew up amidst the whirring sounds of sewing machines at his father’s tailoring shop, Shilpa Tailors. For over four decades, Shilpa Tailors has been synonymous with quality and precision. Today, Rebel Rishi honors that legacy while daring to push the boundaries of fashion.'
    },
  ];

  return (
    <section className="w-full bg-[#fe4536] dark:bg-gray-700 py-4">
      <div className='text-white font-base font-semibold text-center py-4 text-2xl'>
        SHOP BY CATEGORIES
      </div>
      <div className='flex items-center justify-center px-4'>
        <p className='text-white text-center max-w-4xl text-sm'>
          At Rebel Rishi, we understand that every individual has their unique style and preferences. That’s why we’ve organized our collection into easy-to-browse categories, making it simpler for you to find exactly what you’re looking for. Explore our diverse range and discover pieces that resonate with your personal aesthetic!
        </p>
      </div>

      <div className='flex justify-center items-center px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-8 w-full max-w-6xl'>
          
          {["Trendy Shirts", "Smart Casuals", "Ethnic Outfits", "Ethnic Kurtas", "Stylish Dresses", "Statement Tops"].map((category, index) => (
            <div key={index} className="bg-white shadow-md flex flex-col hover:scale-105 transition duration-500 cursor-pointer justify-center items-center rounded-2xl p-5 w-full max-w-xs mx-auto">
              <div className='flex justify-center items-center'>
                <div className="bg-[#edfbfa] w-36 h-36 p-4 rounded-full flex justify-center items-center"> 
                 {category === "Trendy Shirts" ? (<LiaTshirtSolid size={iconSize} />): null} 
                 {category === "Smart Casuals" ? (<PiPantsLight size={iconSize} />): null} 
                 {category === "Ethnic Outfits" ? (<IoShirtOutline size={iconSize} />): null} 
                 {category === "Ethnic Kurtas" ? (<PiDress size={iconSize} />): null} 
                 {category === "Stylish Dresses" ? (<LiaTshirtSolid size={iconSize} />): null} 
                 {category === "Statement Tops" ? (<PiDressLight size={iconSize} />): null} 
                </div>
              </div>
              <h1 className="text-xl sm:text-base font-semibold p-3 text-center">{category}</h1>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeatureTWO;

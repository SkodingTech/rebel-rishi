'use client';

const ShowcaseSection = () => {
  return (
    <>
      <div className="bg-[#fff7ed]">

        <div className="text-center">
          <div className="py-7">
            <h1 className="text-3xl  md:text-xl font-semibold text-gray-800 dark:text-white">
              Premium Handpicked
            </h1>
            <p>Exclusivity in Every Stitch, curated with precision.</p>
          </div>
        </div>


        <div className="w-full flex flex-col md:flex-row">


          <div className="w-full mx-auto flex flex-col md:flex-row">

            {/* Left Side */}
            <div className="w-full relative md:w-1/2 items-center h-auto md:py-12 flex">
              <div
                className="absolute bg-gray-300 w-[85%] h-[70%] right-0 bg-cover"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                }}
              />

            </div>

            {/* Right Side */}
            <div className="w-full mx-4 relative md:w-1/2 justify-items-center h-auto md:py-8 pl-6 flex flex-col my-auto">

              <div className="">
                <div className="flex flex-row md:!flex-col mt-4 md:!mt-0">
                  <div className="w-11/12">
                    <h1 className="text-3xl mt-2 md:text-xl font-semibold text-gray-800 dark:text-white">
                      Exclusivity in Every Stitch
                    </h1>
                  </div>
                </div>
                <div className="w-[50%] md:!w-[60%] xl:!w-[70%]">
                  <p className="text-md mb-4 line-clamp-4 md:line-clamp-none dark:text-white">
                    Each item in our collection is crafted with meticulous attention to detail, ensuring that you wear something truly unique.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 shadow-md">
                <div className="flex flex-row md:!flex-col mt-4 md:!mt-0">
                  <div className="w-full">
                    <h1 className="text-3xl mt-2 md:text-xl font-semibold text-gray-800 dark:text-white">
                      Quality Meets Style
                    </h1>
                  </div>
                </div>
                <div className="w-[50%] md:!w-[60%] xl:!w-[70%]">
                  <p className="text-md mb-4 line-clamp-4 md:line-clamp-none dark:text-white">
                    We blend traditional craftsmanship with modern aesthetics, creating garments that not only look good but feel great too.
                  </p>
                </div>
              </div>

              <div className="">
                <div className="flex flex-row md:!flex-col mt-4 md:!mt-0">
                  <div className="w-11/12">
                    <h1 className="text-3xl mt-2 md:text-xl font-semibold text-gray-800 dark:text-white">
                      Curated for the Bold
                    </h1>
                  </div>
                </div>
                <div className="w-[50%] md:!w-[60%] xl:!w-[70%]">
                  <p className="text-md mb-4 line-clamp-4 md:line-clamp-none dark:text-white">
                    Our collection celebrates those who dare to express themselves.
                  </p>
                </div>
              </div>



            </div>

          </div>
        </div>
      </div>
    </>

  );
};

export default ShowcaseSection;

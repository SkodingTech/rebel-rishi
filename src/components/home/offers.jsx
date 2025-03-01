export default function OfferSection() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-6 mx-4 sm:mx-20 md:mx-20">
      {/* Left Card */}
      <div className="bg-[#F88E0F] rounded-xl p-6 flex flex-col justify-between md:w-1/2 relative">
        <div>
          <h2 className="text-xl font-bold text-black">
            Exclusive Offer: Flat ₹400 Off on Your Next Purchase!
          </h2>
          <p className="text-white mt-2">
            At Rebel Rishi, we believe in celebrating individuality and heritage
            through fashion. To show our appreciation for your support, we’re
            excited to offer you a Flat ₹400 Off on your next purchase!
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <button className="bg-black text-white hover:text-black hover:bg-white px-4 py-2 rounded-2xl w-max">
            See Collection
          </button>
        </div>
        {/* Image placed at the bottom-right of the card */}
        <div className="w-full h-full">
        <img
          src="/images/home/icon1.png" // Placeholder image URL
          alt="Offer Image"
          className="absolute bottom-0 right-0 w-[150px] sm:w-[150px] md:w-[200px] rounded-tl-xl"
        />
          </div>
      </div>

      {/* Right Card */}
      <div className="bg-[#FF4613] rounded-xl p-6 flex flex-col md:flex-row justify-between items-center md:w-1/2">
        {/* Left Section: Text and Button */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Rebel Rishi: Collection 2024</h2>
            <p className="text-white mt-2">15% Off on Mens Wear</p>
          </div>
          <button className="mt-4 bg-white hover:bg-black text-black hover:text-white px-4 py-2 rounded-2xl w-max">
            See Collection
          </button>
        </div>

        {/* Right Section: Three Images */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <div className="w-full h-full">
            <img
              src="/images/home/icon3.png"
              alt="Image 1"
              className="w-[100px] h-[100px]"
            />
          </div>
          <div className="w-full">
            <img
              src="/images/home/icon4.png"
              alt="Image 2"
              className="w-[100px] h-[100px]"
            />
          </div>
          {/* <img
            src="/images/home/icon4.png"
            alt="Image 3"
            className="w-[100px] h-[100px] absolute left-1/2 transform -translate-x-1/2"
          /> */}
        </div>
      </div>
    </div>
  );
}


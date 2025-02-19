export default function OfferSection() {
    return (
      <div className="flex flex-col md:flex-row gap-4 p-6 mx-4 sm:mx-20 md:mx-20">
        {/* Left Card */}
        <div className="bg-orange-500 rounded-xl p-6 flex flex-col justify-between md:w-1/2">
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
          <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg w-max">
            See Collection
          </button>
        </div>
  
        {/* Right Card */}
        <div className="bg-red-500 rounded-xl p-6 flex flex-col justify-between md:w-1/2">
          <div>
            <h2 className="text-xl font-bold text-white">Rebel Rishi: Collection 2024</h2>
            <p className="text-white mt-2">15% Off on Mens Wear</p>
          </div>
          <button className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg w-max">
            See Collection
          </button>
        </div>
      </div>
    );
  }

  
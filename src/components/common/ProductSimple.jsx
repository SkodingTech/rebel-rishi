import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCardNormal = ({ data }) => {
  const { id, title, srcUrl, rating, price, discount } = data;

  // Calculate discounted price
  const discountedPrice =
    discount.percentage > 0
      ? Math.round(price - (price * discount.percentage) / 100)
      : discount.amount > 0
      ? price - discount.amount
      : price;

  // Determine discount label
  const discountLabel =
    discount.percentage > 0
      ? `-${discount.percentage}%`
      : discount.amount > 0
      ? `-$${discount.amount}`
      : null;

  // Render star icons based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className="block h-3 w-3 align-middle text-[#ff4613] sm:h-4 sm:w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="block h-3 w-3 align-middle text-[#ff4613] sm:h-4 sm:w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    for (let i = stars.length; i < 5; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <Link href={`/shop/product/${data.id}/${data.title.split(" ").join("-")}`} >
    <div className="relative">
      {/* Product Image */}
      <div className="w-full overflow-hidden">
        <div className="relative w-full h-auto">
          <Image
            src={srcUrl}
            width={500} // Set a base width
            height={500} // Set a base height
            className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-125"
            alt={title}
            priority
          />
        </div>
      </div>

      {/* Sale Badge */}
      {discountLabel && (
        <div className="absolute top-0 m-1 rounded-full bg-white">
          <p className="rounded-full bg-black p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
            Sale
          </p>
        </div>
      )}

      {/* Product Details */}
      <div className="mt-4 flex items-start justify-between">
        <div>
          {/* Product Title */}
          <h3 className="text-xs font-semibold sm:text-sm md:text-base">
            <Link
              href={`/shop/product/${id}/${title.split(" ").join("-")}`}
              className=""
            >
              {title}
              <span className="absolute" aria-hidden="true"></span>
            </Link>
          </h3>

          {/* Rating */}
          <div className="mt-2 flex items-center">{renderStars()}</div>
        </div>

        {/* Price */}
        <div className="text-right">
          {/* Original Price (if discounted) */}
          {(discount.percentage > 0 || discount.amount > 0) && (
            <del className="mt-px text-xs font-semibold text-gray-600 sm:text-sm">
              ${price}
            </del>
          )}
          {/* Discounted Price */}
          <p className="text-xs font-normal sm:text-sm md:text-base">
            ${discountedPrice}
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProductCardNormal;
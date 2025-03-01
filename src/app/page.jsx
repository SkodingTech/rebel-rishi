import ProductListSec from "@/components/common/ProductListSec";
import ProductListNormal from "@/components/common/ProductListNormal";
import Brands from "@/components/homepage/Brands";
import DressStyle from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
// import { Product } from "@/types/product.types";
// import { Review } from "@/types/review.types";
import { RiFireLine } from "react-icons/ri";
import HomeCard from "@/components/ui/home-card";
import FeatureSection from "@/components/home/banner-one";
import FeatureTWO from "@/components/home/banner-two";
import ShowcaseSection from "@/components/home/showcase";
import OfferSection from "@/components/home/offers";
import Blog from "@/components/home/blogs";
import { newArrivalsData, topSellingData, categories } from "@/lib/data/product";

export default function Home() {
    return (<>

        <div className="sm:flex mt-4 mb-8 mx-4 sm:mx-20 md:mx-20">

            <div className="flex items-center justify-center">
                <div className="bg-[#fae7ea] text-[#ff4613] p-1 rounded-full cursor-pointer hover:opacity-75 mx-2">
                    <div className="flex items-center justify-center">
                        <div className="mx-3 p-1">
                            <RiFireLine size={24} />
                        </div>
                        <div className="mr-4 font-base whitespace-nowrap">
                            Super Deals Product
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center mx-10 my-4">
                <div className="md:mr-4 font-bold">
                    <div className="text-lg sm:text-xl text-[#ff4613]">Womens Wear | Mens Wear</div>
                </div>
            </div>

            <div className="flex items-center justify-center mx-10">
                <div className="md:mr-4">
                    <div className="text-[#ff4613]">Dont miss out on our Super Deals!</div>
                </div>
            </div>
        </div>

        <Header />
        <HomeCard />
        <div className="my-[50px] sm:my-[72px] mx-4">
            <ProductListSec title="Trending Sell" data={newArrivalsData} viewAllLink="/shop#new-arrivals" />
            <div className="px-4 xl:px-0">
                <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
            </div>
            <div className="mb-[50px] sm:mb-20">
                <ProductListNormal title="Brand New  Products" data={topSellingData} viewAllLink="/shop#top-selling" categories={categories} />
            </div>
        </div>
        <FeatureSection />
        <FeatureTWO />
        <ShowcaseSection />
        <OfferSection />
        <Blog />
        {/* <div className="mb-[50px] sm:mb-20">
            <DressStyle />
        </div> */}
        {/* <div className="my-[50px] sm:my-[72px] mx-4 sm:mx-20 md:mx-20">
            <Brands />
        </div> */}
    </>);
}

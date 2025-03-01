import { newArrivalsData, topSellingData, relatedProductData } from "@/lib/data/product";
import ProductListSec from "@/components/common/ProductListSec";
import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
import Header from "@/components/product-page/Header";
import Tabs from "@/components/product-page/Tabs";
import { notFound } from "next/navigation";
const data = [
    ...newArrivalsData,
    ...topSellingData,
    ...relatedProductData,
];

export default function ProductPage({ params, }) {
    const productData = data.find((product) => product.id === Number(params.slug[0]));
    if (!productData?.title) {
        notFound();
    }
    return (<main>
      <div className="max-w-frame px-4 xl:px-0 mt-4 mb-8 mx-4 sm:mx-20 md:mx-20">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6"/>
        <BreadcrumbProduct title={productData?.title ?? "product"}/>
        <section className="mb-11">
          <Header data={productData}/>
        </section>
        <Tabs />
      </div>
      <div className="mb-[50px] sm:mb-20">
        <ProductListSec title="You might also like" data={relatedProductData}/>
      </div>
    </main>);
}

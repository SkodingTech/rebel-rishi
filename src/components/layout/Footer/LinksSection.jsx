import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";


const socialsData = [
    {
        id: 1,
        icon: <FaTwitter />,
        url: "https://twitter.com",
    },
    {
        id: 2,
        icon: <FaFacebookF />,
        url: "https://facebook.com",
    },
    {
        id: 3,
        icon: <FaInstagram />,
        url: "https://instagram.com",
    },
    {
        id: 4,
        icon: <FaGithub />,
        url: "https://github.com/mohammadoftadeh",
    },
];

const footerLinksData = [
    {
        id: 1,
        title: "Products segment",
        children: [
            {
                id: 11,
                label: "Womens Wear",
                url: "#",
            },
            {
                id: 12,
                label: "Mens Wear",
                url: "#",
            },
            {
                id: 13,
                label: "Best Sellers",
                url: "#",
            },
            {
                id: 14,
                label: "Premium Handpicked",
                url: "#",
            },
            {
                id: 14,
                label: "Others",
                url: "#",
            },
            {
                id: 14,
                label: "Contact Information",
                url: "#",
            },
        ],
    },
    {
        id: 2,
        title: "Customer Support",
        children: [
            {
                id: 21,
                label: "Contact Us",
                url: "#",
            },
            {
                id: 22,
                label: "Store List",
                url: "#",
            },
            {
                id: 23,
                label: "Opening Hours",
                url: "#",
            },
            {
                id: 24,
                label: "Returns & Exchanges",
                url: "#",
            },
            {
                id: 24,
                label: "Refund and Returns",
                url: "#",
            },
            {
                id: 24,
                label: "Privacy Policy",
                url: "#",
            },
        ],
    },
    // {
    //     id: 3,
    //     title: "resources",
    //     children: [
    //         {
    //             id: 41,
    //             label: "Free eBooks",
    //             url: "#",
    //         },
    //         {
    //             id: 42,
    //             label: "development tutorial",
    //             url: "#",
    //         },
    //         {
    //             id: 43,
    //             label: "How to - Blog",
    //             url: "#",
    //         },
    //         {
    //             id: 44,
    //             label: "youtube playlist",
    //             url: "#",
    //         },
    //     ],
    // },
];
const LinksSection = () => {
    return (<>

            {footerLinksData.map((item) => (<section className="flex flex-col mt-5" key={item.id}>
                <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
                    {item.title}
                </h3>
                {item.children.map((link) => (<Link href={link.url} key={link.id} className={cn([
                    link.id !== 41 && link.id !== 43 && "capitalize",
                    "text-black/60 text-sm md:text-base mb-4 w-fit",
                ])}>
                    {link.label}
                </Link>))}
            </section>))}


            <div className="relative isolate overflow-hidden sm:mt-[18px]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
                            Keep Updated
                        </h2>
                        <p className="text-black/60 text-sm md:text-base mb-4 w-fit">
                            With our newsletter, you'll never miss an
                            important update.
                        </p>
                    </div>
                    <form className="mx-auto mt-10 flex max-w-md gap-x-4">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                            placeholder="Enter your email"
                        />
                        <button
                            type="submit"
                            className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" >
                            Notify me
                        </button>
                    </form>

                    <div className="flex items-center my-5">
                        {socialsData.map((social) => (<Link href={social.url} key={social.id} className="bg-white hover:bg-black hover:text-white transition-all mr-3 w-7 h-7 rounded-full border border-black/20 flex items-center justify-center p-1.5">
                            {social.icon}
                        </Link>))}
                    </div>

                </div>
                <svg
                    viewBox="0 0 1024 1024"
                    className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2" >
                </svg>

            </div>

    </>);
};
export default LinksSection;

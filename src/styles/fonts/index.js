import localFont from "next/font/local";
import { Baloo_2 } from 'next/font/google';

export const baloo = Baloo_2({
    subsets: ["latin"],
    variable: "--font-sans",
});

const integralCF = localFont({
    src: [
        {
            path: "./integralcf-bold.woff",
            weight: "700",
            style: "normal",
        },
    ],
    fallback: ["sans-serif"],
    variable: "--font-integralCF",
});
const satoshi = localFont({
    src: [
        {
            path: "./Satoshi-Regular.woff",
            weight: "400",
            style: "normal",
        },
        {
            path: "./Satoshi-Medium.woff",
            weight: "500",
            style: "normal",
        },
        {
            path: "./Satoshi-Bold.woff",
            weight: "700",
            style: "normal",
        },
    ],
    fallback: ["sans-serif"],
    variable: "--font-satoshi",
});
export { integralCF, satoshi };

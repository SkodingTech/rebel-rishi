import "../styles/globals.css";
import { satoshi } from "@/styles/fonts";
import TopBanner from "@/components/layout/Banner/TopBanner";
import TopNavbar from "@/components/layout/Navbar/TopNavbar";
import Footer from "@/components/layout/Footer";
import HolyLoader from "holy-loader";
import Providers from "./providers";

export const metadata = {
    title: "Rebel Rishi",
    description: "",
};
export const viewport = {
    themeColor: "#000000",
};

export default function RootLayout({ children, }) {
    return (<html lang="en">
      <body className={satoshi.className}>
        <HolyLoader color="#868686"/>
        <TopBanner />
        <Providers>
          <TopNavbar />
          <div className="">{children}</div>
        </Providers>
        <Footer />
      </body>
    </html>);
}

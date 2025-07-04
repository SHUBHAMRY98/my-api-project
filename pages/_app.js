 import "@/styles/globals.css";
 import "@/assets/fonts.css";
 import "@/styles/vendorlist.css";
 import "@/styles/cartpreview.css";
import "@/styles/vendorcomparision.css";
import "@/styles/checkout.css";
import "@/styles/registration.css";
import "@/styles/planning.css";

import { Inter, Roboto } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${roboto.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

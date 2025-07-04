import localFont from "next/font/local";

export const manrope = localFont({
  src: [
    {
      path: "../assets/fonts/Manrope/Manrope-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Manrope/Manrope-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

export const poppins = localFont({
  src: [
    {
      path: "../assets/fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});

import "@/styles/globals.css";
import "@/styles/blog.css";
import ManagedDrawer from "@/components/UI/Drawer/Managed-drawer";

import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ToastContainer } from "react-toastify";

const isidorasansRegular = localFont({
  src: "../public/fonts/Isidora-sans/IsidoraSans-Regular.ttf",
  weight: "400",
  display: "swap",
  variable: "--font-isidorasans-regular",
});
const isidorasansmedium = localFont({
  src: "../public/fonts/Isidora-sans/IsidoraSans-Medium.ttf",
  weight: "400",

  display: "swap",
  variable: "--font-isidorasans-medium",
});
const isidorasanssemibold = localFont({
  src: "../public/fonts/Isidora-sans/IsidoraSans-SemiBold.ttf",
  weight: "400",

  display: "swap",
  variable: "--font-isidorasans-semibold",
});
const isidorasans = localFont({
  src: "../public/fonts/Isidora-sans/IsidoraSans-SemiBold.ttf",
  weight: "400",

  display: "swap",
  variable: "--font-isidorasans",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --isidorasans-font: ${isidorasans.style.fontFamily};
            --isidorasans-regular-font: ${isidorasansRegular.style.fontFamily};
            --isidorasans-medium-font: ${isidorasansmedium.style.fontFamily};
            --isidorasans-semi-bold-font: ${isidorasanssemibold.style
              .fontFamily};
          }
        `}
      </style>
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <ManagedDrawer />
        <ToastContainer autoClose={2000} theme="colored" />
      </>
    </>
  );
}

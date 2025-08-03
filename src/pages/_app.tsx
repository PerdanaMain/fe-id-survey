import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HeroUIProvider } from "@heroui/react";
import { Montserrat } from "next/font/google";
// import Cookie from "@/components/cookie";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeroUIProvider>
      <main style={{ fontFamily: montserrat.style.fontFamily }}>
        <Component {...pageProps} />
        {/* <Cookie /> */}
      </main>
    </HeroUIProvider>
  );
}

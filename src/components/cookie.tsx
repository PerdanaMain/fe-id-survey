import { Button } from "@heroui/react";
import React from "react";

const Cookie = () => {
  const [showCookie, setShowCookie] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      setShowCookie(true);
    }
  }, []);

  if (!showCookie) return null;

  return (
    <div
      className={`flex flex-col gap-2 bg-white text-black px-24 z-[999] h-[40dvh] py-8`}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
      }}
      id="cookie-agreement"
    >
      <h4 className="text-2xl font-semibold">Pemberitahuan</h4>
      <span className="mr-6 text-sm">
        Kami menggunakan cookie untuk memastikan situs ini berfungsi dengan
        baik, menganalisis penggunaan, dan meningkatkan pengalaman Anda. Dengan
        menyetujui cookie, Anda setuju untuk menyimpan cookie selama 12 bulan
        pada perangkat Anda.
      </span>
      <div className="flex flex-col md:flex-row gap-4 items-center mt-4">
        <a href="#" className="text-[#184980] underline text-sm font-medium">
          Kebijakan Cookie
        </a>
        <a href="#" className="text-[#184980] underline text-sm font-medium">
          Kebijakan Perlindungan Data Pribadi
        </a>
        <a href="#" className="text-[#184980] underline text-sm font-medium">
          Ketentuan Pengguna
        </a>
      </div>
      <div className="flex gap-4 mt-6">
        <Button
          size="md"
          radius="none"
          className="bg-[#184980] text-white font-semibold px-6 py-2"
          onPress={() => {
            setShowCookie(false);
          }}
        >
          Izinkan Semua Cookie
        </Button>
        <Button
          size="md"
          radius="none"
          className="bg-white text-[#184980] font-semibold px-6 py-2 border border-[#184980]"
          onPress={() => {
            setShowCookie(false);
          }}
        >
          Izinkan Beberapa Cookie
        </Button>
        <Button
          size="md"
          radius="none"
          className="bg-white text-[#184980] font-semibold px-6 py-2 border border-[#184980]"
          onPress={() => {
            setShowCookie(false);
          }}
        >
          Tolak Semua Cookie
        </Button>
      </div>
    </div>
  );
};

export default Cookie;

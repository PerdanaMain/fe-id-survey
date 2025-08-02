import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { solutionDetails, solutionMenus } from "@/libs/solution-list";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface SolutionDetail {
  url: string;
  content: {
    header: string;
    body: {
      pre: string;
      lists: {
        title: string;
        description: string;
      }[];
    };
  };
}

const Solutions = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [solutionDetail, setSolutionDetail] = useState<SolutionDetail | null>(
    null
  );

  useEffect(() => {
    const path = window.location.pathname;
    const validUrls = solutionMenus.map((menu) => menu.url);

    if (!validUrls.includes(path)) {
      window.location.href = "/404";
    } else {
      const detail = solutionDetails.find((solution) => solution.url === path);
      setSolutionDetail(detail ?? null);
      console.log("Solution Detail:", detail);
    }
  }, [solutionDetail]);

  return (
    <div>
      <Header />

      {/* Hero Section dengan Background */}
      <section
        className="relative h-[70vh] md:h-[80vh] bg-cover bg-center bg-no-repeat overflow-visible"
        style={{ backgroundImage: "url('/img/bg-solution.png')" }}
      >
        <div className="relative z-10 h-full pt-20 md:pt-32 px-8 md:px-24">
          <div className="mb-8">
            <Breadcrumb />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start h-full">
            <div className="flex flex-col justify-end h-full">
              <div className="p-6 md:p-8 mt-auto">
                <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-12">
                  {solutionDetail?.content.header}
                </h2>
              </div>
            </div>

            <div className="flex flex-col items-center justify-end lg:justify-center relative">
              <div className="w-full max-w-md lg:max-w-lg relative rounded-sm overflow-hidden transform translate-y-8 md:translate-y-16 lg:translate-y-20 z-20">
                <div className="relative h-80 md:h-96 lg:h-[26rem]">
                  <Image
                    src="/img/solution-hero.png"
                    alt="Solution Hero"
                    className="w-full h-full object-cover"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="space-y-6">
          <h3 className="text-xl font-normal mb-4">
            {solutionDetail?.content.body.pre}
          </h3>
        </div>

        {solutionDetail?.content.body.lists.map((item, index) => (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
            key={index}
          >
            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
            <p className="text-gray-700 col-span-2">{item.description}</p>
          </div>
        ))}
      </section>

      <hr className="container mx-auto mt-4 border-gray-300" />
      <div className="container mx-auto my-4">
        <h4 className="text-lg font-semibold mb-2">Solusi Lainnya Dari Kami</h4>
        <Swiper
          spaceBetween={15}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => {
            console.log(swiper);
            swiperRef.current = swiper;
          }}
        >
          {solutionMenus.map((solution, index) => (
            <SwiperSlide key={index}>
              <div className="mb-4 transition-colors duration-200 hover:bg-[#184980] hover:text-white rounded-sm">
                <Image
                  src={`/img/${solution.image}`}
                  alt={solution.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-contain rounded-t-lg mb-3"
                />
                <Link
                  href={solution.url}
                  className="text-normal font-semibold py-2 flex items-center justify-between px-3 truncate"
                  title={solution.title}
                >
                  <span className="truncate">{solution.title}</span>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center mt-4">
          <div className="flex items-center gap-2 mr-auto">
            <div className="bg-[#00B0A8] w-16 h-2" />
            <div className="bg-[#F6F6F6] w-10 h-2" />
            <div className="bg-[#F6F6F6] w-10 h-2" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <button
              className="py-1 px-2 bg-gray-100 hover:bg-white border cursor-pointer"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft className="inline" />
            </button>
            <button
              className="py-1 px-2 bg-gray-100 hover:bg-white border cursor-pointer"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRight className="inline" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Solutions;

import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { useState, useEffect } from "react";
import { serviceMenus } from "@/libs/service-list";

interface ServiceDetail {
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

interface ServiceMenu {
  title: string;
  url: string;
  image: string;
}

const Services = () => {
  //   const [serviceDetail, setServiceDetail] = useState<ServiceDetail | null>(
  //     null
  //   );

  const [serviceDetail, setServiceDetail] = useState<ServiceMenu | null>(null);

  useEffect(() => {
    const path = window.location.pathname;
    const validUrls = serviceMenus.map((menu) => menu.url);

    if (!validUrls.includes(path)) {
      window.location.href = "/404";
    } else {
      const detail = serviceMenus.find((service) => service.url === path);
      setServiceDetail(detail ?? null);
      console.log("Service Detail:", detail);
    }
  }, [serviceDetail]);
  return (
    <div>
      <Header />

      <section
        className="relative h-[70vh] md:h-[80vh] bg-cover bg-center bg-no-repeat overflow-visible"
        style={{ backgroundImage: "url('/img/bg-service.png')" }}
      >
        <div className="relative z-10 h-full pt-20 md:pt-32 px-8 md:px-24">
          <div className="mb-8">
            <Breadcrumb />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start h-full">
            <div className="flex flex-col justify-end h-full">
              <div className="p-6 md:p-8 mt-auto">
                <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-12">
                  {serviceDetail?.title || "Layanan Kami"}
                </h2>
              </div>
            </div>

            <div className="flex flex-col items-center justify-end lg:justify-center relative">
              <div className="w-full max-w-md lg:max-w-lg relative rounded-sm overflow-hidden transform translate-y-8 md:translate-y-16 lg:translate-y-20 z-20">
                <div className="relative h-80 md:h-96 lg:h-[26rem]">
                  {/* <Image
                    src="/img/solution-hero.png"
                    alt="Solution Hero"
                    className="w-full h-full object-cover"
                    fill
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

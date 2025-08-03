"use client";

// import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/breadcrumb";
import { serviceMenus } from "@/libs/service-list";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface ServiceDetail {
  title: string;
  url: string;
  image: string;
  content?: {
    pre?: string[];
    lists?: {
      title: string;
      description: string;
      pictures?: { name: string; image: string }[];
    }[];
  };
}

const ServiceDetail = () => {
  const router = useRouter();
  const [serviceDetail, setServiceDetail] =
    React.useState<ServiceDetail | null>(null);

  useEffect(() => {
    const path = window.location.pathname;
    // const paths = path.split("/").slice(1);
    // console.log("Current Paths:", paths);
    const validUrls = serviceMenus.map((menu) => menu.url);
    if (!validUrls.includes(path)) {
      router.push("/404");
    }

    const rawDetail = serviceMenus.find((service) => service.url === path);

    // Transform to match ServiceDetail type
    const detail: ServiceDetail | null = rawDetail
      ? {
          ...rawDetail,
          content: rawDetail.content
            ? {
                ...rawDetail.content,
                lists: rawDetail.content.lists
                  ? rawDetail.content.lists.map((item) => ({
                      ...item,
                      description: item.description ?? "",
                      pictures: Array.isArray(item.pictures)
                        ? item.pictures
                            .filter((pic) => pic && typeof pic === "object")
                            .map((pic) => ({
                              ...pic,
                              image: pic.image ?? "",
                            }))
                        : undefined,
                    }))
                  : [],
              }
            : undefined,
        }
      : null;

    setServiceDetail(detail);
  }, [router]);

  return (
    <div>
      <Header transparent={false} />
      <section className="grid grid-cols-1 md:grid-cols-3 min-h-screen md:min-h-[65vh] bg-cover bg-[#184980] bg-center gap-0 mt-0">
        <div className="col-span-2 bg-[#184980] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a4d7a] to-[#2b5a8a] opacity-90 flex flex-col justify-between pl-8 sm:pl-24 pt-32 pb-8">
            <Breadcrumb />
            <div className="flex flex-col">
              <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
                {serviceDetail?.title || "Layanan Tidak Ditemukan"}
              </h1>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <Image
            src="/img/service-1.png"
            alt="Oil & Gas Platform"
            width={500}
            height={500}
            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
          />
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <h3 className="text-xl font-normal mb-4">
            {serviceDetail?.content?.pre?.map((text, index) => (
              <span key={index} className="block mb-2">
                {text}
              </span>
            ))}
          </h3>
        </div>

        {serviceDetail?.content?.lists?.map((item, index) => (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
            key={index}
          >
            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
            {item.description && (
              <p className="text-gray-700 col-span-2">{item.description}</p>
            )}
            {item.pictures && item.pictures.length > 0 && (
              <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {item.pictures.map((picture, picIndex) => (
                  <div
                    key={picIndex}
                    className={`relative h-48 rounded-sm overflow-hidden flex items-end ${
                      !picture.image ? "bg-gray-300" : ""
                    }`}
                  >
                    {picture.image ? (
                      <Image
                        src={`/img/${picture.image}`}
                        alt={picture.name}
                        fill
                        className="object-cover w-full h-full"
                      />
                    ) : null}
                    <div className="absolute bottom-0 left-0 right-0 bg-transparent bg-opacity-50 text-white p-2 text-sm font-semibold">
                      {picture.name}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default ServiceDetail;

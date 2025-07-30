import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import Image from "next/image";

const ServicePage = () => {
  const unitServices = [
    {
      title: "Inspeksi dan Sertifikasi",
      description:
        "Layanan inspeksi dan sertifikasi untuk memastikan peralatan dan proses sesuai standar.",
      image: "/img/service-1.png",
    },
    {
      title: "Pengujian dan Analisis",
      description:
        "Pengujian dan analisis untuk memastikan kualitas produk dan proses.",
      image: "/img/service-1.png",
    },
    {
      title: "Konsultasi Energi Hijau",
      description:
        "Konsultasi untuk transisi energi dan investasi di bidang energi hijau.",
      image: "/img/service-1.png",
    },
    {
      title: "Konsultasi Energi Hijau",
      description:
        "Konsultasi untuk transisi energi dan investasi di bidang energi hijau.",
      image: "/img/service-1.png",
    },
  ];
  return (
    <>
      <section className="bg-[#184980]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
          <div className="col-span-2 justify-content-center flex flex-col mx-18 text-[#ffffff] my-4">
            <Breadcrumbs
              separator="/"
              itemClasses={{
                separator: "px-2 text-[#ffffff]",
                item: "text-sm font-medium text-[#ffffff]",
                base: "flex items-center",
              }}
            >
              <BreadcrumbItem>Beranda</BreadcrumbItem>
              <BreadcrumbItem>Layanan</BreadcrumbItem>
              <BreadcrumbItem>Minyak, Gas & Energi</BreadcrumbItem>
            </Breadcrumbs>

            <div className="flex flex-col justify-end h-full flex-1">
              <h1 className="text-4xl font-bold mb-4">Minyak, Gas & Energi</h1>
            </div>
          </div>
          <div className="">
            <Image
              src="/img/service-1.png"
              alt="Hero Image"
              className="w-full h-auto object-cover"
              width={500}
              height={300}
            />
          </div>
        </div>
      </section>
      <section className="container mx-18 my-4">
        <p className="text-[#102441] text-xl font-normal text-wrap">
          Saat ini industri migas dihadapkan dengan adanya transisi energi serta
          target nol emisi membuat perusahaan perlu untuk memangkas biaya untuk
          eksplorasi dan eksploitasi sumber baru. Sehingga untuk mendorong
          transisi energi dan meningkatkan penggunaan energi bersih, beberapa
          perusahaan didorong untuk melakukan diversifikasi operasi dengan
          berinvestasi terutama di bidang energi yang lebih hijau.
        </p>
        <p className="text-[#102441] text-xl font-normal text-wrap">
          Namun, disisi lain, sektor migas merupakan sektor penting untuk
          kebutuhan masyarakat serta salah satu sumber devisa negara.  Oleh
          karena itu peningkatan produksi migas untuk memenuhi kebutuhan dalam
          negeri tetap harus dijaga. Sektor migas merupakan sektor yang cukup
          rentan terhadap kecelakaan dan menyangkut keselamatan banyak nyawa.
          Selain itu, perusahaan perlu untuk memperhatikan dampak dari
          operasional terhadap lingkungan sekitar dengan inpeksi menyeluruh
          untuk memastikan alam tetap seimbang dan tidak menjadi bencana di
          kemudian hari.
        </p>
        <p className="text-[#102441] text-xl font-normal text-wrap">
          Dengan tantangan perusahaan dalam mengefesiensikan biaya, bagaimana
          perusahaan memenuhi target produksi? apakah kegiatan dan biaya
          produksi sudah cukup efisien? apakah produk yang dihasilkan sudah
          cukup memenuhi kualitas pasar dan memenuhi standar yang berlaku?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-4">
          <h1 className="text-4xl font-bold">Solusi</h1>
          <span className="text-[#102441] text-xl font-normal col-span-2">
            Inspeksi dan sertifikasi diperlukan untuk memastikan bahwa peralatan
            yang digunakan perusahaan masih layak pakai dan bisa untuk
            mengefesiensikan biaya. Inpeksi akan produk, proses serta jaringan
            transportasi pipa, tangki hingga pendistribusian pun diperlukan
            untuk memastikan proses aman dan tidak membahayakan lingkungan. Kami
            memfasilitasi kegiatan industri minyak dan gas dari proses hulu ke
            hilir. Dengan jasa dan layanan konsultasi yang komprehensif, tim
            kami akan memastikan kualitas dan kuantitas produk, serta membantu
            untuk memberikan analisa akurat terkait dengan kuantitas, kapan umur
            layak peralatan dan sebagainya. Kami membantu mengoptimalkan biaya
            serta aset yang anda miliki sehingga pengelolaan bisnis anda lebih
            efisien dan sesuai standar yang berlaku.
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-4">
          <h1 className="text-4xl font-bold">Unit Layanan</h1>
          <div className="col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
              {/* Hulu Gas Card */}
              {unitServices.map((service, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden bg-cover bg-center h-[45dvh] w-[180px] max-w-screen rounded-none shadow-lg flex items-end justify-start text-white text-xl font-bold transition-transform duration-300 hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="bg-black/50 w-full p-4">
                    <p className="text-sm">{service.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;

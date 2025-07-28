import React from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
import Logo from "../../public/img/logo.png";
import LogoGreen from "../../public/img/logo-green.png";
import Kilang from "../../public/img/kilang-minyak.png";
import Tambang from "../../public/img/tambang.png";
import Gudang from "../../public/img/gudang.png";
import Pelabuhan from "../../public/img/pelabuhan.png";
import Industri from "../../public/img/industri.png";
import Diskusi from "../../public/img/diskusi.png";
import Digital from "../../public/img/digital.png";
import ISO9001 from "../../public/img/iso-9001.png";
import ISO37001 from "../../public/img/iso-37001.png";
import ISO14001 from "../../public/img/iso-14001.png";
import ISO45001 from "../../public/img/iso-45001.png";
import Bki from "../../public/img/bki.png";
import Sucofindo from "../../public/img/sucofindo.png";
import SurveyorIndonesia from "../../public/img/surveyor-indonesia.png";
import { ArrowRight } from "lucide-react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const holdingMembers = [
  {
    name: "Biro Klasifikasi Indonesia",
    description: "Pengujian, Inspeksi, Klasifikasi & Statutoria",
    image: Bki,
    url: "#",
  },
  {
    name: "Sucofindo",
    description: "Pengujian, Inspeksi & Sertifikasi",
    image: Sucofindo,
    url: "#",
  },
  {
    name: "Surveyor Indonesia",
    description: "Pengujian, Inspeksi & Sertifikasi",
    image: SurveyorIndonesia,
    url: "#",
  },
];

const akreditasi = [
  {
    title: "ISO 9001",
    image: ISO9001,
  },
  {
    title: "ISO 37001",
    image: ISO37001,
  },
  {
    title: "ISO 14001",
    image: ISO14001,
  },
  {
    title: "ISO 45001",
    image: ISO45001,
  },
  {
    title: "ISO 9001",
    image: ISO9001,
  },
  {
    title: "ISO 9001",
    image: ISO9001,
  },
  {
    title: "ISO 9001",
    image: ISO9001,
  },
  {
    title: "ISO 9001",
    image: ISO9001,
  },
];

const listLayanan = [
  {
    title: "Minyak, Gas & Energi",
    image: Kilang,
    link: "#",
  },
  {
    title: "Mineral & Batu Bara",
    image: Tambang,
    link: "#",
  },
  {
    title: "Transportasi & Logistik",
    image: Gudang,
    link: "#",
  },
  {
    title: "Perdagangan",
    image: Pelabuhan,
    link: "#",
  },
  {
    title: "Perindustrian",
    image: Industri,
    link: "#",
  },
  {
    title: "Sertifikasi Sistem",
    image: Diskusi,
    link: "#",
  },
  {
    title: "Transformasi Digital",
    image: Digital,
    link: "#",
  },
];

const Home = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-start space-y-8 pt-8 px-8 min-h-screen bg-[url('/img/bg-tulis.png')] bg-cover bg-center">
        <Image src={Logo} alt="Logo of ID Survey" height={60} />
        <div className="w-full h-[65dvh] mx-4 bg-[#184980] relative px-6 py-8 overflow-hidden">
          <h2 className="flex items-center justify-center text-white font-bold text-3xl leading-tight z-50 relative">
            WE EXIST FOR THE SAFETY OF YOUR FAMILY AND MINE
          </h2>
          <div className="absolute inset-0 bottom-0 -right-5 z-10">
            <Image
              src={LogoGreen}
              alt="Logo of ID Survey in green"
              className="absolute bottom-0 right-0 w-[50dvw] h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 min-w-full">
          {listLayanan.map((layanan, index) => (
            <a
              key={index}
              href={layanan.link}
              className="group grid grid-cols-3 min-w-full"
            >
              <div className="col-span-1 h-[16dvh] w-full relative">
                <Image
                  src={layanan.image}
                  alt={layanan.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="col-span-2 bg-white/25 flex items-center justify-start p-4">
                <h3 className="text-white text-base font-semibold">
                  {layanan.title}
                </h3>
              </div>
            </a>
          ))}
          <a
            href="#"
            className="bg-[#00B0A8] w-full h-[15dvh] flex items-center justify-center font-medium text-white text-base translate-y-4"
          >
            Lihat Layanan Lainnya
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
      <section className="px-8 my-8">
        <div className="grid grid-cols-2 w-[45dvw]">
          <div className="h-[1dvh] bg-[#00B0A8]"></div>
          <div className="h-[1dvh] bg-[#184980]"></div>
        </div>
        <div className="mt-8">
          <p className="text-[#00B0A8]">Profil</p>
          <h3 className="text-[#070707] text-2xl font-semibold">
            Holding Perusahaan Survei Indonesia
          </h3>
          <p className="text-[#070707] text-sm font-light mt-6 text-justify">
            PT Inspeksi Sertifikasi dan Survey Indonesia (IDSurvey) resmi
            terbentuk pada 27 Maret 2025 sebagai Holding BUMN Jasa Survei.
            Sucofindo memimpin bisnis TIC di sektor pertambangan, Surveyor
            Indonesia mendukung program P3DN melalui TKDN, dan BKI sebagai induk
            holding fokus pada target karbon netral dan layanan green economy.
          </p>
          <a href="#">
            <Button
              className="mt-6 text-[#184980] border-[#184980] text-sm"
              size="lg"
              radius="none"
              variant="bordered"
            >
              Lihat Profil Lengkap
            </Button>
          </a>
        </div>
        <div className="w-full relative">
          <div className="mt-8 mb-10">
            <h3 className="text-[#070707] text-lg">Akreditasi dan Asosiasi</h3>
          </div>
          <div className="absolute top-6 right-0 flex justify-between items-center w-24 z-50">
            <div className="swiper-button-next  !text-black after:!text-xs !h-8 after:!border-[#184980] border-1 px-4 flex items-center justify-center  bg-white transition-colors duration-200 disabled:bg-gray-300 "></div>
            <div className="swiper-button-prev  !text-black after:!text-xs !h-8 after:!border-[#184980] border-1 px-4 flex items-center justify-center  bg-white transition-colors duration-200 disabled:bg-gray-300"></div>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            slidesOffsetBefore={10}
            autoplay
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {akreditasi.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center my-auto"
              >
                <Image src={item.image} alt={item.title} className="w-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="px-8 mt-12 mb-8">
        <div className="flex flex-col space-y-6">
          {holdingMembers.map((member, index) => (
            <div
              key={index}
              className="w-full p-6 flex flex-col items-start justify-center   bg-[#184980] text-white"
            >
              <div className="bg-white p-1 mb-4 flex justify-center items-center">
                <Image
                  src={member.image}
                  alt={`Logo of ${member.name} in green`}
                  className="w-24 h-auto p-3"
                />
              </div>
              <h4 className="text-xl font-semibold ">{member.name}</h4>
              <p className="font-light mb-4">{member.description}</p>
              <Button
                className="mt-4 text-white border-white text-sm max-w-sm"
                size="md"
                radius="none"
                variant="bordered"
              >
                Lihat Selengkapnya
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

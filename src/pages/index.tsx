"use client";

import Image from "next/image";
import React from "react";
import ACS from "../../public/img/acs.png";
import Bki from "../../public/img/bki.png";
import Digital from "../../public/img/digital.png";
import Diskusi from "../../public/img/diskusi.png";
import Gudang from "../../public/img/gudang.png";
import Industri from "../../public/img/industri.png";
import IPERINDO from "../../public/img/iperindo.png";
import ISO14001 from "../../public/img/iso-14001.png";
import ISO17020 from "../../public/img/iso-17020.png";
import ISO17025 from "../../public/img/iso-17025.png";
import ISO17065 from "../../public/img/iso-17065.png";
import ISO200001 from "../../public/img/iso-20000-1.png";
import ISO27001 from "../../public/img/iso-27001.png";
import ISO37001 from "../../public/img/iso-37001.png";
import ISO45001 from "../../public/img/iso-45001.png";
import ISO90012015 from "../../public/img/iso-9001-2015.png";
import ISO9001 from "../../public/img/iso-9001.png";
import Kilang from "../../public/img/kilang-minyak.png";
import Kuda from "../../public/img/kuda.png";
import LogoGreen from "../../public/img/logo-green.png";
import Logo from "../../public/img/logo.png";
import Pelabuhan from "../../public/img/pelabuhan.png";
import Scci from "../../public/img/scci.png";
import SMK3 from "../../public/img/smk3.png";
import SucofindoAdvisory from "../../public/img/sucofindo-advisory.png";
import SucofindoEpsi from "../../public/img/sucofindo-epsi.png";
import Sucofindo from "../../public/img/sucofindo.png";
import SurveyorIndonesia from "../../public/img/surveyor-indonesia.png";
import Synerga from "../../public/img/synerga.png";
import Tambang from "../../public/img/tambang.png";

import { Tab, Tabs } from "@heroui/react";
import {
  ArrowRight,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube
} from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  DrawerContent,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@heroui/react";
import { ChevronDown, Menu, Search } from "lucide-react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

const holdingMembers = [
  {
    name: "Biro Klasifikasi Indonesia",
    description: "Pengujian, Inspeksi, Klasifikasi & Statutoria",
    image: Bki,
    bg: "/img/bg-proyek.png",
    url: "#",
  },
  {
    name: "Sucofindo",
    description: "Pengujian, Inspeksi & Sertifikasi",
    image: Sucofindo,
    bg: "/img/inspeksi.png",
    url: "#",
  },
  {
    name: "Surveyor Indonesia",
    description: "Pengujian, Inspeksi & Sertifikasi",
    image: SurveyorIndonesia,
    bg: "/img/teropong.png",
    url: "#",
  },
];

const holdingMembersBawah = [
  {
    name: "Biro Klasifikasi Indonesia",
    image: Bki,
    url: "#",
  },
  {
    name: "Surveyor Carbon Consulting Indonesia",
    image: Scci,
    url: "#",
  },
  {
    name: "Sucofindo Advisory Utama",
    image: SucofindoAdvisory,
    url: "#",
  },
  {
    name: "Synerga Tata Internasional",
    image: Synerga,
    url: "#",
  },
  {
    name: "Sucofindo Epsi",
    image: SucofindoEpsi,
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
    title: "ISO 9001 2015",
    image: ISO90012015,
  },
  {
    title: "ISO 20000 1",
    image: ISO200001,
  },
  {
    title: "ISO 27001",
    image: ISO27001,
  },
  {
    title: "ISO 17020",
    image: ISO17020,
  },
  {
    title: "ISO 17025",
    image: ISO17025,
  },
  {
    title: "ISO Kuda",
    image: Kuda,
  },
  {
    title: "SMK3",
    image: SMK3,
  },
  {
    title: "ISO 17065",
    image: ISO17065,
  },
  {
    title: "ACS",
    image: ACS,
  },
  {
    title: "IPERINDO",
    image: IPERINDO,
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

const berita = [
  {
    title:
      "IDSurvey Gelar Halal Bihalal Idul Fitri 1446 H : Pererat Kebersamaan Tiga Entitas Holding",
    image: `/img/surveyor-bersama.png`,
    date: "1 Juni 2025",
    link: "#",
  },
  {
    title:
      "Kapal Berbendera Indonesia Dapat Menggunakan Jasa BKI Dalam Survey & Sertifikasi",
    image: `/img/kapal-berbendera-indonesia.png`,
    date: "14 Maret 2025",
    link: "#",
  },
  {
    title:
      "SUCOFINDO Perkuat Literasi Halal Lewat Sosialisasi dan Sertifikasi Halal",
    image: `/img/bapak-halal.png`,
    date: "12 Februari 2025",
    link: "#",
  },
  {
    title: "Selaku BUMN, PT BKI Siapkan Program Strategis",
    image: `/img/gedung.png`,
    date: "23 Agustus 2024",
    link: "#",
  },
];

const seputarIndustri = [
  {
    title: "Masa Depan Logistik Nasional: Efisiensi, Teknologi, dan Kolaborasi",
    image: `/img/peti-kemas.jpg`,
    date: "1 Juni 2025",
    link: "#",
  },
  {
    title: "Transformasi Energi: Tantangan dan Peluang Sektor Perminyakan",
    image: `/img/industri-minyak.jpg`,
    date: "14 Maret 2025",
    link: "#",
  },
  {
    title: "Peran Data Survei dalam Mendukung Keputusan Strategis",
    image: `/img/grafik.jpg`,
    date: "12 Februari 2025",
    link: "#",
  },
  {
    title: "Pemanfaatan AI Untuk Proses Survei Lebih Akurat dan Efektif",
    image: `/img/robot.jpg`,
    date: "23 Agustus 2024",
    link: "#",
  },
];

const navLinks = [
  {
    label: "Solusi",
    items: [
      { label: "Solusi Bisnis", href: "#" },
      { label: "Solusi Industri", href: "#" },
      { label: "Solusi Digital", href: "#" },
    ],
  },
  {
    label: "Layanan",
    items: [
      { label: "Minyak, Gas & Energi", href: "#" },
      { label: "Mineral & Batu Bara", href: "#" },
      { label: "Transportasi & Logistik", href: "#" },
      { label: "Perdagangan", href: "#" },
      { label: "Perindustrian", href: "#" },
      { label: "Sertifikasi Sistem", href: "#" },
      { label: "Transformasi Digital", href: "#" },
    ],
  },
  {
    label: "Wawasan",
    items: [
      { label: "Berita", href: "#" },
      { label: "Galeri", href: "#" },
      { label: "Wawasan Industri", href: "#" },
    ],
  },
];

const drawerLinks = [
  { label: "Tentang Kami", href: "#" },
  { label: "Karir", href: "#" },
  { label: "Media & Informasi", href: "#" },
  { label: "PPID", href: "#" },
  { label: "Lokasi Layanan", href: "#" },
];

const languages = [
  {
    code: "ID",
    label: "Indonesia",
    flag: "/img/flag-id.png",
  },
  {
    code: "EN",
    label: "English",
    flag: "/img/flag-en.png",
  },
];

import { useDisclosure } from "@heroui/react";

function NavbarIDSurvey() {
  const [lang, setLang] = useState(languages[0]);
  const {
    isOpen: isSearchOpen,
    onOpen: onSearchOpen,
    onOpenChange: onSearchOpenChange,
  } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onOpenChange: onDrawerOpenChange,
  } = useDisclosure();

  return (
    <Navbar className="bg-white/50 shadow-md px-8 md:px-2 py-2 fixed top-0 z-[1000]">
      <NavbarBrand>
        <Image src={Logo} alt="IDSurvey Logo" height={40} />
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-4">
        {navLinks.map((nav) => (
          <Dropdown key={nav.label}>
            <DropdownTrigger>
              <Button
                variant="light"
                className="flex items-center gap-2 text-[#184980] font-semibold"
                radius="none"
              >
                <ChevronDown size={18} />
                {nav.label}
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              {nav.items.map((item) => (
                <DropdownItem key={item.label} href={item.href}>
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        ))}
      </NavbarContent>
      <NavbarContent className="flex gap-2 justify-end">
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="light"
              className="flex items-center gap-2"
              radius="full"
            >
              <Avatar
                src={lang.flag}
                alt={lang.code}
                size="sm"
                className="rounded-full"
              />
              <span className="font-medium">{lang.code}</span>
              <ChevronDown size={16} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            {languages.map((l) => (
              <DropdownItem
                key={l.code}
                onClick={() => setLang(l)}
                className="flex items-center gap-2"
              >
                <Avatar
                  src={l.flag}
                  alt={l.code}
                  size="sm"
                  className="rounded-full"
                />
                {l.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Popover
          isOpen={isSearchOpen}
          onOpenChange={onSearchOpenChange}
          placement="bottom-end"
        >
          <PopoverTrigger>
            <Button
              isIconOnly
              variant="light"
              radius="full"
              aria-label="Search"
              className="text-[#184980]"
              onPress={onSearchOpen}
            >
              <Search size={20} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-4 min-w-[300px]">
            <Input
              autoFocus
              placeholder="Cari di IDSurvey..."
              startContent={<Search size={18} />}
              className="w-full"
            />
          </PopoverContent>
        </Popover>
        <Button
          isIconOnly
          variant="light"
          radius="full"
          aria-label="Menu"
          className="text-[#184980]"
          onPress={onDrawerOpen}
        >
          <Menu size={24} />
        </Button>
        <Drawer
          isOpen={isDrawerOpen}
          onOpenChange={onDrawerOpenChange}
          placement="right"
          classNames={{
            wrapper: "z-[9999]",
          }}
        >
          <DrawerContent>
            {(onClose) => (
              <div className="p-6 min-w-[320px] flex flex-col h-full">
                <div className="mb-8">
                  <Image src={Logo} alt="IDSurvey Logo" height={40} />
                </div>
                <div className="flex flex-col gap-4 mb-8">
                  {drawerLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-[#184980] font-semibold text-lg hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="mt-auto">
                  <Divider className="mb-4" />
                  <div className="grid grid-cols-2 gap-4">
                    {holdingMembers.map((member) => (
                      <div
                        key={member.name}
                        className="flex flex-col items-center gap-2"
                      >
                        <Image
                          src={member.image}
                          alt={member.name}
                          height={32}
                        />
                        <span className="text-xs text-[#184980] text-center">
                          {member.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </div>
              </div>
            )}
          </DrawerContent>
        </Drawer>
      </NavbarContent>
    </Navbar>
  );
}

const Home = () => {
  return (
    <div>
      <NavbarIDSurvey />
      <section className="grid grid-cols-1 md:grid-cols-2 items-start justify-start pt-8 px-8 md:px-24  min-h-screen md:min-h-[90vh] bg-[url('/img/bg-tulis.png')] bg-cover bg-center gap-8 md:pt-24">
        {/* Left: Hero */}
        <div className="flex flex-col items-center justify-center md:justify-start space-y-8">
          <Image
            src={Logo}
            alt="Logo of ID Survey"
            height={60}
            className="block md:hidden"
          />
          <div className="w-full h-[65dvh] md:h-[95vh] mx-4 bg-[#184980] relative px-6 py-8 overflow-hidden flex items-center justify-center md:items-start md:px-20 md:py-16 md:z-50 md:-mb-16">
            <h2 className="text-white font-bold text-3xl md:text-7xl leading-tight z-50 relative text-center md:text-start">
              WE EXIST FOR THE SAFETY OF YOUR FAMILY AND MINE
            </h2>
            <div className="absolute inset-0 bottom-0 -right-5 z-10">
              <Image
                src={LogoGreen}
                alt="Logo of ID Survey in green"
                className="absolute bottom-0 right-0 w-[50dvw] md:w-[30dvw] h-auto"
              />
            </div>
          </div>
        </div>
        {/* Right: listLayanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center w-full">
          {listLayanan.map((layanan, index) => (
            <a
              key={index}
              href={layanan.link}
              className="group grid grid-cols-3 w-full hover:opacity-55 transition-opacity duration-300 ease-linear"
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
            className="bg-[#00B0A8] w-full h-[16dvh] flex items-center justify-center font-medium text-white text-base translate-y-4 md:translate-y-0 hover:opacity-55 transition-opacity duration-300 ease-linear"
          >
            Lihat Layanan Lainnya
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
      <section className="px-8 md:px-24 my-8 md:mt-24">
        <div className="grid grid-cols-2 w-[45dvw]">
          <div className="h-[1dvh] bg-[#00B0A8]"></div>
          <div className="h-[1dvh] bg-[#184980]"></div>
        </div>
        <div className="mt-8 flex flex-col items-start justify-start md:flex-row md:gap-8">
          <div className="hidden md:flex md:flex-col min-w-[20dvw]">
            <p className="text-[#00B0A8] ">Profil</p>
            <h3 className="text-[#070707] text-2xl font-semibold md:font-bold ">
              Holding Perusahaan Survei Indonesia
            </h3>
          </div>
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
          <div className="mt-8 mb-10 md:mt-16">
            <h3 className="text-[#070707] text-lg md:text-xl md:font-sembold">
              Akreditasi dan Asosiasi
            </h3>
          </div>
          <div className="absolute top-6 right-0 flex justify-between items-center w-24 z-50">
            <div className="swiper-button-next  !text-black after:!text-xs !h-8 md:!h-16 md:px-8  after:!border-[#184980] border-1 px-4 flex items-center justify-center  bg-white transition-colors duration-200 disabled:bg-gray-300 "></div>
            <div className="swiper-button-prev  !text-black after:!text-xs !h-8 md:!h-16 md:px-8 md:-translate-x-24 after:!border-[#184980] border-1 px-4 flex items-center justify-center  bg-white transition-colors duration-200 disabled:bg-gray-300"></div>
          </div>
          <Swiper
            slidesPerView={
              typeof window !== "undefined" && window.innerWidth >= 1024
                ? akreditasi.length
                : 4
            }
            spaceBetween={
              typeof window !== "undefined" && window.innerWidth >= 1024
                ? 30
                : 10
            }
            slidesOffsetBefore={10}
            autoplay
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
      <section className="px-8 md:px-24 mt-12 mb-8 md:mb-20">
        <div className="flex flex-col md:flex-row md:flex-1 md:gap-6 ">
          {holdingMembers.slice(0, 3).map((member, index) => (
            <>
              <a
                href={member.url}
                key={index}
                className="w-full p-6 flex-col items-start justify-center md:justify-end bg-cover md:h-[75dvh] bg-no-repeat text-white relative md:flex hidden group overflow-hidden"
                style={{ backgroundImage: `url(${member.bg})` }}
              >
                <div className="absolute inset-0 bg-[#00b0a773] pointer-events-none md:bg-black/50 z-10"></div>
                <div
                  className="absolute inset-0 transition-transform duration-300 ease-in-out scale-100 group-hover:scale-105 z-0"
                  style={{
                    backgroundImage: `url(${member.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="bg-white p-1 mb-4 flex justify-center items-center z-50">
                  <Image
                    src={member.image}
                    alt={`Logo of ${member.name} in green`}
                    className="w-24 h-auto p-3"
                  />
                </div>
                <h4 className="text-xl font-semibold z-50">{member.name}</h4>
                <p className="font-light mb-4 z-50">{member.description}</p>
              </a>
              <div
                key={index}
                className="w-full p-6 flex flex-col items-start justify-center md:justify-end bg-cover md:h-[75dvh] bg-no-repeat text-white relative md:hidden"
                style={{ backgroundImage: `url(${member.bg})` }}
              >
                <div className="absolute inset-0 bg-[#00b0a773] pointer-events-none md:bg-black/50"></div>
                <div className="bg-white p-1 mb-4 flex justify-center items-center z-50">
                  <Image
                    src={member.image}
                    alt={`Logo of ${member.name} in green`}
                    className="w-24 h-auto p-3"
                  />
                </div>
                <h4 className="text-xl font-semibold z-50">{member.name}</h4>
                <p className="font-light mb-4 z-50">{member.description}</p>
                <Button
                  className="mt-4 text-white border-white text-sm max-w-sm z-50 md:hidden block"
                  size="md"
                  radius="none"
                  variant="bordered"
                >
                  Lihat Selengkapnya
                </Button>
              </div>
            </>
          ))}
        </div>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-5 gap-4 px-8 md:px-24">
        {holdingMembersBawah.map((member, index) => (
          <div
            className={`"flex flex-col gap-4 justify-center mb-8 items-center text-center ${
              member.name === "Sucofindo Epsi" ? "col-span-2 md:col-span-1" : ""
            }`}
            key={`${index}-${member.name}`}
          >
            <div className="mb-4 items-center justify-center flex">
              <Image src={member.image} alt={member.name} height={58} />
            </div>
            <div>
              <h3 className="text-[#070707] text-base font-semibold">
                {member.name}
              </h3>
            </div>
          </div>
        ))}
      </section>
      <section className="px-8 md:px-24 mt-12 mb-8">
        <div className="mt-8">
          <p className="text-[#00B0A8]">Laporan</p>
          <h3 className="text-[#070707] text-2xl md:text-4xl font-bold">
            Kinerja Keuangan dan Pencapaian Tahun 2024
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-[#00B0A8] p-4 min-h-[25dvh] text-white">
              <p className="text-lg md:text-4xl md:mb-4 font-semibold ">
                IDR
                <br /> 7.136.669.
                <br />
                819.125
              </p>
              <span className="text-xs">Total Pendapatan</span>
            </div>
            <div className="bg-[#184980] p-4 min-h-[25dvh] text-white flex flex-col justify-end items-start ">
              <p className="text-lg md:text-4xl md:mb-4 font-semibold ">144</p>
              <span className="text-xs">Cabang Domestik</span>
            </div>
            <div className="bg-[#00B0A8] p-4 min-h-[25dvh] text-white flex flex-col justify-end items-start ">
              <p className="text-lg md:text-4xl md:mb-4 font-semibold ">12</p>
              <span className="text-xs">Cabang Internasional</span>
            </div>
            <div className="bg-[#184980] p-4 min-h-[25dvh] text-white flex flex-col justify-end items-start ">
              <p className="text-lg md:text-4xl md:mb-4 font-semibold ">87</p>
              <span className="text-xs">Laboratorium</span>
            </div>
          </div>
        </div>
      </section>
      <section className="px-8 md:px-24 mt-12 mb-8">
        <div className="mt-8">
          <p className="text-[#00B0A8]">Media</p>
          <h3 className="text-[#070707] text-2xl md:text-4xl font-bold">
            Kabar Terkini
          </h3>
        </div>
        <Tabs
          key={`media`}
          aria-label="Tabs variants"
          variant={"underlined"}
          fullWidth={
            typeof window !== "undefined" ? window.innerWidth < 768 : true
          }
          classNames={{
            tab: "md:text-lg md:px-8 md:py-4 text-base px-4 py-2",
            tabList: "md:gap-8 gap-2",
          }}
        >
          <Tab key="Berita" title="Berita">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
              {/* Left: 2x2 grid */}
              <div className="grid grid-cols-2 gap-6 col-span-1 md:col-span-3">
                {berita.slice(0, 4).map((news, index) => (
                  <a
                    href="#"
                    className="flex flex-col items-start justify-center md:justify-between space-y-4 bg-neutral-100 mb-4 hover:bg-[#184980] group"
                    key={`${index}-${news.title}`}
                  >
                    <div className="w-full h-[20dvh] overflow-hidden relative mb-4">
                      <Image
                        src={news.image}
                        alt={news.title}
                        width={400}
                        height={100}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h4 className="text-[#070707] group-hover:text-white text-base font-semibold px-4 transition duration-300 ease-linear">
                      {news.title}
                    </h4>
                    <span className="text-[#070707] group-hover:text-white text-sm font-light mb-4 px-4 transition duration-300 ease-linear">
                      {news.date}
                    </span>
                  </a>
                ))}
              </div>
              {/* Right: 1 big grid (show the first berita as highlight) */}
              <div className="col-span-1 md:col-span-4 flex flex-col justify-center">
                <a
                  href="#"
                  className="flex flex-col items-start justify-center md:justify-between space-y-4 bg-neutral-100 mb-4 h-full hover:bg-[#184980] group"
                  key={`highlight-${berita[0].title}`}
                >
                  <div className="w-full h-[44dvh] md:h-[78dvh] overflow-hidden relative mb-4">
                    <Image
                      src={berita[0].image}
                      alt={berita[0].title}
                      width={800}
                      height={typeof window !== "undefined" ? 968 : 300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-[#070707] text-lg font-bold px-4 group-hover:text-white transition duration-300 ease-linear">
                    {berita[0].title}
                  </h4>
                  <span className="text-[#070707] text-base font-light mb-4 px-4 group-hover:text-white transition duration-300 ease-linear">
                    {berita[0].date}
                  </span>
                </a>
              </div>
            </div>
          </Tab>
          <Tab key="Galeri" title="Galeri">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
              {/* Right: 1 big grid (show the first berita as highlight) */}
              <div className="col-span-1 md:col-span-4 flex flex-col justify-center">
                <a
                  href="#"
                  className="flex flex-col items-start justify-center md:justify-between space-y-4 bg-neutral-100 mb-4 h-full hover:bg-[#184980] group"
                  key={`highlight-${berita[0].title}`}
                >
                  <div className="w-full h-[44dvh] md:h-[78dvh] overflow-hidden relative mb-4">
                    <Image
                      src={berita[0].image}
                      alt={berita[0].title}
                      width={800}
                      height={typeof window !== "undefined" ? 968 : 300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-[#070707] text-lg font-bold px-4 group-hover:text-white transition duration-300 ease-linear">
                    {berita[0].title}
                  </h4>
                  <span className="text-[#070707] text-base font-light mb-4 px-4 group-hover:text-white transition duration-300 ease-linear">
                    {berita[0].date}
                  </span>
                </a>
              </div>
              {/* Left: 2x2 grid */}
              <div className="grid grid-cols-2 gap-6 col-span-1 md:col-span-3">
                {berita.slice(0, 4).map((news, index) => (
                  <a
                    href="#"
                    className="flex flex-col items-start justify-center space-y-4 bg-neutral-100 mb-4 hover:bg-[#184980] group"
                    key={`${index}-${news.title}`}
                  >
                    <div className="w-full h-[20dvh] overflow-hidden relative mb-4">
                      <Image
                        src={news.image}
                        alt={news.title}
                        width={400}
                        height={100}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h4 className="text-[#070707] text-base font-semibold px-4 group-hover:text-white transition duration-300 ease-linear">
                      {news.title}
                    </h4>
                    <span className="text-[#070707] text-sm font-light mb-4 px-4 group-hover:text-white transition duration-300 ease-linear">
                      {news.date}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Tab>
        </Tabs>
      </section>
      <section className="px-8 md:px-24 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left: Wawasan Seputar Industri highlight */}
          <div className="bg-[url('/img/kapal.jpg')] bg-cover bg-center py-6 md:px-24 md:py-32 min-h-[40dvh] relative flex flex-col items-start justify-end gap-4 mb-8 md:mb-0 md:col-span-3">
            <div className="absolute inset-0 bg-[#00B0A899] pointer-events-none"></div>
            <h3 className="text-white text-xl md:text-6xl font-semibold md:font-bold z-10 relative">
              Wawasan Seputar Industri
            </h3>
            <Button
              as={"a"}
              href="#"
              className="mt-4 text-white border-white text-sm max-w-sm z-10 relative"
              size="md"
              radius="none"
              variant="bordered"
            >
              Lihat Semua Wawasan
            </Button>
          </div>
          {/* Right: 2x2 grid of seputarIndustri links */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {seputarIndustri.map((news, index) => (
              <a
                href="#"
                className="flex flex-col items-start justify-center space-y-4 bg-neutral-100 mb-4"
                key={`${index}-${news.title}`}
              >
                <div className="w-full h-[30dvh] overflow-hidden relative mb-8">
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={400}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="text-[#070707] text-base font-semibold px-4">
                  {news.title}
                </h4>
                <span className="text-[#070707] text-sm font-light mb-8 px-4">
                  {news.date}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="pl-24 md:pl-84 pr-12 bg-[url('/img/bg-proyek.png')] bg-cover bg-center h-[90dvh] relative flex flex-col items-start justify-center md:justify-end md:pb-32 gap-4 ">
        <div className="absolute inset-0  bg-black/50 pointer-events-none"></div>
        <div className="absolute inset-0 left-16 md:left-64 md:w-[75dvw] bg-[#00B0A8] md:bg-[#00B0A8]/75 pointer-events-none"></div>
        <h3 className="text-white text-xl md:text-4xl font-semibold z-10 relative">
          Jadilah Bagian dari IDSurvey
        </h3>
        <p className="text-white text-sm md:text-lg  font-light z-10 relative  md:w-[60dvw]">
          Temukan peluang berkarier bersama IDSurvey dan wujudkan kontribusi
          nyata untuk pembangunan nasional melalui layanan survei dan
          sertifikasi yang unggul.
        </p>
        <Button
          className="mt-4 text-white border-white text-sm max-w-sm"
          size="md"
          radius="none"
          variant="bordered"
        >
          Lihat Lowongan Tersedia
        </Button>
      </section>
      <footer className="bg-[#184980] text-white py-8 px-8 md:px-24">
        {/* Logo on top, full width */}
        <div className="flex justify-center md:justify-start mb-8">
          <Image
            src={Logo}
            alt="IDSurvey Logo"
            height={typeof window !== "undefined" ? 86 : 48}
          />
        </div>
        {/* 5 grid below */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Left: Address, email, social media */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-semibold mb-2">
                Graha BKI Lt.4 <br /> PT Biro Klasifikasi Indonesia (Persero)
              </p>
              <p className="text-sm mb-2">
                Jalan Yos Sudarso No.38-40, RT.04/RW.10 Kelurahan Kebon Bawang,
                Kecamatan Tanjung Priok Kota Jakarta Utara, DKI Jakarta 14320
              </p>
              <p className="text-sm mb-2">Telp. (+6221) 4300139</p>
              <p className="text-sm mb-2">Email: crc@bki.co.id</p>
            </div>
            <div className="flex gap-4 items-center">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[#00B0A8]"
              >
                <Facebook />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-[#00B0A8]">
                <Twitter />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-[#00B0A8]"
              >
                <Instagram />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-[#00B0A8]">
                <Youtube />
              </a>
              <a href="#" aria-label="TikTok" className="hover:text-[#00B0A8]">
                <Instagram />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-[#00B0A8]"
              >
                <Linkedin />
              </a>
            </div>
          </div>
          {/* 4 grid: link titles and lists */}
          {[
            {
              title: "Tentang Kami",
              links: [
                { label: "Profil", href: "#" },
                { label: "Visi & Misi", href: "#" },
                { label: "Struktur Organisasi", href: "#" },
              ],
            },
            {
              title: "Media",
              links: [
                { label: "Berita", href: "#" },
                { label: "Galeri", href: "#" },
                { label: "Wawasan Industri", href: "#" },
              ],
            },
            {
              title: "Layanan",
              links: [
                { label: "Minyak, Gas & Energi", href: "#" },
                { label: "Mineral & Batu Bara", href: "#" },
                { label: "Transportasi & Logistik", href: "#" },
                { label: "Perdagangan", href: "#" },
                { label: "Perindustrian", href: "#" },
                { label: "Sertifikasi Sistem", href: "#" },
                { label: "Transformasi Digital", href: "#" },
              ],
            },
            {
              title: "Anggota Holding",
              links: [
                { label: "Biro Klasifikasi Indonesia", href: "#" },
                { label: "Sucofindo", href: "#" },
                { label: "Surveyor Indonesia", href: "#" },
                { label: "SCCI", href: "#" },
                { label: "Sucofindo Advisory", href: "#" },
                { label: "Sucofindo Epsi", href: "#" },
                { label: "Synerga", href: "#" },
              ],
            },
          ].map((section, idx) => (
            <div key={section.title} className="flex flex-col gap-2">
              <h4 className="font-semibold mb-2">{section.title}</h4>
              <div className="flex flex-col gap-1">
                {section.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="hover:underline flex items-center gap-1 text-sm"
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={16} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Divider className="text-white bg-white" />
        <div className="text-xs text-center flex flex-col md:flex-row justify-between items-center gap-4 mt-6 text-gray-300">
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Kebijakan Pengguna
            </a>
            <a href="#" className="hover:underline">
              Kebijakan Cookie
            </a>
            <a href="#" className="hover:underline">
              Kebijakan Perlindungan Data Pribadi
            </a>
          </div>
          <p className="mt-2 md:mt-0">
            Hak Cipta &copy; {new Date().getFullYear()} IDSurvey
          </p>
        </div>
      </footer>
      {/* Cookie Agreement Banner - Only render on client to avoid hydration errors */}
      {(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [showCookie, setShowCookie] = React.useState(false);

        // eslint-disable-next-line react-hooks/rules-of-hooks
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
              Kami menggunakan cookie untuk memastikan situs ini berfungsi
              dengan baik, menganalisis penggunaan, dan meningkatkan pengalaman
              Anda. Dengan menyetujui cookie, Anda setuju untuk menyimpan cookie
              selama 12 bulan pada perangkat Anda.
            </span>
            <div className="flex flex-col md:flex-row gap-4 items-center mt-4">
              <a
                href="#"
                className="text-[#184980] underline text-sm font-medium"
              >
                Kebijakan Cookie
              </a>
              <a
                href="#"
                className="text-[#184980] underline text-sm font-medium"
              >
                Kebijakan Perlindungan Data Pribadi
              </a>
              <a
                href="#"
                className="text-[#184980] underline text-sm font-medium"
              >
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
      })()}
    </div>
  );
};

export default Home;

import Bki from "../../public/img/bki.png";
import Sucofindo from "../../public/img/sucofindo.png";
import SurveyorIndonesia from "../../public/img/surveyor-indonesia.png";
import { solutionMenus } from "./solution-list";
import { serviceMenus } from "./service-list";

export const languages = [
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

export const navLinks = [
  {
    label: "Solusi",
    items: solutionMenus.map((solution) => ({
      label: solution.title,
      href: solution.url,
    })),
    content: {
      title: "Solusi",
      description:
        "Kami mengutamakan keahlian yang relevan dan tepat guna untuk menjawab tantangan industri, memastikan setiap layanan yang kami berikan sesuai dengan standar tinggi dan kebutuhan spesifik pelanggan.",
      services: solutionMenus.map((solution) => ({
        label: solution.title,
        href: solution.url,
      })),
    },
  },
  {
    label: "Layanan",
    items: serviceMenus.map((service) => ({
      label: service.title,
      href: service.url,
    })),
    content: {
      title: "Layanan",
      description:
        "Layanan komprehensif untuk berbagai industri dengan standar internasional.",
      services: serviceMenus.map((service) => ({
        label: service.title,
        href: service.url,
      })),
    },
  },
  {
    label: "Wawasan",
    items: [
      { label: "Berita", href: "#" },
      { label: "Galeri", href: "#" },
      { label: "Wawasan Industri", href: "#" },
    ],
    content: {
      title: "Wawasan",
      description:
        "Informasi terkini dan insight industri untuk mendukung keputusan bisnis Anda.",
      services: [
        { label: "Berita", href: "#" },
        { label: "Galeri", href: "#" },
        { label: "Wawasan Industri", href: "#" },
      ],
    },
  },
];

export const drawerLinks = [
  { label: "Tentang Kami", href: "#" },
  { label: "Karir", href: "#" },
  { label: "Media & Informasi", href: "#" },
  { label: "PPID", href: "#" },
  { label: "Lokasi Layanan", href: "#" },
];

export const holdingMembers = [
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

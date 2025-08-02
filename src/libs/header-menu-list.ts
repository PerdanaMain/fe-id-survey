import Bki from "../../public/img/bki.png";
import Sucofindo from "../../public/img/sucofindo.png";
import SurveyorIndonesia from "../../public/img/surveyor-indonesia.png";

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
    items: [
      { label: "Solusi Bisnis", href: "#" },
      { label: "Solusi Industri", href: "#" },
      { label: "Solusi Digital", href: "#" },
    ],
    content: {
      title: "Solusi",
      description:
        "Kami mengutamakan keahlian yang relevan dan tepat guna untuk menjawab tantangan industri, memastikan setiap layanan yang kami berikan sesuai dengan standar tinggi dan kebutuhan spesifik pelanggan.",
      services: [
        "Transisi Energi Maritim",
        "Transformasi Digital",
        "Peraturan dan Keselamatan Maritim",
        "Perancangan Kapal Inovatif",
        "Lepas Pantai",
      ],
    },
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
    content: {
      title: "Layanan",
      description:
        "Layanan komprehensif untuk berbagai industri dengan standar internasional.",
      services: [
        "Minyak, Gas & Energi",
        "Mineral & Batu Bara",
        "Transportasi & Logistik",
        "Perdagangan",
        "Perindustrian",
        "Sertifikasi Sistem",
        "Transformasi Digital",
      ],
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
        "Berita Terkini",
        "Galeri Proyek",
        "Wawasan Industri",
        "Publikasi",
        "Event & Webinar",
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

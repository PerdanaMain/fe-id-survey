import Image from "next/image";
import Logo from "../../public/img/logo.png";

import {
    ChevronRight,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Youtube
} from "lucide-react";

// Import Swiper styles
import {
    Divider
} from "@heroui/react";
import "swiper/css";
import "swiper/css/navigation";

const Footer = () => {
  return (
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
            <a href="#" aria-label="Facebook" className="hover:text-[#00B0A8]">
              <Facebook />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#00B0A8]">
              <Twitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#00B0A8]">
              <Instagram />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-[#00B0A8]">
              <Youtube />
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-[#00B0A8]">
              <Instagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#00B0A8]">
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
  );
};

export default Footer;

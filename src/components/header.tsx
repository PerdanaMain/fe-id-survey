import { useDisclosure } from "@heroui/react";
import Image from "next/image";
import Logo from "../../public/img/logo.png";
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
    PopoverTrigger,
} from "@heroui/react";
import { ChevronDown, Menu, Search } from "lucide-react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Bki from "../../public/img/bki.png";
import Sucofindo from "../../public/img/sucofindo.png";
import SurveyorIndonesia from "../../public/img/surveyor-indonesia.png";
const Header = () => {
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
};

export default Header;

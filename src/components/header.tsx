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
  Navbar,
  NavbarBrand,
  NavbarContent,
  useDisclosure,
} from "@heroui/react";
import { ChevronDown, Menu, Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Logo from "../../public/img/logo-ids.png";
import {
  drawerLinks,
  holdingMembers,
  languages,
  navLinks,
} from "../libs/header-menu-list"; // Import languages from the shared file

type NavLink = {
  label: string;
  items: { label: string; href: string }[];
  content: {
    title: string;
    description: string;
    services: { label: string; href: string }[];
  };
};

const Header = () => {
  const [lang, setLang] = useState(languages[0]);
  const [activeMegaMenu, setActiveMegaMenu] = useState<NavLink | null>(null);
  const [megaMenuPosition, setMegaMenuPosition] = useState({
    left: 0,
    width: 0,
  });
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onOpenChange: onDrawerOpenChange,
  } = useDisclosure();

  // Handle mouse events for mega menu
  const handleMouseEnter = (
    navItem: NavLink,
    event: MouseEvent<HTMLDivElement>
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const rect = event.currentTarget.getBoundingClientRect();
    const navbarRect = navbarRef.current?.getBoundingClientRect();

    setMegaMenuPosition({
      left: 0,
      width: navbarRect?.width || window.innerWidth,
    });
    setActiveMegaMenu(navItem);
  };

  const handleMouseLeave = () => {
    // Add small delay to prevent flickering
    setTimeout(() => {
      if (!megaMenuRef.current?.matches(":hover")) {
        setActiveMegaMenu(null);
      }
    }, 100);
  };

  const handleMegaMenuMouseLeave = () => {
    setActiveMegaMenu(null);
  };

  // Close mega menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      setActiveMegaMenu(null);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navbar
        ref={navbarRef}
        position="static"
        className="bg-transparent shadow-md py-2 fixed top-0 z-[1000] hover:bg-white/95 backdrop-blur-md"
      >
        <NavbarBrand
          className="hover:cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image src={Logo} alt="IDSurvey Logo" height={40} />
        </NavbarBrand>
        <NavbarContent className="hidden md:flex gap-4" justify="center">
          {navLinks.map((nav) => (
            <div
              key={nav.label}
              className="relative"
              onMouseEnter={(e) => handleMouseEnter(nav, e)}
              onMouseLeave={handleMouseLeave}
            >
              <Button
                variant="light"
                className="flex items-center gap-2 text-[#184980] font-semibold hover:text-[#2563eb]"
                radius="none"
              >
                {nav.label}
                <ChevronDown size={18} />
              </Button>
            </div>
          ))}
        </NavbarContent>
        <NavbarContent className="flex gap-2" justify="end">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="light"
                className="flex items-center gap-2 hover:bg-none"
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
          <Button
            isIconOnly
            variant="light"
            radius="full"
            aria-label="Search"
            className="text-[#184980]"
            onPress={() => router.push("/search")}
          >
            <Search size={20} />
          </Button>
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

      {/* Mega Menu */}
      {activeMegaMenu && (
        <div
          ref={megaMenuRef}
          className="fixed top-[72px] left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-[999] animate-in slide-in-from-top-2 duration-200"
          style={{
            left: megaMenuPosition.left,
            width: megaMenuPosition.width,
          }}
          onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
          onMouseLeave={handleMegaMenuMouseLeave}
        >
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left side - Description */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#184980] mb-4">
                  {activeMegaMenu.content.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {activeMegaMenu.content.description}
                </p>
              </div>

              {/* Right side - Services */}
              <div
                className={`grid ${
                  activeMegaMenu.content.services.length > 5
                    ? "grid-cols-2"
                    : "grid-cols-1"
                } gap-3`}
              >
                {activeMegaMenu.content.services.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <span className="text-[#184980] font-medium group-hover:text-[#2563eb] transition-colors">
                      {service.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay to close mega menu when clicking outside */}
      {activeMegaMenu && (
        <div
          className="fixed inset-0 bg-black/20 z-[998]"
          onClick={() => setActiveMegaMenu(null)}
        />
      )}
    </div>
  );
};

export default Header;

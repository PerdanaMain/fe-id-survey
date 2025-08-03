import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";

const Breadcrumb = () => {
  return (
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
  );
};

export default Breadcrumb;

"use client";

import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { cn, Input } from "@heroui/react";
import { ChevronLeft, ChevronRight, SearchIcon } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  usePagination,
  PaginationItemType,
} from "@heroui/react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const SearchPage = () => {
  const defaultContent = (
    <div className="p-4">
      <p className="text-sm text-default-500">
        Konten default untuk accordion.
      </p>
    </div>
  );

  const articles = [
    {
      category: "Media & Informasi - Berita",
      title: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam itaque mollitia molestias inventore quam rem, atque laborum voluptatibus obcaecati, assumenda veniam optio, voluptatem provident officia repellendus commodi consectetur soluta quo cupiditate aut corporis tempore. Nostrum esse eaque explicabo saepe cupiditate fuga harum officiis adipisci quam at, fugiat sapiente. Animi autem sapiente sunt et. Molestiae quis iure ratione, suscipit est vel debitis quidem maiores illo aut accusantium numquam adipisci deserunt nostrum natus neque quia hic nihil. Soluta numquam labore dolore sequi illo nostrum quis. Doloremque perspiciatis, unde minus quo molestias dicta maxime atque, consequuntur saepe dignissimos aspernatur, cupiditate suscipit recusandae tempore.",
      date: "2023-10-01",
    },
    {
      category: "Media & Informasi - Berita",
      title: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam itaque mollitia molestias inventore quam rem, atque laborum voluptatibus obcaecati, assumenda veniam optio, voluptatem provident officia repellendus commodi consectetur soluta quo cupiditate aut corporis tempore. Nostrum esse eaque explicabo saepe cupiditate fuga harum officiis adipisci quam at, fugiat sapiente. Animi autem sapiente sunt et. Molestiae quis iure ratione, suscipit est vel debitis quidem maiores illo aut accusantium numquam adipisci deserunt nostrum natus neque quia hic nihil. Soluta numquam labore dolore sequi illo nostrum quis. Doloremque perspiciatis, unde minus quo molestias dicta maxime atque, consequuntur saepe dignissimos aspernatur, cupiditate suscipit recusandae tempore.",
      date: "2023-10-01",
    },
    {
      category: "Media & Informasi - Berita",
      title: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam itaque mollitia molestias inventore quam rem, atque laborum voluptatibus obcaecati, assumenda veniam optio, voluptatem provident officia repellendus commodi consectetur soluta quo cupiditate aut corporis tempore. Nostrum esse eaque explicabo saepe cupiditate fuga harum officiis adipisci quam at, fugiat sapiente. Animi autem sapiente sunt et. Molestiae quis iure ratione, suscipit est vel debitis quidem maiores illo aut accusantium numquam adipisci deserunt nostrum natus neque quia hic nihil. Soluta numquam labore dolore sequi illo nostrum quis. Doloremque perspiciatis, unde minus quo molestias dicta maxime atque, consequuntur saepe dignissimos aspernatur, cupiditate suscipit recusandae tempore.",
      date: "2023-10-01",
    },
    {
      category: "Media & Informasi - Berita",
      title: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam itaque mollitia molestias inventore quam rem, atque laborum voluptatibus obcaecati, assumenda veniam optio, voluptatem provident officia repellendus commodi consectetur soluta quo cupiditate aut corporis tempore. Nostrum esse eaque explicabo saepe cupiditate fuga harum officiis adipisci quam at, fugiat sapiente. Animi autem sapiente sunt et. Molestiae quis iure ratione, suscipit est vel debitis quidem maiores illo aut accusantium numquam adipisci deserunt nostrum natus neque quia hic nihil. Soluta numquam labore dolore sequi illo nostrum quis. Doloremque perspiciatis, unde minus quo molestias dicta maxime atque, consequuntur saepe dignissimos aspernatur, cupiditate suscipit recusandae tempore.",
      date: "2023-10-01",
    },
  ];

  const { activePage, range, setPage, onNext, onPrevious } = usePagination({
    total: 12,
    showControls: true,
    siblings: 4,
    boundaries: 4,
  });

  return (
    <>
      <Header transparent={false} />
      <div className="container mx-auto px-32 my-6">
        <Breadcrumbs>
          <BreadcrumbItem>Beranda</BreadcrumbItem>
          <BreadcrumbItem>Cari</BreadcrumbItem>
        </Breadcrumbs>

        <div className="flex flex-row mt-12">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-full h-12 ",
              mainWrapper: "h-full",
              input:
                "text-default-500 bg-default-400/20 dark:bg-default-500/20",
              inputWrapper:
                "h-full font-medium rounded-none shadow-none px-5 text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Masukkan kata kunci..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
          <button className="bg-[#00B0A8] text-white px-4 h-12 w-18 ml-2 flex items-center justify-center rounded-none">
            Cari
          </button>
        </div>

        <div className="flex flex-row mt-10 gap-4">
          {/* Filters */}
          <div className="w-full sm:w-1/4 mr-4">
            <h2 className="text-xl font-medium mb-4">Filter</h2>
            <Accordion
              className="px-0 bg-neutral-100 dark:bg-neutral-800"
              variant="splitted"
            >
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Layanan"
                className="bg-neutral-100 dark:bg-neutral-800 rounded-none shadow-none"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Tipe Konten"
                className="bg-neutral-100 dark:bg-neutral-800 rounded-none shadow-none"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Tipe File"
                className="bg-neutral-100 dark:bg-neutral-800 rounded-none shadow-none"
              >
                {defaultContent}
              </AccordionItem>
            </Accordion>
          </div>
          {/* End Filters */}

          {/* Search Results */}
          <div className="w-full sm:w-3/4">
            <h2 className="text-xl font-medium">
              Menampilkan Hasil{" "}
              <span className="font-bold text-[#00B0A8] italic">BUMN</span>
            </h2>
            <span className="text-sm text-neutral-500">10 hasil terkait</span>
            <hr className="text-sm text-neutral-300 mt-6" />
            {/* Display search results here */}
            <div className="mt-4">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="mb-4 px-0 border-neutral-300 rounded-lg"
                >
                  <p className="text-md font-medium text-[#184980] mb-1">
                    {article.category}
                  </p>

                  <h3 className="text-lg font-semibold">{article.title}</h3>

                  <p className="text-sm text-default-500">
                    {article.description.substring(0, 220)}...
                  </p>
                  <p className="text-xs text-neutral-400 mt-2">
                    {new Date(article.date).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <ul className="flex gap-2 flex-row items-center justify-center mt-6">
              {range.map((page) => {
                if (page === PaginationItemType.NEXT) {
                  return (
                    <li key={page} aria-label="next page" className="w-7 h-7">
                      <button
                        className="w-full h-full bg-white border border-[#184980] cursor-pointer"
                        onClick={onNext}
                      >
                        <ChevronRight className="text-[#102441] font-semibold text-sm" />
                      </button>
                    </li>
                  );
                }

                if (page === PaginationItemType.PREV) {
                  return (
                    <li key={page} aria-label="next page" className="w-7 h-7">
                      <button
                        className="w-full h-full bg-white border border-[#184980] cursor-pointer"
                        onClick={onPrevious}
                      >
                        <ChevronLeft className="text-[#102441] font-semibold text-sm" />
                      </button>
                    </li>
                  );
                }

                if (page === PaginationItemType.DOTS) {
                  return (
                    <li key={page} className="w-7 h-7">
                      ...
                    </li>
                  );
                }

                return (
                  <li
                    key={page}
                    aria-label={`page ${page}`}
                    className="w-7 h-7"
                  >
                    <button
                      className={cn(
                        "w-full h-full bg-default-100 border border-[#184980] text-[#102441] font-semibold text-sm",
                        activePage === page && "bg-[#184980] text-white"
                      )}
                      onClick={() => setPage(page)}
                    >
                      {page}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* End Search Results */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;

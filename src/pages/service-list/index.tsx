import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { serviceMenus } from "@/libs/service-list";

const ServiceList = () => {
  return (
    <div>
      <Header />
      <section
        className="relative h-[70vh] md:h-[80vh] bg-cover bg-center bg-no-repeat overflow-visible"
        style={{ backgroundImage: "url('/img/bg-service.png')" }}
      >
        <div className="relative z-10 h-full pt-20 md:pt-32 px-8 md:px-24">
          <div className="my-4 md:my-8">
            <Breadcrumb />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-12 items-start h-full">
            <div className="flex flex-col justify-start w-1/2 md:w-full">
              <div className="mt-auto mb-12">
                <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-4 mt-10">
                  Cakupan Layanan Unggul & Terintegrasi
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="transform translate-y-8 md:translate-y-16 lg:translate-y-20 z-20 mt-[-40vh] md:mt-[-55vh]">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            {serviceMenus.slice(0, 3).map((service, index) => (
              <a
                href={service.url}
                key={index}
                className="w-full p-6 flex-col items-start justify-center md:justify-end bg-cover md:h-[45dvh] bg-no-repeat text-white relative flex group overflow-hidden"
                style={{ backgroundImage: `url('/img/${service.image}')` }}
              >
                <div className="absolute inset-0 pointer-events-none bg-black/20 z-10"></div>
                <div
                  className="absolute inset-0 transition-transform duration-300 ease-in-out scale-100 group-hover:scale-105 z-0"
                  style={{
                    backgroundImage: `url('/img/${service.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <h4 className="text-xl font-semibold z-50">
                  {service.title.length > 30
                    ? service.title.slice(0, 30) + "..."
                    : service.title}
                </h4>
              </a>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
            {serviceMenus
              .slice(3, serviceMenus.length)
              .map((service, index) => (
                <a
                  href={service.url}
                  key={index}
                  className="w-full p-6 flex flex-col items-start justify-center md:justify-end bg-cover md:h-[45dvh] bg-no-repeat text-white relative group overflow-hidden"
                  style={{ backgroundImage: `url('/img/${service.image}')` }}
                >
                  <div className="absolute inset-0 pointer-events-none bg-black/20 z-10"></div>
                  <div
                    className="absolute inset-0 transition-transform duration-300 ease-in-out scale-100 group-hover:scale-105 z-0"
                    style={{
                      backgroundImage: `url('/img/${service.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <h4 className="text-xl font-semibold z-50">
                    {service.title.length > 30
                      ? service.title.slice(0, 30) + "..."
                      : service.title}
                  </h4>
                </a>
              ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto px-2 sm:px-6 py-2 sm:py-12 flex items-center justify-center" />
      <Footer />
    </div>
  );
};

export default ServiceList;

// import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const ServiceDetail = () => {
  return (
    <div>
      <Header transparent={false} />
      <section className="relative h-[70vh] md:h-[80vh] bg-cover  bg-[#184980] bg-center bg-no-repeat overflow-visible">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="col-span-2 bg-white">TESS</div>
          <span>TESS</span>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="col-span-2">TESS</div>
          <span>TESS</span>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceDetail;

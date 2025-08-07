import React from 'react'
import Header from '@/components/header'
import Image from 'next/image'

import IDSurveyBuilding from '../../../public/img/idsurvey-building.png'

import Iso9001Komersil from '../../../public/img/iso-9001-2015.png'
import Iso9001Klas from '../../../public/img/iso-9001.png'
import Iso37001 from '../../../public/img/iso-37001.png'
import Iso45001 from '../../../public/img/iso-45001.png'
import Iso14001 from '../../../public/img/iso-14001.png'
import Iso27001 from '../../../public/img/iso-27001.png'
import Iso200001 from '../../../public/img/iso-20000-1.png'
import Iso17025 from '../../../public/img/iso-17025.png'
import Iso17020 from '../../../public/img/iso-17020.png'
import Iso17065 from '../../../public/img/iso-17065.png'
import LogoKuda from '../../../public/img/kuda.png'
import SMK3 from '../../../public/img/smk3.png'
import ACS from '../../../public/img/acs.png'
import Iperindo from '../../../public/img/iperindo.png'


function index() {
  return (
    <div>
      <Header transparent={false} />
      <header className='mt-20'>
        <section className="bg-[#184980] flex justify-between items-center">
          {/* Left: your two lines of text */}
          <div className="text-white min-h-72 flex flex-col justify-between pl-24 pb-10">
            <p className="text-sm">Beranda  /  Profil Perusahaan</p>
            <h1 className="text-5xl font-bold">Tentang Kami</h1>
          </div>

          {/* Right: fixed-size image that won’t shrink */}
          <div className="flex-shrink-0">
            <Image
              src={IDSurveyBuilding}
              alt="IDSurvey Building"
              width={400}      // choose the natural width you want
              height={300}     // maintain its aspect ratio
              className="object-contain"
            />
          </div>
        </section>
      </header>

      {/* Profil Perusahaan */}
      <section className='px-24 my-11 flex flex-col gap-12'>
        <h1 className='text-[#00B0A8] font-bold text-4xl'>Profil Perusahaan</h1>

        <div className='flex flex-wrap justify-between gap-9'>
          <h2 className='text-[#070707] text-2xl font-bold text-nowrap w-96'>Kami Adalah IDSurvey</h2>
          <p className='text-xl break-words flex-1 whitespace-normal'>PT Inspeksi Sertifikasi Dan Survey Indonesia atau disebut juga IDSurvey, resmi terbentuk pada 27 Maret 2025, selaku Holding BUMN Jasa Survei. <br />
            Holding BUMN Jasa Survei resmi beroperasi setelah dilakukan soft launching dengan penyerahan Akta Inbreng dari SUCOFINDO dan Surveyor Indonesia kepada PT Biro Klasifikasi Indonesia (Persero) serta dokumen perubahan anggaran dasar ketiga BUMN tersebut oleh Wakil Menteri Badan Usaha Milik Negara (BUMN) I, Pahala N. Mansury, di Bandung, Jumat, 17 Desember 2021. < br />
            Setelah pembentukan holding, masing-masing perusahaan akan menjalankan bisnis yang berbeda berdasarkan kompetensinya.  Sucofindo menjadi pemimpin untuk bisnis jasa Testing, Inspection and Certification (TIC) di sektor pertambangan. Surveyor Indonesia akan mendukung pemerintah dalam Program Peningkatan Penggunaan Produk Dalam Negeri (P3DN) melalui penerapan capaian Tingkat Komponen Dalam Negeri (TKDN) untuk menjadi lokomotif pertumbuhan industri dan ekonomi nasional. Sementara Biro Klasifikasi Indonesia, sebagai induk holding akan fokus dalam mendukung pemerintah mewujudkan karbon netral (net zero emission/NZE) dalam mendorong pembangunan berkelanjutan melalui penguatan implementasi layanan green economy. < br />
            Dengan bergabungnya 3 perusahaan BUMN jasa survey (BKI, SUCOFINDO, dan SURVEYOR INDONESIA), ID Survey mulai beroperasi untuk mengoptimalkan layanan jasa survei di Indonesia dan dapat mencapai visi menjadi top 5 leader di Asia Pasifik dengan mengoptimalkan layanan testing, inspeksi, sertifikasi, konsultasi, klasifikasi dan statutoria di seluruh wilayah Indonesia.</p> < br />
        </div>

        <div className="flex gap-9">
          <h2 className='text-[#070707] text-2xl font-bold'>Akreditasi dan Asosiasi</h2>
          <div>
            <div>
              <Image src={Iso9001Klas} alt="" height={50}/>
            </div>
            <div></div>
          </div>
        </div>

        <div className="">
          <h2 className='text-[#070707] text-2xl font-bold'>Dokumen</h2>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>

      </section>

    </div>
  )
}

export default index
import React from "react";
import Header from "@/components/header";
import Image from "next/image";

import IDSurveyBuilding from "../../../public/img/idsurvey-building.png";

import Iso9001Komersil from "../../../public/img/iso-9001-2015.png";
import Iso9001Klas from "../../../public/img/iso-9001.png";
import Iso37001 from "../../../public/img/iso-37001.png";
import Iso45001 from "../../../public/img/iso-45001.png";
import Iso14001 from "../../../public/img/iso-14001.png";
import Iso27001 from "../../../public/img/iso-27001.png";
import Iso200001 from "../../../public/img/iso-20000-1.png";
import Iso17025 from "../../../public/img/iso-17025.png";
import Iso17020 from "../../../public/img/iso-17020.png";
import Iso17065 from "../../../public/img/iso-17065.png";
import LogoKuda from "../../../public/img/kuda.png";
import SMK3 from "../../../public/img/smk3.png";
import ACS from "../../../public/img/acs.png";
import Iperindo from "../../../public/img/iperindo.png";
import Apitindo from "../../../public/img/apitindo.png";
import Aisi from "../../../public/img/aisi.png";

import Susyanto from "../../../public/img/susyanto.png";
import Rainoc from "../../../public/img/rainoc.png";
import VirgoEresta from "../../../public/img/virgo-eresta.png";
import Subagiyo from "../../../public/img/Subagiyo.png";

import Arisudono from "../../../public/img/arisudono.png";
import AndryTanudjaja from "../../../public/img/andry.png";

import { FileText } from "lucide-react";
import Footer from "@/components/footer";

const dewanKomisaris = [
  {
    image: Susyanto,
    name: "Susyanto",
    role: "Komisaris Utama/Independen",
    desc: `Diangkat menjadi Komisaris Utama/Komisaris Independen PT Inspeksi Sertifikasi Dan Survey Indonesia berdasarkan keputusan para pemegang saham nomor 083/KP.008/IDS-25 tanggal 29 April 2025.<br />
    Pria kelahiran Tulungagung, 4 Mei 1962 memperoleh gelar Sarjana Hukum dari Universitas Kediri tahun 1986, kemudian melanjutkan pendidikannya di bidang yang sama dan mendapatkan gelar Magister Humaniora dari Program Pascasarjana STIE IBLAM pada tahun 2001. Sebelum mendapatkan amanah sebagai Komisaris Utama/Komisaris Independen di PT BKI (Persero), beliau menjalankan tugas sebagai Sekretaris Kementerian BUMN (2020-2023), Kepala Pusat Pengelolaan Barang Milik Negara Sekretariat Jenderal Kementerian Energi dan Sumber Daya Mineral (2018-2020) dan Sekretaris Direktorat Jenderal Minyak dan Gas Bumi Direktorat Jenderal Minyak dan Gas Bumi (2015-2018).<br />
    Selain itu, memiliki beberapa pengalaman di bidang hukum antara lain sebagai Kepala Biro Hukum Sekretariat Jenderal Kementerian ESDM (2013-2015) dan jabatan lainnya di bidang hukum pada instansi yang sama sejak tahun 1998.`
  },
  {
    image: Rainoc,
    name: "Rainoc",
    role: "Komisaris",
    desc: `Diangkat menjadi Komisaris PT Inspeksi Sertifikasi Dan Survey Indonesia berdasarkan keputusan para pemegang saham nomor 083/KP.008/IDS-25 tanggal 29 April 2025. Pria kelahiran Sawah Lunto, 7 Oktober 1969 ini meraih gelar Sarjana di Bidang Ekonomi dari Universitas Andalas pada tahun 1995. <br />
    Saat ini menjabat sebagai Asisten Deputi Bidang Teknologi dan Informasi Kementerian BUMN dan pernah menduduki jabatan lain sebagai Kepala Biro Hubungan Masyarakat dan Fasilitasi Dukungan Strategis (2020-2022) dan Asisten Deputi Pertambangan, Industri Strategis dan Media I (2017-2020). Selain itu, memiliki pengalaman penugasan di BUMN dan menjabat sebagai Direktur Sumber Daya Manusia dan Umum PT PELNI (Persero) sejak tahun 2022 hingga 2023. Pada tahun 2019 mendapatkan penghargaan sebagai The Most Influential Leader (2019) dari Menteri BUMN.`
  },
  {
    image: VirgoEresta,
    name: "Virgo Eresta Jaya",
    role: "Komisaris",
    desc: `Diangkat menjadi Komisaris PT Inspeksi Sertifikasi Dan Survey Indonesia berdasarkan keputusan para pemegang saham nomor 083/KP.008/IDS-25 tanggal 29 April 2025. Lahir di Surabaya, 10 November 1970. Latar belakang pendidikan dengan memperoleh gelar sarjana S1 ITS Surabaya Jurusan Teknik Perkapalan (1995), dan Pascasarjana ITB Bandung Jurusan Transportasi (2001). <br />
    Pernah menjabat sebagai Kepala Sub Bagian Rencana Transportasi Laut dan Penunjang (2005), Kepala Sub Bagian Program Transportasi Laut (2006), Kepala Bagian Program Biro Perencanaan (2014), Kepala Sub Direktorat Rancang Bangun, Stabilitas dan Garis Muat Kapal Direktorat Perkapalan dan Kepelautan (2016), Kepala Kantor Unit Penyelenggara Pelabuhan Kelas I Bau-Bau (2018), Kepala Distrik Navigasi Kelas I Samarinda (2019), Direktur Kepelabuhanan (2019 - 2023), Kepala Kantor Otoritas Pelabuhan Utama Tanjung Priok (2023) dan Kepala Kantor Kesyahbandaran dan Otoritas Pelabuhan Utama Tanjung Priok (2023), Saat ini menjabat sebagai Staf Ahli Kementerian Perhubungan merangkap Plt. Kepala BPSDM Kementerian Perhubungan (2023 – Sekarang).`
  },
  {
    image: Subagiyo,
    name: "Subagiyo",
    role: "Komisaris",
    desc: `Diangkat menjadi Komisaris PT Inspeksi Sertifikasi Dan Survey Indonesia berdasarkan keputusan para pemegang saham nomor 083/KP.008/IDS-25 tanggal 29 April 2025. Lahir di Surabaya, 10 November 1970. Latar belakang pendidikan dengan memperoleh gelar sarjana S1 ITS Surabaya Jurusan Teknik Perkapalan (1995), dan Pascasarjana ITB Bandung Jurusan Transportasi (2001).  <br />
    Pernah menjabat sebagai Kepala Sub Bagian Rencana Transportasi Laut dan Penunjang (2005), Kepala Sub Bagian Program Transportasi Laut (2006), Kepala Bagian Program Biro Perencanaan (2014), Kepala Sub Direktorat Rancang Bangun, Stabilitas dan Garis Muat Kapal Direktorat Perkapalan dan Kepelautan (2016), Kepala Kantor Unit Penyelenggara Pelabuhan Kelas I Bau-Bau (2018), Kepala Distrik Navigasi Kelas I Samarinda (2019), Direktur Kepelabuhanan (2019 - 2023), Kepala Kantor Otoritas Pelabuhan Utama Tanjung Priok (2023) dan Kepala Kantor Kesyahbandaran dan Otoritas Pelabuhan Utama Tanjung Priok (2023), Saat ini menjabat sebagai Staf Ahli Kementerian Perhubungan merangkap Plt. Kepala BPSDM Kementerian Perhubungan (2023 – Sekarang).`
  }
]

const jajaranKomisaris = [
  {
    image: Arisudono,
    name: "Arisudono Soerono",
    role: "Direktur Utama",
    desc: `Arisudono Soerono menjabat sebagai Direktur Utama PT Inspeksi Sertifikasi Dan Survey Indonesia atau IDSurvey, berdasarkan keputusan para pemegang saham nomor 083/KP.008/IDS-25 tanggal 29 April 2025. <br />
    Arisudono Soerono merupakan sarjana Teknik Kimia dari Institut Teknologi Bandung (ITB) dan Masters of Business Administration (MBA) dari London Business School. Walaupun beliau memiliki latar belakang pendidikan Teknik Kimia, Arisudono memiliki perjalanan karir di berbagai industri di bidang manajemen dan finansial. <br />
    Arisudono memulai karirnya sebagai Management Associate di Citibank. Kemudian berpindah fokus menjadi konsultan di Accenture di Jakarta dan Seoul, dan juga sebagai Investment Banker di Credit Suisse First Boston di kota London. Ketika ia kembali ke Indonesia, Arisudono bergabung di perusahaan jasa transportasi dan logistik sebelum menjadi Direktur Keuangan di Blue Bird. Kemudian ia menjadi Direktur Keuangan sebelum diangkat menjadi Direktur Utama di Indonesia Infrastructure Finance (IIF) diikuti dengan berpindah ke bidang energi sebagai Direktur Keuangan di Paiton Energy dan Managing Director/Country Head di Vena Energy sebelum bergabung kembali ke perusahaan BUMN menjadi Direktur Utama PT Pengelola Aset. Setelah itu, ia ditunjuk sebagai Direktur utama PT Danareksa yang menjadi perusahaan holding untuk PPA dan 15 anak perusahaan lainnya, sebelum ditunjuk untuk memimpin IDSurvey.`
  },
  {
    image: AndryTanudjaja,
    name: "Andry Tanudjaja",
    role: "Direktur",
    desc: `Andry Tanudjaja lahir di Jakarta pada tanggal 8 Juni 1971. Meraih gelar D3 Pariwisata di National Hotel Insititute pada tahun 1994. Jenjang karirnya dimulai sebagai Vice President Marketing pada PT Recapital/Rifan Financindo Berjangka (2003-2005), Vice President MF Global Pte Ltd, Singapore (2005-2008), Komisaris pada PT Buana Megah Abadi Asset Management (2010-2021) Komisaris pada PT Finenz Indonesia (2009-2021), Direktur Utama PT Dhanadhipa Karya Adhika (2019-2021), Komisaris PT BGR Logistik Indonesia (2021-2023) dan Direktur Komersial dan Pengembangan PT Perusahaan Perdagangan Indonesia (Persero) (2021-2023). Bedasarkan keputusan para pemegang saham nomor 083/KP.008/IDS-25 tanggal 29 April 2025. Andry Tanudjaja diangkat sebagai Direktur PT Inspeksi Sertifikasi Dan Survei Indonesia.`
  }
]


function index() {
  return (
    <div>
      <Header transparent={false} />
      <header className="mt-20">
        <section className="bg-[#184980] flex justify-between items-center">
          {/* Left: your two lines of text */}
          <div className="text-white min-h-72 flex flex-col justify-between pl-24 pb-10">
            <p className="text-sm">Beranda / Profil Perusahaan</p>
            <h1 className="text-5xl font-bold">Tentang Kami</h1>
          </div>

          {/* Right: fixed-size image that won’t shrink */}
          <div className="flex-shrink-0">
            <Image
              src={IDSurveyBuilding}
              alt="IDSurvey Building"
              width={400} // choose the natural width you want
              height={300} // maintain its aspect ratio
              className="object-contain"
            />
          </div>
        </section>
      </header>

      {/* Profil Perusahaan */}
      <section className="px-24 my-11 flex flex-col gap-15">
        <h1 className="text-[#00B0A8] font-bold text-4xl">Profil Perusahaan</h1>

        <div className="flex flex-wrap justify-between gap-15">
          <h2 className="text-[#070707] text-2xl font-bold text-nowrap w-96">
            Kami Adalah IDSurvey
          </h2>
          <p className="text-xl break-words flex-1 whitespace-normal">
            PT Inspeksi Sertifikasi Dan Survey Indonesia atau disebut juga
            IDSurvey, resmi terbentuk pada 27 Maret 2025, selaku Holding BUMN
            Jasa Survei. <br />
            Holding BUMN Jasa Survei resmi beroperasi setelah dilakukan soft
            launching dengan penyerahan Akta Inbreng dari SUCOFINDO dan Surveyor
            Indonesia kepada PT Biro Klasifikasi Indonesia (Persero) serta
            dokumen perubahan anggaran dasar ketiga BUMN tersebut oleh Wakil
            Menteri Badan Usaha Milik Negara (BUMN) I, Pahala N. Mansury, di
            Bandung, Jumat, 17 Desember 2021. <br />
            Setelah pembentukan holding, masing-masing perusahaan akan
            menjalankan bisnis yang berbeda berdasarkan kompetensinya.
            Sucofindo menjadi pemimpin untuk bisnis jasa Testing, Inspection and
            Certification (TIC) di sektor pertambangan. Surveyor Indonesia akan
            mendukung pemerintah dalam Program Peningkatan Penggunaan Produk
            Dalam Negeri (P3DN) melalui penerapan capaian Tingkat Komponen Dalam
            Negeri (TKDN) untuk menjadi lokomotif pertumbuhan industri dan
            ekonomi nasional. Sementara Biro Klasifikasi Indonesia, sebagai
            induk holding akan fokus dalam mendukung pemerintah mewujudkan
            karbon netral (net zero emission/NZE) dalam mendorong pembangunan
            berkelanjutan melalui penguatan implementasi layanan green economy.{" "}
            <br />
            Dengan bergabungnya 3 perusahaan BUMN jasa survey (BKI,
            SUCOFINDO, dan SURVEYOR INDONESIA), ID Survey mulai beroperasi untuk
            mengoptimalkan layanan jasa survei di Indonesia dan dapat mencapai
            visi menjadi top 5 leader di Asia Pasifik dengan mengoptimalkan
            layanan testing, inspeksi, sertifikasi, konsultasi, klasifikasi dan
            statutoria di seluruh wilayah Indonesia.
          </p>{" "}
          <br />
        </div>

        <div className="flex gap-15">
          <h2 className="text-[#070707] text-2xl text-nowrap font-bold min-w-96">
            Akreditasi dan Asosiasi
          </h2>
          <div className="flex flex-wrap gap-6">
            <Image src={Iso9001Klas} alt="" height={37} />
            <Image src={Iso37001} alt="" height={37} />
            <Image src={Iso45001} alt="" height={37} />
            <Image src={Iso14001} alt="" height={37} />
            <Image src={Iso27001} alt="" height={37} />
            <Image src={Iso9001Komersil} alt="" height={37} />
            <Image src={Iso200001} alt="" height={37} />
            <Image src={Iso17025} alt="" height={37} />
            <Image src={Iso17020} alt="" height={37} />
            <Image src={LogoKuda} alt="" height={37} />
            <Image src={SMK3} alt="" height={37} />
            <Image src={Iso17065} alt="" height={37} />
            <Image src={ACS} alt="" height={37} />
            <Image src={Iperindo} alt="" height={37} />
            <Image src={Apitindo} alt="" height={37} />
            <Image src={Aisi} alt="" height={37} />
          </div>
        </div>

        <div className="flex gap-15">
          <h2 className="text-[#070707] text-2xl font-bold min-w-96">
            Dokumen
          </h2>
          <div>
            <a href="#" className="flex gap-4 text-xl font-semibold">
              <FileText className="text-[#184980]" />
              <p className="text-[#184980]">Salinan PP Nomor 66 Tahun 2021</p>
            </a>
          </div>
        </div>
      </section>

      <div className="px-24">
        <hr className="w-full border-[#D1D1D1]" />
      </div>

      {/* VISI MISI */}
      <section className="px-24 my-11 flex flex-col gap-15">
        <h1 className="text-[#00B0A8] font-bold text-4xl">
          Visi & Misi Perusahaan
        </h1>

        <div className="flex justify-between gap-12">
          <div className="flex flex-col w-1/2">
            <h2 className="text-2xl text-[#070707] font-bold mb-2">
              Visi Perusahaan
            </h2>
            <p className="text-xl">
              Menjadi perusahaan jasa penjamin terintegrasi kelas dunia dan
              berperan memperkuat bangsa melalui peningkatan kepercayaan.
            </p>
          </div>

          <div className="flex flex-col w-1/2">
            <h2 className="text-2xl text-[#070707] font-bold mb-2">
              Misi Perusahaan
            </h2>
            <div className="pl-2">
              <div className="flex gap-3">
                <p className="text-xl">1. </p>
                <p className="text-wrap text-xl">
                  Menyediakan jasa yang komprehensif dan terpercaya dengan
                  memperkuat kapasitas dan kapabilitas terkait sumber daya
                  manusia, teknologi, dan inovasi melalui sinergi dan integrasi
                  bisnis.
                </p>
              </div>

              <div className="flex gap-2">
                <p className="text-xl">2. </p>
                <p className="text-wrap text-xl">
                  Memberikan nilai tambah kepada pemangku kepentingan melalui
                  standarisasi mutu, peningkatan efisiensi, keselamatan, dan
                  keamanan.
                </p>
              </div>

              <div className="flex gap-2">
                <p className="text-xl">3. </p>
                <p className="text-wrap text-xl">
                  Membangun jaringan dan memperkuat reputasi di Asia Pasifik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-24">
        <hr className="w-full border-[#D1D1D1]" />
      </div>

      <section className="px-24 my-11 flex flex-col gap-15">
        <h1 className="text-[#00B0A8] font-bold text-4xl">Nilai Perusahaan</h1>

        <div className="flex gap-15">
          {/* Left: only the akhlak-text logo */}
          <div className="flex-shrink-0 min-w-96">
            <Image
              src={"/img/akhlak-text.png"}
              alt="Akhlak Text"
              height={150}
              width={150}
            />
          </div>

          {/* Right: all the rest */}
          <div className="flex flex-col gap-4">
            <p className="text-xl whitespace-normal break-words">
              Sebagaimana ditekankan dalam Surat Edaran Menteri BUMN Nomor SE-7/MBU/07/2020 tanggal 1 Juli 2020,
              sebagai 3 perusahaan BUMN jasa survey (BKI, SUCOFINDO, dan SURVEYOR INDONESIA) yang tergabung menjadi
              IDSurvey telah mengadopsi secara taktis nilai-nilai utama dalam AKHLAK agar dapat diaplikasikan secara
              baik dalam setiap kegiatan usahanya. < br />
              Kami meyakini dengan menerapkan nilai-nilai AKHLAK secara utuh dan konsisten, maka Perseroan dapat
              meningkatkan kinerja dan daya saingnya sehingga pada akhirnya dapat memberikan kontribusi yang semakin
              besar bagi perekonomian Indonesia dan mampu menjadi perusahaan jasa survey bertaraf internasional.
            </p>

            <p className="text-xl">AKHLAK memiliki makna nilai-nilai yang mengutamakan:</p>

            <div className="">
              <div className="flex gap-3"><p className="text-xl">1.</p><p className="text-xl">Amanah</p></div>
              <div className="flex gap-3"><p className="text-xl">2.</p><p className="text-xl">Kompeten</p></div>
              <div className="flex gap-3"><p className="text-xl">3.</p><p className="text-xl">Harmonis</p></div>
              <div className="flex gap-3"><p className="text-xl">4.</p><p className="text-xl">Loyal</p></div>
              <div className="flex gap-3"><p className="text-xl">5.</p><p className="text-xl">Adaptif</p></div>
              <div className="flex gap-3"><p className="text-xl">6.</p><p className="text-xl">Kolaboratif</p></div>
            </div>

            <p className="text-xl">
              Dimana nilai-nilai tersebut memiliki penjabarannya masing-masing serta dilengkapi dengan panduan perilaku
              dan kode etik atau kode perilaku, yaitu:
            </p>

            <Image
              src={"/img/akhlak-detail.png"}
              alt="Akhlak Detail"
              height={700}
              width={700}
            />
          </div>
        </div>
      </section>

      <div className="px-24">
        <hr className="w-full border-[#D1D1D1]" />
      </div>

      {/* DEWAN KOMISARIS*/}
      <section className="px-24 my-11 flex flex-col gap-15">
        <h1 className="text-[#00B0A8] font-bold text-4xl">Dewan Komisaris Holding</h1>

        {/* EACH PROFILE TEMPLATE*/}
        {/* <div className="flex gap-15">

          <div className="min-w-96">
            <Image src={Susyanto} alt="" width={100} className="mb-6" />
            <h1 className="text-4xl text-[#070707] font-bold mb-1">Susyanto</h1>
            <p className="text-2xl text-[#6D6D6D] font-semibold">Komisaris Utama/Independen</p>
          </div>

          <div className="text-xl text-[#454545]">
            Diangkat menjadi Komisaris Utama/Komisaris Independen PT Inspeksi Sertifikasi Dan Survey
            Indonesia berdasarkan keputusan para pemegang saham nomor 083/KP.008/IDS-25 tanggal 29 April 2025. < br />
            Pria kelahiran Tulungagung, 4 Mei 1962 memperoleh gelar Sarjana Hukum dari Universitas Kediri tahun 1986, 
            kemudian melanjutkan pendidikannya di bidang yang sama dan mendapatkan gelar Magister Humaniora dari Program 
            Pascasarjana STIE IBLAM pada tahun 2001. Sebelum mendapatkan amanah sebagai Komisaris Utama/Komisaris Independen 
            di PT BKI (Persero), beliau menjalankan tugas sebagai Sekretaris Kementerian BUMN (2020-2023), Kepala Pusat Pengelolaan 
            Barang Milik Negara Sekretariat Jenderal Kementerian Energi dan Sumber Daya Mineral (2018-2020) dan Sekretaris Direktorat 
            Jenderal Minyak dan Gas Bumi Direktorat Jenderal Minyak dan Gas Bumi (2015-2018). < br />
            Selain itu, memiliki beberapa pengalaman di bidang hukum antara lain sebagai Kepala Biro Hukum Sekretariat Jenderal 
            Kementerian ESDM (2013-2015) dan jabatan lainnya di bidang hukum pada instansi yang sama sejak tahun 1998. < br/>
          </div>

        </div> */}

        {dewanKomisaris.map((member, index) => (
          <div className="flex gap-15" key={`${index}-${member.name}`}>

            <div className="min-w-96">
              <Image src={member.image} alt="" width={100} className="mb-6" />
              <h1 className="text-4xl text-[#070707] font-bold mb-1">{member.name}</h1>
              <p className="text-2xl text-[#6D6D6D] font-semibold">{member.role}</p>
            </div>

            <p
              className="text-xl text-[#454545]"
              dangerouslySetInnerHTML={{ __html: member.desc }}
            />

          </div>
        ))}

      </section>

      <div className="px-24">
        <hr className="w-full border-[#D1D1D1]" />
      </div>

      {/* JAJARAN KOMISARIS */}
      <section className="px-24 my-11 flex flex-col gap-15 mb-36">
        <h1 className="text-[#00B0A8] font-bold text-4xl">Jajaran Komisaris Holding</h1>

        {jajaranKomisaris.map((member, index) => (
          <div className="flex gap-15" key={`${index}-${member.name}`}>

            <div className="min-w-96">
              <Image src={member.image} alt="" width={100} className="mb-6" />
              <h1 className="text-4xl text-[#070707] font-bold mb-1">{member.name}</h1>
              <p className="text-2xl text-[#6D6D6D] font-semibold">{member.role}</p>
            </div>

            <p
              className="text-xl text-[#454545]"
              dangerouslySetInnerHTML={{ __html: member.desc }}
            />

          </div>
        ))}

      </section>

      <Footer />
    </div>
  );
}

export default index;

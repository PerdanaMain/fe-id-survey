import React from 'react'
import Header from '@/components/header'
import IDSurveyBuilding from '../../../public/img/idsurvey-building.png'
import Image from 'next/image'

function index() {
  return (
    <div>
      <Header transparent={false} />
      <header className='mt-20'>
        <section className="bg-[#184980] flex justify-between items-center">
          {/* Left: your two lines of text */}
          <div className="text-white min-h-72 flex flex-col justify-between pl-20">
            <p className="text-sm">Beranda / Profil Perusahaan</p>
            <h1 className="text-4xl font-bold">Tentang Kami</h1>
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

    </div>
  )
}

export default index
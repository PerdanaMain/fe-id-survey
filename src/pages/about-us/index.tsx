import React from 'react'
import LogoColored from '../../../public/img/logo-colored.png'
import Image from 'next/image'

function index() {
  return (
    <div>
        <nav className='bg-white h'>
          <Image src={LogoColored} alt='' width={200} height={60} />
        </nav>
    </div>
  )
}

export default index
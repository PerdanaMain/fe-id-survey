import React from 'react'
import LogoColored from '../../../public/img/logo-colored.png'
import Image from 'next/image'

function index() {
  return (
    <div>
        <Image src={LogoColored} alt='' />
    </div>
  )
}

export default index
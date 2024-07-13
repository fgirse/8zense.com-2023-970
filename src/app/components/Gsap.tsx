"use client"

import React from 'react'
import gsap from 'gsap';
import  {useGSAP} from '@gsap/react';
import Image from 'next/image';
import Logo from '../../../public/assets/images/LogoEZ990.svg';


const Gsap = () => {
  
       
    useGSAP(() => {
        gsap.fromTo(".logo", {backgroundColor: "rgba(0,0,0,1)",duration: 4.0, opacity: 0}, {duration: 4.0 , opacity:1, scale: 1, rotate: 360, ease: "back" }) 
        
        });
        return(
            <div className=' h-60 w-60 sm:h-96 sm:w-96'>

            <Image
             className="mx-auto logo mt-12 sm:mt-3"
             alt="logo"
             src={Logo}
             />
             </div>
        )
        
  
}

export default Gsap
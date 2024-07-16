"use client"

import React from 'react'

import Image from 'next/image'

import Gsap from "@/app/components/Gsap";

import styles from "@/components/share//Hero.module.css"  

//import { useTranslations } from 'next-intl';

import HeroImage from "../../../public/assets/images/interiore14.jpg";


const Hero = () => {

  //const t = useTranslations('');

  return (

    <section id="section-Hero" className="">

    <div  className="relative min-h-screen flex flex-col items-center"  >

      <Image

        alt="Hero"

        src={HeroImage}

        fill={true}

        sizes="100vw"

      

      />

    <div className="bg-gradient to-bottom from bg-black/80 to-transparent mx-auto w-full flex flex-col justify-between items-center">
      <section className="">
      <h1 className="rounded-xl py-2 px-2 h-60 bg-gradient-to-b from-slate-800 to-transparent relative mt-20 text text-4xl text-neutral-100 font-black  uppercase sm:text-4xl sm:py-12 sm-leading-3 md:text-6xl lg:py-6 lg:relative lg:text-zenseWhite lg:text-[4.33rem] lg:leading-9 lg:font-black  lg:uppercase lg:text-left xl:text-[4.66rem] 2xl:text-[7.166rem]">

        Design interior
      </h1>

      <h1 className="relative -mt-40 font-black leading-3 text-5xl text-lime-200 uppercase sm:text-8xl sm:mt-2 md:-mt-12 md:text-9xl lg:-mt-3 lg:text-[7.33rem] lg:font-black xl:text-[11.33rem] lg:leading-3">

        8zense.com
      </h1>

      <p className="relative mt-5  px-3 text-neutral-100 text-center text-[2.66rem] leading-0 sm:text-4xl lg:text-4xl lg:font-black lg:text-left">

      Timeless
      </p>
      </section>
      <div className='mx-auto relative top-8  w-60 h-60 sm:py-12 sd:h-72 sm:w-72  md:w-80 md:h-80'>

      <Gsap />

    </div>

    </div>

    </div>

  </section>

  )

}


export default Hero
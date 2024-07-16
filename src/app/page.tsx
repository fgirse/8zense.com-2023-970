//import Button from './components/Button'

import Image from "next/image";

import IntroWeb from "@/app/components/IntroWebside";

import HeroImage from "@/public/assets/images/interiore14.jpg";

//import HorizontalSrollCarousel from '@/src/app/[locale]/components/share/Footer'

import Hero from "@/app/components/Hero";

//import { getListPage } from '@/lib/contentParser'

import link from "next/link";

import { ClientAnimationWrapper } from "@/app/components/ClientAnimationWrapper";

import LogoEZ from "@/public/assets/images/Logo990.svg";
import IntroWebside from "./components/IntroWebside";
import ColCardFeature from '@/app/components/CollapsCardFeatures';
import FeatureAnimation from '@/app/components/FeatureAnimated';
import { CallToAct } from '@/app/components/CallToAct';
import Team from '@/app/components/HorizontalScrollCarousel';
import ColorChangeCards from "./components/ColorChangeCards";
import Animation3 from '@/app/components/LottiQuestion'


export default function Home() {
  return (
    <>
      <main className="bg-[#FAFAFA] relative">
        <div className="w-full bg-white max-w-[75rem] mx-auto flex flex-col border-l border-r border-[#F2F2F2] row-span-3">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#F2F2F2]" />
          <div className="px-12 border-b border-[#F2F2F4]"></div>
          <div className="container mx-auto ">
            <div className="">
              <Hero />
            </div>

            <section className="">
              <IntroWeb />
            </section>
            <section className="">
              <ColCardFeature />
            </section>
            <section className="">
              <FeatureAnimation />
            </section>
            <section className=''>

          <CallToAct />

        </section>

        <section className='mt-3'>

          <Animation3 />

        </section>

        <section className=''>

          <ColorChangeCards />
          </section>

          <section className=''>

            <Team />

          </section>


          </div>
        </div>
      </main>
    </>
  );
}

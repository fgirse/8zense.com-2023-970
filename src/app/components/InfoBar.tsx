import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/assets/images/LogoEZ990.svg";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const InfoBar = () => {
  return (
    <div className="bg-slate-700 text-center text-lg flex flex-col items-center justify-center     ">
      <div className="w-[100vw] bg-slate-700 flex flex-row items-center justify-around">
        <Link href="/" className="ml-5">
          <div className=" md:flex md:flex-row md:justify-center md:items-center md:gap-x-7">
            <div className="relative mt-2 mb-1 w-12 h-12 hover:bg-slate-500 hover:translate-y-2 hover:translate-x-2">
              <Image src={Logo} sizes="100vw" fill alt="Logo 8zense.com" />
            </div>

            <h1 className="hidden md:hover:translate-y-2 md:scale-125 md:hover:translate-x-2  md:mr-6 md:hover:text-slate-300 md:block md:text-lg xl:text-xl text-slate-400">
              8zenSe.com
            </h1>
            <LocaleSwitcher />
          </div>
        </Link>

        <div className="w-1/2 text-5xl mr-5">
          <SignedOut>
       
            <SignInButton>
            <button className="px-4 py-2 w-40 rounded-full bg-[#fcfc40] hover:bg-orange-600 text-slate-400 hover:text-white hover:border-2 text-xl font-bold uppercase">
                    Login
                  </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="text-3xl">
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;

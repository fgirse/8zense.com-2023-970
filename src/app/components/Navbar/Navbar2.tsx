"use client";
import React, { useState } from "react";
import lo from "./locofy.png";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LogoEZ from "../../../../public/assets/images/LogoEZ990.svg";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const locofy: string = "";

  return (
    <nav className="text-white uppercase font-bold bg-slate-700  flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        {/*}  <Image src={LogoEZ} className="w-100 h-10 mr-2" alt="Logo" />*/}
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={` w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className=" text-xl lg:flex-grow">
          <a
            href="/"
            className="py-1 px-2 rounded-xl block mt-4 lg:inline-block lg:mt-0 text-white-200 hover:bg-red-900 mr-4"
          >
            home
          </a>
          <a
            href="/about"
            className="py-1 px-2 rounded-xl block mt-4 lg:inline-block lg:mt-0 text-white-200 hover:bg-red-900 mr-4"
          >
            about
          </a>
          <a
            href="/gallery"
            className="py-1 px-2 rounded-xl block mt-4 lg:inline-block lg:mt-0 text-white-200 hover:bg-red-900 mr-4"
          >
            galeria
          </a>
          <a
            href="/contact"
            className="py-1 px-2 rounded-xl block mt-4 lg:inline-block lg:mt-0 text-white-200 hover:bg-red-900 mr-4"
          >
            kontakt
          </a>
        </div>
        <div>
          <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
            Click Me
          </button>
        </div>
      </div>
    </nav>
  );
}
export default App;

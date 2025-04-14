'use client'
import React, { useRef } from "react";
import Image from "next/image";
import { assets } from "../assets/assets";

const Header = () => {
  const sideMenuRef = useRef<HTMLUListElement>(null);
  const openMenu = () =>{
    if(sideMenuRef.current){
      sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
  }

  const closeMenu = () =>{
    if(sideMenuRef.current){
      sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
  }
  return (
    <>
      <nav className=" w-full sticky px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <a href="#homeComponent">
          <Image
            src={assets.logo_image}
            className="w-50 cursor-pointer mr-14"
            alt=""
          />
        </a>
        <ul className="hidden xl:flex items-center gap-6 lg:gap-8 px-12">
          <li>
            <a className="font-ov" href="#solutions">
              Solutions
            </a>
          </li>
          <a href="#simulateurs">Simulateurs</a>
          <li>
            <a href="#espacepedagogiques">Espace pedagogiques</a>
          </li>
          <li>
            <a href="#references">Réferences</a>
          </li>
          <li>
            <a
              href="#sefairerappeler"
              className="border rounded-full px-3 py-2 bg-green-800 text-white"
            >
              Se faire rappeler
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <a
            href=""
            className="hidden xl:flex items-center gap-3 border rounded-full px-3 py-2"
          >
            <Image src={assets.user_image} className="w-5" alt="" />
            Se connecter
          </a>
          <button onClick={openMenu}>
            <Image
              src={assets.menu_image}
              className="xl:hidden block w-8 cursor-pointer"
              alt=""
            />
          </button>
        </div>

        {/* -- ----- mobile menu ------ --*/}
        <ul ref={sideMenuRef} className="xl:hidden flex flex-col gap-6 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-gray-100 transition duration-500">
        <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={assets.close_image} className="w-5 cursor-pointer" alt="" />
        </div>
          <li>
            <a href="#solutions" onClick={closeMenu}>
              Solutions
            </a>
          </li>
          <a href="#simulateurs" onClick={closeMenu}>Simulateurs</a>
          <li>
            <a href="#espacepedagogiques" onClick={closeMenu}>Espace pedagogiques</a>
          </li>
          <li>
            <a href="#references" onClick={closeMenu}>Réferences</a>
          </li>
          <li>
            <a
              href="#sefairerappeler"
              className="border rounded-full px-3 py-2 bg-green-800 text-white" onClick={closeMenu}
            >
              Se faire rappeler
            </a>
          </li>
          <li className="py-15 place-self-center">
            <a
              href="#sefairerappeler"
              className="flex items-center gap-3 border rounded-full px-3 py-2" onClick={closeMenu}
            >
                  <Image src={assets.user_image} className="w-5" alt="" />
                  Se connecter
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;

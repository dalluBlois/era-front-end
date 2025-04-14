import React from "react";
import Image from "next/image";
import { assets, infoList, infoList2, partenaires } from "../assets/assets";

const HomeComponent = () => {
  return (
    <div
      id="homeComponent"
      className="flex flex-col justify-items-center items-center"
    >
      <Image
        src={assets.era_message_image}
        className="w-200 border"
        alt=""
      />
      <ul className="grid grid-cols-4 mt-15 justify-between gap-4 w-220">
        {infoList.map(({ icon, title }, index) => (
          <li
            className="flex flex-col justify-center w-50 h-65 items-center gap-6 border-[2px] shadow-sm border-gray-900 rounded-lg p-6 cursor-pointer bg-black text-white hover:-translate-y-1 duration-500 hover:bg-gray-700"
            key={index}
          >
            <Image src={icon} className="w-15 invert-100" alt="" />
            <p className="text-xl font-semibold text-center">{title}</p>
          </li>
        ))}
      </ul>
      <div className="flex flex-col mt-15 py-5 border-2 bg-black rounded-lg items-center w-220">
        <p className="text-3xl text-white font-semibold pb-2"> ERA, UN PANEL DE SOLUTIONS A VOS PROBLEMES</p>
        <ul className="grid grid-cols-4 gap-6 py-2 justify-between">
          {infoList2.map((item, index) => (
            <li
              className="rounded-full cursor-pointer w-35  bg-gray-800 text-white hover:-translate-y-1 duration-500 hover:bg-gray-700"
              key={index}
            >
              <p className="text-xl font-semibold text-center">{item}</p>
            </li>
          ))}
        </ul>
        <button className="mt-5 p-2 text-xl font-semibold text-center rounded-xl cursor-pointer w-30 bg-white hover:-translate-y-1 duration-500 hover:bg-gray-300">Voir plus</button>
      </div>
      <div className="flex flex-col py-5 mt-15 rounded-lg items-center w-220">
        <p className="text-3xl font-semibold "> Nos Partenaires</p>
        <ul className="grid grid-cols-3 gap-6 py-2 items-center justify-between">
          {partenaires.map((icon, index) => (
            <li
              className=""
              key={index}
            >
              <Image src={icon} className="w-100" alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeComponent;

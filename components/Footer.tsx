import React from 'react'
import { footersList } from '../assets/assets'

const Footer = () => {
  return (
     <footer >
     <ul className="flex flex-row gap-6 py-2 justify-center bg-black w-full h-20 items-center cursor-pointer">
          {footersList.map((item, index) => (
            <li
              className=""
              key={index}
            >
              <p className="text-white text-2xs font-semibold">{item}</p>
            </li>
          ))}
        </ul>

     </footer>
  )
}

export default Footer

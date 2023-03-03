import React from 'react'
import {BsTelephoneInbound} from 'react-icons/bs'
import {MdOutlineMarkEmailRead} from 'react-icons/md'

export default function TopHeader() {
  return (
    <div className="flex flex-col items-center justify-center px-10 py-3 space-y-2 text-center text-white text-md bg-bleue-karoy-100 md:flex-row md:justify-start md:space-x-10 md:space-y-0">
        <div>
            <a href="mailto:infos@workformation.fr" className="flex items-center text-sm md:text-base">
              <MdOutlineMarkEmailRead size={20} className="mr-2" />
              infos@workformation.fr
            </a>
        </div>
        <div>
            <a href="tel:+33-1-45-76-78-98" className="flex items-center text-sm md:text-base">
              <BsTelephoneInbound size={20} className="mr-2" />
              01 84 80 53 44
            </a>
        </div>
    </div>
  )
}



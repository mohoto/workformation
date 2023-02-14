import React from 'react'
import {BsTelephoneInbound} from 'react-icons/bs'

export default function TopHeader() {
  return (
    <div className="flex flex-col items-center justify-center px-10 py-3 space-y-2 text-center text-white text-md bg-bleue-karoy-100 md:flex-row md:justify-between">
        <div>
            <a href="mailto:hello@ston.com" className="flex items-center text-sm md:text-base">
              
                Email: contact@workformation.fr
            </a>
        </div>
        <div>
                <a href="tel:+33-1-45-76-78-98" className="flex items-center text-sm md:text-base">
                <BsTelephoneInbound size={20} className="mr-2" />
                Appelez-nous: 01 45 76 78 98
            </a>
        </div>
    </div>
  )
}



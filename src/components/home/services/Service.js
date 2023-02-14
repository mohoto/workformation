import React from 'react';
import Link from 'next/link'
import Entreprise from './icons/Entreprise';
import Association from './icons/Association';
import Particulier from './icons/Particulier';
import {BiChevronsRight} from 'react-icons/bi'

const getIconName = (iconName) => {
    switch (iconName) {
        case 'entreprise': 
            return <Entreprise className="inline-block w-24 p-2 fill-white bg-bleue-karoy-100 rounded-xl group-hover:bg-second-50"/>;
        case 'association': 
            return <Association className="inline-block w-24 p-2 fill-white bg-bleue-karoy-100 rounded-xl group-hover:bg-second-50"/>;
        case 'particulier': 
            return <Particulier className="inline-block w-24 p-2 fill-white bg-bleue-karoy-100 rounded-xl group-hover:bg-second-50"/>;
        default: 
            return null;
    }
}

export default function Service({iconName, title, texte, link, linkText}){

    const icon = getIconName(iconName)

    return (
        <div className="relative group overflow-hidden bg-white rounded-lg shadow-card before:content-[''] before:w-full before:h-[3px] before:bg-second-50 before:border-none before:rounded-lg before:absolute before:bottom-[0] before:left-[0] before:z-20 before:scale-x-50 before:transisition-all before:duration-500 before:opacity-0 before:hover:opacity-100 before:hover:scale-x-100">
            <div className="relative px-8 py-10 space-y-4 transition duration-300 before:content-[''] before:w-[70px] before:h-[70px] before:bg-bleue-karoy-100 before:border-none before:rounded-lg before:absolute before:bottom-[33px] before:right-[-34px] before:z-20 before:rotate-45 before:transisition-all before:duration-500 before:ease-in-out before:hover:bg-second-50
            after:content-[''] after:w-[88px] after:h-[88px] after:border-2 after:border-bleue-karoy-100 after:rounded-lg after:absolute after:bottom-[23px] after:right-[-43px] after:z-10 after:rotate-45 after:transisition-all after:duration-500 after:ease-in-out after:hover:border-second-50 active:bg-second-50">
                <div>
                    <div className="flex justify-center">
                        {icon}
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="mb-6 text-xl font-semibold text-center">Formation<br/>{title}</h3>
                    <p className="mb-6 text-sm text-center">{texte}</p>
                    <Link href={link}
                    className="flex items-center justify-center text-bleue-karoy-100 group-hover:text-second-50"
                    >
                        <BiChevronsRight className="h-4 mr-2"/>{linkText}
                    </Link>
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BiChevronsRight} from 'react-icons/bi'
import RappelSidebar from '../common/section-rappel/RappelSidebar'

export default function Sidebar({financements, financement, slug}) {
    return (
        <div className="space-y-6">
            <div className="p-4 bg-white rounded-md shadow-md">
                {financement?.image && (
                    <div className="relative w-full h-32">
                        <Image 
                        src={financement.image}
                        fill
                        className="object-contain"
                        alt={`Illustration de ${financement.title}`}
                        />
                    </div> 
                )}
                <div>
                    <h3 className="relative mb-3 mt-6 text-lg font-semibold before:content-[''] before:w-[50px] before:h-[4px] before:bottom-[-10px] before:left-[0] before:absolute before:rounded-lg before:bg-second-50">Les autres dispositifs de financements:</h3>
                    <div className="py-6">
                        <ul className="space-y-2">
                            {financements && financements.filter(financement => financement.slug !== slug).map(financement => (
                            <li key={financement.id} className="pb-2 mb-2 border-b last:border-none last:mb-0 last:pb-0">
                                <Link href={financement.link}
                                className="text-bleue-karoy-100 hover:text-second-50"
                                >
                                    <BiChevronsRight className="inline-block h-4 mr-2 -mt-1"/>{financement.title}
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-white rounded-md shadow-md">
                <div>
                    <h3 className="relative mb-8 text-lg font-semibold before:content-[''] before:w-[50px] before:h-[4px] before:bottom-[-10px] before:left-[0] before:absolute before:rounded-lg before:bg-second-50">Nos services:</h3>
                    <ul className="space-y-2">
                        <li className="pb-2 mb-2 border-b">
                            <Link href="/services/formation-pour-entreprises"
                            className="flex items-center text-bleue-karoy-100 hover:text-second-50"
                            >
                                <BiChevronsRight className="h-4 mr-2"/>Formation pour les entreprises
                            </Link>
                        </li>
                        <li className="pb-2 mb-2 border-b">
                            <Link href="/services/formation-pour-associations"
                            className="flex items-center text-bleue-karoy-100 hover:text-second-50"
                            >
                                <BiChevronsRight className="h-4 mr-2"/>Formation pour les associations
                            </Link>
                        </li>
                        <li className="pb-2 mb-2 border-b">
                            <Link href="/services/formation-pour-particuliers"
                            className="flex items-center text-bleue-karoy-100 hover:text-second-50"
                            >
                                <BiChevronsRight className="h-4 mr-2"/>Formation pour les particuliers
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <RappelSidebar />
        </div>
    )
}
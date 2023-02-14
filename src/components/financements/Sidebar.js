import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BiChevronsRight} from 'react-icons/bi'
import RappelSidebar from '../common/section-rappel/RappelSidebar'

export default function Sidebar({financements, financement, slug}) {
    return (
        <div className="space-y-6">
            <div className="p-4 bg-white border rounded-md border-bleue-karoy-100">
                {financement?.image && (
                    <div className="relative flex">
                        <Image 
                        src={financement.image}
                        width={200}
                        height={100}
                        alt={`Illustration de ${financement.title}`}
                        />
                    </div> 
                )}
                <div>
                    <h3 className="mt-6 text-lg">Les autres dispositifs de financements:</h3>
                    <div className="py-4">
                        <ul className="space-y-2">
                            {financements && financements.filter(financement => financement.slug !== slug).map(financement => (
                            <li key={financement.id}>
                                <Link href={financement.link}
                                className="flex items-center text-bleue-karoy-100 hover:text-second-50"
                                >
                                    <BiChevronsRight className="h-4 mr-2"/>{financement.title}
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <RappelSidebar />
        </div>
    )
}
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BiChevronsRight} from 'react-icons/bi'
import RappelSidebar from '../common/section-rappel/RappelSidebar'

export default function Sidebar({services, service, slug}) {
    return (
        <div className="space-y-6">
            <div className="p-6 bg-white rounded-md shadow-md">
                <h3 className="relative mb-8 text-lg font-semibold before:content-[''] before:w-[50px] before:h-[4px] before:bottom-[-10px] before:left-[0] before:absolute before:rounded-lg before:bg-second-50">Les autres services:</h3>
                <ul className="space-y-2">
                    {services && services.filter(service => service.slug !== slug).map(service => (
                    <li key={service.id} className="pb-2 mb-2 border-b last:border-none last:mb-0 last:pb-0">
                        <BiChevronsRight className="inline-block mr-2 -mt-1 h4"/>
                        <Link href={service.link}
                        className="hover:text-second-50"
                        >
                            {service.title}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="p-4 bg-white rounded-md shadow-md">
                <div>
                    <h3 className="relative mb-8 text-lg font-semibold before:content-[''] before:w-[50px] before:h-[4px] before:bottom-[-10px] before:left-[0] before:absolute before:rounded-lg before:bg-second-50">Les dispositifs de financement:</h3>
                    <ul className="space-y-2">
                        <li className="pb-2 mb-2 border-b">
                            <Link href="/financement/financement-pole-emploi"
                            className="flex items-center text-bleue-karoy-100 hover:text-second-50"
                            >
                                <BiChevronsRight className="h-4 mr-2"/>Financement Pôle emploi
                            </Link>
                        </li>
                        <li className="pb-2 mb-2 border-b">
                            <Link href="/financement/financement-cpf"
                            className="flex items-center text-bleue-karoy-100 hover:text-second-50"
                            >
                                <BiChevronsRight className="h-4 mr-2"/>Financement avec le CPF
                            </Link>
                        </li>
                        <li className="pb-2 mb-2 border-b">
                            <Link href="/financement/financement-opco"
                            className="flex items-center text-bleue-karoy-100 hover:text-second-50"
                            >
                                <BiChevronsRight className="h-4 mr-2"/>Financement par l'OPCO
                            </Link>
                        </li>
                        <li className="pb-2 mb-2 border-b">
                            <Link href="/financement/financement-agefiph"
                            className="flex items-center text-bleue-karoy-100 hover:text-second-50"
                            >
                                <BiChevronsRight className="h-4 mr-2"/>Financement par l'AGEFIPH
                            </Link>
                        </li>
                        <li className="pb-2 mb-2">
                            <Link href="/financement/financement-cpf-transition-professionnel"
                            className="flex items-center text-bleue-karoy-100 hover:text-second-50"
                            >
                                <BiChevronsRight className="h-4 mr-2"/>Financement avec le CPF de Transition Professionnel
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <RappelSidebar />
        </div>
    )
}
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BiChevronsRight} from 'react-icons/bi'
import RappelSidebar from '../common/section-rappel/RappelSidebar'

export default function Sidebar({services, service, slug}) {
    return (
        <div className="space-y-6">
            <div className="p-4 bg-white border rounded-md border-bleue-karoy-100">
                <div>
                    <div className="py-4 mb-4">
                        <ul className="space-y-2">
                            {services && services.filter(service => service.slug !== slug).map(service => (
                            <li key={service.id}>
                                <Link href={service.link}
                                className="flex items-center text-second-50 hover:text-second-50"
                                >
                                    <BiChevronsRight className="h-4 mr-2"/>{service.title}
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                    <h3 className="mb-3 text-lg">Les dispositifs de financement:</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/financement/financement-pole-emploi"
                            className="flex items-center text-bleue-karoy-100 hover:text-second-50"
                            >
                                <BiChevronsRight className="h-4 mr-2"/>Financement Pôle emploi
                            </Link>
                        </li>
                        <li>
                            <Link href="/financement/financement-cpf"
                            className="flex items-center text-bleue-karoy-100 hover:text-second-50"
                            >
                                <BiChevronsRight className="h-4 mr-2"/>Financement avec le CPF
                            </Link>
                        </li>
                        <li>
                            <Link href="/financement/financement-opco"
                            className="flex items-center text-bleue-karoy-100 hover:text-second-50"
                            >
                                <BiChevronsRight className="h-4 mr-2"/>Financement par l'OPCO
                            </Link>
                        </li>
                        <li>
                            <Link href="/financement/financement-agefiph"
                            className="flex items-center text-bleue-karoy-100 hover:text-second-50"
                            >
                                <BiChevronsRight className="h-4 mr-2"/>Financement par l'AGEFIPH
                            </Link>
                        </li>
                        <li>
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
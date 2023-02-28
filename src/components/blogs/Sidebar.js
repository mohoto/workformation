import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {BiChevronsRight} from 'react-icons/bi'
import RappelSidebar from '../common/section-rappel/RappelSidebar'

export default function Sidebar({articles, categories}) {

    const router = useRouter();
    const {categorie} = router.query

    return (
        <div className="space-y-6">
            <div className="p-6 bg-white rounded-md shadow-md">
                <h3 className="relative mb-8 text-lg font-semibold before:content-[''] before:w-[50px] before:h-[4px] before:bottom-[-10px] before:left-[0] before:absolute before:rounded-lg before:bg-second-50">Catégories:</h3>
                <ul className="space-y-2">
                    {categories && categories.map(category => (
                    <li key={category.id} className="pb-2 mb-2 border-b last:border-none last:mb-0 last:pb-0">
                        <BiChevronsRight className="inline-block mr-2 -mt-1 h4"/>
                        <Link href={`/infos/${category.slug}`}
                        className={`hover:text-second-50 capitalize ${category.slug === categorie ? 'text-second-50' : 'text-bleue-karoy-100'}`}
                        >
                            {category.name}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md">
                <div>
                    <h3 className="relative mb-8 text-lg font-semibold before:content-[''] before:w-[50px] before:h-[4px] before:bottom-[-10px] before:left-[0] before:absolute before:rounded-lg before:bg-second-50">Les dispositifs de financement:</h3>
                    <ul className="space-y-2">
                        <li className="pb-2 mb-2 border-b">
                            <Link href="/financement/financement-pole-emploi"
                            className="flex items-start text-bleue-karoy-100 hover:text-second-50"
                            >
                                <BiChevronsRight className="h-4 mt-1 mr-2"/>Financement Pôle emploi
                            </Link>
                        </li>
                        <li className="pb-2 mb-2 border-b">
                            <Link href="/financement/financement-cpf"
                            className="flex items-start text-bleue-karoy-100 hover:text-second-50"
                            >
                                <BiChevronsRight className="h-4 mt-1 mr-2"/>Financement avec le CPF
                            </Link>
                        </li>
                        <li className="pb-2 mb-2 border-b">
                            <Link href="/financement/financement-opco"
                            className="flex items-start text-bleue-karoy-100 hover:text-second-50"
                            >
                                <BiChevronsRight className="h-4 mt-1 mr-2"/>Financement par l'OPCO
                            </Link>
                        </li>
                        <li className="pb-2 mb-2 border-b">
                            <Link href="/financement/financement-agefiph"
                            className="flex items-start text-bleue-karoy-100 hover:text-second-50"
                            >
                                <BiChevronsRight className="h-4 mt-1 mr-2"/>Financement par l'AGEFIPH
                            </Link>
                        </li>
                        <li className="pb-2 mb-2">
                            <Link href="/financement/financement-cpf-transition-professionnel"
                            className="flex items-start text-bleue-karoy-100 hover:text-second-50"
                            >
                                <BiChevronsRight className="h-4 mt-1 mr-2"/>Financement avec le CPF de Transition Professionnel
                            </Link>
                        </li>
                    </ul>
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
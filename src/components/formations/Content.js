import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {HiOutlineUser, HiOutlineBadgeCheck} from 'react-icons/hi'
import {SlGraduation} from 'react-icons/sl'
import Filter from '@/components/formations/Filter'

export default function Content({formations, categories, categorie}) {
  return (
    <div className="grid mt-20 lg:grid-cols-4 gap-y-8 md:gap-x-4">
        <section className="lg:col-span-1">
            <Filter categories={categories} categorie={categorie}/> 
        </section>
        <section className="lg:col-span-3">
            <div className="grid grid-flow-row gap-y-8">
                {formations && formations.map(formation => (
                <div key={formation.id} className="p-4 bg-white border border-gray-200 rounded-md hover:shadow-lg md:flex md:flex-row md:space-x-3 group">
                    <div className="relative md:flex-[0.4]">
                        <div className="relative w-full overflow-hidden aspect-[9/6] lg:w-auto">
                            <Image 
                            src={formation.image}
                            fill
                            className="object-contain object-left transition duration-500 ease-in-out transform rounded-md cursor-pointer hover:scale-110"
                            alt={`illustration de la ${formation.title}`}
                            />
                            <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition-all duration-300 ease-in-out bg-fixed opacity-0 group-hover:opacity-30 bg-bleue-karoy-100"></div>
                        </div>
                    </div>
                    <div className="mt-4 lg:mt-0 md:flex-[0.6]">
                        <div>
                            <div>
                                <div className="relative justify-between mb-4 space-y-2 md:flex md:flex-row md:space-y-0">
                                    {/* <h3 className={`inline-block py-1 pl-2 pr-6 text-white uppercase ${formation.categorieId === "1" ? 'bg-bleue-karoy-50' : formation.categorieId === "2" ? 'bg-categorie-2' : formation.categorieId === "3" ? 'bg-orange-600' : 'bg-cyan-500'} clip-card`}>{formation.categorie}</h3> */}
                                    <p className={`inline-block py-1 pl-2 pr-6 text-white uppercase bg-bleue-karoy-100 clip-card`}>{formation.categorie}</p>
                                    <div className="flex space-x-2">
                                        {formation.types && formation.types.map(type => (
                                        <div key={type} className="px-2 py-1 rounded-md bg-second-50">
                                            <span className="text-sm text-white">{type}</span>
                                        </div>
                                    ))}
                                    </div> 
                                </div>
                                <div>
                                    {formation.statut && formation.statut === "publié" ? (
                                        <Link href={`/formations/${formation.categorieSlug}/${formation.slug}`}>
                                            <h2 className="text-xl font-semibold hover:text-second-50">{formation.title}</h2>
                                        </Link>
                                    ) : (
                                        <h3 className="text-xl font-semibold">{formation.title}</h3>
                                    )}
                                </div>
                                <p className="mt-4 text-sm font-light">{formation.resume}</p>
                            </div>
                            <div className="mt-4 text-sm">
                            <div className="flex">
                                <p className="flex items-center font-light text-second-50"><HiOutlineUser className="h-4 mr-2"/>Admission:</p>
                                <p className="ml-4 font-light">{formation.admission}</p>
                            </div>
                            <div className="flex">
                                <p className="flex items-center font-light text-second-50"><HiOutlineBadgeCheck className="h-4 mr-2"/>Évaluation:</p>
                                <p className="ml-4 font-light">{formation.evaluation}</p>
                            </div>
                            <div className="flex">
                                <p className="flex items-center font-light text-second-50"><SlGraduation className="h-4 mr-2"/>Validation:</p>
                                <p className="ml-4 font-light">{formation.certification}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </section>
    </div>
  )
}

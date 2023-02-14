import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import {HiOutlineUser, HiOutlineBadgeCheck} from 'react-icons/hi'
import {SlGraduation} from 'react-icons/sl'
import SectionRappel from '@/components/common/section-rappel/SectionRappel'
import Filter from '@/components/formations/Filter'

export default function Formations() {

    const [formations, setFormations] = useState();
    
    const getFormations = async () => {
        const {data} = await axios.get('/api/formations');
        setFormations(data);
    } 

    useEffect(() => {
        getFormations();
    }, [])

    return (
        <>
            <Head>
                <title>Nos formations - WORK FORMATION</title>
                <meta name="description" content="La formation professionnelle, vous permet, tout au long de votre carrière d’acquérir les savoirs et compétences pour progresser en responsabilités au sein de votre entreprise ou d’organiser votre reconversion professionnelle. Nos formations sont accessibles à tous, que vous soyez salarié, indépendant ou demandeur d’emploi." />
                <meta property="og-title" content="Nos formations" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head> 
            <main>
                <div className="flex flex-col px-6 pb-20 mt-20 md:px-6 lg:px-6 xl:px-12 2xl:px-44 3xl:px-52">
                    <h1 className="text-3xl font-semibold text-center md:text-4xl ">NOS FORMATIONS</h1>
                    <div className="flex justify-center py-6">
                        <div className="relative ">
                            <span className="before:content-[''] before:w-[100px] before:h-[5px] before:top-[0px] before:left-[-50px] before:absolute before:rounded-lg before:bg-second-50"></span>
                        </div>
                    </div>
                    <div className="md:px-20">
                        <p className="mt-4 text-center md:text-lg md:p-6">La formation professionnelle, vous permet, tout au long de votre carrière d’acquérir les savoirs et compétences pour progresser en responsabilités au sein de votre entreprise ou d’organiser votre reconversion professionnelle. Nos formations sont accessibles à tous, que vous soyez salarié, indépendant ou demandeur d’emploi.</p>
                    </div>
                    <div className="grid mt-20 md:grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-x-4">
                        <section className="lg:col-span-1">
                            <Filter setFormations={setFormations} getFormations={getFormations}/> 
                        </section>
                        <section className="lg:col-span-3">
                            <div className="grid grid-flow-row gap-y-8">
                                {formations && formations.map(formation => (
                                <div key={formation.id} className="flex flex-col p-4 bg-white border border-gray-200 rounded-md hover:shadow-lg lg:flex-row lg:space-x-3">
                                    <div className="relative md:flex-[0.4]">
                                        <div className="relative w-full overflow-hidden h-60 lg:h-92">
                                            <Image 
                                            src={formation.image}
                                            fill
                                            className="object-contain object-left transition duration-500 ease-in-out transform rounded-md cursor-pointer hover:scale-110"
                                            alt={`illustration de la ${formation.title}`}
                                            />
                                            <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition-all duration-300 ease-in-out bg-fixed opacity-0 hover:opacity-50 bg-bleue-karoy-100"></div>
                                        </div>
                                    </div>
                                    <div className="mt-4 lg:mt-0 md:flex-[0.6]">
                                        <div>
                                            <div>
                                                <div className="relative flex flex-col justify-between mb-4 space-y-2 md:flex-row md:space-y-0">
                                                    <h3 className={`block py-1 pl-2 pr-6 text-white uppercase ${formation.categorieId === "1" ? 'bg-bleue-karoy-50' : formation.categorieId === "2" ? 'bg-categorie-2' : formation.categorieId === "3" ? 'bg-orange-600' : 'bg-cyan-500'} clip-card`}>{formation.categorie}</h3>
                                                    <div className="flex space-x-2">
                                                        {formation.types && formation.types.map(type => (
                                                        <div key={type} className="px-2 py-1 rounded-md bg-second-50">
                                                            <span className="text-sm text-white">{type}</span>
                                                        </div>
                                                    ))}
                                                    </div>
                                                </div>
                                                <div className>
                                                    {formation.statut && formation.statut === "publié" ? (
                                                        <Link href={`/formations/${formation.categorieSlug}/${formation.slug}`}>
                                                            <h2 className="text-xl font-semibold hover:text-second-50">{formation.title}</h2>
                                                        </Link>
                                                    ) : (
                                                        <h3 className="text-xl font-semibold">{formation.title}</h3>
                                                    )}
                                                </div>
                                                <p className="mt-4 text-sm font-light text-gray-700">{formation.resume}</p>
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
                </div>
                <SectionRappel />
            </main>
        </>
    )
}
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import SectionRappel from '@/components/common/section-rappel/SectionRappel'
import {GiSkills} from 'react-icons/gi'
import {HiOutlineDesktopComputer} from 'react-icons/hi'

export default function NotreCentte(){
    return (
        <>
            <Head>
                <title>Notre centre de formation - WORK FORMATION</title>
                <meta name="description" content="Notre organisme de formation s'engage à fournir une formation de qualité, en veillant à ce que les formateurs soient qualifiés et expérimentés dans leur domaine." />
                <meta property="og-title" content="Notre centre de formation" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="px-6 pb-20 mt-20 lg:px-12 xl:px-36 2xl:px-64 3xl:px-64">
                    <h1 className="text-3xl font-semibold text-center md:text-4xl">NOTRE CENTRE DE FORMATION</h1>
                    <div className="flex justify-center py-6">
                        <div className="relative ">
                            <span className="before:content-[''] before:w-[100px] before:h-[5px] before:top-[0px] before:left-[-50px] before:absolute before:rounded-lg before:bg-second-50"></span>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-24">
                        <div className="flex flex-col justify-center mt-8 lg:mt-20 lg:flex-row lg:items-start">
                            <div className="flex justify-center flex-1 mb-6 lg:mb-0">
                                <div className="relative overflow-hidden w-96 h-96">
                                    <Image 
                                    src="/images/local/notre-centre.jpg"
                                    fill
                                    className="object-contain transition duration-500 ease-in-out transform cursor-pointer hover:scale-110"
                                    alt="Devanture centre de formation Work formation"
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="mb-3 md:text-justify"><span className="font-semibold">WORK FORMATION</span> est un organisme de formation professionnelle qui a pour objectif d'aider les personnes à développer leurs compétences professionnelles ou à se spécialiser dans un emploi qui correspond à leurs aspirations. Nous proposons une large gamme de formations, allant des formations orientées métier aux formations visant à développer les compétences professionnelles.</p>
                                <div className="flex flex-col mt-8 space-y-8">
                                    <div className="flex flex-col space-y-2 md:space-x-6 md:flex-row md:space-y-0">
                                        <div>
                                            <div className="inline-block p-4 rounded-full bg-second-50">
                                                <GiSkills size={35} className="text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="mb-2 text-xl font-semibold">Des formations adaptées à tous</h2>
                                            <p className="mb-3 md:text-justify">Nos formations sont conçues pour répondre aux besoins des employeurs, des salariés et des indépendants en termes de compétences et de connaissances.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-2 md:space-x-6 md:flex-row md:space-y-0">
                                        <div>
                                            {/* <div className="p-4 bg-white rounded-full shadow-icon">
                                                <GiSkills size={40} className="text-second-50" />
                                            </div> */}
                                            <div className="inline-block p-4 rounded-full bg-second-50">
                                                <HiOutlineDesktopComputer size={35} className="text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="mb-2 text-xl font-semibold">Des formations axées sur l'action</h2>
                                            <p className="md:text-justify">Chacune de nos formations est conçue pour être pratique et applicable, de manière à ce que les apprenants puissent mettre en pratique ce qu'ils ont appris dans leur travail quotidien.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-center">
                            <div className="flex-1 mb-4 lg:order-2 md:mb-0">
                                <div className="relative w-full overflow-hidden md:h-96 h-60">
                                    <Image 
                                    src="/images/local/work-formation-formations-competences.png"
                                    fill
                                    className="object-contain transition duration-500 ease-in-out transform rounded-md cursor-pointer hover:scale-110"
                                    alt="Illustration formations développemnt des compétences"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 md:order-1">
                                <h2 className="mb-6 text-2xl font-semibold uppercase text-second-50">Des formations pour développer les compétences professionnelles</h2>
                                <p className="mb-3 md:text-justify">Nos formations pour développer les compétences professionnelles sont destinées aux personnes qui souhaitent acquérir de nouvelles compétences dans un domaine plus large, telles que la bureautique, la gestion du temps, la communication, la gestion de projet, etc. </p>
                                <p className="mb-3 md:text-justify">Ce type de formation aide les participants à développer leurs compétences professionnelles de manière plus générale, ce qui peut les aider à se démarquer sur le marché du travail.</p>
                                <p className="md:text-justify">Les formations pour développer les compétences professionnelles peuvent être plus courtes que les formations orientées métier et peuvent couvrir un large éventail de compétences.</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-center">
                            <div className="flex-1 mb-4 lg:mb-0">
                                <div className="relative w-full overflow-hidden md:h-96 h-60">
                                    <Image 
                                    src="/images/local/work-formation-foramtions-metiers.png"
                                    fill
                                    className="object-contain transition duration-500 ease-in-out transform rounded-md cursor-pointer hover:scale-110"
                                    alt="Illustration formations orientées métiers"
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="mb-6 text-2xl font-semibold uppercase text-second-50">Des formations orientées métier</h2>
                                <p className="mb-3 md:text-justify">Nos formations orientées métier proposées par notre centre de formation sont destinées aux personnes qui souhaitent se recovertir dans un nouveau métier et aux personnes qui désirent se spécialiser dans leur secteur d'activité. </p>
                                <p className="mb-3 md:text-justify">Ce type de formation permet aux participants d'acquérir une expertise spécifique et de se différencier sur le marché du travail.</p>
                                <p className="md:text-justify">Les formations orientées métier sont généralement courtes et se concentrent sur les compétences nécessaires pour réussir dans un métier spécifique.</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-center">
                            <div className="flex-1 mb-6 lg:order-2 lg:mb-0">
                                <div className="relative w-full overflow-hidden md:h-96 h-60">
                                    <Image 
                                    src="/images/local/work-formation-formateur.png"
                                    fill
                                    className="object-contain transition duration-500 ease-in-out transform rounded-md cursor-pointer hover:scale-110"
                                    alt="Illustration formateurs qualifiés"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 md:order-1">
                                <h2 className="mb-6 text-2xl font-semibold uppercase text-second-50">Des formateurs qualifiés</h2>
                                <p className="mb-3 md:text-justify">Notre organisme de formation s'engage à fournir une formation de qualité, en veillant à ce que les formateurs soient qualifiés et expérimentés dans leur domaine. </p>
                                <p className="md:text-justify">Les formateurs sont sélectionnés pour leur expertise technique et leur capacité à transmettre les connaissances de manière claire et concise. Le centre de formation veille également à ce que les formateurs soient à jour sur les dernières évolutions dans leur domaine d'expertise pour garantir que les participants reçoivent une formation de qualité.</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-center">
                            <div className="flex-1 mb-6 lg:mb-0">
                                <div className="relative w-full overflow-hidden md:h-96 h-60">
                                    <Image 
                                    src="/images/local/work-formation-equipements.png"
                                    fill
                                    className="object-contain transition duration-500 ease-in-out transform rounded-md cursor-pointer hover:scale-110"
                                    alt="Illustration formations équipemts moderne"
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="mb-6 text-2xl font-semibold uppercase text-second-50">Des équipements modernes pour une formation de qualité</h2>
                                <p className="mb-4 md:text-justify">Notre centre est équipé de toutes les installations nécessaires pour garantir une formation de qualité, notamment des tableaux blancs, un vidéoprojecteur.</p>
                                <p className="md:text-justify">Chaque poste de travail est équipé d’un ordinateur et de logiciels professionnels pour aider les apprenants à atteindre leurs objectifs de formation. Des supports de cours leur sont fournis tout au long de leur parcours de formation.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <SectionRappel />
            </main> 
        </>
    )
}
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FaWindows, FaRegCalendarCheck, FaUsers, FaUserGraduate} from 'react-icons/fa'
import {SiMicrosoftoffice} from 'react-icons/si'

export default function SectionFormationTwo() {
    return (
        <section className="grid items-center px-4 py-16 gap-x-10 lg:grid-cols-2 lg:grid-rows-none md:px-6 lg:px-12 xl:px-20 2xl:px-44 3xl:px-52 gap-y-4 lg:gap-y-0">
            <div className="order-last lg:order-first">
                <Link href="/formations/bureautique">
                    <h2 className="text-3xl font-semibold transition duration-200 ease-in-out cursor-pointer xl:text-4xl text-bleue-karoy-100 hover:text-second-50">FORMATIONS BUREAUTIQUE</h2>
                </Link>
                <div className="flex py-4">
                    <div className="relative ">
                        <span className="before:content-[''] before:w-[100px] before:h-[5px] before:top-[0px] before:left-[0px] before:absolute before:rounded-lg before:bg-second-50"></span>
                    </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-second-50">Maîtriser les fonctions fondamentales de Word, Excel, Outlook et Powerpoint</h3>
                <div className="w-full mt-6 space-y-5 md:w-10/12">
                    <div className="flex">
                        <div>
                             <FaRegCalendarCheck size={40} className="text-second-50" />
                        </div>
                        <div className="ml-4">
                        <h3 className="mb-1 font-semibold">Des formations courtes</h3>
                            <p className="text-sm">Ces formations "qui vont droit à l'essentiel" permettent d'acquérir en quelques heures une utilisation efficace des logiciels.</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <FaUsers size={40} className="text-second-50" />
                        </div>
                        <div className="ml-4">
                            <h3 className="mb-1 font-semibold">Débutant, intermédiaire et avancé</h3>
                            <p className="text-sm">Adaptées aux débutants et aux personnes souhaitant approfondir leurs connaissances de base, jusqu'aux fonctionnalités les plus avancées.</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <SiMicrosoftoffice size={40} className="text-second-50" />
                        </div>
                        <div className="ml-4">
                        <h3 className="mb-1 font-semibold">Développez vos compétences sur le pack Office Microsoft 2021©</h3>
                            <p className="text-sm">Améliorez votre productivité, présentez et communiquez efficacement vos documents: projets, rapports, CV...</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <FaUserGraduate size={40} className="text-second-50" />
                        </div>
                        <div className="ml-4">
                        <h3 className="mb-1 font-semibold">Attestation de réussite</h3>
                            {/* <p className="text-sm">Cette certification valorise vos compétences en bureautique. Idéal, pour une recherche d’emploi ou pour promouvoir vos aptitudes au sein de votre entreprise.</p> */}
                            <p className="text-sm">Cette attestation reconnait vos compétences en bureautique. A faire valoir lors de votre recherche d’emploi ou pour promouvoir vos compétences au sein de votre entreprise.</p>
                        </div>
                    </div>
                </div>
                {/* <div className="p-4 mt-6 rounded-lg bg-second-50">
                    <p className="text-white text-md"><span className="font-semibold">Objectif: </span>Connaître les bases de Word et Excel. Maitriser les fonctionnalités les plus utiles de ces logiciels.</p>
                    <div className="flex flex-col items-center md:flex-row">
                        <div className="mt-3">
                            <div className="relative mr-6 w-28 h-28 md:mb-0">
                                <Image 
                                src="/images/cpf.png"
                                fill
                                alt="Illustration logo CPF"
                                />
                            </div>
                        </div>
                        <p className="text-xl font-light text-white">Cette formation est finançable à 100% avec votre Compte Personnel de Formation (CPF).</p>
                    </div>
                </div> */}
            </div>
            
            <div className="flex justify-center">
                <div className="flex items-start justify-center">
                    <div className="relative w-[350px] h-[350px] md:w-[550px] md:h-[550px]">
                        <Image 
                        src="/images/formations/bureautique/formation-bureautique-microsoft-section.jpg"
                        fill
                        className="object-contain"
                        alt="Illustration formation Word et Excel"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
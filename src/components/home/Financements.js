import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Financements() {
    return (
        <section className="px-6 py-16 md:px-6 lg:px-12 xl:px-20 2xl:px-52 3xl:px-64">
            <h2 className="text-2xl font-semibold text-center md:text-4xl">LES FINANCEMENTS<br/>POUR VOTRE FORMATION</h2>
            <div className="flex justify-center py-6">
                <div className="relative ">
                    <span className="before:content-[''] before:w-[100px] before:h-[5px] before:top-[60] before:left-[-50px] before:absolute before:rounded-lg before:bg-second-50"></span>
                </div>
            </div>
            <p className="mt-10 text-lg text-center md:mx-40">Vous êtes salarié, auto-entrepreneur ou en recherche d'empoi. <span className="font-semibold">Vous pouvez bénéficier d'un financement</span> partiel ou jusqu’à 100% pour votre projet de formation. Ces solutions de financements dépendent de votre situation et vous pouvez être éligible à un ou plusieurs de ces dispositifs.</p>
            <div className="grid grid-rows-2 mt-20 gap-x-8 gap-y-10 md:grid-cols-2">
                <div className="p-4 bg-white border-2 border-gray-200 rounded-lg hover:shadow-lg">
                    <div className="relative flex justify-center">
                        <Image 
                        src="/images/financements/logo-pole-emploi-900x500.jpg"
                        width={200}
                        height={100}
                        alt="Illustration logo Pôle emploi"
                        />
                    </div>
                    <div>
                        <h3 className="mt-6 text-xl font-bold text-center">PÔLE EMPLOI</h3>
                        <p className="mt-4 font-light text-center">Si vous êtes <span className="font-semibold">demandeur d'emploi</span>, vous pouvez faire financer votre formation par Pôle Emploi.</p>
            
                        <div className="flex justify-center">
                            <Link 
                            href="/financement/financement-pole-emploi"
                            className="px-4 py-2 mx-auto mt-6 text-white transition duration-200 ease-in-out rounded-full bg-second-50 hover:bg-bleue-karoy-100"
                            >
                                Financement pôle emploi
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-white border-2 border-gray-200 rounded-lg hover:shadow-lg ">
                    <div className="relative flex justify-center">
                        <Image 
                        src="/images/financements/logo-compte-professionnel-formation-cpf.jpg"
                        width={200}
                        height={100}
                        alt="Illustration logo Compte personnel de formation"
                        />
                    </div>
                    <div>
                        <h3 className="mt-6 text-xl font-bold text-center">COMPTE PERSONNEL DE FORMATION (CPF)</h3>
                        <p className="mt-4 font-light text-center">Si vous êtes <span className="font-semibold">indépendant, salarié ou en recherche d’emploi</span>, vous pouvez financer en intégralité certaines formations avec votre Compte Personnel de Formation (CPF).</p>
            
                        <div className="flex justify-center">
                            <Link 
                            href="/financement/financement-compte-personnel-formation"
                            className="px-4 py-2 mx-auto mt-6 text-white transition duration-200 ease-in-out rounded-full bg-second-50 hover:bg-bleue-karoy-100"
                            >
                                Financement CPF +
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-white border-2 border-gray-200 rounded-lg hover:shadow-lg">
                    <div className="relative flex justify-center">
                        <Image 
                        src="/images/financements/logo-transition-pro.jpg"
                        width={200}
                        height={100}
                        alt="Illustration logo Transition Pro"
                        />
                    </div>
                    <div>
                        <h3 className="mt-6 text-xl font-bold text-center">CPF DE TRANSITION PROFESSIONNEL</h3>
                        <p className="mt-4 font-light text-center">Si vous êtes <span className="font-semibold">salarié depuis plus de 2 ans</span> et que vous voulez changer de métier, vous pouvez financer votre formation avec le CPF de Transition Professionnel si cette formation est éligible au CPF.</p>
            
                        <div className="flex justify-center">
                            <Link 
                            href="/financement/financement-cpf-transition-professionnel"
                            className="px-4 py-2 mx-auto mt-6 text-white transition duration-200 ease-in-out rounded-full bg-second-50 hover:bg-bleue-karoy-100"
                            >
                                Financement Transition Pro +
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-white border-2 border-gray-200 rounded-lg hover:shadow-lg">
                    <div className="relative flex justify-center">
                        <Image 
                        src="/images/financements/logo-agephip.png"
                        width={200}
                        height={100}
                        alt="Illustration logo Financement personnel"
                        />
                    </div>
                    <div>
                        <h3 className="mt-6 text-xl font-bold text-center">FINANCEMENT AGEPHIP</h3>
                        <p className="mt-4 font-light text-center">Vous pouvez <span className="font-semibold">financer vous-même</span>, en totalité ou partiellement, votre formation. Notre centre propose des <span className="font-semibold">facilités de paiement</span>. Paiements en 3x, sans frais et sans conditions.</p>
            
                        <div className="flex justify-center">
                            <Link 
                            href="/financement/financement-agephip"
                            className="px-4 py-2 mx-auto mt-6 text-white transition duration-200 ease-in-out rounded-full bg-second-50 hover:bg-bleue-karoy-100"
                            >
                                Financement Agephip +
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid mt-20 gap-x-8 md:grid-cols-2">
                <div className="mb-16 md:mb-0">
                    <div className="relative flex justify-center">
                        <Image 
                        src="/images/financements/dispositifs-financement-work-formation.png"
                        width={450}
                        height={180}
                        alt="illustration des dispositifs de financements pour la formation professionnelle"
                        />
                    </div>
                </div>
                <div className="relative rounded-lg bg-second-50">
                    <div className="p-6 md:px-8">
                        <div className="text-white">
                            <h4 className="mb-4 text-lg font-semibold">Notre centre vous accompagne pour faciliter vos démarches et obtenir les subventions auxquelles vous pouvez prétendre.</h4>
                            <p className="mb-2 text-white">Le coût d’une formation peut être un frein pour l’évolution de vos compétences ou pour franchir le pas d’une reconversion professionnelle.</p>
                            <p className="text-white">Plusieurs dispositifs existent pour vous soutenir financièrement et différentes aides peuvent être mobilisées pour financer votre parcours de formation.</p>
                            <p className="text-white">Test</p>
                            <Link href="qualiopi_certificat_de_conformité.pdf" className="text-white">Certification Qualiopi N° : 2200772.1</Link>
                        </div>
                    </div>
                    <div className="absolute top-0 -translate-x-1/2 md:-translate-y-1/2 md:left-0 md:transform md:top-1/2 left-1/2">
                        <div className="hidden arrow-left md:block"></div>
                        <div className="arrow-up md:hidden"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

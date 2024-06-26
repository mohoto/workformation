import React from 'react'
import Image, {StaticImageData} from 'next/image'
import financements from '../../../public/images/financements/dispositifs-financement-work-formation.png'
import Link from 'next/link'

export default function FinancementSection() {
    return (
        <section className="px-6 py-16 md:px-6 lg:px-12 xl:px-20 2xl:px-44 3xl:px-52">
            <h2 className="text-3xl font-semibold text-center xl:text-4xl text-bleue-karoy-100">LES FINANCEMENTS<br/>POUR VOTRE FORMATION</h2>
            <div className="flex justify-center py-6">
                <div className="relative ">
                    <span className="before:content-[''] before:w-[100px] before:h-[5px] before:top-[0] before:left-[-50px] before:absolute before:rounded-lg before:bg-second-50"></span>
                </div>
            </div>
            <div className="md:px-20 lg:px:32 xl:px-52">
                <p className="mt-4 text-center lg:text-lg md:p-6">Vous êtes salarié, auto-entrepreneur ou en recherche d'emploi. <span className="font-semibold">Vous pouvez bénéficier d'un financement partiel ou jusqu’à 100%</span> pour votre projet de formation. Ces solutions de financements dépendent de votre situation. Vous pouvez être éligible à un ou plusieurs de ces dispositifs.</p>
            </div>
            <div className="grid items-center mt-10 md:mt-20 gap-x-8 lg:grid-cols-2">
                <div className="flex">
                    <div className="relative w-full h-64 mb-16 md:mb-0 md:h-72 xl:h-82 2xl:h-[350px]">
                        <Image 
                        src={financements}
                        fill
                        className="object-contain"
                        alt="Ilssustration des différents dispositifs de financements pour la formation"
                        />
                    </div>
                </div>
                <div className="2xl:py-8 relative rounded-lg bg-second-50 before:w-0 before:h-0 before:border-t-[0] before:border-t-transparent before:border-l-[40px] before:border-l-transparent before:border-b-[40px] before:border-b-second-50 before:border-r-[40px] before:border-r-transparent before:mt-[-40px] before:right-[50%] before:absolute
                lg:before:border-t-[40px] lg:before:border-t-transparent lg:before:border-l-[0] lg:before:border-b-transparent lg:before:border-r-second-50 lg:before:-t-[0] lg:before:ml-[-40px] lg:before:bottom-[50%] lg:before:left-[0]">
                    <div className="flex flex-col justify-center h-full p-6 md:px-8">
                        <div className="text-white">
                            <h4 className="mb-4 text-lg font-semibold">Notre centre vous accompagne pour faciliter vos démarches et obtenir les financements auxquelles vous pouvez prétendre.</h4>
                            <p className="mb-2 font-light text-white">Le coût d’une formation peut être un frein pour l’évolution de vos compétences ou pour franchir le pas d’une reconversion professionnelle.</p>
                            <p className="mb-2 font-light text-white">Plusieurs dispositifs existent pour vous soutenir financièrement et différentes aides peuvent être mobilisées pour financer votre parcours de formation.</p>
                            <p className="font-semibold text-white mb-2">Vous avez un projet de formation ? N’hésitez pas à nous en parler. Nous trouverons ensemble le financement le plus adapté</p>
                            <Link href="qualiopi_certificat_de_conformité.pdf" className="text-white mt-2" passHref legacyBehavior>
                                <a target="_blank">
                                    Voir la certification Qualiopi N° : 2200772.1
                                </a>
                            </Link>
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

import React from 'react'
import {BsTelephoneInbound} from 'react-icons/bs'
import {FaMedal, FaGraduationCap} from 'react-icons/fa'
import {RiHandCoinFill} from 'react-icons/ri'

export default function Featured() {
    return (
        <section className="relative z-30 grid gap-4 px-5 pb-5 -mt-10 text-white md:grid-cols-3 md:px-6 lg:px-12 xl:px-20 2xl:px-52 3xl:px-64">
            <div className="grid grid-flow-row md:grid-cols-3 grid-row-3 md:grid-flow-col md:col-span-2 rounded-xl bg-bleue-karoy-100 md:flex-row">
                <div className="flex items-start p-3 md:p-6">
                    <div>
                        <FaMedal size="2.5rem" className="mt-2 mr-2"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold">Qualité</h3>
                        <p className="pt-2 text-sm">Des formateurs expérimentés dans leur domaine.</p>
                    </div>
                </div>
                <div className="flex items-start p-3 md:p-6">
                    <div>
                        <RiHandCoinFill size="2.5rem" className="mt-2 mr-2"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold">Efficace</h3>
                        <p className="pt-2 text-sm">Une méthode d'enseignement basée sur la pratique.</p>
                    </div>
                </div>
                <div className="flex items-start p-3 md:p-6">
                    <div>
                        <FaGraduationCap size="2.5rem" className="mt-2 mr-2"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold">Complet</h3>
                        <p className="pt-2 text-sm">Matériel pédagogique à disposition pour la pratique.</p>
                    </div>
                </div>
                {/* <div className="flex items-start p-6">
                    <CogIcon className="mr-2 h-14"/>
                    <div>
                        <h3 className="text-xl font-semibold">Localisation</h3>
                        <p className="pt-2 text-sm">5 Route de la Bonde<br/>91300 MASSY</p>
                    </div>
                </div> */}
            </div>
            <div className="p-6 py-5 text-center bg-second-50 rounded-xl">
                <span>N'hésitez-pas</span>
                <h3 className="text-xl"> Contactez-nous!</h3>
                <a href="tel:+33-1-45-76-78-98" className="flex items-center justify-center text-2xl">
                    <BsTelephoneInbound size={20} className="inline-block mr-2" />01 45 76 78 98
                </a>
            </div>
        </section>
    )
}

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BsTelephoneInbound} from 'react-icons/bs'
import {HiOutlineLocationMarker, HiOutlineMail} from 'react-icons/hi'

export default function Footer() {
  return (
    <footer>
        <div className="bg-bottom bg-no-repeat bg-auto md:bg-top" style={{backgroundImage: `url('/images/stagiaires-formations.jpg')`}}>
            <div className="grid grid-cols-1 px-6 text-white bg-bleue-karoy-100 bg-opacity-90 md:grid-cols-4 gap-y-10 py-14 text-md md:gap-x-20 md:px-6 lg:px-12 xl:px-20 2xl:px-44 3xl:px-52">
                <div className="flex flex-col">
                    <div className="relative">
                        <Image 
                        src="/images/logo-qualiopi.png"
                        width={200}
                        height={100}
                        alt="Logo certification Qualiopi"
                        />
                    </div>
                    <p className="mt-4 mb-2 text-sm font-extralight">Notre centre a obtenu la certification QUALIOPI. Cette certification qualité a été délivrée au titre de la catégorie: actions de formation.</p>
                    <p className="text-sm font-extralight">N° de déclaration d'activité : 11756436975 </p>
                </div>
                <div>
                    <h5 className="text-xl font-bold md:text-lg">LIENS RAPIDES</h5>
                    <div className="flex flex-col mt-6 space-y-2 text-lg md:text-base">
                        <Link href="/formations">Nos fromations</Link>
                        <Link href="/financement/financement-pole-emploi">financement Pôle emploi</Link>
                        <Link href="/financement/financement-cpf">financement CPF</Link>
                        <Link href="/financement/financement-agephip">financement AGEPHIP</Link>
                        <Link href="/financement/financement-opco">financement OPCO</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>

                <div className="space-y-4">
                    <h5 className="text-xl font-bold md:text-lg">INFORMATIONS LÉGALES</h5>
                    <div className="flex flex-col mt-6 space-y-2 text-lg md:text-base">
                        <Link href="/conditions-generales-de-vente">Conditions générales de vente</Link>
                        <Link href="/reglement-interieur">Règlement intérieur</Link>
                        <Link href="/politique-confidentialite">Politique de confidentialité</Link>
                    </div>
                </div>

                <div className="space-y-4">
                    <h5 className="text-xl font-bold md:text-lg">CONTACT</h5>
                    <div className="text-lg md:text-base">
                        <p className="flex items-center mb-1"><BsTelephoneInbound size={20} className="inline-block mr-2" />Telephone:</p>
                        <a href="tel:+33-1-45-76-78-98" className="flex items-center">
                            01 45 76 78 98
                        </a>
                    </div>
                    <div className="text-lg md:text-base">
                        <p className="flex items-center mb-1"><HiOutlineMail className="h-4 mr-2"/>Email:</p>
                        <p>infos@workformation.com</p>
                    </div>
                    <div className="text-lg md:text-base">
                        <p className="flex items-center mb-1"><HiOutlineLocationMarker className="h-4 mr-2"/>Adresse:</p>
                        <p>105 rue Bobillot<br/>75013 PARIS</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-4 bg-bleue-karoy-100">
            <p className="text-center text-white font-extralight">Copyright © 2022 Work formation</p>
        </div>
    </footer>
  )
}

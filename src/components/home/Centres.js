import React from 'react'
import Image from 'next/image'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {RiBusLine, RiSubwayLine} from 'react-icons/ri'
import {SiMetrodeparis} from 'react-icons/si'
import {BsTelephoneInbound} from 'react-icons/bs'

export default function Centres() {
    return (
        <section className="px-5 py-10 md:px-6 lg:px-12 xl:px-20 2xl:px-44 3xl:px-52">
            <div className="grid md:grid-cols-3 gap-x-10 gap-y-6">
                <div className="px-10 py-5 space-y-2 font-light text-white rounded-lg bg-bleue-karoy-100">
                    <p>Notre centre dispose d’espaces dédiés et de matériel pédagogique pour l’apprentissage théorique et pratique.</p>
                    <p>Situé à Paris, il est facilement accessible par les transports en commun ou en voiture.</p>
                </div>
                <div className="flex flex-col items-center justify-center p-6 py-5 text-center text-white bg-second-50 rounded-xl">
                    <span>N'hésitez-pas</span>
                    <h3 className="text-xl"> Contactez-nous!</h3>
                    <a href="tel:+33-1-45-76-78-98" className="flex items-center justify-center mt-4 text-2xl">
                        <BsTelephoneInbound size={20} className="inline-block mr-2" />01 84 80 53 44
                    </a>
                </div>
                {/* <div className="flex justify-center">
                    <div className="relative border-4 rounded-full w-52 h-52 border-bleue-karoy-50">
                            <Image 
                            src="/images/logo-qualiopi-cpf-nda.jpg"
                            fill
                            className="rounded-full"
                            alt=""
                            />
                    </div>
                </div> */}
                <div className="px-10 py-5 rounded-lg bg-second-50">
                    <h3 className="text-xl text-white">WORK <span className="font-semibold">FORMATION</span></h3>
                    <div className="flex items-start mt-2">
                        <div>
                            <FaMapMarkerAlt size="2.5rem" className="mt-2 mr-2 text-white"/>
                        </div>
                        <div className="pt-2 text-lg text-gray-100">
                            <p>105 Rue Bobillot</p>
                            <p>75013 PARIS</p>
                        </div>
                    </div>
                    <div className="flex mt-6 ml-2 space-x-4">
                        <div className="flex md:items-center">
                            <SiMetrodeparis size="1.5rem" className="mr-1 text-white"/>
                            <p className="px-2 mr-1 text-white rounded-md bg-bleue-karoy-100">Place d'Italie</p>
                            <p className="px-2 text-white rounded-md bg-bleue-karoy-100">Corvisart</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
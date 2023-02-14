import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import {HiOutlineUsers, HiOutlineBadgeCheck} from 'react-icons/hi'
import {SlGraduation} from 'react-icons/sl'

export default function Formations() {

    const [selectedFormations, setSelectedFormations] = useState();
    
    const getFormations = async () => {
        const {data} = await axios.get('/api/formations');
        setSelectedFormations(data.filter(formation => formation.id === "1" || formation.id === "4" || formation.id === "7"));
    } 

    useEffect(() => {
        getFormations();
    }, [])

    return (
        <section className="px-6 py-16 md:px-6 lg:px-12 xl:px-20 2xl:px-44 3xl:px-52 bg-bleue-karoy-100">
            <h2 className="text-3xl font-semibold text-center text-white md:text-4xl">TROUVEZ VOTRE FORMATION</h2>
            <div className="flex justify-center py-6">
                <div className="relative ">
                    <span className="before:content-[''] before:w-[100px] before:h-[5px] before:top-[0] before:left-[-50px] before:absolute before:rounded-lg before:bg-second-50"></span>
                </div>
            </div>
            <p className="mt-10 text-lg text-center text-gray-100 md:mx-40"><span className="font-semibold text-white">La formation professionnelle est la clé pour s’insérer</span> rapidement et durablement dans le monde du travail. Que ce soit pour l’apprentissage d’un nouveau métier ou pour développer vos savoirs-faire, notre centre propose des <span className="font-semibold text-white">formations orientées pour l’emploi</span>.</p>
            <div className="grid mt-20 gap-x-10 gap-y-20 md:grid-cols-3">
                {selectedFormations && selectedFormations.map(formation => (

                    <div key={formation.id} className="p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl">
                        <div className="relative w-full h-60">
                            <Image 
                            src={formation.image}
                            fill
                            className="object-cover object-left rounded-lg"
                            alt="illustration formation Microsoft Word"
                            />
                            <div className="absolute flex-col space-y-2 top-6 right-4">
                                {formation.types && formation.types.map(type => (
                                    <div key={type} className="px-2 py-1 rounded-md bg-second-50">
                                        <span className="text-sm text-white">{type}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-0 hover:opacity-50 bg-bleue-karoy-100"></div>
                        </div>
                        <div className="mt-6">
                            <Link href={`/formations/${formation.categorieSlug}/${formation.slug}`}>
                                <h3 className="mt-6 text-lg font-semibold text-center hover:text-second-50 text-bleue-karoy-100">{formation.title}</h3>
                            </Link>
                            <p className="mt-4 text-sm font-light">{formation.resume}</p>
                            <table className="w-full mt-4 space-y-20 text-sm font-light table-fixed">
                                <tbody>
                                    {/* <tr>
                                        <th scope="row" className="flex items-center font-light text-left"><HiOutlineLocationMarker className="h-4 mr-2"/>Lieu</th>
                                        <td className="text-right">Massy(91) / Paris</td>
                                    </tr> */}
                                    {/* <tr>
                                        <th scope="row" className="flex items-center font-light text-left"><HiOutlineCalendar className="h-4 mr-2"/>Durée</th>
                                        <td className="text-right">2 jours</td>
                                    </tr> */}
                                    <tr>
                                        <th scope="row" className="flex items-center text-left font-extralight"><HiOutlineUsers className="h-4 mr-2"/>Admission</th>
                                        <td className="text-right font-extralight">{formation.admission}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="flex items-center text-left font-extralight"><HiOutlineBadgeCheck className="h-4 mr-2"/>Évaluation</th>
                                        <td className="text-right font-extralight">{formation.evaluation}</td>
                                    </tr> 
                                    <tr>
                                        <th scope="row" className="flex items-center text-left font-extralight"><SlGraduation className="h-4 mr-2"/>Validation</th>
                                        <td className="text-right font-extralight">{formation.certification}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="flex justify-center">
                                <Link href={`/formations/${formation.categorieSlug}/${formation.slug}`}>
                                    <h3 className="px-4 py-2 mx-auto mt-6 text-white transition duration-200 ease-in-out rounded-full bg-second-50 hover:bg-bleue-karoy-100">Voir la formation</h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-6">
                <Link 
                href="/formations"
                className="px-4 py-2 mx-auto mt-6 font-semibold transition duration-200 ease-in-out bg-white rounded-full hover:text-white hover:bg-second-50 text-bleue-karoy-100">
                    Toutes nos formations
                </Link>
            </div>
        </section>
    )
}

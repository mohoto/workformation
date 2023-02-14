import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from 'next/router'
import axios from 'axios'
import {HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineUsers, HiOutlineBadgeCheck} from 'react-icons/hi'
import {SlGraduation} from 'react-icons/sl'
import {FaRegBookmark} from 'react-icons/fa'
import Accordion from '@/components/formations/Accordion'
import Tab from '@/components/formations/Tab'
import RappelSidebar from '@/components/common/section-rappel/RappelSidebar'


export default function Formation() {

  const router = useRouter();

  const {slug} = router.query;
  console.log('slug:', slug)

  const [formation, setFormation] = useState([]);
  console.log('formation:', formation)

  const getFormation = async () => {
    const response = await axios.get(`/api/formations/${slug}`)
    console.log('response:', response)
    setFormation(response.data);
  }

  useEffect(() => {
    getFormation();
  }, [slug])

  const [index, setIndex] = useState('');


  return (
    <>
        <Head>
            <title>{formation?.title} - WORK FORMATION</title>
            <meta name="description" content={formation?.resume} />
            <meta property="og-title" content={formation?.title} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head> 
        <main className="pb-16">
          <div className="flex px-4 py-10 md:px-6 lg:px-12 xl:px-20 2xl:px-44 3xl:px-52">
              <div>Acceuil = formations = microsoft-word-2019-initiale</div>
          </div>
          <div className="px-6 py-10 bg-bleue-karoy-100 md:px-6 lg:px-12 xl:px-20 2xl:px-44 3xl:px-52">
            <div className="flex items-start mb-6">
              <FaRegBookmark size={50} className="mr-2 text-second-50"/>
              <div className="flex flex-col">
                <span className="text-gray-300 font-extralight">Categorie</span>
                <span className="text-lg font-light text-white uppercase">{formation?.categorie}</span>
              </div>
            </div>
            <h1 className="text-2xl font-semibold text-white">{formation?.title}</h1>
            <div className="flex mt-6 space-x-2">
                  {formation?.types && formation.types.map(type => (
                    <div key={type} className="px-2 py-1 rounded-md bg-second-50">
                        <span className="text-sm text-white">{type}</span>
                    </div>
                  ))}
      
              </div>
            <div className="flex flex-col mt-10 space-y-6 md:space-x-10 md:flex-row md:space-y-0">
              <div className="flex items-center">
                <HiOutlineUsers size={20} className="mr-2 text-second-50"/><span className="text-white font-extralight">{formation.admission}</span>
              </div>
              <div className="flex items-center">
                <HiOutlineBadgeCheck size={20} className="mr-2 text-second-50"/><span className="text-white font-extralight">{formation.evaluation}</span>
              </div>
              <div className="flex items-center">
                <SlGraduation size={20} className="mr-2 text-second-50"/><span className="text-white font-extralight">{formation.certification}</span>
              </div>
            </div>   
          </div>
          <div className="px-4 md:grid md:grid-cols-3 md:px-6 lg:px-12 xl:px-20 2xl:px-44 3xl:px-52">
            <div className="py-10 md:col-span-2 md:pr-12">
            {/* <div>
                {formation?.accordionData && formation.accordionData.map(accordion => (
                    <React.Fragment key={accordion.id}>
                      <Accordion id={accordion.id} title={accordion.title} content={accordion.content} index={index} setIndex={setIndex}/>
                    </React.Fragment>
                ))}
              </div> */}
              <div className="mt-12 mb-12">
                {formation?.descriptions && formation.descriptions.map(description => (
                  <p key={description.id} className={`mb-4 text-gray-800 ${description.fontWeight}`}>{description.content}</p>
                ))}
              </div>
              <div>
                {formation?.accordionData && formation.accordionData.map(accordion => (
                    <React.Fragment key={accordion.id}>
                      <Accordion id={accordion.id} title={accordion.title} accordionContent={accordion.accordionContent} index={index} setIndex={setIndex}/>
                    </React.Fragment>
                ))}
              </div> 
            </div>
            <div className="md:col-span-1 md:-mt-40">
              <div className="bg-white rounded-lg shadow-card">
                  {/* <div className="relative w-full h-56">
                      <Image 
                      src={formation?.image}
                      fill
                      sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                      className="object-fit rounded-t-md"
                      alt="Illustration formation Microsoft WORD 2019 Initiale"
                      />
                  </div> */}
                  {formation.image && (
                    <Image 
                    src={formation.image}
                    width={900}
                    height={600}
                    className="rounded-t-md"
                    alt={`Illustration de ${formation.title}`}
                    />
                  )}
                
                  <div className="flex flex-col p-4 mt-4 space-y-6">
                    <Tab tabData= {formation?.infosTypes} />
                    <p className="font-light">Pour une formation en itra-entreprise ou pour toute demande spécifique, contactez notre centre de formation.</p>
                </div>
              </div>
              <div className="mt-6">
                <RappelSidebar />
              </div>
            </div>
          </div>
        </main>
    </>
  )
}
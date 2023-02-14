import React, {useState} from 'react'
import Image from 'next/image'
import useDimensions from 'react-cool-dimensions';
import {BsTelephoneInbound} from 'react-icons/bs'
import heroImage from '../../../public/images/hero/Banniere-work-formation.jpg'

export default function Hero() {

    const [heroImageBanner, setHeroImageBanner] = useState(heroImage)
    const [heroImageMask, setHeroImageMask] = useState(heroImage)
    const imageSizes = [600, 1280, 1920]

    const { observe, unobserve, width, height, entry } = useDimensions({
        onResize: ({ observe, unobserve, width, height, entry }) => {
            setHeroImageBanner(`hero-${arrayCeil(imageSizes, width)}.jpg`)
            setHeroImageMask(`hero-${arrayCeil(imageSizes, width)}.jpg`)

            unobserve(); // To stop observing the current target element
            observe(); // To re-start observing the current target element
        },
    });

    return (
        <div className="relative">
            <div className="relative flex items-center justify-center w-full h-60 overflow-hidden bg-[#0b1c39] bg-opacity-40 z-20 md:h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] 3xl:h-[800px]">
                <Image
                src={heroImageBanner}
                fill
                className="object-cover object-bottom mix-blend-overlay"
                alt="Bannière Work Formation"
                />
                <div className="absolute flex flex-col px-4 md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-1/2 3xl:w-1/2 top-36 md:top-52 md:left-20 lg:top-48 lg:left-40 xl:top-80 2xl:top-96 2xl:left-72"> 
                    <h1 className="text-xl font-bold leading-snug text-white md:text-3xl lg:text-4xl xl:text-5xl">Développez vos compétences professionnelles</h1>
                    {/* <h2 className="pt-4 text-lg font-semibold md:text-3xl text-bleue-karoy-50">Formations aux métiers d'avenir</h2> */}
                    <div className="pt-10">
                        {/* <button className="px-4 py-2 text-sm leading-6 text-white transition duration-200 ease-in-out rounded-full cursor-auto bg-second-50 md:text-lg">
                            <p>Des questions?</p>
                            <div className="flex items-center space-x-2">
                            <BsTelephoneInbound size={20} className="inline-block mr-2" />
                               <p>Nous vous rappelons</p>
                            </div>
                        </button> */}
                        
                    </div>
                </div>              
            </div>
            {/* <div className="absolute bottom-0 w-full">
                <div className="relative object-fill w-full h-[100px]">
                    <Image
                    src="/images/hero/home-slider-shape1.png"
                    fill
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                    alt="illustration bande blanche"
                    />
                </div>
            </div> */}
        </div>
    )
}

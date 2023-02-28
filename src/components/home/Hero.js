import React, {useState} from 'react'
import Image from 'next/image'
import useDimensions from 'react-cool-dimensions';
import {BsTelephoneInbound} from 'react-icons/bs'
import heroImage from '../../../public/images/hero/work-formation-hero.jpg'

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
            <div className="relative flex items-center justify-center w-full h-[350px] overflow-hidden bg-black bg-opacity-50 z-20 md:h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[800px] 3xl:h-[900px] 4xl:h-[900px]">
                <Image
                src={heroImage}
                fill
                className="object-cover object-bottom mix-blend-overlay"
                alt="Bannière Work Formation"
                />
                {/* <div className="absolute flex flex-col px-4 md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-1/2 3xl:w-1/2 top-36 md:top-52 md:left-20 lg:top-48 lg:left-40 xl:top-80 2xl:top-96 2xl:left-72"> 
                    <h1 className="text-xl font-bold leading-snug text-white md:text-3xl lg:text-4xl xl:text-5xl">Développez vos compétences<br/>professionnelles</h1>
                    <p className="px-4 py-2 mt-8 text-sm leading-6 text-white transition duration-200 ease-in-out rounded-full cursor-auto bg-second-50 md:text-lg">Formations professionnelles</p>
                </div> */} 
                <div className="absolute top-0 left-0 right-0 flex items-center justify-center h-full">
                    <div>
                        <h1 className="text-3xl font-bold !leading-snug text-center text-white md:text-4xl lg:text-5xl xl:text-6xl">Développez<br/>vos compétences<br/>professionnelles</h1>
                        <p className="px-2 py-2 mt-8 text-sm font-semibold text-center text-white lg:px-6 lg:py-4 md:text-md lg:text-lg xl:text-2xl">FORMATIONS PROFESSIONNELLES POUR ADULTES</p>
                    </div>
                </div>             
            </div> 
        </div>
    )
}

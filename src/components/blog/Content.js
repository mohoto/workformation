import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FaRegBookmark} from 'react-icons/fa'
import {BiChevronsRight} from 'react-icons/bi'


export default function Content({article}) {


  return (
    <>
        <div className="lg:px-8">
        <div className="flex items-start mb-6">
            <FaRegBookmark size={50} className="mr-2 text-second-50"/>
            <div className="flex flex-col">
                <span className="font-light text-second-50">Categorie</span>
                <span className="text-lg font-light uppercase">{article?.categorie}</span>
            </div>
        </div>
            <div className="pb-5">
                {article?.image && (
                    <div className="relative w-full mb-12 overflow-hidden  rounded-lg  aspect-[16/9]">
                        <Image 
                        src={article.image}
                        fill
                        className="object-cover rounded-lg"
                        alt={`Illustration de ${article.title}`}
                        />
                        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-0 group-hover:opacity-50 bg-bleue-karoy-100 rounded-t-md"></div>
                    </div> 
                )}
                <h1 className="text-2xl font-semibold text-left uppercase !leading-snug">{article?.title}</h1>
                <div className="flex py-6">
                    <div className="relative ">
                        <span className="before:content-[''] before:w-[100px] before:h-[5px] before:top-[0] before:left-[0] before:absolute before:rounded-lg before:bg-second-50"></span>
                    </div>
                </div>
                <div className="mt-10">
                    <p className="mb-10 font-semibold">{article?.introduction}</p>
                    {article?.contents && article.contents.map(content => (
                        <div key={content.id} className="mb-12">
                            <h2 className="mt-6 mb-4 text-xl font-semibold text-second-50">{content.subTitle}</h2>
                            {content.answers && content.answers.map(answer => (
                                <p key={answer.id} className="mb-4">{answer.contenu}</p>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="p-6 rounded-md bg-second-50">
                    <p className="mb-2 text-white">{article.formationLinkCard}</p>
                    <Link href={`/formations/${article.formationLink}`} className="flex items-center mt-2 text-gray-100 underline hover:text-bleue-karoy-100">
                        <BiChevronsRight size={30} />Voir {article.formationTextLink}
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}
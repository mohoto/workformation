import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FaRegBookmark} from 'react-icons/fa'


export default function Content({articles}) {


  return (
    <>
        <div className="lg:px-8">
        <h1 className="text-3xl font-semibold text-left uppercase 2xl:text-4xl !leading-snug">LES INFOS SUR LES FORMATIONS</h1>
                <div className="flex py-6">
                    <div className="relative ">
                        <span className="before:content-[''] before:w-[100px] before:h-[5px] before:top-[0] before:left-[0] before:absolute before:rounded-lg before:bg-second-50"></span>
                    </div>
                </div>
            <div className="grid mt-20 gap-x-6 gap-y-20 xl:grid-cols-2">
                {articles && articles.map(article => (
                    <div key={article.id} className="bg-white shadow-md hover:shadow-lg group">
                        <div className="relative w-full  border-b-4  border-bleue-karoy-100 group-hover:border-second-50 rounded-t-md aspect-[16/9]">
                            <Image 
                            src={article.image}
                            fill
                            sizes="100vw"
                            className="object-cover object-left rounded-t-md"
                            alt={`illustration de ${article.title}`}
                            />
                            <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-0 group-hover:opacity-30 bg-bleue-karoy-100 rounded-t-md"></div>
                        </div> 
                        <div className="p-6">
                            <div className="flex mb-2">
                                <div>
                                    <p className="font-light capitalize"><span className="text-second-50">{article.categorie}</span> | Work Formation</p>
                                </div>
                            </div>
                            <Link href={`/infos/${article.categorieSlug}/${article.slug}`}>
                                <h2 className="text-lg font-semibold group-hover:text-second-50 text-bleue-karoy-100">{article.title}</h2>
                            </Link>
                            <p className="mt-4 text-sm font-light">{article.resume}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}
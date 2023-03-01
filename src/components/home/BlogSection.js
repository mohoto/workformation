import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogSection({selectedArticles}) {
  return (
        <section className="px-6 py-16 md:px-6 lg:px-12 xl:px-40 2xl:px-52 3xl:px-72">
            <h2 className="text-3xl font-semibold text-center text-bleue-karoy-100 xl:text-4xl">LES INFOS FORMATION</h2>
            <div className="flex justify-center py-6">
                <div className="relative ">
                    <span className="before:content-[''] before:w-[100px] before:h-[5px] before:top-[0] before:left-[-50px] before:absolute before:rounded-lg before:bg-second-50"></span>
                </div>
            </div>
            <div className="grid mt-20 gap-x-6 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
                {selectedArticles && selectedArticles.filter(article => article.id === "1" || article.id === "6" || article.id === "2").map(article => (

                    <div key={article.id} className="bg-white shadow-lg hover:shadow-2xl group">
                        <div className="relative w-full border-b-4 aspect-[16/9] border-bleue-karoy-100 group-hover:border-second-50 rounded-t-md">
                            <Image 
                            src={article.image}
                            fill
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
                                <h3 className="text-lg font-semibold group-hover:text-second-50 text-bleue-karoy-100">{article.title}</h3>
                            </Link>
                            <p className="mt-4 text-sm font-light">{article.resume}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-6">
                    <Link 
                    href="/infos"
                    className="px-4 py-2 mx-auto mt-6 font-semibold text-white transition duration-200 ease-in-out rounded-full bg-second-50 hover:bg-bleue-karoy-100">
                        Touts les articles
                    </Link>
                </div>
        </section>
  )
}


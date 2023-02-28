import React from 'react'

export default function Content({financement}) {
    return (
        <div className="px-4 pb-8 md:px-8">
            <div className="pb-5">
                <h1 className="text-3xl font-semibold text-left uppercase 2xl:text-4xl text-bleue-karoy-100">{financement?.title}</h1>
                <div className="flex py-6">
                    <div className="relative ">
                        <span className="before:content-[''] before:w-[100px] before:h-[5px] before:top-[0] before:left-[0] before:absolute before:rounded-lg before:bg-second-50"></span>
                    </div>
                </div>
                <div className="mt-10">
                    {financement?.content && financement.content.map(contenu => (
                        <div key={contenu.id}>
                            <h2 className="mt-6 mb-4 text-lg font-semibold text-second-50">{contenu.subTitle}</h2>
                            <p className="mb-10">{contenu.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
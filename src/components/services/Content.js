import React from 'react'

export default function Content({service}) {
    if(service) console.log(service.serviceCard)
    return (
        <div className="px-4 pb-8 md:px-8">
            <div className="pb-5">
                <h1 className="text-3xl font-semibold text-left uppercase">{service?.title}</h1>
                <div className="flex py-6">
                    <div className="relative ">
                        <span className="before:content-[''] before:w-[100px] before:h-[5px] before:top-[0] before:left-[0] before:absolute before:rounded-lg before:bg-second-50"></span>
                    </div>
                </div>
                <div className="mt-10">
                    <p className="mb-10 font-semibold">{service?.introduction}</p>
                    {service?.contents && service.contents.map(content => (
                        <div key={content.id} className="mb-10">
                            <h2 className="mt-6 mb-4 text-xl font-semibold text-second-50">{content.subTitle}</h2>
                            {content.answers && content.answers.map(answer => (
                                <p key={answer.id} className="mb-4">{answer.contenu}</p>
                            ))}
                        </div>
                    ))}
                    <div className="p-6 rounded-md bg-second-50">
                        {/* {service?.serviceCard && service.serviceCard.map(answer => (
                            <p key={answer.id} className="mb-4 text-white last:mb-0">{answer.contenu}</p>
                        ))} */}
                        <p>Essai d'un texte</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
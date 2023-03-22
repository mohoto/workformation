import React, {useState} from 'react'

export default function Accordion({id, title, accordionContent, index, setIndex}) {

const handleChange = (id) => {
    setIndex(id);
}

  return (
    <div className="mb-2">
        <h2>
            <button 
            type="button" 
            className="flex items-center justify-between w-full p-4 text-lg font-semibold text-left bg-gray-100 border border-gray-100 hover:bg-gray-100 hover:text-second-50 text-bleue-karoy-100 focus:text-bleue-karoy-100"
            onClick={() => handleChange(id)}
            >
                <span>{title}</span>
                {index !== id ? (
                    <svg className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                ) : (
                    <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                )}
            </button>
        </h2>
        {index === id && (
            <div>
                <div className="p-5 px-10 font-light border border-gray-200">
                {/* dangerouslySetInnerHTML={{ _html : content }} */}
                    <div className="flex flex-col space-y-6">
                    {accordionContent && accordionContent.map(contenu => (
                        <div key={contenu.id}>
                            {contenu.title && (
                                <h3 className="mb-4 text-lg text-second-50">{contenu.title}</h3> 
                            )}
                            <ul className={id === "1" ? 'list-decimal' : 'list-disc'}>
                            {contenu.lists && contenu.lists.map(list => (
                                <li key={list.id} className={id === "1" ? 'mb-2' : undefined}>{list.content}</li>
                            ))}
                            </ul>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

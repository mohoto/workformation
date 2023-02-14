import React, {useState} from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const InputMask = dynamic(() => {return import ('react-input-mask-next')}, {ssr: false});

export default function Contact() {

    const initialValues = {
        name: "",
        email: "",
        phoneNumber: "",
        message: ""
    }

    const [values, setValues] = useState(initialValues);

    const hangleChange = e => {
        setValues({...values, [e.target.name]: e.target.value})
    }

  return (
    <>
        <Head>
            <title>Contact - WORK FORMATION</title>
            <meta name="description" content="Des questions? Envoyer votre message. Nous vous répondrons dans les plus brefs délais. Ou envoyez un mail à infos@workformation.com" />
            <meta property="og-title" content="Contact" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head> 
        <main className="px-6 pb-20 mt-20 md:px-6 lg:px-12 xl:px-20 2xl:px-44 3xl:px-52">
            <h1 className="text-3xl font-semibold text-center md:text-4xl">CONTACT</h1>
            <div className="flex justify-center py-6">
                <div className="relative ">
                    <span className="before:content-[''] before:w-[100px] before:h-[5px] before:top-[0px] before:left-[-50px] before:absolute before:rounded-lg before:bg-second-50"></span>
                </div>
            </div>
            <div className="grid grid-cols-1 mt-20 md:grid-cols-2 md:gap-x-6">
                <div className="p-6 mr-2 bg-second-50 dark:bg-gray-800 sm:rounded-lg">
                    <h2 className="text-2xl font-extrabold tracking-tight text-white dark:text-white">Des questions?</h2>
                    <p className="mt-6 text-lg font-medium text-gray-100 text-normal sm:text-lg dark:text-gray-400">
                        Envoyer votre message. Nous vous répondrons dans les plus brefs délais.
                    </p>
                    <div className="flex items-center mt-8 text-gray-100 dark:text-gray-400">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <div className="w-40 ml-4 font-semibold tracking-wide text-md">
                            105 rue Bobillot
                            75013 PARIS
                        </div>
                    </div>
                    <div className="flex items-center mt-4 text-gray-100 dark:text-gray-400">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                        <div className="w-40 ml-4 font-semibold tracking-wide text-md">
                            +44 1234567890
                        </div>
                    </div>

                    <div className="flex items-center mt-2 text-gray-100 dark:text-gray-400">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <div className="w-40 ml-4 font-semibold tracking-wide text-md">
                            infos@workformation.com
                        </div>
                    </div>
                </div>
                <form className="mt-6 md:mt-0">
                    <div className="flex flex-col">
                        <input 
                        type="text" 
                        name="name"
                        value={values.name} 
                        placeholder="Nom et prénom" 
                        className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 dark:bg-gray-800 dark:border-gray-700 focus:border-second-50 focus:outline-none" 
                        onChange={hangleChange}
                        />
                    </div>
                    <div className="flex flex-col mt-2">
                        <input 
                        type="email" 
                        name="email"
                        value={values.email} 
                        placeholder="Email" 
                        className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 dark:bg-gray-800 dark:border-gray-700 focus:border-second-50 focus:outline-none" 
                        onChange={hangleChange}
                        />
                    </div>
                    <div className="flex flex-col mt-2">
                        <InputMask 
                        mask="99 99 99 99 99"
                        name="phoneNumber" 
                        value={values.phoneNumber} 
                        placeholder="Numero de telephone(facultatif)"
                        className="block px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 dark:bg-gray-800 dark:border-gray-700 focus:border-second-50 focus:outline-none" 
                        onChange={hangleChange}
                        /> 
                    </div>
                    <div className="flex flex-col mt-2">
                        <textarea
                        rows="5" 
                        name="message"
                        value={values.message}  
                        placeholder="Votre message" 
                        className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 dark:bg-gray-800 dark:border-gray-700 focus:border-second-50 focus:outline-none"
                        onChange={hangleChange}
                        >
                        </textarea>
                    </div>
                    <div className="flex justify-center mt-6">
                        <button 
                        className="px-10 py-2 text-lg text-white transition duration-200 ease-in-out rounded-3xl bg-second-50 hover:bg-bleue-karoy-100 focus:bg-bleue-karoy-50" 
                        
                        >
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
            <div className="grid grid-cols-1 mt-4 md:grid-cols-2 md:gap-x-6">
                <div className="mt-10">
                    <div className="relative w-full">
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d168115.251734111!2d2.2085866207793803!3d48.82386191109118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6719a36507f57%3A0x7a2cf0e1ad13333e!2s105%20Rue%20Bobillot%2C%2075013%20Paris!5e0!3m2!1sfr!2sfr!4v1675425286647!5m2!1sfr!2sfr"
                        width="100%"
                        height="450"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        />
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

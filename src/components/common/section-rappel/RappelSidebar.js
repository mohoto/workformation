import React, {useState} from 'react'
import Image from 'next/image'
import {BsTelephoneInbound, BsCheck2, BsInfoCircleFill} from 'react-icons/bs'
import dynamic from 'next/dynamic'
const InputMask = dynamic(() => {return import ('react-input-mask-next')}, {ssr: false});

export default function RappelSidebar() {

    const valueForm = {
        nom: '',
        prenom: '',
        phoneNumber: ''
    };

    const [values, setValues] = useState(valueForm);
    const [successMessage, setSuccessMessage] = useState('');
    const handleChange = e => {
        setValues({...values, [e.target.name]: e.target.value});
    }
    const {nom, prenom, phoneNumber} = values;
    const [errorMessage, setErrorMessage] = useState(false);
 
    const [spinner, setSpinner] = useState(false);
    const [sucessMessage, setSucessMessage] = useState(false);

    const scrollToContent = () => {
        const element = document.querySelector('#successMessage');
        const offsetPosition = element.getBoundingClientRect().top + 500;
        element.scrollIntoView({
            behavior: 'smooth',
            top: offsetPosition
        });
    };

    const submitForm = e => {
        e.preventDefault();
        if(!nom || !prenom || !phoneNumber) {
            setErrorMessage(true);
        }
        else {
            setErrorMessage(false);
            setSpinner(true);
            setTimeout(() => {
                setSpinner(false);
                setSucessMessage(true);
                scrollToContent();
            },1000)
            console.log('Formulaire envoyé');
        } 
    }

    return (
        <div className="rounded-md shadow-md md:px-6 bg-bleue-karoy-100" id="sectionRappel">
            <div id="successMessage" className="flex flex-col items-center px-2 pt-6 pb-3 md:px-4">
                <div className="relative rounded-full shadow-2xl w-28 h-28">
                    <Image 
                    src="/images/conseiller-karoy-formation"
                    fill
                    className="rounded-full"
                    alt="illustration conseiller Work formation"
                    />
                    <BsInfoCircleFill size={35} className="absolute text-second-50 bottom-[10px] right-[-10px] bg-white rounded-full border-2 border-white" />
                </div>
                <h3 className="w-full py-3 text-center text-gray-100">Besoin d'un conseil sur le choix de votre formation ou sur les financements dont vous pouvez bénéficier?</h3>
                <div className="flex items-center justify-center">
                    <div className={`relative z-20 pb-6 rounded-lg max-w-[99%] ${sucessMessage ? 'bg-white p-3' : undefined}`}>
                        {!successMessage ? (
                            <form onSubmit={submitForm}>
                                {!sucessMessage ?
                                    (<div className={spinner ? 'fadeOutUp' : 'undefined'}>
                                        <div>
                                            <p className="mb-2 tracking-wide text-center text-gray-200 cursor-pointer text-md font-extralight">Demandez à être rappelé par un de nos conseillers.</p>
                                        </div>
                                        {errorMessage &&
                                            <p className="font-semibold tracking-wide text-center text-red-500">Veuillez renseigner tous les champs.</p>
                                        }
                                        <div className="mt-6 space-y-4">
                                            <input 
                                            type="text" 
                                            id="nom"
                                            name="nom" 
                                            value={nom}
                                            placeholder="Votre nom"
                                            className="block w-full px-4 py-3 text-sm border rounded-lg outline-none"
                                            onChange={handleChange}
                                            />
                                            <input 
                                            type="text" 
                                            id="prenom"
                                            name="prenom" 
                                            value={prenom}
                                            placeholder="Votre prenom"
                                            className="block w-full px-4 py-3 text-sm border rounded-lg outline-none" 
                                            onChange={handleChange}
                                            />
                                            <InputMask 
                                            mask="99 99 99 99 99"
                                            type="text" 
                                            id="phoneNumber"
                                            name="phoneNumber" 
                                            value={phoneNumber}
                                            placeholder="Votre numero de mobile"
                                            className="block w-full px-4 py-3 text-sm border rounded-lg outline-none" 
                                            onChange={handleChange}
                                            />
                                        </div>
                                    </div>) : (
                                    <div>
                                        <p className="font-semibold tracking-wide text-center text-gray-700">Votre demande a été enregistré. Un de nos conseiller vous rappelera.</p>
                                    </div>
                                )}
                                <div className="mt-6 text-center">
                                    <button 
                                    className={`text-white rounded-2xl bg-second-50 hover:bg-white focus:bg-white focus:text-bleue-karoy-100 hover:text-bleue-karoy-100 p-3 ${spinner ? 'w-14 rounded-full' : undefined}`}
                                    onClick={submitForm}
                                    // disabled={!nom || !prenom || !phoneNumber || !formation}
                                    >
                                        {!spinner && !sucessMessage ? (
                                            <>
                                            <BsTelephoneInbound size={16} className="inline-block mr-2" />
                                            Me rappeler
                                            </>
                                        ) : !sucessMessage ? (
                                                <div className="flex justify-center">
                                                    <div className="w-8 h-8 border-4 border-white rounded-full loader"></div>
                                                </div>
                                            ) : (
                                                <>
                                                <BsCheck2 className="inline-block h-5 mr-2"/>
                                                moins de 24 heures
                                                </>
                                            )}  
                                    </button>
                                </div>
                            </form>
                        ):
                        (
                            <h3>{successMessage}</h3>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
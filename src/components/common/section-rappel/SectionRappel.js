import React, {useState, useRef} from 'react'
import Image from 'next/image'
import {BsTelephoneInbound, BsCheck2} from 'react-icons/bs'

import dynamic from 'next/dynamic'
const Select = dynamic(() => {return import ('react-select')}, {ssr: false});
const InputMask = dynamic(() => {return import ('react-input-mask-next')}, {ssr: false});

const options = [
    { value: '1', label: 'Formation bureautique Word'},
    { value: '2', label: 'Formation bureautique Excel'},
    { value: '3', label: 'Formation Google Workspace'},
    { value: '100', label: 'Je ne sais pas encore'}
  ]

export default function SectionRappel() {

    const rappelRef = useRef();

    const initialValues = {
        nom: '',
        prenom: '',
        phoneNumber: '',
        formationId: '',
        source: 'site-web'
    };
    const [btnDiseabled, setBtnDiseabled] = useState(false);
    const [values, setValues] = useState(initialValues);
    console.log('values:', values)
    const {nom, prenom, phoneNumber, formationId, source} = values;


    const handleChangeSelect = selectedOption => {
        setValues({...values, formationId: selectedOption.value});
    };

    const handleChange = e => {
        setValues({...values, [e.target.name]: e.target.value});
    };

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


    const submitForm = async (e)=> {
        e.preventDefault();
        if(!nom || !prenom || !phoneNumber || !formationId) {
            setErrorMessage(true);
        }
        else {
            setErrorMessage(false);
            await addWebProspect({
                variables: {
                    nom: nom,
                    prenom: prenom,
                    phoneNumber: phoneNumber,
                    formationId: formationId,
                    source: source
                }
            })
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
        <section className="flex flex-col items-center px-4 py-16 md:px-20 bg-bleue-karoy-100" id="sectionRappel">
            <div id="successMessage" className="relative border-4 rounded-full shadow-2xl w-36 h-36 border-second-50">
                <Image 
                src="/images/conseiller-karoy-formation"
                fill
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                className="rounded-full"
                alt="illustration conseiller Work formation"
                />
            </div>
            <h3 className="w-full mb-10 text-xl text-center text-white md:text-3xl md:w-1/2 font-extralight">Besoin d'un conseil sur le choix de votre formation ou sur les financements dont vous pouvez bénéficier ?</h3>
            <div className="flex items-center justify-center">
                <div className="relative z-20 px-6 py-6 bg-white shadow-xl rounded-2xl max-w-[99%] md:max-w-[90%]">
                    {!sucessMessage ?
                        (<div className={spinner ? 'fadeOutUp' : undefined}>
                            <div>
                                <p className="mb-2 font-semibold tracking-wide text-center text-gray-700">Demandez à être rappelé par un de nos conseillers.</p>
                            </div>
                            {errorMessage &&
                                <p className="font-semibold tracking-wide text-center text-red-700">Veuillez renseigner tous les champs.</p>
                            }
                            <div className="mt-6 space-y-4">
                                <input 
                                type="text" 
                                id="nom"
                                name="nom" 
                                value={nom}
                                placeholder="Votre nom"
                                className="block w-full px-4 py-3 text-sm placeholder-gray-500 bg-gray-100 border rounded-lg outline-none focus:border-green-900"
                                onChange={handleChange}
                                />
                                <input 
                                type="text" 
                                id="prenom"
                                name="prenom" 
                                value={prenom}
                                placeholder="Votre prenom"
                                className="block w-full px-4 py-3 text-sm placeholder-gray-500 bg-gray-100 border rounded-lg outline-none focus:border-green-900" 
                                onChange={handleChange}
                                />
                                <InputMask 
                                mask="99 99 99 99 99"
                                type="text" 
                                id="phoneNumber"
                                name="phoneNumber" 
                                value={phoneNumber}
                                placeholder="Votre numero de mobile"
                                className="block w-full px-4 py-3 text-sm placeholder-gray-500 bg-gray-100 border rounded-lg outline-none focus:border-green-900" 
                                onChange={handleChange}
                                />
                                <Select 
                                options={options} 
                                placeholder="Votre projet de formation ?" 
                                className="bg-gray-100 border rounded-lg"
                                classNamePrefix='mySelect'
                                //style={styles}
                                theme={theme => ({
                                    ...theme,
                                    borderRadius: '0.5rem',
                                    backgroundColor: '#000000',
                                    borderWidth: 0,
                                    padding: '6px 8px',
                                    colors: {
                                    ...theme.colors,
                                    primary25: '#1880ae',
                                    primary: '#19103c',
                                    },
                                })}
                                onChange={handleChangeSelect}
                                />
                            </div>
                        </div>
                        ) : (
                        <div>
                            <p className="font-semibold tracking-wide text-center text-gray-700">Votre demande a été enregistré. Un de nos conseiller vous rappelera.</p>
                        </div>
                    )}
                    <div className="mt-6 text-center">
                        <button 
                        className={`text-white rounded-2xl bg-second-50 hover:bg-bleue-karoy-100 focus:bg-bleue-karoy-100 p-3 ${spinner ? 'w-14 rounded-full' : undefined}`}
                        onClick={submitForm}
                        // disabled={!nom || !prenom || !phoneNumber || !formation}
                        >
                            {!spinner && !sucessMessage ? (
                                <>
                                <BsTelephoneInbound size={20} className="inline-block mr-2" />
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
                </div>
            </div>
        </section>
    )
}

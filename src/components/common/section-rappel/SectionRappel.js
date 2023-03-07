import React, {useState, useRef} from 'react'
import Image from 'next/image'
import axios from 'axios'
import {BsTelephoneInbound, BsCheck2, BsInfoCircleFill} from 'react-icons/bs'

import dynamic from 'next/dynamic'
const Select = dynamic(() => {return import ('react-select')}, {ssr: false});
const InputMask = dynamic(() => {return import ('react-input-mask-next')}, {ssr: false});

const options = [
    { value: '1', label: 'Formations bureautique'},
    { value: '2', label: 'Formations outil collaboratif'},
    { value: '3', label: 'Formation Web'},
    { value: '4', label: 'Je ne sais pas encore'}
]

const colorStyles = {
    control: (styles, state) => (
        {...styles, backgroundColor: '#f3f4f6', color:'#014271', padding: '4px 5px', borderRadius: '0.5rem', fontSize:'14px', 
        '&:hover': { borderColor: '#12532d' }, // border style on hover
        border: '1px solid lightgray', // default border color
        boxShadow: 'none', // no box-shadow
        }
    ),
    options: (styles, state) => (
        {...styles, color: '#014271',
        color: state.isSelected ? "#FFF" : styles.color,
        backgroundColor: state.isSelected ? "#FFF" : "red",
        }
    ), 
    placeholder: (styles, state) => (
        {...styles, color: '#014271'}
    ),
    
}


export default function SectionRappel() {

    const successMessage = useRef();

    const initialValues = {
        nom: '',
        prenom: '',
        email: '',
        phoneNumber: '',
        formationCategorie: '',
        source: 'site-web'
    };
    const [btnDiseabled, setBtnDiseabled] = useState(false);
    const [values, setValues] = useState(initialValues);

    const {nom, prenom, email, phoneNumber, formationCategorie} = values;

    const handleChangeSelect = selectedOption => {
        if(selectedOption) {
            setValues({...values, formationCategorie: selectedOption.label});
        }
        else {
            setValues({...values, formationCategorie: ''});
        }
    };

    const handleChange = e => {
        setValues({...values, [e.target.name]: e.target.value});
    };

    const [errorMessage, setErrorMessage] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [sucessMessage, setSucessMessage] = useState(false);

    const scrollToContent = () => {
        const offsetPosition = successMessage.current.getBoundingClientRect().top + 500;
        successMessage.current.scrollIntoView({
            behavior: 'smooth',
            top: offsetPosition
        });
    };


    const submitForm = async (e)=> {
        e.preventDefault();
        if(!nom || !prenom || !email || !phoneNumber || !formationCategorie) {
            setErrorMessage(true);
            return;
        }
        try {
            const {data} = await axios.post('/api/rappel', values)
            setSpinner(true);
            setTimeout(() => {
                setSpinner(false);
                if(data.message === "DEMANDE_RAPPEL_ENVOYÉ") {
                    setSucessMessage(true);
                    setBtnDiseabled(true)
                }
                scrollToContent();
            },2000) 
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="flex flex-col items-center px-4 py-16 md:px-20 bg-bleue-karoy-100" id="sectionRappel">
            <div ref={successMessage} className="relative before:content-[''] before:absolute before:w-[50px] before:h-[50px] before:rounded-full before:bottom-[10px] before:left-[50%] before:bg-second-50">
                <div className="relative rounded-full shadow-2xl w-36 h-36">
                    <Image 
                    src="/images/conseiller-karoy-formation"
                    fill
                    sizes="100vw"
                    className="rounded-full"
                    alt="illustration conseiller Work formation"
                    />
                    {/* <div className="absolute w-[40px] h-[40px] bg-second-50 rounded-full bottom-[10px] right-[-10px]">
                    </div> */}
                    <BsInfoCircleFill size={45} className="absolute text-second-50 bottom-[10px] right-[-10px] bg-white rounded-full border-2 border-white" />
                </div>
            </div>
            <h3 className="w-full mt-4 mb-10 text-lg text-center text-white md:text-xl lg:text-2xl md:w-1/2 font-extralight">Besoin d'un conseil sur le choix de votre formation ou sur les financements dont vous pouvez bénéficier ?</h3>
            <div className="flex items-center justify-center">
                <div className="relative z-20 px-6 py-6 bg-white shadow-xl rounded-2xl max-w-[99%] md:max-w-[90%]">
                    {!sucessMessage ?
                        (<div className={spinner ? 'fadeOutUp' : undefined}>
                            <div>
                                <p className="mb-2 font-semibold tracking-wide text-center">Demandez à être rappelé par un de nos conseillers.</p>
                            </div>
                            {errorMessage &&
                                <div className="flex items-center px-4 py-3 text-sm text-white bg-red-600 rounded-md" role="alert">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 mr-4 text-gray-200 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
                                        <p className="text-sm">Veuillez remplir tous les champs</p>
                                    </div>
                                </div>
                            }
                            <form className="mt-6 space-y-4">
                                <input 
                                type="text" 
                                id="nom"
                                name="nom" 
                                value={nom}
                                placeholder="Votre nom"
                                className="block w-full px-4 py-3 text-sm bg-gray-100 border rounded-lg outline-none placeholder-bleue-karoy-100 focus:border-green-900"
                                onChange={handleChange}
                                />
                                <input 
                                type="text" 
                                id="prenom"
                                name="prenom" 
                                value={prenom}
                                placeholder="Votre prenom"
                                className="block w-full px-4 py-3 text-sm bg-gray-100 border rounded-lg outline-none placeholder-bleue-karoy-100 focus:border-green-900" 
                                onChange={handleChange}
                                />
                                <input 
                                type="email" 
                                name="email"
                                value={values.email} 
                                placeholder="Votre email" 
                                className="block w-full px-4 py-3 text-sm bg-gray-100 border rounded-lg outline-none placeholder-bleue-karoy-100 focus:border-green-900" 
                                onChange={handleChange}
                                />
                                <InputMask 
                                mask="99 99 99 99 99"
                                type="text" 
                                id="phoneNumber"
                                name="phoneNumber" 
                                value={phoneNumber}
                                placeholder="Votre numero de mobile"
                                className="block w-full px-4 py-3 text-sm bg-gray-100 border rounded-lg outline-none placeholder-bleue-karoy-100 focus:border-green-900" 
                                onChange={handleChange}
                                />
                                {/* <Select 
                                options={options} 
                                placeholder="Votre projet de formation ?" 
                                className="bg-gray-100 border rounded-lg"
                  
                                classNamePrefix='mySelect'
                                //style={styles}
                                theme={theme => ({
                                    ...theme,
                                    borderRadius: '0.5rem',
                                    backgroundColor: '#56adbf',
                                    borderWidth: 0,
                                    padding: '30px 30px',
                                    colors: {
                                    ...theme.colors,
                                    primary25: '#56adbf',
                                    primary: '#014271',
                                    },
                                })}
                                onChange={handleChangeSelect}
                                /> */}
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    placeholder="Votre projet de formation?"
                                    isDisabled={false}
                                    isLoading={false}
                                    isClearable={true}
                                    isRtl={false}
                                    isSearchable={false}
                                    name="color"
                                    options={options}
                                    styles={colorStyles}
                                    onChange={handleChangeSelect}
                                />
                            </form>
                        </div>
                        ) : (
                        <div className="flex justify-center">
                            <div>
                                <svg className="w-6 h-6 fill-current text-second-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
                            </div>
                            <div>
                                <p className="font-semibold tracking-wide text-center text-gray-700">Votre demande a été enregistré. Un de nos conseiller vous rappelera.</p>
                            </div>
                        </div>
                    )}
                    <div className="mt-6 text-center">
                        <button 
                        className={`text-white rounded-2xl bg-second-50 hover:bg-bleue-karoy-100 focus:bg-bleue-karoy-100 p-3 ${spinner ? 'w-14 rounded-full' : undefined}`}
                        onClick={submitForm}
                        disabled={btnDiseabled}
                        >
                            {!spinner && !sucessMessage ? (
                                <>
                                <BsTelephoneInbound size={20} className="inline-block mr-2" />
                                Me rappeler
                                </>
                            ) : !sucessMessage ? (
                                <div role="status">
                                    <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-second-50" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                    <span className="sr-only">En cours...</span>
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

import React, {useState, useRef} from 'react'
import Image from 'next/image'
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
        phoneNumber: '',
        formationCategorie: '',
        source: 'site-web'
    };
    const [btnDiseabled, setBtnDiseabled] = useState(false);
    const [values, setValues] = useState(initialValues);

    const {nom, prenom, phoneNumber, formationCategorie} = values;


    const handleChangeSelect = selectedOption => {
        setValues({...values, formationCategorie: selectedOption.value});
    };

    const handleChange = e => {
        setValues({...values, [e.target.name]: e.target.value});
    };

    const [errorMessage, setErrorMessage] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [sucessMessage, setSucessMessage] = useState(false);

    const scrollToContent = () => {
        //const element = document.querySelector('#successMessage');
        const offsetPosition = successMessage.current.getBoundingClientRect().top + 500;
        successMessage.current.scrollIntoView({
            behavior: 'smooth',
            top: offsetPosition
        });
    };


    const submitForm = (e)=> {
        e.preventDefault();
        if(!nom || !prenom || !phoneNumber || !formationCategorie) {
            setErrorMessage(true);
        }
        else {
            setErrorMessage(false);
            /* await addWebProspect({
                variables: {
                    nom: nom,
                    prenom: prenom,
                    phoneNumber: phoneNumber,
                    formationId: formationId,
                    source: source
                }
            }) */
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
                                <p className="font-semibold tracking-wide text-center text-red-700">Veuillez renseigner tous les champs.</p>
                            }
                            <div className="mt-6 space-y-4">
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

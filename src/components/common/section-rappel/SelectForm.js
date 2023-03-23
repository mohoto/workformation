import React, {useState} from 'react'
import dynamic from 'next/dynamic'
const Select = dynamic(() => {return import ('react-select')}, {ssr: false});

const options = [
    { value: '1', label: 'Formations bureautique', color: 'red'},
    { value: '2', label: 'Formations outil collaboratif', color: 'green'},
    { value: '3', label: 'Formation Web', color: 'red'},
    { value: '4', label: 'Je ne sais pas encore', color: 'red'}
]

const colorStyles = {
    control: (styles, state) => (
        {...styles, backgroundColor: '#f3f4f6', color:'#014271', padding: '4px 5px', borderRadius: '0.5rem', fontSize:'14px', 
        '&:hover': { borderColor: '#12532d',}, // border style on hover
        border: '1px solid lightgray', // default border color
        boxShadow: 'none', // no box-shadow
        }
    ),
    option: (styles, state) => (
        {...styles, 
            color: state.isSelected ? 'white' : '#014271', backgroundColor: state.isSelected ? '#56adbf' : 'white', 
            color: state.isFocused ? 'white' : '#014271', backgroundColor: state.isFocused ? '#56adbf' : 'white',
        }
    ),
    placeholder: (styles, state) => (
        {...styles, color: '#014271'}
    ),
    singleValue: (styles, state) => (
        {...styles, color: '#014271'}
    )
    
}

export default function SelectForm({handleChangeSelect}) {

  return (
    <Select
    className="basic-single"
    classNamePrefix="select"
    placeholder="Votre projet de formation?"
    aria-label="sélectionnez votre votre projet de formation"
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
  )
}

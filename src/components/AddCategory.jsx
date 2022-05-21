import React, { useState } from 'react'
import PropTypes from 'prop-types'
/* Media */
import icSearch from '../assets/ic-search.svg'
export const AddCategory = ({setCategories}) => {
    const [inputValue,setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if ( inputValue.trim().length >= 1 ) {
            setCategories(cats => [`${inputValue}`]); //Para dejar al anterior ...cats
            setInputValue('')
        }

    }
    return (
        <form className="w-full" onSubmit={ handleSubmit }>
            <div className="flex items-center border-2 border-blueAnz2 rounded-2xl w-11/12 lg:w-full h-14 px-3 mt-5 ml-auto mr-auto">
                <img className="mr-5" src={icSearch} alt="Icono de busqueda" />
                <input 
                className="text-blueAnz2 w-full h-full text-3xl" 
                type="search" 
                placeholder="Goku.."
                value={inputValue}
                onChange={ handleInputChange}
                />
            </div>
        </form>
    )
}
AddCategory.protoTypes = {
    setCategories: PropTypes.func.isRequired
}
export default AddCategory
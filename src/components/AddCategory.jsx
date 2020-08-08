import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

const [inputValue, setInputValue] = useState('')

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit hecho')
    if(inputValue.trim().length > 2){
        setCategories(cat => [inputValue, ...cat])
        setInputValue('')
    }
   
    
}

    return (
        <div>
            <h2>AddCategory</h2>
            <form onSubmit={handleSubmit}>
                    <input
                    type="text" 
                    placeholder='selecciona categoria'
                    value={inputValue}
                    onChange={(e) => {setInputValue(e.target.value)}}
                    />
            </form>
            
        </div>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory

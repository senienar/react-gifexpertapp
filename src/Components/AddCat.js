import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCat =({setCat})=> {

    const [inputValue,setInputValue] = useState ('');
   

    const cambio =(e)=> {
        setInputValue(e.target.value)
        
    }

    const enter =(e)=>{
        e.preventDefault ();

        if( inputValue.trim().length > 1 ) {
             setCat(ccc => [inputValue,...ccc,]);
             setInputValue ('');

        }


        

    }
    return (
    <>
      <form onSubmit ={enter}>
        <input
        type = "text"
        value = {inputValue}
        onChange ={cambio}
        /> 
      </form>
    </>
    )
}

AddCat.propTypes ={
    setCat: PropTypes.func.isRequired

}
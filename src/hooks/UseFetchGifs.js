import { useEffect, useState } from 'react'
import { getGif } from '../helpers/getgifs';



export const UseFetchGifs = (cat) => {

    const [state, setstate] = useState({
        data:[],
        loading:true

    });


   useEffect (()=>{
    getGif (cat)
    .then (img => {

       setTimeout(() => {
        console.log (img);   
        setstate({
            data: img,
            loading:false
           }) ;

       }, 500); 
    
    })

     },[cat])

    return state;
}
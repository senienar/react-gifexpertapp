
import React from 'react';
import { UseFetchGifs } from '../hooks/UseFetchGifs';
//import { getGif } from '../helpers/getgifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid =({cat})=>{
    
        const {data:imagenes,loading} = UseFetchGifs  (cat);
          
   return (    
        <>
               <h3 className="animate__animated animate__fadeInUp"> {cat} </h3>

                {loading && <p className = "animate__animated animate__flash">Cargando...</p>}

               <div className="card-grid">

            
            {imagenes.map (img => (
                <GifGridItem 
                    key = {img.id}
                    //img = {img}
                    {...img}
                />
                ))
            }
                </div>
        </>

    )
}



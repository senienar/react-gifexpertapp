import React, { useState } from "react";
import { AddCat } from "./Components/AddCat.js";
import { GifGrid } from "./Components/GifGrid.js";

export const GiftExpertApp = () => {

    //const cat =['Dragon ball','samurai','pokemon'];
const [cat,setCat] = useState (['GOKU']);


// const add = () =>{

//    // Solicion 1 setCat(['Hunter',...cat ]);
//    //Solucion 2 
//    setCat(ccc => [...ccc,'HUNTER'])

//}

return (
    <div>

        <h2> GiftExpertApp</h2>
        <AddCat setCat = {setCat}/>        
        <hr />
        <ol>
             {
                cat.map((cat) => (
                <GifGrid 
                key ={cat}
                    cat = {cat}/>))
                }

        </ol>
             
        

    </div>
    )
    }
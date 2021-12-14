import React, {useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';


export const GifExpertApp = () => {

    //const categories = ['Uno', 'Dos', 'Tres'];
    const [categories, setCategories] = useState(['Naruto']);
    // const handleAdd = () =>{
    //     //setCategories(['HunterxHunter',...categories]); asi arreglo un elemento a mi arreglo
    //     setCategories(cats => [...cats, 'HunterxHunter']);
    // }

    return (


        <>
            <h2>gifs para omegas</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key = {category}
                            category={category}/>
                    ))
                }

            </ol>
            
        </>
    )
}




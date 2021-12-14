//Coleccion de todos los elementos que coinciden con la categoria

import React from 'react'; 
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    const {data:images,loading} = useFetchGifs(category);
   

    

    //getGifs();
    
    return (
        <>
        <h3 className="animate__animated animate__bounce ">{category}</h3>
        {loading && <p>loading</p>}
        <div className="card-grid">
            
                {
                    images.map(img => (
                        <GifGridItem 
                        key={img.id}
                        {...img}
                        />
                    ))
                }
            
            
        </div>
        </>
    )
}

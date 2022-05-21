import { useState,useEffect } from 'react';
import { getGif } from '../helpers/getGif'

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    useEffect( () => {

        getGif( category )
            .then( img => {
                setTimeout( () => {
                    setState({
                        data: img,
                        loading: false
                    })
                },1000)

            } )

    },[ category ]);

/*     setTimeout(() =>{
        setState({
            data: [1,2,3,4,5,6,7,8,9],
            loading: false
        })
    },3000); */
    
    return state; //{ data:[], loading: true };
} 
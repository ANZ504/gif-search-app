import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';
/* import { getGif } from '../helpers/getGif' */
/* Media */
/* import icLink from '../assets/ic-link.svg'
import icUser from '../assets/ic-user.svg'
import icView from '../assets/ic-views.svg' */

export const GifGrid = ({category}) => {

/*     const [images,setImage] = useState([]);
 */
    const { data:images,loading } = useFetchGifs( category ); 

/*     useEffect( () => {
        getGif( category )
            .then( setImage )
    },[ category ]) 
*/

/*     const getGif = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=50&api_key=DwOFc12Pr805uCADnAjmyGLHpLzIhaTj`;
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
                user: img.username,
                rating: img.rating
                
            }
        })
        console.log(gifs);
        setImage( gifs );

    } */
/*     getGif();
 */    return (
        <div  className="flex  flex-wrap flex-col lg:flex-row mt-8 items-center justify-center">
{/*             { loading ? 'Cargando...' : 'Gifs Cargada'}
 */}            <div className="flex w-full h-20 justify-center">            
{/*                 <h2 className="text-4xl text-blueAnz2 font-semibold text-center border-b-4 border-blueAnz h-12 rounded-sm">{ category }</h2>
 */}                { loading ? <h2 className="text-4xl text-blueAnz2 font-semibold text-center border-b-4 border-blueAnz h-12 rounded-sm">Cargando...</h2> : <h2 className="text-4xl text-blueAnz2 font-semibold text-center border-b-4 border-blueAnz h-12 rounded-sm">{ category }</h2>}
            </div>
            {
                images.map( img => (
                    <GifGridItem 
                    key={img.id}
                    { ...img }
                    />
                ))
            }
        </div>

/*     <div className="flex  flex-wrap flex-col lg:flex-row">
        {
            images.map( img => (

                <div className="w-52 h-52 mb-8 mx-8 flex rounded-2xl " key={img.id}>
                        <div className="relative ">
                            <figure className="w-full h-full relative  rounded-2xl">
                                <img className="w-full h-full  rounded-2xl" src={img.url} alt="{img.title}"/>
                            </figure>
                            <div className="flex items-center justify-between h-16 bg-blueAnz2 absolute bottom-0 w-full rounded-b-2xl">
                                <div className="flex flex-col">
                                    <div>
                                    <p className="text-white text-sm font-normal ml-3"> {img.title}</p>
                                    </div>
                                    <div  className="flex flex-row">
                                        <div className="flex mt-1"> 
                                            <img className="iconGif mx-2" src={icUser} alt="Icono de usuario"/>
                                            <p  className="text-white text-sm font-light">@{img.user}</p>
                                        </div>
                                        <div className="flex mt-1">
                                            <img  className="iconGif mx-2" src={icView} alt="Icono de vistas"/>
                                            <p  className="text-white text-sm font-light">{img.rating}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <a href={img.url}>
                                        <img className="iconGif mx-2" src={icLink} alt="Icono de usuario"/>
                                    </a>
                                </div> 
                            </div>
                        </div>
                    </div>
            )) 
        }
        

        
    </div> */
    )
}
export default GifGrid
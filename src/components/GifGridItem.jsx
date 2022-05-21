import React,{ useState } from 'react'
/* Media */
import icLink from './assets/ic-link.svg'
import icUser from './assets/ic-user.svg'
import icRating from './assets/ic-rating.svg'

export const GifGridItem = ({id,title,url,user,rating}) => {
/*     console.log(id,title,url,user,rating);
 */
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipboard = () => {

        navigator.clipboard.writeText(`${url}`);
        setCopySuccess('Copied')
        
        setTimeout(() => {
            setCopySuccess('')
        },1500)
    }
    

    return (
        <div className="flex  flex-wrap flex-col lg:flex-row wow fadeInUp">
                        <div className="w-52 h-52 mb-8 mx-8 flex rounded-2xl cardItem ">
                                <div className="relative w-full h-full hoverCardItem">
                                    <figure className="w-full h-full relative  rounded-2xl">
                                        <img className="w-full h-full  rounded-2xl " src={url} alt="{img.title}"/>
                                    </figure>
                                    <div className="flex items-center cardItemDesc justify-between h-20 py-2 bg-blueAnz2 absolute bottom-0 w-full rounded-b-2xl ">
                                        <div className="flex flex-col">
                                            <div>
                                            <p className="text-white text-sm font-normal ml-3"> {title}</p>
                                            </div>
                                            <div  className="flex flex-row">
                                                <div className="flex mt-1" > 
                                                    <img className="iconGif mx-2" src={icUser} alt="Icono de usuario"/>
                                                    <p  className="text-white text-sm font-light" >@{user}</p>
                                                </div>
                                                <div className="flex mt-1">
                                                    <img  className="iconGif mx-2" src={icRating} alt="Icono de vistas"/>
                                                    <p  className="text-white text-sm font-light">{rating}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                        {/* () =>  navigator.clipboard.writeText(`${url}`) */}
                                            <button  onClick={copyToClipboard} className='text-white'>
                                                <img className="iconGif mx-2" src={icLink} alt="Icono de usuario"/>
                                                { copySuccess }
                                            </button>
                                        </div> 
                                    </div>
                                </div>
                            </div>
            </div>    
    )
}
export default GifGridItem
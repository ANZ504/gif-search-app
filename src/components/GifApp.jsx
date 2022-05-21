import React, { useState } from 'react'
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'
/* Media */



export const GifApp = () => {
/*     const categories = [
        'Dragon Ball',
        'Death Note',
        'Inazuma Eleven'
    ]; */
    const [categories, setCategories] = useState(['Dragon Ball']);
    /* Añadir nuevo elemento a un useState */
/*     const handleAdd = () => {
        setCategories(oldArray => [...oldArray,`HunterXHunter`]);
    } */

    return (
    <>
        <section className="w-full h-screen flex font-khand flex-col lg:flex-row md:flex-col sm:flex-col">

        {/* Desciption */}

            <div className="flex flex-col justify-center bg-blueAnz  w-full lg:w-1/2 rounded-b-3xl lg:rounded-r-100px py-12">
                <h1 className="text-white pl-12 pb-5 lg:pb-9 text-2xl lg:text-4xl font-bold tracking-wider">Buscador de gifs</h1>
                <p className="text-white pl-12 pb-5 lg:pb-9   text-2xl lg:text-4xl">
                Proyecto desarrollado en React utilizando la api Giphy. 
                </p>
                <div className="mb-5 lg:mb-9">
                    <p className="text-white pl-12  text-2xl lg:text-4xl" >
                        Este es un proyecto desarrollado en el curso de
                    </p>
                    <a className="text-white pl-12 text-2xl lg:text-4xl " href="https://www.udemy.com/course/react-cero-experto/">
                        React: De Cero a Experto - Fernando Herrera.
                    </a>  
                </div>
                <ul className="pl-12">
                    <p className="text-white text-2xl lg:text-4xl font-semibold	">
                    Se esta usando:
                    </p>
                    <li className="text-white text-2xl lg:text-4xl"> - Customs Hook</li>
                    <li className="text-white text-2xl lg:text-4xl"> - API Giphy</li>
                    <li className="text-white text-2xl lg:text-4xl"> - Tailwind CSS</li>
                </ul>
            </div>

            {/* Search */}

            <div className="flex flex-col w-full lg:w-1/2 lg:mx-10 mt-12 lg:mt-0 justify-start items-center lg:items-start lg:pt-24">
                <h2 className="flex text-blueAnz2 text-2xl lg:text-4xl font-bold ">
                    Busca tu gif!
                </h2>
                <AddCategory setCategories={ setCategories }/>
                <div className="container mt-8 overflow-auto h-5/6">
                <div className="flex flex-col w-full ">
                
                {
                    categories.map( category =>
                    
                        <GifGrid 
                        key={ category } 
                        category={ category }
                        />
                    )
                }
{/*                     <div className="mb-8 mx-8 flex rounded-2xl ">
                        <div className="relative ">
                            <figure className="relative">
                                <img className="w-full h-full" src={gifImg} alt="Img Gif"/>
                            </figure>
                            <div className="flex items-center justify-between h-16 bg-blueAnz2 absolute bottom-0 w-full rounded-b-2xl">
                                <div className="flex flex-col">
                                    <div>
                                    <p className="text-white text-sm font-normal ml-3">Goku transformations</p>
                                    </div>
                                    <div  className="flex flex-row">
                                        <div className="flex mt-1"> 
                                            <img className="iconGif mx-2" src={icUser} alt="Icono de usuario"/>
                                            <p  className="text-white text-sm font-light">@anz</p>
                                        </div>
                                        <div className="flex mt-1">
                                            <img  className="iconGif mx-2" src={icView} alt="Icono de vistas"/>
                                            <p  className="text-white text-sm font-light">3.1k views</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <a href="#">
                                    <img className="iconGif mx-2" src={icLink} alt="Icono de usuario"/>
                                    </a>
                                </div> 
                            </div>
                        </div>
                    </div> */}
 




                </div>
{/*                 <div>
                <ul>
                {
                    categories.map( category =>
                        <GifGrid 
                        key={ category } 
                        category={ category }
                        />
                    )
                }
                </ul> 
            </div> */}
                </div>


                
            </div>
            {/*<button onClick={handleAdd}>Add</button>*/}



        </section>


    </>
    )
}
export default GifApp


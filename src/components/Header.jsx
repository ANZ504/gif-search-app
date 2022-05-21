import React from 'react'
import logo from '../assets/logo.svg'
import logoIg from '../assets/logo-ig.svg'
import logoWs from '../assets/logo-ws.svg'
import logoIn from '../assets/logo-in.svg'
import logoGh from '../assets/ic-gh.svg'



export const Header = () => {
    return (
    <>
        <header className="h-52 lh:h-32 flex items-center w-screen">
            <nav className="w-full">
                <ul className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                    <li className="ml-0 mb-5 lg:mb-0 lg:ml-12">
                        <img src={logo} alt="logo"></img>
                    </li>
                    <li className="flex mr-0 lg:mr-12">

                        <a href="https://github.com/ANZ504?tab=repositories">                        
                            <img className="w-9 h-9 mx-2" src={logoGh} alt="Icono de Github"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/anzdev/">                        
                            <img className="w-9 h-9 mx-2" src={logoIn} alt="Icono de Linkedin"></img>
                        </a>

                        <a href="https://www.instagram.com/anzdev/">                        
                            <img className="w-9 h-9 mx-2" src={logoIg} alt="Icono de Instagram"></img>
                        </a>

                        <a href="https://api.whatsapp.com/send?phone=50493496978">                        
                            <img className="w-9 h-9 mx-2" src={logoWs} alt="Icono de Whatsapp"></img>
                        </a>
                        
                    </li>
                </ul>
            </nav>
        </header>
    </>
    )
}



export default Header
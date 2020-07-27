import React from 'react';
import Logo from '../../assets/imgs/Logo.png'
import './Menu.css'
import Button from '../Button'
//import ButtonLink from './componentes/ButtonLink'

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Anix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo epsódio
            </Button>
        </nav>
    );
}

export default Menu;
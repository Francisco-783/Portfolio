"use client"

import {useState} from 'react';
import style from './navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [navbar, setNavbar] = useState(true);
    
    const SwichMenu = () =>{
        setNavbar(!navbar)
        console.log(navbar)
    }
  return (
      <div className={style.navbar}>
        <h2>
            <a href='#start'>Francisco.dev</a>
        </h2>
        <FontAwesomeIcon icon={faBars} className={`${style.menuButton} ${!navbar ? style.menuBlue : ''}`} onClick={SwichMenu}/>
        <ul className={navbar ? style.closed : ""}>
            <li onClick={SwichMenu}>
                <a href='#start'>Inicio</a>
            </li>
            <li onClick={SwichMenu}>
                <a href='#about'>Sobre Mi</a>
            </li>   
            <li onClick={SwichMenu}>
                <a href='#skills'>Experiencia</a>
            </li>
            <li onClick={SwichMenu}>
                <a href='#contact'>Contacto</a>
            </li>
          <li onClick={SwichMenu}><a target="_blank" href='https://docs.google.com/document/d/1ViMk0WmajaRF0nIQ2Y_ySL-GSsQLbKA6JKXVkVlstEw/' className={style.cvLink}>Curriculum Vitae</a></li>
         </ul>
         
      </div>
  )
}
export default NavBar;

import React from 'react';
import style from './navbar.module.scss';

const NavBar = () => {
  return (
      <div className={style.navbar}>
          <h2>
              <a href='#start'>Francisco.dev</a>
          </h2>
         <ul>
          <li>
              <a href='#start'>Inicio</a>
          </li>
          <li>
              <a href='#about'>Sobre Mi</a>
          </li>   
          <li>
              <a href='#skills'>Proyectos</a>
          </li>
          <li>
              <a href='#contact'>Cotacto</a>
          </li>
          <li>Curriculum Vitae</li>
         </ul>
      </div>
  )
}
export default NavBar;

// aca va tu foto y la descripcion chiquita
// COLOCAR SI O SI TODAS LAS FORMAS DE CONTACTARME

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from "./main.module.scss"

const Main: React.FC = () => {


  return (
    <section className={style.main} id='start'>
      <div>
        <p className={style.subtitle}>Hola, soy Francisco Insaurralde.</p>
        <h1>Full Stack <span className={style.highlightText}>Web</span></h1>
        <h1>Developer</h1>
        <Link href="https://www.linkedin.com/in/francisco-insaurralde-539109220/">
          <Image src="/assets/s.png" width={40} height={40} alt="linkedin logo" />
        </Link>
        <Link href="https://github.com/Francisco-783">
          <Image src="/assets/githublogo.png" width={40} height={40} alt="github logo" />
        </Link>
        <Link href="https://docs.google.com/document/d/1ViMk0WmajaRF0nIQ2Y_ySL-GSsQLbKA6JKXVkVlstEw/edit">
          <Image src="/assets/pdf.png" width={40} height={40} alt="CV logo" />
        </Link>
      </div>
      <Image src="/assets/main.gif" width={450} height={400} alt="developer's photo" className={style.photo}/>
    </section>
  );
};

export default Main;
// aca va tu foto y la descripcion chiquita
// COLOCAR SI O SI TODAS LAS FORMAS DE CONTACTARME

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from "./main.module.scss"

const Main: React.FC = () => {


  return (
    <section className={style.container}>
      <h1>FullStack Web Developer</h1>
      <label>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa totam deleniti deserunt, repellendus saepe ab qui, labore dignissimos unde omnis alias quam maxime eligendi pariatur eaque rerum dolores modi iure?</label>
      <Link href="https://www.linkedin.com/in/francisco-insaurralde-539109220/">
      <Image src="/assets/linkedinLogo.png" width={50} height={50} alt="linkedin logo" />
      </Link>
      <Link href="https://github.com/Francisco-783">
      <Image src="/assets/githublogo.png" width={50} height={50} alt="github logo" />
      </Link>
      <Link href="https://github.com/Francisco-783">
      <label>MI CV</label>
      </Link>
      <Image src="/assets/Foto-blanco.png" width={400} height={400} alt="developer's photo" />
    </section>
  );
};

export default Main;